# 🚀 Manual de Puesta en Producción — LUSOTEC SPA (`lusotec.cl`)

Este documento contiene el procedimiento paso a paso de **6 Fases** para desplegar la **Landing Page V1 Bilingüe** desde el entorno privado de desarrollo (`/landing-v1/` y `/landing-v1/en/`) al dominio principal productivo (`https://www.lusotec.cl/` y `https://www.lusotec.cl/en/`).

---

## 📌 Estado Actual (Desarrollo / Pre-Deploy)

- **Versión Española (Desarrollo)**: `https://www.lusotec.cl/landing-v1/`
- **Versión Inglesa (Desarrollo)**: `https://www.lusotec.cl/landing-v1/en/`
- **Archivos en repositorio**: `/landing-v1/index.html` y `/landing-v1/en/index.html`
- **Protección SEO temporal**: Ambas páginas contienen `<meta name="robots" content="noindex, nofollow">`
- **Dominio principal `lusotec.cl`**: Mantiene la página en construcción sin cambios.

---

## 📋 Checklist de 6 Fases para el Despliegue a Producción

### FASE 1 — Respaldos (Backup)
- [ ] **Respaldar el sitio actual**: Crear una copia de seguridad comprimida (ZIP) de los archivos en la raíz `/` o `public_html/`.
- [ ] **Respaldar archivos de producción**: Guardar copia de archivos existentes en el hosting/servidor.
- [ ] **Respaldar configuración**: Guardar copia de `.htaccess`, reglas de redirección de Vercel (`vercel.json`), o configuraciones de servidor.

### FASE 2 — Migración de Archivos
- [ ] **Copiar versión Española al root**: Copiar todo el contenido de `/landing-v1/` a la raíz principal `/` (o `public_html/`):
  - `index.html` (Español)
  - `style.css`
  - `script.js`
  - `vcard-victor.vcf`
  - `assets/` (`logo-lusotec.webp`, `logo-lusotec.jpg`, `leather-bg.webp`, `leather-bg.jpg`, `lab-bg.webp`, `lab-bg.jpg`, `qr-lusotec-prod.svg`, etc.)
- [ ] **Crear directorio `/en/` y copiar versión Inglesa**:
  - Crear la carpeta `/en/` en la raíz de producción.
  - Copiar `/landing-v1/en/index.html` a `/en/index.html`.
- [ ] **Copiar archivos globales de la raíz**:
  - Copiar `llms.txt` a la raíz `/llms.txt`.
  - Copiar `robots.txt` a la raíz `/robots.txt`.
  - Copiar `sitemap.xml` a la raíz `/sitemap.xml`.

### FASE 3 — Ajustes SEO & Metadatos de Producción

#### En `https://www.lusotec.cl/index.html` (Español):
- [ ] **Actualizar Canonical Tag**:
  ```html
  <link rel="canonical" href="https://www.lusotec.cl/">
  ```
- [ ] **Actualizar Hreflang Tags**:
  ```html
  <link rel="alternate" hreflang="es" href="https://www.lusotec.cl/">
  <link rel="alternate" hreflang="en" href="https://www.lusotec.cl/en/">
  <link rel="alternate" hreflang="x-default" href="https://www.lusotec.cl/">
  ```
- [ ] **Cambiar Robots Directive**:
  ```html
  <!-- Cambiar noindex,nofollow por: -->
  <meta name="robots" content="index, follow">
  ```
- [ ] **Actualizar Open Graph & Schema URLs**:
  - `og:url` → `https://www.lusotec.cl/`
  - `og:image` → `https://www.lusotec.cl/assets/logo-lusotec.jpg`
  - FAQ ID → `https://www.lusotec.cl/#faq`

#### En `https://www.lusotec.cl/en/index.html` (Inglés):
- [ ] **Actualizar Canonical Tag**:
  ```html
  <link rel="canonical" href="https://www.lusotec.cl/en/">
  ```
- [ ] **Actualizar Hreflang Tags**:
  ```html
  <link rel="alternate" hreflang="es" href="https://www.lusotec.cl/">
  <link rel="alternate" hreflang="en" href="https://www.lusotec.cl/en/">
  <link rel="alternate" hreflang="x-default" href="https://www.lusotec.cl/">
  ```
- [ ] **Cambiar Robots Directive**:
  ```html
  <!-- Cambiar noindex,nofollow por: -->
  <meta name="robots" content="index, follow">
  ```
- [ ] **Actualizar Open Graph & Schema URLs**:
  - `og:url` → `https://www.lusotec.cl/en/`
  - `og:image` → `https://www.lusotec.cl/assets/logo-lusotec.jpg`
  - FAQ ID → `https://www.lusotec.cl/en/#faq`

### FASE 4 — Reemplazo del Código QR
- [ ] **En `index.html` (Español)**: Reemplazar la imagen del QR por `assets/qr-lusotec-prod.svg` apuntando a `https://www.lusotec.cl/`.
- [ ] **En `/en/index.html` (Inglés)**: Reemplazar la imagen del QR por `../assets/qr-lusotec-prod.svg` apuntando a `https://www.lusotec.cl/`.

### FASE 5 — Pruebas Finales (Testing)
- [ ] **Probar URLs en navegador**:
  - Probar `https://www.lusotec.cl/`
  - Probar `https://www.lusotec.cl/en/`
  - Probar selector `ES ↔ EN`
- [ ] **Probar Formulario de Contacto**:
  - Enviar solicitud en versión ES: verificar que registre `idioma = es` y áreas de interés en español en Google Sheets.
  - Enviar solicitud en versión EN: verificar que registre `idioma = en` y áreas de interés en inglés (ej. `Finishing & Auxiliaries`) en Google Sheets.
  - Verificar captura de parámetros UTM (`?utm_source=...`).
- [ ] **Probar Canales Directos**:
  - Probar botón flotante y directo de WhatsApp.
  - Probar enlace de correo `mailto:`.
  - Probar descarga de la vCard (`Victor_Marques_Lusotec.vcf`).
  - Escanear código QR con smartphone.
- [ ] **Verificar Responsividad & Rendimiento**:
  - Probar visualización en escritorio, tablet y móviles (iOS/Android).
  - Verificar certificado SSL (HTTPS sin advertencias mixtas).
  - Abrir la consola del navegador F12 y verificar que no existan errores 404 ni excepciones JS.

### FASE 6 — Indexación en Buscadores
- [ ] **Habilitar `robots.txt` público**: Confirmar que `robots.txt` permita la indexación de la raíz `/` y el subdirectorio `/en/`.
- [ ] **Verificar `sitemap.xml`**: Confirmar que `sitemap.xml` sea accesible en `https://www.lusotec.cl/sitemap.xml`.
- [ ] **Google Search Console**:
  - Enviar la propiedad `https://www.lusotec.cl/` a Google Search Console.
  - Enviar la URL del mapa del sitio `sitemap.xml`.
  - Solicitar la indexación manual de la página de inicio `https://www.lusotec.cl/` y la versión en inglés `https://www.lusotec.cl/en/`.

---

© 2026 LUSOTEC SPA — Guía técnica de despliegue bilingüe.
