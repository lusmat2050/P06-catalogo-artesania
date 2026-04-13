/**
 * catalog.js — Datos del catálogo de collares y pendientes
 *
 * Para añadir o modificar una pieza, edita el array correspondiente.
 * Para cambiar una foto, cambia solo la ruta dentro de este archivo.
 * Las imágenes de collares deben estar en images/collares/
 * Las imágenes de pendientes deben estar en images/pendientes/
 *
 * Atributos de filtro disponibles:
 *   colores: dorado | multicolor | blanco | turquesa | rojo | coral | naranja | negro | plateado
 *            beige | verdoso | azulado | rosa-claro | lavanda | gris
 *   largo (collares): corto | largo
 *   tipo (pendientes): aros | colgantes
 *   estilo: elegante | romantico | bohemio | sofisticado
 *
 * Precios: IVA (21%) y gastos de envío incluidos.
 */

const COLLARES = [
  {
    id: "liz",
    nombre: "LIZ",
    precio: 69,
    imagen: "images/collares/liz-main.jpg",
    imagenDetalle: "images/collares/liz-detalle.jpg",
    descripcion:
      "Obra maestra artesanal de diseño elegante y atemporal. Combina cuentas perladas, cristales facetados y bordes dorados que aportan luminosidad y un estilo refinado.",
    colores: ["dorado", "gris", "blanco", "beige"],
    largo: "corto",
    estilos: ["elegante", "sofisticado"],
    materiales: "Perlas sintéticas de alta calidad, cristales facetados en tonos champagne e hielo, hilo y estructura dorada",
    ocasion: "Eventos, noches especiales, bodas",
    etiquetas: ["formal", "noche", "boda"],
  },
  {
    id: "barbara",
    nombre: "BARBARA",
    precio: 51,
    imagen: "images/collares/barbara-main.png",
    imagenDetalle: "images/collares/barbara-detalle.png",
    descripcion:
      "Un collar de diseño elegante y sofisticado. Su confección meticulosa captura la luz y complementa a la perfección tanto la vestimenta formal como la casual elevada.",
    colores: ["multicolor", "dorado", "coral", "turquesa", "blanco"],
    largo: "corto",
    estilos: ["elegante", "sofisticado"],
    materiales: "Cristales multicolor, cuentas pastel, estructura dorada",
    ocasion: "Día a día, trabajo, salidas",
    etiquetas: ["versátil", "casual", "formal"],
  },
  {
    id: "grace",
    nombre: "GRACE",
    precio: 41,
    imagen: "images/collares/grace-main.png",
    imagenDetalle: "images/collares/grace-detalle.png",
    descripcion:
      "La encarnación del lujo discreto y la sofisticación. Inspirado en el resplandor de una noche de gala, diseñado para ser el centro de atención.",
    colores: ["dorado", "rosa-claro", "gris", "beige"],
    largo: "corto",
    estilos: ["elegante"],
    materiales: "Perlas y cristales con detalles dorados, cierre de bola y cono",
    ocasion: "Galas, eventos especiales, noches de celebración",
    etiquetas: ["gala", "noche", "formal"],
  },
  {
    id: "penelope",
    nombre: "PENÉLOPE",
    precio: 29,
    imagen: "images/collares/penelope-main.png",
    imagenDetalle: "images/collares/penelope-detalle.png",
    descripcion:
      "Collar largo tejido a mano, una joya etérea que evoca la dulzura de un jardín en primavera. Sus vibrantes tonos pastel añaden un toque bohemio, romántico y chic.",
    colores: ["dorado", "multicolor", "rosa-claro", "verdoso", "azulado", "beige"],
    largo: "largo",
    estilos: ["bohemio", "romantico"],
    materiales: "Cuentas en tonos pastel, tejido artesanal a mano",
    ocasion: "Día a día, eventos al aire libre, primavera-verano",
    etiquetas: ["bohemio", "primavera", "casual"],
  },
  {
    id: "ingrid",
    nombre: "INGRID",
    precio: 45,
    imagen: "images/collares/ingrid-main.png",
    imagenDetalle: "images/collares/ingrid-detalle.png",
    descripcion:
      "Collar babero tejido a mano con técnica intrincada. Captura la serenidad de los campos de lavanda. Su diseño volumétrico y la mezcla de texturas lo convierten en una pieza sofisticada.",
    colores: ["blanco", "dorado", "lavanda", "beige"],
    largo: "corto",
    estilos: ["romantico", "sofisticado"],
    materiales: "Cuentas en tonos lavanda y perla, tejido artesanal volumétrico",
    ocasion: "Eventos, primavera-verano, bodas",
    etiquetas: ["lavanda", "romántico", "boda"],
  },
  {
    id: "nicole",
    nombre: "NICOLE",
    precio: 44,
    imagen: "images/collares/nicole-main.png",
    imagenDetalle: "images/collares/nicole-detalle.png",
    descripcion:
      "Collar largo sofisticado que juega con la luz y la textura. Diseñado para la mujer que aprecia la elegancia modular y el detalle artesanal.",
    colores: ["blanco", "dorado", "multicolor", "rosa-claro", "verdoso", "azulado", "beige"],
    largo: "largo",
    estilos: ["elegante", "romantico"],
    materiales: "Cuentas pastel y blanco nacarado, diseño modular artesanal",
    ocasion: "Día especial, trabajo creativo, eventos diurnos",
    etiquetas: ["versátil", "elegante", "diurno"],
  },
];

// posicion: controla el encuadre de la imagen en la tarjeta (object-position CSS).
// Valores: "center top" | "center center" | "center bottom" | "left 30%" | "center 20%" …
// Ajusta el valor de cada pendiente hasta que la imagen quede bien centrada.

const PENDIENTES = [
  {
    id: "blanca",
    nombre: "BLANCA",
    precio: 54,
    imagen: "images/pendientes/P.Blanca-main.jpg",
    imagenDetalle: "images/pendientes/P.Blanca-detalle.jpg",
    posicion: "51% 28%",
    posicionDetalle: "67% 63%",
    descripcion:
      "Pendientes colgantes en blanco y turquesa, ligeros y delicados como las flores del campo. Su pureza los hace perfectos para cualquier ocasión.",
    colores: ["dorado", "turquesa"],
    tipo: "colgantes",
    estilos: ["elegante", "romantico"],
    materiales: "Cuentas blancas nacaradas, perlas sintéticas, estructura ligera dorada",
    ocasion: "Día a día, eventos, bodas",
  },
  {
    id: "paz",
    nombre: "PAZ",
    precio: 54,
    imagen: "images/pendientes/P.Paz-main.jpg",
    imagenDetalle: "images/pendientes/P.Paz-detalle.jpg",
    posicion: "38% 49%",
    posicionDetalle: "50% 50%",
    descripcion:
      "Pendiente colgante en tonos suaves que transmiten calma y feminidad. Ligeros como el viento, ideales para todo tipo de ocasiones.",
    colores: ["blanco", "plateado", "turquesa"],
    tipo: "colgantes",
    estilos: ["romantico", "bohemio"],
    materiales: "Cuentas pastel y perlas blancas, tejido artesanal ligero",
    ocasion: "Día a día, paseos, eventos casuales",
  },
  {
    id: "maribel",
    nombre: "MARIBEL",
    precio: 69,
    imagen: "images/pendientes/P.Maribel-main.jpg",
    imagenDetalle: "images/pendientes/P.Maribel-detalle.jpg",
    posicion: "50% 31%",
    posicionDetalle: "61% 68%",
    descripcion:
      "Colgante con cuentas en tonos pastel y lavanda tejidos a mano. Coloridos, alegres y llenos de la energía de un jardín en primavera.",
    colores: ["dorado", "turquesa", "coral", "naranja"],
    tipo: "colgantes",
    estilos: ["romantico", "bohemio"],
    materiales: "Cuentas pastel y lavanda, aros tejidos a mano",
    ocasion: "Primavera-verano, día a día, eventos al aire libre",
  },
  {
    id: "marisa",
    nombre: "MARISA",
    precio: 69,
    imagen: "images/pendientes/P.Marisa-main.jpg",
    imagenDetalle: "images/pendientes/P.Marisa-detalle.jpg",
    posicion: "35% 47%",
    posicionDetalle: "62% 43%",
    descripcion:
      "Colgante dorados con perlas que combinan la elegancia clásica con el toque artesanal. Una pieza atemporal que nunca pasa de moda.",
    colores: ["dorado", "negro"],
    tipo: "colgantes",
    estilos: ["elegante", "sofisticado"],
    materiales: "Perlas sintéticas, estructura de aro dorada, acabado artesanal",
    ocasion: "Día a día, trabajo, eventos formales",
  },
  {
    id: "carmen",
    nombre: "CARMEN",
    precio: 69,
    imagen: "images/pendientes/P.Carmen-main.jpg",
    imagenDetalle: "images/pendientes/P.Carmen-detalle.jpg",
    posicion: "55% 25%",
    posicionDetalle: "58% 53%",
    descripcion:
      "Pendientes colgantes de inspiración flamenca con detalles dorados que capturan la luz de la Feria. Un homenaje a la artesanía sevillana.",
    colores: ["dorado", "rojo"],
    tipo: "colgantes",
    estilos: ["elegante", "sofisticado"],
    materiales: "Cristales dorados, cuentas multicolor, acabado artesanal",
    ocasion: "Feria, eventos especiales, noches de celebración",
  },
  {
    id: "victoria",
    nombre: "VICTORIA",
    precio: 69,
    imagen: "images/pendientes/P.Victoria-main.jpg",
    imagenDetalle: "images/pendientes/P.Victoria-detalle.jpg",
    posicion: "50% 28%",
    posicionDetalle: "43% 55%",
    descripcion:
      "Pendientes colgantes elaborados con cristales y cuentas nacar. Una joya artesanal diseñada para brillar en las celebraciones más especiales.",
    colores: ["blanco", "dorado", "beige"],
    tipo: "colgantes",
    estilos: ["elegante", "sofisticado"],
    materiales: "Cristales facetados, cuentas doradas, diseño colgante artesanal",
    ocasion: "Feria, bodas, galas, noches especiales",
  },
];
