/**
 * preview.js — Previsualización de fotos arrastrando
 *
 * Solo funciona en local (archivo abierto desde tu ordenador o localhost).
 * En la web publicada de GitHub Pages este script no hace nada.
 *
 * Cómo usarlo:
 *   1. Abre index.html en tu navegador
 *   2. Arrastra cualquier foto desde tu carpeta al hueco de la imagen
 *   3. Se muestra una previsualización — los cambios NO se guardan
 *   4. Cuando estés conforme, copia la foto a images/ y cambia el src en el HTML
 */

(function () {
  // Solo activa en local
  const esLocal =
    location.protocol === "file:" ||
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1";

  if (!esLocal) return;

  // ── Toast de aviso ─────────────────────────────────────────────────────
  function mostrarToast(msg) {
    let toast = document.getElementById("preview-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "preview-toast";
      toast.style.cssText = `
        position: fixed; bottom: 1.5rem; left: 50%; transform: translateX(-50%);
        background: #5c3d2e; color: #fefaf8; padding: 0.7rem 1.4rem;
        border-radius: 50px; font-size: 0.85rem; font-weight: 600;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2); z-index: 9999;
        transition: opacity 0.3s; pointer-events: none;
      `;
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = "1";
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => (toast.style.opacity = "0"), 3000);
  }

  // ── Overlay "Suelta aquí" ──────────────────────────────────────────────
  function crearOverlay() {
    const div = document.createElement("div");
    div.className = "preview-overlay";
    div.textContent = "Suelta la foto aquí";
    div.style.cssText = `
      position: absolute; inset: 0; background: rgba(196,148,138,0.85);
      color: white; display: flex; align-items: center; justify-content: center;
      font-weight: 700; font-size: 0.95rem; border-radius: inherit;
      opacity: 0; transition: opacity 0.2s; pointer-events: none; z-index: 10;
    `;
    return div;
  }

  // ── Inicializar drag & drop en todos los <img> ─────────────────────────
  function initImagen(img) {
    const wrapper = img.parentElement;

    // El wrapper necesita position:relative para el overlay
    if (getComputedStyle(wrapper).position === "static") {
      wrapper.style.position = "relative";
    }

    const overlay = crearOverlay();
    wrapper.appendChild(overlay);

    // Cursor de ayuda en la imagen
    img.style.cursor = "copy";
    img.title = "Arrastra una foto aquí para previsualizar";

    wrapper.addEventListener("dragover", (e) => {
      e.preventDefault();
      overlay.style.opacity = "1";
    });

    wrapper.addEventListener("dragleave", () => {
      overlay.style.opacity = "0";
    });

    wrapper.addEventListener("drop", (e) => {
      e.preventDefault();
      overlay.style.opacity = "0";

      const archivo = e.dataTransfer.files[0];
      if (!archivo || !archivo.type.startsWith("image/")) {
        mostrarToast("⚠️ Solo se aceptan imágenes");
        return;
      }

      const reader = new FileReader();
      reader.onload = (ev) => {
        img.src = ev.target.result;
        mostrarToast("✓ Solo previsualización — copia la foto a images/ para guardarla");
      };
      reader.readAsDataURL(archivo);
    });
  }

  // ── Arrancar cuando el DOM esté listo ─────────────────────────────────
  document.addEventListener("DOMContentLoaded", () => {

    // Imágenes estáticas del HTML (hero e historia)
    document.querySelectorAll("img").forEach(initImagen);

    // Imágenes del catálogo (se generan dinámicamente con JS)
    // Usamos un MutationObserver para pillarlas cuando aparezcan
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return;
          node.querySelectorAll("img").forEach(initImagen);
        });
      });
    });

    const grid = document.getElementById("catalogo-grid");
    if (grid) observer.observe(grid, { childList: true, subtree: true });
  });
})();
