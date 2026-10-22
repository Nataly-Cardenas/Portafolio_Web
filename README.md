# Portafolio de Nátaly Cárdenas

Web estática en español, sin dependencias ni proceso de compilación. Abre `dist/index.html` o sirve la carpeta `dist` con cualquier servidor estático. Para probar localmente: `python3 -m http.server 8000 --directory dist`.

Paleta: Lagoon `#95DFD3`, Deep Sea `#1F4B5D`, blanco `#FAFAFA`. Diseño adaptable a móvil, navegación por anclas, tarjeta reversible, explorador de áreas, copia de correo.

Contenido basado en el PDF de LinkedIn aportado. Inspiración estructural: https://github.com/programaconale/DATACONALEWEBSITE (portafolio continuo, nombre de fondo, tarjeta e interacción de elementos). Implementación original; no utiliza fotografías, vídeos ni datos personales del autor de la referencia.

No se añadieron proyectos, testimonios, métricas ni tecnologías no especificadas. El motivo abstracto de la portada es decorativo.

## GitHub Pages

El workflow `.github/workflows/pages.yml` publica la carpeta `dist` en cada push a `main`. En Settings → Pages, la fuente debe ser **GitHub Actions**.

Dirección del sitio: https://nataly-cardenas.github.io/Portafolio_Web/
