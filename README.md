# Portal de Servicios · UECECH

Portal principal de la Unidad Educativa “Cap. Edmundo Chiriboga” (Riobamba).

- **index.html**: página de inicio (diseño, logo y lógica de los apartados editables).
- **menu.js**: menús (cinta de opciones superior) y accesos principales. Lo usan **todas** las páginas del Portal.
- Las demás páginas (`*.html`) son los aplicativos; cada una carga `menu.js` para mostrar la misma cinta de opciones.
- Los textos, imágenes y documentos de cada apartado se guardan en Supabase y los editan los administradores desde la misma página (pie de página → 🔐 Acceso administradores).

## Dónde se configura

En **menu.js**:
- `SISTEMA_ACADEMICO` y `SISTEMA_SIEE`: sistemas externos.
- `PRINCIPALES`: los círculos de la página de inicio.
- `MENUS`: los menús y apartados. Si cambia el nombre de un apartado, su contenido guardado deja de mostrarse (hay que cambiar su `slug` en la tabla `apartados`).

En **index.html**:
- `SUPABASE_URL` y `SUPABASE_KEY`: conexión con Supabase (solo la *Publishable key*; nunca la *Secret key*).

## Publicación

GitHub Pages: Settings → Pages → Deploy from a branch → `main` / `(root)`.
