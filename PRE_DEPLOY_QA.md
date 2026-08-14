# 📋 Checklist de Auditoría Deploy Final (QA Matrix) — LUSOTEC SPA

Este documento contiene la matriz de QA técnica posterior al despliegue a producción de las páginas bilingües de LUSOTEC SPA.

> ✅ **ESTADO DE DESPLIEGUE**: El sitio bilingüe ha sido publicado exitosamente en la raíz productiva `https://www.lusotec.cl/` (Español) y `https://www.lusotec.cl/en/` (Inglés). Las rutas temporales de revisión `/landing-v1/` y `/landing-v1/en/` se mantienen con la protección `<meta name="robots" content="noindex, nofollow">` para evitar contenido duplicado.

---

## 📊 Matriz de Verificación Post-Deploy

| Elemento | Estado en ES (`/`) | Estado en EN (`/en/`) | Estado General | Observación / Acción Ejecutada |
| :--- | :--- | :--- | :---: | :--- |
| **URL Productiva** | `https://www.lusotec.cl/` | `https://www.lusotec.cl/en/` | `OK` | Desplegado en la raíz pública. |
| **URL de Desarrollo** | `https://www.lusotec.cl/landing-v1/` | `https://www.lusotec.cl/landing-v1/en/` | `OK` | Preservado como entorno de revisión. |
| **Title Tag** | `LUSOTEC SPA \| Productos químicos y asesoría técnica para cuero` | `LUSOTEC SPA \| Chemical Products & Technical Advice for Leather` | `OK` | Específico por idioma (59 y 58 caracteres). |
| **Meta Description** | `Productos químicos especializados, asesoría técnica y soluciones para la industria del cuero...` | `Specialized chemical products, technical advice and solutions for the leather industry...` | `OK` | Optimizadas por idioma (137 y 124 caracteres). |
| **Canonical Tag** | `https://www.lusotec.cl/` | `https://www.lusotec.cl/en/` | `OK` | Apuntando a las URLs definitivas sin `/landing-v1/`. |
| **Hreflang Tags** | `es`, `en`, `x-default` apuntan a `https://www.lusotec.cl/` y `/en/` | `es`, `en`, `x-default` apuntan a `https://www.lusotec.cl/` y `/en/` | `OK` | Configuración SEO internacional limpia y bidireccional. |
| **Robots Directive** | `<meta name="robots" content="index, follow">` | `<meta name="robots" content="index, follow">` | `OK` | Indexable en producción. `/landing-v1/` mantiene `noindex`. |
| **Open Graph (OG)** | `og:locale = es_CL`, `og:locale:alternate = en_US` | `og:locale = en_US`, `og:locale:alternate = es_CL` | `OK` | Metas sociales con URLs e imágenes productivas. |
| **Schema (JSON-LD)** | `Organization`, `WebSite`, `ContactPoint`, `FAQPage` (`inLanguage: es-CL`) | `Organization`, `WebSite`, `ContactPoint`, `FAQPage` (`inLanguage: en-US`) | `OK` | URLs productivas (`https://www.lusotec.cl/` y `https://www.lusotec.cl/en/#faq`). |
| **FAQ Visible** | 4 acordeones en Español | 4 acordeones en Inglés | `OK` | Reflejados 1:1 con el Schema JSON-LD correspondiente. |
| **Imágenes (Optimización)** | WebP optimizado (`leather-bg.webp`, `lab-bg.webp`, `logo-lusotec.webp`) | WebP optimizado (`../assets/leather-bg.webp`, etc.) | `OK` | **Reducción de tamaño del 82%** (426.5 KB total). |
| **Hero Image (LCP)** | `<link rel="preload" as="image" href="assets/leather-bg.webp">` | `<link rel="preload" as="image" href="../assets/leather-bg.webp">` | `OK` | Preload activo sin lazy loading en el Hero. |
| **Image Dimensions (CLS)** | `width` y `height` definidos en todas las imágenes | `width` y `height` definidos en todas las imágenes | `OK` | Zero CLS. |
| **Estilos (CSS)** | `style.css` (29 KB) | `../style.css` (29 KB) | `OK` | Compartido desde la raíz. |
| **Script (JS)** | `script.js` (5.6 KB) | `../script.js` (5.6 KB) | `OK` | Validado con `node -c`. |
| **Formulario Contacto** | HTML y `<option>` values en Español | HTML y `<option>` values en Inglés | `OK` | Resuelto bug de categorías cruzadas. |
| **Google Sheets Webhook** | Conectado a ejecutable de producción | Conectado a ejecutable de producción | `OK` | Registra `idioma`, `area_interes`, `source`, `utm_*` correctamente. |
| **Parámetros UTM** | Captura automática de `utm_source`, `utm_medium`, `utm_campaign` | Captura automática de `utm_source`, `utm_medium`, `utm_campaign` | `OK` | Transmitidos al webhook. |
| **WhatsApp Float & Link** | Enlace prellenado en Español | Enlace prellenado en Inglés | `OK` | `https://wa.me/56957181291` activo. |
| **Correo de Contacto** | `mailto:busma.cuero@gmail.com?subject=Consulta%20Lusotec` | `mailto:busma.cuero@gmail.com?subject=Lusotec%20Inquiry` | `OK` | Asunto prellenado por idioma. |
| **vCard Download** | `vcard-victor.vcf` | `../vcard-victor.vcf` | `OK` | Descargable en ambas rutas. |
| **QR Code SVG** | `assets/qr-lusotec-prod.svg` (`https://www.lusotec.cl/`) | `../assets/qr-lusotec-prod.svg` (`https://www.lusotec.cl/`) | `OK` | **QR real escaneable hacia el dominio productivo**. |
| **Respaldo Pre-Deploy** | Guardado en `/backup-pre-lusotec-v1/` | Guardado en `/backup-pre-lusotec-v1/` | `OK` | Copia intacta del sitio "en construcción". |
| **Sitemap XML** | Publicado en `https://www.lusotec.cl/sitemap.xml` | Publicado en `https://www.lusotec.cl/sitemap.xml` | `OK` | Incluye `/` y `/en/`. |
| **`robots.txt`** | Publicado en `https://www.lusotec.cl/robots.txt` | Publicado en `https://www.lusotec.cl/robots.txt` | `OK` | Permite `/` y `/en/`, bloquea `/landing-v1/`. |
| **`llms.txt`** | Publicado en `https://www.lusotec.cl/llms.txt` | Publicado en `https://www.lusotec.cl/llms.txt` | `OK` | Información factual para IA Search. |

---

© 2026 LUSOTEC SPA — Auditoría Post-Deploy.
