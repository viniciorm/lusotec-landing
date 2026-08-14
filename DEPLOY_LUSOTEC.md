# 🚀 Manual de Puesta en Producción — LUSOTEC SPA (`lusotec.cl`)

Este documento contiene el procedimiento paso a paso para pasar la **Landing Page V1 Bilingüe** desde el entorno privado de desarrollo (`/landing-v1/` y `/landing-v1/en/`) al dominio principal productivo (`https://www.lusotec.cl/` y `https://www.lusotec.cl/en/`).

---

## 📌 Estado Actual (Desarrollo / Revisión)

- **Versión Española (Desarrollo)**: `https://www.lusotec.cl/landing-v1/`
- **Versión Inglesa (Desarrollo)**: `https://www.lusotec.cl/landing-v1/en/`
- **Directorio en repositorio**: `/landing-v1/index.html` y `/landing-v1/en/index.html`
- **Protección SEO temporal**: Ambas páginas contienen `<meta name="robots" content="noindex, nofollow">`

---

## 📋 Checklist Paso a Paso para Producción

### 1. Respaldos Preventivos
- [ ] **Respaldar el sitio actual**: Crear una copia de seguridad comprimida (ZIP) de los archivos en la raíz `/` o `public_html/`.
- [ ] **Respaldar configuración actual**: Guardar copia de `.htaccess`, reglas de redirección de Vercel (`vercel.json`), o configuraciones de servidor.

### 2. Migración de Archivos
- [ ] **Mover versión Española al root**: Copiar todo el contenido de `/landing-v1/` a la raíz principal `/` (o `public_html/`):
  - `index.html` (Español)
  - `style.css`
  - `script.js`
  - `vcard-victor.vcf`
  - `assets/` (`logo-lusotec.jpg`, `leather-bg.jpg`, `lab-bg.jpg`, `qr-lusotec-prod.svg`, etc.)
- [ ] **Mover versión Inglesa a `/en/`**: Copiar `/landing-v1/en/index.html` a la subcarpeta `/en/index.html`.

### 3. Ajustes de Código para Producción

#### En `https://www.lusotec.cl/index.html` (Español):
- [ ] **Retirar `noindex, nofollow`**:
  ```html
  <meta name="robots" content="index, follow">
  ```
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
- [ ] **Actualizar Open Graph**:
  ```html
  <meta property="og:url" content="https://www.lusotec.cl/">
  <meta property="og:image" content="https://www.lusotec.cl/assets/logo-lusotec.jpg">
  ```
- [ ] **Actualizar Código QR**: Reemplazar la imagen QR por `assets/qr-lusotec-prod.svg` apuntando a `https://www.lusotec.cl/`.

#### En `https://www.lusotec.cl/en/index.html` (Inglés):
- [ ] **Retirar `noindex, nofollow`**:
  ```html
  <meta name="robots" content="index, follow">
  ```
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
- [ ] **Actualizar Open Graph**:
  ```html
  <meta property="og:url" content="https://www.lusotec.cl/en/">
  <meta property="og:image" content="https://www.lusotec.cl/assets/logo-lusotec.jpg">
  ```
- [ ] **Actualizar Código QR**: Reemplazar la imagen QR por `../assets/qr-lusotec-prod.svg` apuntando a `https://www.lusotec.cl/`.

---

## 📊 Integración con Google Sheets

El webhook configurado en `script.js` procesa formularios de ambas páginas de manera unificada:
- **Webhook URL**: `https://script.google.com/macros/s/AKfycbwJrdIE4B6m5AIqhfQXOumiFo3fKLmbuyIKUfthtVJAiQlGFXDLQ9risD-sANkqlsB3xw/exec`
- **Pestaña destino**: `Leads Landing`
- **Comportamiento por idioma**:
  - `ES`: Registra `idioma = es` y áreas de interés en español (ej. `Terminación y auxiliares`).
  - `EN`: Registra `idioma = en` y áreas de interés en inglés (ej. `Finishing & Auxiliaries`).

---

© 2026 LUSOTEC SPA — Guía técnica de despliegue bilingüe.
