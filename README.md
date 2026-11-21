# Portal de Servicios · UECECH

Portal principal de la Unidad Educativa “Cap. Edmundo Chiriboga” (Riobamba).

- **index.html**: toda la página en un solo archivo (diseño, menús, logo y lógica).
- Los textos, imágenes y documentos de cada apartado se guardan en Supabase y los editan los administradores desde la misma página (pie de página → 🔐 Acceso administradores).

## Dónde se configura (al inicio del código de index.html)

- `SUPABASE_URL` y `SUPABASE_KEY`: conexión con Supabase (solo la *Publishable key*; nunca la *Secret key*).
- `SISTEMA_ACADEMICO` y `SISTEMA_SIEE`: enlaces que se abren a pantalla completa.
- `PRINCIPALES`: los cinco círculos de la página de inicio.
- `MENUS`: los menús y apartados. Si cambia el nombre de un apartado, su contenido guardado deja de mostrarse.

## Publicación

GitHub Pages: Settings → Pages → Deploy from a branch → `main` / `(root)`.
