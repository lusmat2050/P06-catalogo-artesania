/**
 * catalog.js â€” Datos del catÃ¡logo de collares y pendientes
 *
 * Para aÃ±adir o modificar una pieza, edita el array correspondiente.
 * Para cambiar una foto, cambia solo la ruta dentro de este archivo.
 * Las imÃ¡genes de collares deben estar en images/collares/
 * Las imÃ¡genes de pendientes deben estar en images/pendientes/
 *
 * Atributos de filtro disponibles:
 *   colores: dorado | multicolor | blanco | turquesa | rojo | coral | naranja | negro | plateado
 *            beige | verdoso | azulado | rosa-claro | lavanda | gris
 *   largo (collares): corto | largo
 *   tipo (pendientes): aros | colgantes
 *   estilo: elegante | romantico | bohemio | sofisticado
 *
 * Precios con IVA y gastos de envío incluidos.
 */

const COLLARES = [
  {
    id: "liz",
    nombre: "LIZ",
    precio: 72,
    imagen: "images/collares/liz-main.jpg",
    imagenDetalle: "images/collares/liz-detalle.jpg",
    posicion:        "50% 50%",
    posicionDetalle: "50% 50%",
    descripcion:
      "Obra maestra artesanal de diseÃ±o elegante y atemporal. Combina cuentas perladas, cristales facetados y bordes dorados que aportan luminosidad y un estilo refinado.",
    colores: ["dorado", "gris", "blanco", "beige"],
    largo: "corto",
    estilos: ["elegante", "sofisticado"],
    materiales: "Perlas sintÃ©ticas de alta calidad, cristales facetados en tonos champagne e hielo, hilo y estructura dorada",
    ocasion: "Eventos, noches especiales, bodas",
    etiquetas: ["formal", "noche", "boda"],
  },
  {
    id: "barbara",
    nombre: "BARBARA",
    precio: 45,
    imagen: "images/collares/barbara-main.jpg",
    imagenDetalle: "images/collares/barbara-detalle.jpg",
    posicion:        "50% 50%",
    posicionDetalle: "50% 50%",
    descripcion:
      "Un collar de diseÃ±o elegante y sofisticado. Su confecciÃ³n meticulosa captura la luz y complementa a la perfecciÃ³n tanto la vestimenta formal como la casual elevada.",
    colores: ["multicolor", "dorado", "coral", "turquesa", "blanco"],
    largo: "corto",
    estilos: ["elegante", "sofisticado"],
    materiales: "Cristales multicolor, cuentas pastel, estructura dorada",
    ocasion: "DÃ­a a dÃ­a, trabajo, salidas",
    etiquetas: ["versÃ¡til", "casual", "formal"],
  },
  {
    id: "grace",
    nombre: "GRACE",
    precio: 40,
    imagen: "images/collares/grace-main.jpg",
    imagenDetalle: "images/collares/grace-detalle.jpg",
    posicion:        "50% 50%",
    posicionDetalle: "50% 50%",
    descripcion:
      "La encarnaciÃ³n del lujo discreto y la sofisticaciÃ³n. Inspirado en el resplandor de una noche de gala, diseÃ±ado para ser el centro de atenciÃ³n.",
    colores: ["dorado", "rosa-claro", "gris", "beige"],
    largo: "corto",
    estilos: ["elegante"],
    materiales: "Perlas y cristales con detalles dorados, cierre de bola y cono",
    ocasion: "Galas, eventos especiales, noches de celebraciÃ³n",
    etiquetas: ["gala", "noche", "formal"],
  },
  {
    id: "penelope",
    nombre: "PENÃ‰LOPE",
    precio: 25,
    imagen: "images/collares/penelope-main.jpg",
    imagenDetalle: "images/collares/penelope-detalle.jpg",
    descripcion:
      "Collar largo tejido a mano, una joya etÃ©rea que evoca la dulzura de un jardÃ­n en primavera. Sus vibrantes tonos pastel aÃ±aden un toque bohemio, romÃ¡ntico y chic.",
    colores: ["dorado", "multicolor", "rosa-claro", "verdoso", "azulado", "beige"],
    largo: "largo",
    estilos: ["bohemio", "romantico"],
    materiales: "Cuentas en tonos pastel, tejido artesanal a mano",
    ocasion: "DÃ­a a dÃ­a, eventos al aire libre, primavera-verano",
    etiquetas: ["bohemio", "primavera", "casual"],
    posicion:        "49% 27%",
    posicionDetalle: "63% 77%",
  },
  {
    id: "ingrid",
    nombre: "INGRID",
    precio: 65,
    imagen: "images/collares/ingrid-main.jpg",
    imagenDetalle: "images/collares/ingrid-detalle.jpg",
    posicion:        "50% 50%",
    posicionDetalle: "50% 50%",
    descripcion:
      "Collar babero tejido a mano con tÃ©cnica intrincada. Captura la serenidad de los campos de lavanda. Su diseÃ±o volumÃ©trico y la mezcla de texturas lo convierten en una pieza sofisticada.",
    colores: ["blanco", "dorado", "lavanda", "beige"],
    largo: "corto",
    estilos: ["romantico", "sofisticado"],
    materiales: "Cuentas en tonos lavanda y perla, tejido artesanal volumÃ©trico",
    ocasion: "Eventos, primavera-verano, bodas",
    etiquetas: ["lavanda", "romÃ¡ntico", "boda"],
  },
  {
    id: "audrey",
    nombre: "AUDREY",
    precio: 54,
    imagen: "images/collares/audrey-main.jpg",
    imagenDetalle: "images/collares/audrey-detalle.jpg",
    posicion:        "50% 50%",
    posicionDetalle: "50% 50%",
    descripcion:
      "Esta joya es el encuentro idÃ³neo entre la elegancia de una gran ocasiÃ³n y el latido mÃ¡s honesto de la artesanÃ­a lenta. Un amuleto con conciencia, impregnado de alma y del cromatismo de nuestra tierra.",
    colores: ["dorado", "beige"],
    largo: "corto",
    estilos: ["elegante", "sofisticado"],
    materiales: "Realizado a mano con materiales seleccionados",
    ocasion: "Eventos y ocasiones especiales",
    etiquetas: ["formal", "noche", "boda"],
  },
  {
    id: "lisa",
    nombre: "LISA",
    precio: 75,
    imagen: "images/collares/lisa-main.jpg",
    imagenDetalle: "images/collares/lisa-detalle.jpg",
    posicion:        "50% 50%",
    posicionDetalle: "50% 50%",
    descripcion:
      "Este diseÃ±o combina la sofisticaciÃ³n clÃ¡sica de la perla con la calidez del oro, creando una pieza versÃ¡til que ilumina cualquier atuendo, ya sea un vestido de noche o una blusa de seda para el dÃ­a.",
    colores: ["dorado", "blanco", "beige"],
    largo: "corto",
    estilos: ["elegante", "sofisticado"],
    materiales: "Perlas sintÃ©ticas, detalles en dorado",
    ocasion: "Noches especiales, bodas, dÃ­a a dÃ­a",
    etiquetas: ["versÃ¡til", "noche", "boda"],
  },
  {
    id: "nicole",
    nombre: "NICOLE",
    precio: 35,
    imagen: "images/collares/nicole-main.jpg",
    imagenDetalle: "images/collares/nicole-detalle.jpg",
    posicion:        "50% 50%",
    posicionDetalle: "50% 50%",
    descripcion:
      "Collar largo sofisticado que juega con la luz y la textura. DiseÃ±ado para la mujer que aprecia la elegancia modular y el detalle artesanal.",
    colores: ["blanco", "dorado", "multicolor", "rosa-claro", "verdoso", "azulado", "beige"],
    largo: "largo",
    estilos: ["elegante", "romantico"],
    materiales: "Cuentas pastel y blanco nacarado, diseÃ±o modular artesanal",
    ocasion: "DÃ­a especial, trabajo creativo, eventos diurnos",
    etiquetas: ["versÃ¡til", "elegante", "diurno"],
  },
];

// posicion: controla el encuadre de la imagen en la tarjeta (object-position CSS).
// Valores: "center top" | "center center" | "center bottom" | "left 30%" | "center 20%" â€¦
// Ajusta el valor de cada pendiente hasta que la imagen quede bien centrada.

const PENDIENTES = [
  {
    id: "blanca",
    nombre: "BLANCA",
    precio: 40,
    imagen: "images/pendientes/P.Blanca-main.jpg",
    imagenDetalle: "images/pendientes/P.Blanca-detalle.jpg",
    posicion: "51% 28%",
    posicionDetalle: "67% 63%",
    descripcion:
      "Pendientes colgantes en blanco y turquesa, ligeros y delicados como las flores del campo. Su pureza los hace perfectos para cualquier ocasiÃ³n.",
    colores: ["dorado", "turquesa"],
    tipo: "colgantes",
    estilos: ["elegante", "romantico"],
    materiales: "Cuentas blancas nacaradas, perlas sintÃ©ticas, estructura ligera dorada",
    ocasion: "DÃ­a a dÃ­a, eventos, bodas",
  },
  {
    id: "paz",
    nombre: "PAZ",
    precio: 35,
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
    ocasion: "DÃ­a a dÃ­a, paseos, eventos casuales",
  },
  {
    id: "maribel",
    nombre: "MARIBEL",
    precio: 50,
    imagen: "images/pendientes/P.Maribel-main.jpg",
    imagenDetalle: "images/pendientes/P.Maribel-detalle.jpg",
    posicion: "50% 31%",
    posicionDetalle: "61% 68%",
    descripcion:
      "Colgante con cuentas en tonos pastel y lavanda tejidos a mano. Coloridos, alegres y llenos de la energÃ­a de un jardÃ­n en primavera.",
    colores: ["dorado", "turquesa", "coral", "naranja"],
    tipo: "colgantes",
    estilos: ["romantico", "bohemio"],
    materiales: "Cuentas pastel y lavanda, aros tejidos a mano",
    ocasion: "Primavera-verano, dÃ­a a dÃ­a, eventos al aire libre",
  },
  {
    id: "marisa",
    nombre: "MARISA",
    precio: 45,
    imagen: "images/pendientes/P.Marisa-main.jpg",
    imagenDetalle: "images/pendientes/P.Marisa-detalle.jpg",
    posicion: "35% 47%",
    posicionDetalle: "62% 43%",
    descripcion:
      "Colgante dorados con perlas que combinan la elegancia clÃ¡sica con el toque artesanal. Una pieza atemporal que nunca pasa de moda.",
    colores: ["dorado", "negro"],
    tipo: "colgantes",
    estilos: ["elegante", "sofisticado"],
    materiales: "Perlas sintÃ©ticas, estructura de aro dorada, acabado artesanal",
    ocasion: "DÃ­a a dÃ­a, trabajo, eventos formales",
  },
  {
    id: "carmen",
    nombre: "CARMEN",
    precio: 50,
    imagen: "images/pendientes/P.Carmen-main.jpg",
    imagenDetalle: "images/pendientes/P.Carmen-detalle.jpg",
    posicion: "55% 25%",
    posicionDetalle: "58% 53%",
    descripcion:
      "Pendientes colgantes de inspiraciÃ³n flamenca con detalles dorados que capturan la luz de la Feria. Un homenaje a la artesanÃ­a sevillana.",
    colores: ["dorado", "rojo"],
    tipo: "colgantes",
    estilos: ["elegante", "sofisticado"],
    materiales: "Cristales dorados, cuentas multicolor, acabado artesanal",
    ocasion: "Feria, eventos especiales, noches de celebraciÃ³n",
  },
  {
    id: "victoria",
    nombre: "VICTORIA",
    precio: 50,
    imagen: "images/pendientes/P.Victoria-main.jpg",
    imagenDetalle: "images/pendientes/P.Victoria-detalle.jpg",
    posicion: "50% 28%",
    posicionDetalle: "43% 55%",
    descripcion:
      "Pendientes colgantes elaborados con cristales y cuentas nacar. Una joya artesanal diseÃ±ada para brillar en las celebraciones mÃ¡s especiales.",
    colores: ["blanco", "dorado", "beige"],
    tipo: "colgantes",
    estilos: ["elegante", "sofisticado"],
    materiales: "Cristales facetados, cuentas doradas, diseÃ±o colgante artesanal",
    ocasion: "Feria, bodas, galas, noches especiales",
  },
];
