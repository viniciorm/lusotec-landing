# 🚀 Manual de Puesta en Producción — LUSOTEC SPA (`lusotec.cl`)

Este documento contiene el procedimiento paso a paso para pasar la **Landing Page V1** desde el entorno privado (`/landing-v1/`) al dominio principal productivo (`https://www.lusotec.cl/`).

---

## 📌 Estado Actual (Desarrollo / Revisión)

- **URL de revisión privada**: `https://www.lusotec.cl/landing-v1/` (o `https://lusotec-landing.vercel.app/landing-v1/`)
- **Directorio en servidor/repo**: `/landing-v1/`
- **Protección SEO temporal**: Contiene `<meta name="robots" content="noindex, nofollow">`

---

## 📋 Checklist Paso a Paso para Producción

### 1. Respaldos Preventivos
- [ ] **Respaldar el sitio actual**: Crear una copia de seguridad comprimida (ZIP) de los archivos en la raíz `/` o `public_html/`.
- [ ] **Respaldar configuración actual**: Guardar copia de `.htaccess`, reglas de redirección de Vercel (`vercel.json`), o configuraciones de servidor.

### 2. Migración de Archivos
- [ ] **Mover archivos al root**: Copiar o mover todo el contenido dentro de la carpeta `/landing-v1/` a la raíz principal `/` (o `public_html/`):
  - `index.html`
  - `style.css`
  - `script.js`
  - `vcard-victor.vcf`
  - `assets/` (`logo-lusotec.jpg`, `leather-bg.jpg`, `lab-bg.jpg`)

### 3. Ajustes de Código para Producción

- [ ] **Retirar `noindex, nofollow`**: En `index.html` cambiar:
  ```html
  <!-- ANTES: -->
  <meta name="robots" content="noindex, nofollow">
  <!-- DESPUÉS: -->
  <meta name="robots" content="index, follow">
  ```

- [ ] **Actualizar URL Canonical**: En `index.html` cambiar:
  ```html
  <link rel="canonical" href="https://www.lusotec.cl/">
  ```

- [ ] **Actualizar Open Graph URL & Image**:
  ```html
  <meta property="og:url" content="https://www.lusotec.cl/">
  <meta property="og:image" content="https://www.lusotec.cl/assets/logo-lusotec.jpg">
  ```

- [ ] **Actualizar URL del Código QR**: En `script.js`, en la función `renderQRCodeSVG()` o en el texto descriptivo del QR, cambiar la URL mostrada de `https://www.lusotec.cl/landing-v1/` a `https://www.lusotec.cl/`.

- [ ] **Conectar Google Sheets Webhook definitivo**:
  En `script.js`, dentro de `handleFormSubmit(e)`, reemplazar `GOOGLE_SCRIPT_WEBHOOK_URL` por el ejecutable definitivo de Google Apps Script:
  ```js
  const GOOGLE_SCRIPT_WEBHOOK_URL = 'https://script.google.com/macros/s/TU_WEBHOOK_ID_REAL/exec';
  ```

### 4. SEO & Indexación
- [ ] **Crear o actualizar `robots.txt`**:
  ```text
  User-agent: *
  Allow: /
  Sitemap: https://www.lusotec.cl/sitemap.xml
  ```
- [ ] **Crear o actualizar `sitemap.xml`**:
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://www.lusotec.cl/</loc>
      <lastmod>2026-08-13</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>
  </urlset>
  ```

### 5. Verificación & Pruebas Finales
- [ ] **Probar Formulario de Contacto**: Enviar una solicitud de prueba en español y otra en inglés. Verificar que los datos lleguen correctamente a Google Sheets con la columna `source = landing_lusotec` y los parámetros UTM.
- [ ] **Probar WhatsApp**: Hacer clic en el botón flotante y verificar que abra WhatsApp con el mensaje prellenado en el idioma correspondiente.
- [ ] **Probar vCard**: Hacer clic en "Guardar contacto" y verificar que descargue `vcard-victor.vcf` con los datos completos de Víctor Marques Ferreira.
- [ ] **Probar Selector de Idiomas (ES | EN)**: Cambiar de idioma varias veces y refrescar la página para validar que persista el idioma seleccionado en `localStorage`.
- [ ] **Comprobar HTTPS & Certificado SSL**: Asegurar que `https://lusotec.cl` cargue con candado verde sin advertencias de contenido mixto.
- [ ] **Limpiar Caché**: Purgar la caché de CDN, Vercel y del navegador.
- [ ] **Verificar Responsividad**: Probar el sitio en dispositivos móviles (iOS, Android), tablets y navegadores desktop (Chrome, Safari, Firefox, Edge).

---

## 📊 Integración con Google Sheets (Google Apps Script)

Para activar el guardado automático de contactos en Google Sheets:

1. Abre Google Sheets y crea una hoja llamada **"Contactos Lusotec"**.
2. Agrega los encabezados en la Fila 1:
   `timestamp | idioma | nombre | empresa | pais_ciudad | telefono | email | area_interes | mensaje | consentimiento | source | utm_source | utm_medium | utm_campaign`
3. Ve a **Extensiones → Apps Script** y pega la siguiente función:
   ```javascript
   function doPost(e) {
     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     var data = JSON.parse(e.postData.contents);
     sheet.appendRow([
       data.timestamp,
       data.idioma,
       data.nombre,
       data.empresa,
       data.pais_ciudad,
       data.telefono,
       data.email,
       data.area_interes,
       data.mensaje,
       data.consentimiento,
       data.source,
       data.utm_source,
       data.utm_medium,
       data.utm_campaign
     ]);
     return ContentService.createTextOutput(JSON.stringify({"result": "success"}))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```
4. Haz clic en **Desplegar → Nuevo despliegue → Aplicación Web**.
5. Configura:
   - **Ejecutar como**: Tu cuenta.
   - **Quién tiene acceso**: *Cualquier persona (Anyone)*.
6. Copia la URL del despliegue y pégala en `script.js` en la constante `GOOGLE_SCRIPT_WEBHOOK_URL`.

---

© 2026 LUSOTEC SPA — Guía técnica de despliegue.
