// ─── Posición/zoom guardados con la herramienta visual ────────────────────
// Lee de localStorage (guardado por ajustar-fotos.html) y lo aplica en tiempo real.
// esDetalle=true lee la posición de la imagen de detalle.
function posicionGuardada(id, esDetalle = false) {
  try {
    const data = JSON.parse(localStorage.getItem("posiciones_pendientes_v1") || "{}");
    const key = esDetalle ? id + "_detalle" : id;
    if (data[key]) {
      const { fx, fy } = data[key];
      return `${Math.round(fx)}% ${Math.round(fy)}%`;
    }
  } catch (e) {}
  return null;
}

function zoomGuardado(id, esDetalle = false) {
  try {
    const data = JSON.parse(localStorage.getItem("posiciones_pendientes_v1") || "{}");
    const key = esDetalle ? id + "_detalle" : id;
    if (data[key] && data[key].zoom != null) return data[key].zoom;
  } catch (e) {}
  return null;
}

// ─── Intenta la extensión alternativa si la imagen no carga ───────────────
function intentarExtAlternativa(img) {
  const src = img.src;
  if (src.endsWith(".jpg"))       img.src = src.replace(/\.jpg$/, ".png");
  else if (src.endsWith(".png"))  img.src = src.replace(/\.png$/, ".jpg");
  img.onerror = null; // evita bucle infinito si tampoco existe la alternativa
}

// ─── Estado ───────────────────────────────────────────────────────────────
let catalogoActivo = "todos"; // "todos" | "collares" | "pendientes"

const filtrosActivos = {
  colores: [],
  largo: null,   // solo collares
  tipo: null,    // solo pendientes
  estilos: [],
};

// ─── Render del catálogo ───────────────────────────────────────────────────
function renderCatalogo(items) {
  const grid = document.getElementById("catalogo-grid");
  if (!grid) return;

  grid.innerHTML = "";

  if (items.length === 0) {
    grid.innerHTML = `
      <div class="sin-resultados">
        <p>No hay piezas que coincidan con tu búsqueda.</p>
        <button onclick="limpiarFiltros()" class="btn-secundario">Ver todos</button>
      </div>`;
    return;
  }

  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "collar-card";
    card.setAttribute("data-id", item.id);

    const colorDots = item.colores
      .map((c) => `<span class="color-dot color-${c}" title="${c}"></span>`)
      .join("");

    const esPendiente = PENDIENTES.some((p) => p.id === item.id);
    let badgeText;
    if (esPendiente) {
      badgeText = item.tipo === "aros" ? "Aros" : "Colgantes";
    } else {
      badgeText = item.largo === "largo" ? "Collar largo" : "Collar corto";
    }

    const posicion = posicionGuardada(item.id) || item.posicion || "center center";
    const zoom = zoomGuardado(item.id) || item.posicionZoom || 1;

    card.innerHTML = `
      <div class="card-imagen-wrapper">
        <img
          src="${item.imagen}"
          alt="${esPendiente ? "Pendientes" : "Collar"} ${item.nombre}"
          loading="lazy"
          onerror="intentarExtAlternativa(this)"
          style="object-position: ${posicion}; transform-origin: ${posicion}; --img-zoom: ${zoom}"
        />
        <span class="card-badge">${badgeText}</span>
      </div>
      <div class="card-info">
        <div class="card-colores">${colorDots}</div>
        <h3 class="card-nombre">${item.nombre}</h3>
        <p class="card-descripcion">${item.descripcion}</p>
        <div class="card-footer">
          <span class="card-precio">${item.precio} €</span>
          <button class="btn-ver-mas" onclick="abrirModal('${item.id}')">
            Ver detalle
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

// ─── Filtrado ──────────────────────────────────────────────────────────────
function aplicarFiltros() {
  let resultado =
    catalogoActivo === "todos"     ? [...COLLARES, ...PENDIENTES] :
    catalogoActivo === "pendientes" ? [...PENDIENTES] :
                                      [...COLLARES];

  if (filtrosActivos.colores.length > 0) {
    resultado = resultado.filter((c) =>
      c.colores.some((color) => filtrosActivos.colores.includes(color))
    );
  }

  if (catalogoActivo === "collares" && filtrosActivos.largo) {
    resultado = resultado.filter((c) => c.largo === filtrosActivos.largo);
  }

  if (catalogoActivo === "pendientes" && filtrosActivos.tipo) {
    resultado = resultado.filter((c) => c.tipo === filtrosActivos.tipo);
  }

  if (filtrosActivos.estilos.length > 0) {
    resultado = resultado.filter((c) =>
      c.estilos.some((e) => filtrosActivos.estilos.includes(e))
    );
  }

  renderCatalogo(resultado);
  actualizarContador(resultado.length);
}

function limpiarFiltros() {
  filtrosActivos.colores = [];
  filtrosActivos.largo = null;
  filtrosActivos.tipo = null;
  filtrosActivos.estilos = [];

  document.querySelectorAll(".filtro-btn.activo").forEach((btn) => btn.classList.remove("activo"));

  aplicarFiltros();
}

function actualizarContador(n) {
  const contador = document.getElementById("resultado-contador");
  if (!contador) return;
  const total =
    catalogoActivo === "todos"      ? COLLARES.length + PENDIENTES.length :
    catalogoActivo === "pendientes" ? PENDIENTES.length :
                                      COLLARES.length;
  const label =
    catalogoActivo === "todos"      ? "piezas" :
    catalogoActivo === "pendientes" ? "pendientes" :
                                      "collares";
  contador.textContent = n === total
    ? `${n} ${label}`
    : `${n} de ${total} ${label}`;
}

// ─── Cambio de tab ─────────────────────────────────────────────────────────
function switchTab(tab) {
  catalogoActivo = tab;

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    const activo = btn.dataset.tab === tab;
    btn.classList.toggle("activo", activo);
    btn.setAttribute("aria-selected", activo);
  });

  document.querySelector(".filtros-grupo-largo")?.classList.toggle("oculto", tab !== "collares");
  document.querySelector(".filtros-grupo-tipo")?.classList.toggle("oculto", tab !== "pendientes");

  limpiarFiltros();
}

// ─── Modal de detalle ──────────────────────────────────────────────────────
function abrirModal(id) {
  const item = [...COLLARES, ...PENDIENTES].find((c) => c.id === id);
  if (!item) return;

  const esPendiente = PENDIENTES.some((p) => p.id === id);
  const tipoLabel = esPendiente ? "Pendientes" : "Collar";

  const detalleLinea = esPendiente
    ? `<p><strong>Tipo:</strong> ${item.tipo === "aros" ? "Aros" : "Colgantes"}</p>`
    : `<p><strong>Largo:</strong> ${item.largo === "largo" ? "Collar largo" : "Collar corto"}</p>`;

  const modal = document.getElementById("modal-collar");
  const contenido = document.getElementById("modal-contenido");

  const posMain       = posicionGuardada(item.id, false) || item.posicion       || "center center";
  const posDetalle    = posicionGuardada(item.id, true)  || item.posicionDetalle || "center center";
  const zoomMain      = zoomGuardado(item.id, false) || item.posicionZoom        || 1;
  const zoomDetalle   = zoomGuardado(item.id, true)  || item.posicionDetalleZoom || 1;

  contenido.innerHTML = `
    <div class="modal-grid">
      <div class="modal-imagenes">
        <div class="modal-img-wrapper">
          <img
            src="${item.imagen}"
            alt="${tipoLabel} ${item.nombre}"
            class="modal-img-principal"
            style="object-position: ${posMain}; transform: scale(${zoomMain}); transform-origin: ${posMain}"
            onerror="intentarExtAlternativa(this)"
          />
        </div>
        <div class="modal-img-wrapper">
          <img
            src="${item.imagenDetalle}"
            alt="Detalle de ${item.nombre}"
            class="modal-img-detalle"
            style="object-position: ${posDetalle}; transform: scale(${zoomDetalle}); transform-origin: ${posDetalle}"
            onerror="intentarExtAlternativa(this)"
          />
        </div>
      </div>
      <div class="modal-texto">
        <h2>${item.nombre}</h2>
        <p class="modal-precio">${item.precio} €</p>
        <p class="modal-descripcion">${item.descripcion}</p>
        <div class="modal-detalles">
          <p><strong>Materiales:</strong> ${item.materiales}</p>
          ${detalleLinea}
          <p><strong>Ocasión:</strong> ${item.ocasion}</p>
        </div>
        <div class="modal-acciones">
          <button class="btn-secundario" onclick="cerrarModal()">Cerrar</button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("abierto");
  document.body.style.overflow = "hidden";
}

function cerrarModal() {
  const modal = document.getElementById("modal-collar");
  modal.classList.remove("abierto");
  document.body.style.overflow = "";
}

// ─── Menú móvil ───────────────────────────────────────────────────────────
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  const btn = document.getElementById("menu-toggle");
  nav.classList.toggle("abierto");
  btn.setAttribute("aria-expanded", nav.classList.contains("abierto"));
}

// ─── Formulario de personalización ────────────────────────────────────────
function mostrarCamposPersonalizacion(tipoPieza) {
  const camposCollar    = document.querySelector(".campos-collar");
  const camposPendiente = document.querySelector(".campos-pendiente");
  if (!camposCollar || !camposPendiente) return;

  camposCollar.classList.toggle("oculto", tipoPieza !== "collar");
  camposPendiente.classList.toggle("oculto", tipoPieza !== "pendiente");
}

function construirMensajeCollar(form) {
  return `Hola Cristina! Me gustaría encargar un collar personalizado con las siguientes preferencias:

- Tipo: ${form.tipo.value || "Sin especificar"}
- Largo: ${form.largo.value || "Sin preferencia"}
- Colores preferidos: ${form.colores.value || "Sin especificar"}
- Materiales: ${form.materiales.value || "Sin preferencia"}
- Ocasión: ${form.ocasion.value || "Sin especificar"}
- Presupuesto aproximado: ${form.presupuesto.value || "Sin especificar"}
- Notas adicionales: ${form.notas.value || "Sin notas adicionales"}

¡Muchas gracias!`;
}

function construirMensajePendiente(form) {
  return `Hola Cristina! Me gustaría encargar unos pendientes con las siguientes preferencias:

- Modelo: ${form["modelo-pendiente"].value || "Sin especificar"}
- Colores preferidos: ${form["colores-pendiente"].value || "Sin especificar"}

¡Muchas gracias!`;
}

function enviarPersonalizacion(e) {
  e.preventDefault();
  const form = e.target;
  const tipoPieza = form["tipo-pieza"].value;

  if (!tipoPieza) {
    form["tipo-pieza"].focus();
    return;
  }

  let asunto, mensaje;
  if (tipoPieza === "pendiente") {
    asunto  = "Pedido pendientes personalizados";
    mensaje = construirMensajePendiente(form);
  } else {
    asunto  = "Pedido collar personalizado";
    mensaje = construirMensajeCollar(form);
  }

  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=cristinagigato.artesania@gmail.com&su=${encodeURIComponent(asunto)}&body=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank", "noopener");
}

// ─── Smooth scroll para anclas ─────────────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      // Cerrar menú móvil si está abierto
      document.getElementById("nav-links")?.classList.remove("abierto");
    });
  });
}

// ─── Navbar: cambio al hacer scroll ───────────────────────────────────────
function initNavScroll() {
  const nav = document.querySelector(".navbar");
  if (!nav) return;
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 60);
  });
}

// ─── Init ──────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // Render catálogo inicial (tab "Todos")
  renderCatalogo([...COLLARES, ...PENDIENTES]);
  actualizarContador(COLLARES.length + PENDIENTES.length);

  // Botones de filtro — colores
  document.querySelectorAll("[data-filtro-color]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const color = btn.dataset.filtroColor;
      btn.classList.toggle("activo");
      if (filtrosActivos.colores.includes(color)) {
        filtrosActivos.colores = filtrosActivos.colores.filter((c) => c !== color);
      } else {
        filtrosActivos.colores.push(color);
      }
      aplicarFiltros();
    });
  });

  // Botones de filtro — largo (collares)
  document.querySelectorAll("[data-filtro-largo]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const largo = btn.dataset.filtroLargo;
      const yaActivo = filtrosActivos.largo === largo;
      document.querySelectorAll("[data-filtro-largo]").forEach((b) => b.classList.remove("activo"));
      filtrosActivos.largo = yaActivo ? null : largo;
      if (!yaActivo) btn.classList.add("activo");
      aplicarFiltros();
    });
  });

  // Botones de filtro — tipo (pendientes)
  document.querySelectorAll("[data-filtro-tipo]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tipo = btn.dataset.filtroTipo;
      const yaActivo = filtrosActivos.tipo === tipo;
      document.querySelectorAll("[data-filtro-tipo]").forEach((b) => b.classList.remove("activo"));
      filtrosActivos.tipo = yaActivo ? null : tipo;
      if (!yaActivo) btn.classList.add("activo");
      aplicarFiltros();
    });
  });

  // Botones de filtro — estilo
  document.querySelectorAll("[data-filtro-estilo]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const estilo = btn.dataset.filtroEstilo;
      btn.classList.toggle("activo");
      if (filtrosActivos.estilos.includes(estilo)) {
        filtrosActivos.estilos = filtrosActivos.estilos.filter((e) => e !== estilo);
      } else {
        filtrosActivos.estilos.push(estilo);
      }
      aplicarFiltros();
    });
  });

  // Botón limpiar filtros
  document.getElementById("limpiar-filtros")?.addEventListener("click", limpiarFiltros);

  // Cerrar modal al hacer click fuera
  document.getElementById("modal-collar")?.addEventListener("click", (e) => {
    if (e.target.id === "modal-collar") cerrarModal();
  });

  // Cerrar modal con Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") cerrarModal();
  });

  // Formulario personalización — selector collar/pendiente
  document.getElementById("tipo-pieza")?.addEventListener("change", (e) => {
    mostrarCamposPersonalizacion(e.target.value);
  });

  // Formulario personalización — envío
  document.getElementById("form-personalizar")?.addEventListener("submit", enviarPersonalizacion);

  initSmoothScroll();
  initNavScroll();
});
