// ─── Intenta la extensión alternativa si la imagen no carga ───────────────
function intentarExtAlternativa(img) {
  const src = img.src;
  if (src.endsWith(".jpg"))       img.src = src.replace(/\.jpg$/, ".png");
  else if (src.endsWith(".png"))  img.src = src.replace(/\.png$/, ".jpg");
  img.onerror = null; // evita bucle infinito si tampoco existe la alternativa
}

// ─── Estado de filtros ─────────────────────────────────────────────────────
const filtrosActivos = {
  colores: [],
  largo: null,
  estilos: [],
};

// ─── Render del catálogo ───────────────────────────────────────────────────
function renderCatalogo(collares) {
  const grid = document.getElementById("catalogo-grid");
  if (!grid) return;

  grid.innerHTML = "";

  if (collares.length === 0) {
    grid.innerHTML = `
      <div class="sin-resultados">
        <p>No hay collares que coincidan con tu búsqueda.</p>
        <button onclick="limpiarFiltros()" class="btn-secundario">Ver todos</button>
      </div>`;
    return;
  }

  collares.forEach((collar) => {
    const card = document.createElement("article");
    card.className = "collar-card";
    card.setAttribute("data-id", collar.id);

    const colorDots = collar.colores
      .map((c) => `<span class="color-dot color-${c}" title="${c}"></span>`)
      .join("");

    card.innerHTML = `
      <div class="card-imagen-wrapper">
        <img
          src="${collar.imagen}"
          alt="Collar ${collar.nombre}"
          loading="lazy"
          onerror="intentarExtAlternativa(this)"
        />
        <span class="card-badge">${collar.largo === "largo" ? "Collar largo" : "Collar corto"}</span>
      </div>
      <div class="card-info">
        <div class="card-colores">${colorDots}</div>
        <h3 class="card-nombre">${collar.nombre}</h3>
        <p class="card-descripcion">${collar.descripcion}</p>
        <div class="card-footer">
          <span class="card-precio">${collar.precio} €</span>
          <button class="btn-ver-mas" onclick="abrirModal('${collar.id}')">
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
  let resultado = [...COLLARES];

  if (filtrosActivos.colores.length > 0) {
    resultado = resultado.filter((c) =>
      c.colores.some((color) => filtrosActivos.colores.includes(color))
    );
  }

  if (filtrosActivos.largo) {
    resultado = resultado.filter((c) => c.largo === filtrosActivos.largo);
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
  filtrosActivos.estilos = [];

  document.querySelectorAll(".filtro-btn.activo").forEach((btn) => btn.classList.remove("activo"));
  document.querySelectorAll(".filtro-largo .filtro-btn").forEach((btn) => btn.classList.remove("activo"));

  aplicarFiltros();
}

function actualizarContador(n) {
  const contador = document.getElementById("resultado-contador");
  if (contador) {
    contador.textContent = n === COLLARES.length
      ? `${n} collares`
      : `${n} de ${COLLARES.length} collares`;
  }
}

// ─── Modal de detalle ──────────────────────────────────────────────────────
function abrirModal(id) {
  const collar = COLLARES.find((c) => c.id === id);
  if (!collar) return;

  const modal = document.getElementById("modal-collar");
  const contenido = document.getElementById("modal-contenido");

  contenido.innerHTML = `
    <div class="modal-grid">
      <div class="modal-imagenes">
        <img
          src="${collar.imagen}"
          alt="Collar ${collar.nombre} puesto"
          class="modal-img-principal"
          onerror="intentarExtAlternativa(this)"
        />
        <img
          src="${collar.imagenDetalle}"
          alt="Detalle del collar ${collar.nombre}"
          class="modal-img-detalle"
          onerror="intentarExtAlternativa(this)"
        />
      </div>
      <div class="modal-texto">
        <h2>${collar.nombre}</h2>
        <p class="modal-precio">${collar.precio} €</p>
        <p class="modal-descripcion">${collar.descripcion}</p>
        <div class="modal-detalles">
          <p><strong>Materiales:</strong> ${collar.materiales}</p>
          <p><strong>Largo:</strong> ${collar.largo === "largo" ? "Collar largo" : "Collar corto"}</p>
          <p><strong>Ocasión:</strong> ${collar.ocasion}</p>
        </div>
        <div class="modal-acciones">
          <a href="mailto:cristinagartesania@gmail.com?subject=Interés en collar ${collar.nombre}&body=Hola, me gustaría más información sobre el collar ${collar.nombre} (${collar.precio}€)."
             class="btn-principal">
            Pedir información
          </a>
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
function construirMensajePersonalizacion(datos) {
  return `Hola Cristina! Me gustaría encargar un collar personalizado con las siguientes preferencias:

- Tipo: ${datos.tipo}
- Largo: ${datos.largo}
- Colores preferidos: ${datos.colores}
- Materiales: ${datos.materiales}
- Ocasión: ${datos.ocasion}
- Presupuesto aproximado: ${datos.presupuesto}
- Notas adicionales: ${datos.notas}

¡Muchas gracias!`;
}

function enviarPersonalizacion(e) {
  e.preventDefault();
  const form = e.target;
  const datos = {
    tipo: form.tipo.value,
    largo: form.largo.value,
    colores: form.colores.value,
    materiales: form.materiales.value,
    ocasion: form.ocasion.value,
    presupuesto: form.presupuesto.value,
    notas: form.notas.value || "Sin notas adicionales",
  };

  const mensaje = encodeURIComponent(construirMensajePersonalizacion(datos));
  const email = "cristinagartesania@gmail.com";
  window.location.href = `mailto:${email}?subject=Pedido%20collar%20personalizado&body=${mensaje}`;
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
  // Render catálogo inicial
  renderCatalogo(COLLARES);
  actualizarContador(COLLARES.length);

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

  // Botones de filtro — largo
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

  // Formulario personalización
  document.getElementById("form-personalizar")?.addEventListener("submit", enviarPersonalizacion);

  initSmoothScroll();
  initNavScroll();
});
