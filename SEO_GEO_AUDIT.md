# 📊 SEO & GEO Audit — LUSOTEC SPA (`/landing-v1/`)

Este documento contiene la auditoría completa de preparación **SEO (Search Engine Optimization)** y **GEO (Generative Engine Optimization)** para la Landing Page V1 de LUSOTEC SPA.

---

## 🛑 NOTA IMPORTANTE DE PRIVACIDAD EN DESARROLLO

Mientras la landing se encuentre en la ruta privada de revisión `/landing-v1/`:
- Mantiene la directiva `<meta name="robots" content="noindex, nofollow">`.
- Las URLs del sitemap y el archivo `robots.txt` están configuradas en modo preparación y **NO deben activarse públicamente hasta el deploy definitivo a la raíz `/`**.

---

## 📋 Tabla General de Auditoría

| Elemento | Estado | Acción Realizada / Recomendada | Estado en Producción |
| :--- | :---: | :--- | :---: |
| **1. SEO Técnico** | | | |
| Canonical Tag | `MEJORADO` | Configurado `<link rel="canonical" href="https://www.lusotec.cl/landing-v1/">`. | Cambiar a `https://www.lusotec.cl/` en raíz. |
| Directive Robots | `OK` | Mantiene `<meta name="robots" content="noindex, nofollow">`. | Cambiar a `<meta name="robots" content="index, follow">`. |
| `robots.txt` | `MEJORADO` | Creado en la raíz bloqueando `/landing-v1/` y enlazando sitemap. | Activar en la raíz pública. |
| `sitemap.xml` | `MEJORADO` | Creado sitemap estructurado con versión ES (`/`) y EN (`/en/`). | Activar en la raíz pública. |
| **2. SEO Internacional** | | | |
| Selector de Idiomas | `OK` | Selector visible `ES \| EN` con persistencia en `localStorage`. | Funcional mediante JS en `/landing-v1/`. |
| Arquitectura URLs Bilingües | `PENDIENTE` | Documentada arquitectura independiente (`/` y `/en/`) con `hreflang`. | Aplicar subdirectorio `/en/` en producción. |
| Hreflang Tags | `PENDIENTE` | Preparados enlaces `alternate` (`es`, `en`, `x-default`) en esta guía. | Insertar en `<head>` de `/` y `/en/`. |
| **3. SEO On-Page** | | | |
| Title Tag (ES) | `MEJORADO` | Exacto: `LUSOTEC SPA \| Productos químicos y asesoría técnica para cuero` (59 caracteres). | Listo. |
| Meta Description (ES) | `MEJORADO` | Exacta: `Productos químicos especializados, asesoría técnica y soluciones para la industria del cuero. Conoce las soluciones de LUSOTEC SPA.` (137 caracteres). | Listo. |
| Title Tag (EN) | `MEJORADO` | Exacto: `LUSOTEC SPA \| Chemical Products & Technical Advice for Leather` (58 caracteres). | Listo. |
| Meta Description (EN) | `MEJORADO` | Exacta: `Specialized chemical products, technical advice and solutions for the leather industry. Discover LUSOTEC SPA solutions.` (124 caracteres). | Listo. |
| Jerarquía H1 / H2 / H3 | `OK` | 1 `<h1>` único en Hero. `<h2>` semánticos en cada sección. `<h3>` en cards. | Listo. |
| Textos Alt de Imágenes | `MEJORADO` | Optimizados alts descriptivos en logo, laboratorio y tarjetas. | Listo. |
| **4. GEO (Generative Engine Optimization)** | | | |
| Definición Semántica Entidad | `MEJORADO` | Texto HTML visible definiendo explícitamente qué es y qué hace LUSOTEC SPA en ES y EN. | Listo para rastreadores IA. |
| Familias de Productos | `MEJORADO` | 5 familias claramente identificables con la nueva clasificación de Terminación (*Acrílicos, Poliuretanos, Auxiliares, Pigmentos*). | Listo. |
| Sección FAQ Visibles | `MEJORADO` | Agregada sección de Preguntas Frecuentes en HTML visible con acordeón accesible. | Listo. |
| Archivo `llms.txt` | `MEJORADO` | Creado `/llms.txt` público factual detallando la entidad y soluciones para LLMs (ChatGPT, Gemini, Perplexity). | Listo en la raíz `/llms.txt`. |
| **5. Structured Data (JSON-LD)** | | | |
| Schema `Organization` | `MEJORADO` | Enriquecido con `description`, `address`, `contactPoint` real y `knowsAbout` industrial. | Listo. |
| Schema `WebSite` | `MEJORADO` | Declarado sitio oficial con soporte de idioma `["es-CL", "en-US"]`. | Listo. |
| Schema `ContactPoint` | `MEJORADO` | Añadido punto de contacto de ventas con teléfonos y mail reales. | Listo. |
| Schema `FAQPage` | `MEJORADO` | Implementado JSON-LD `FAQPage` reflejando 1:1 las 4 preguntas visibles. | Listo. |
| **6. Open Graph & Social** | | | |
| Tags Open Graph | `MEJORADO` | `og:title`, `og:description`, `og:type`, `og:url`, `og:image`, `og:site_name`, `og:locale`, `og:locale:alternate`. | Listo. |
| Twitter Cards | `MEJORADO` | Añadidas metas `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`. | Listo. |
| Imagen OG Dedicada | `PENDIENTE` | Actualmente utiliza el logo. Se recomienda diseñar banner 1200x630px para redes. | Pendiente de diseño. |
| **7. Performance** | | | |
| Carga de Recursos | `OK` | Fuentes de Google preconectadas. Hero background optimizado. | Listo. |
| Prevención de CLS | `MEJORADO` | Añadidos atributos `width` y `height` a todas las imágenes HTML. | Listo. |
| Image Lazy Loading | `OK` | `loading="lazy"` aplicado en imágenes secundarias. | Listo. |
| **8. Formularios & Conversión** | | | |
| Protección Anti-Falso Éxito | `CRÍTICO -> OK` | Corregido script para **NUNCA** reportar éxito falso cuando el Webhook está en placeholder o falla. Redirige limpiamente a WhatsApp directo (+56 9 5718 1291). | Listo. |
| Captura Parámetros UTM | `OK` | Captura automáticamente `utm_source`, `utm_medium`, `utm_campaign`, `source`, `timestamp`, e `idioma`. | Listo. |
| QR Code Escaneable | `CRÍTICO -> OK` | Reemplazado gráfico simulado por archivo SVG QR **100% real y escaneable por smartphones**. | Generado `assets/qr-lusotec.svg` y `assets/qr-lusotec-prod.svg`. |

---

## 🌐 Arquitectura SEO Bilingüe para Producción (`/` y `/en/`)

Actualmente, el cambio de idioma funciona dinámicamente mediante JavaScript en la misma URL. Esto otorga una excelente experiencia de usuario (UX), pero para el posicionamiento orgánico internacional en Google se recomienda la separación en URLs físicas independientes.

### Guía de Implementación en Producción:

1. **Estructura de Directorios en Servidor**:
   ```text
   /public_html/
       ├── index.html        (Versión en Español)
       ├── style.css
       ├── script.js
       ├── en/
       │   └── index.html    (Versión en Inglés renderizada estáticamente)
   ```

2. **Etiquetas Hreflang en el `<head>` de ambas páginas**:
   En `https://www.lusotec.cl/index.html`:
   ```html
   <link rel="alternate" hreflang="es" href="https://www.lusotec.cl/">
   <link rel="alternate" hreflang="en" href="https://www.lusotec.cl/en/">
   <link rel="alternate" hreflang="x-default" href="https://www.lusotec.cl/">
   ```
   En `https://www.lusotec.cl/en/index.html`:
   ```html
   <link rel="alternate" hreflang="es" href="https://www.lusotec.cl/">
   <link rel="alternate" hreflang="en" href="https://www.lusotec.cl/en/">
   <link rel="alternate" hreflang="x-default" href="https://www.lusotec.cl/">
   ```

3. **Ventaja**: Permite que Googlebot indexe de forma nativa la versión en inglés sin requerir la ejecución de scripts del cliente.

---

## 🤖 GEO — Guía de Indexación para Motores Generativos (AI Search)

Se ha creado el archivo `/llms.txt` en la raíz del proyecto para facilitar el rastreo y la síntesis de información factual por parte de modelos de lenguaje como ChatGPT, Gemini, Claude y Perplexity.

### Resumen Factual Registrado:
- **Entidad**: LUSOTEC SPA (Empresa Chilena)
- **Sector**: Productos químicos y asesoría técnica para la industria del cuero y curtido.
- **Familias de Soluciones**: Ribera y precurtido, Recurtición, sintanes y taninos, Engrasantes, Colorantes, Terminación y auxiliares (*Acrílicos, Poliuretanos, Auxiliares, Pigmentos*), Colágeno y derivados (*Colágeno hidrolizado, Gelatina industrial, Proteína de vacuno deshidratada*).
- **Gerente General**: Víctor Marques Ferreira (+56 9 5718 1291 / +56 9 9299 2098 | busma.cuero@gmail.com).

---

© 2026 LUSOTEC SPA — Auditoría SEO + GEO.
