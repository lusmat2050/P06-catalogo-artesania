/**
 * catalog.js — Datos del catálogo de collares
 *
 * Para añadir o modificar un collar, edita este array.
 * Para cambiar una foto, cambia solo la ruta dentro de este archivo.
 * Las imágenes deben estar en la carpeta images/collares/
 *
 * Atributos de filtro disponibles:
 *   colores: dorado | perla | pastel | multicolor | lavanda | blanco
 *   largo:   corto | largo
 *   estilo:  elegante | romantico | bohemio | sofisticado
 */

const COLLARES = [
  {
    id: "liz",
    nombre: "LIZ",
    precio: 49,
    imagen: "images/collares/liz-main.jpg",
    imagenDetalle: "images/collares/liz-detalle.jpg",
    descripcion:
      "Obra maestra artesanal de diseño elegante y atemporal. Combina cuentas perladas, cristales facetados y bordes dorados que aportan luminosidad y un estilo refinado.",
    colores: ["dorado", "perla"],
    largo: "corto",
    estilos: ["elegante", "sofisticado"],
    materiales: "Perlas sintéticas de alta calidad, cristales facetados en tonos champagne e hielo, hilo y estructura dorada",
    ocasion: "Eventos, noches especiales, bodas",
    etiquetas: ["formal", "noche", "boda"],
  },
  {
    id: "barbara",
    nombre: "BARBARA",
    precio: 32,
    imagen: "images/collares/barbara-main.png",
    imagenDetalle: "images/collares/barbara-detalle.png",
    descripcion:
      "Un collar de diseño elegante y sofisticado. Su confección meticulosa captura la luz y complementa a la perfección tanto la vestimenta formal como la casual elevada.",
    colores: ["multicolor", "pastel"],
    largo: "corto",
    estilos: ["elegante", "sofisticado"],
    materiales: "Cristales multicolor, cuentas pastel, estructura dorada",
    ocasion: "Día a día, trabajo, salidas",
    etiquetas: ["versátil", "casual", "formal"],
  },
  {
    id: "grace",
    nombre: "GRACE",
    precio: 24,
    imagen: "images/collares/grace-main.png",
    imagenDetalle: "images/collares/grace-detalle.png",
    descripcion:
      "La encarnación del lujo discreto y la sofisticación. Inspirado en el resplandor de una noche de gala, diseñado para ser el centro de atención.",
    colores: ["dorado", "perla"],
    largo: "corto",
    estilos: ["elegante"],
    materiales: "Perlas y cristales con detalles dorados, cierre de bola y cono",
    ocasion: "Galas, eventos especiales, noches de celebración",
    etiquetas: ["gala", "noche", "formal"],
  },
  {
    id: "penelope",
    nombre: "PENÉLOPE",
    precio: 14,
    imagen: "images/collares/penelope-main.png",
    imagenDetalle: "images/collares/penelope-detalle.png",
    descripcion:
      "Collar largo tejido a mano, una joya etérea que evoca la dulzura de un jardín en primavera. Sus vibrantes tonos pastel añaden un toque bohemio, romántico y chic.",
    colores: ["pastel", "multicolor"],
    largo: "largo",
    estilos: ["bohemio", "romantico"],
    materiales: "Cuentas en tonos pastel, tejido artesanal a mano",
    ocasion: "Día a día, eventos al aire libre, primavera-verano",
    etiquetas: ["bohemio", "primavera", "casual"],
  },
  {
    id: "ingrid",
    nombre: "INGRID",
    precio: 27,
    imagen: "images/collares/ingrid-main.png",
    imagenDetalle: "images/collares/ingrid-detalle.png",
    descripcion:
      "Collar babero tejido a mano con técnica intrincada. Captura la serenidad de los campos de lavanda. Su diseño volumétrico y la mezcla de texturas lo convierten en una pieza sofisticada.",
    colores: ["lavanda", "pastel"],
    largo: "corto",
    estilos: ["romantico", "sofisticado"],
    materiales: "Cuentas en tonos lavanda y perla, tejido artesanal volumétrico",
    ocasion: "Eventos, primavera-verano, bodas",
    etiquetas: ["lavanda", "romántico", "boda"],
  },
  {
    id: "nicole",
    nombre: "NICOLE",
    precio: 26,
    imagen: "images/collares/nicole-main.png",
    imagenDetalle: "images/collares/nicole-detalle.png",
    descripcion:
      "Collar largo sofisticado que juega con la luz y la textura. Diseñado para la mujer que aprecia la elegancia modular y el detalle artesanal.",
    colores: ["pastel", "blanco"],
    largo: "largo",
    estilos: ["elegante", "romantico"],
    materiales: "Cuentas pastel y blanco nacarado, diseño modular artesanal",
    ocasion: "Día especial, trabajo creativo, eventos diurnos",
    etiquetas: ["versátil", "elegante", "diurno"],
  },
];
