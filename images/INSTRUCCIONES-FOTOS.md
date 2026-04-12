# Guía de imágenes — Colección Cristina Gigato

## Estructura de carpetas

```
images/
├── hero/
│   └── hero-collares.jpg        ← Foto principal del hero (collar puesto, fondo cálido)
│
├── lifestyle/
│   ├── cristina-trabajando.jpg  ← Tu foto trabajando / en tu mesa
│   └── manos-tejiendo.jpg       ← Detalle de tus manos tejiendo (opcional)
│
├── collares/
│   ├── liz-main.jpg             ← LIZ puesto en modelo
│   ├── liz-detalle.jpg          ← LIZ sobre superficie / detalle del trabajo
│   ├── barbara-main.jpg
│   ├── barbara-detalle.jpg
│   ├── grace-main.jpg
│   ├── grace-detalle.jpg
│   ├── penelope-main.jpg
│   ├── penelope-detalle.jpg
│   ├── ingrid-main.jpg
│   ├── ingrid-detalle.jpg
│   ├── nicole-main.jpg
│   └── nicole-detalle.jpg
│
└── pendientes/
    ├── [nombre]-main.jpg        ← Pendiente puesto en modelo (foto principal)
    └── [nombre]-detalle.jpg     ← Pendiente sobre superficie / detalle del trabajo
```

> **Naming convention para pendientes:** usa el nombre del pendiente en minúsculas y sin tildes,
> seguido de `-main` o `-detalle`. Por ejemplo: `sevilla-main.jpg`, `sevilla-detalle.jpg`.

## Recomendaciones de tamaño

| Uso                    | Tamaño recomendado | Proporción |
|------------------------|--------------------|------------|
| Hero                   | 900×1125 px        | 4:5        |
| Historia               | 750×1000 px        | 3:4        |
| Card catálogo (collar) | 600×450 px         | 4:3        |
| Detalle modal (collar) | 600×450 px         | 4:3        |
| Card catálogo (pendiente) | 600×450 px      | 4:3        |
| Detalle modal (pendiente) | 600×450 px      | 4:3        |

## Consejos

- Guarda las fotos en formato **JPG** para reducir tamaño.
- Usa nombres exactamente como aparecen arriba (minúsculas, con guiones).
- Si cambias el nombre de una foto, actualiza también `js/catalog.js`.
- Si añades un nuevo collar, añade su entrada en `js/catalog.js` siguiendo el mismo formato.

## Para cambiar las fotos de un collar

1. Abre `js/catalog.js`
2. Busca el collar por su `id`
3. Cambia los valores de `imagen` e `imagenDetalle`
4. Guarda el archivo — la web se actualiza automáticamente

## Nota sobre GitHub Pages

Las fotos deben estar **dentro de la carpeta del proyecto** para que GitHub Pages las sirva.
No uses rutas absolutas (C:/...) — usa siempre rutas relativas como `images/collares/liz-main.jpg`.
