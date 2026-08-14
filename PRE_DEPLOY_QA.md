# 📋 Checklist de Auditoría Pre-Deploy (QA Matrix) — LUSOTEC SPA

Este documento contiene la matriz de QA técnica pre-despliegue para las páginas bilingües de LUSOTEC SPA.

> 🛑 **NOTIFICACIÓN DE SEGURIDAD**: La landing page permanece actualmente en el directorio de desarrollo `/landing-v1/` y `/landing-v1/en/` con la protección `<meta name="robots" content="noindex, nofollow">`. **El dominio principal `https://www.lusotec.cl/` no ha sido modificado.**

---

## 📊 Matriz de Verificación Pre-Deploy

| Elemento | Estado en ES (`/landing-v1/`) | Estado en EN (`/landing-v1/en/`) | Estado General | Observación / Acción para Producción |
| :--- | :--- | :--- | :---: | :--- |
| **URL de Desarrollo** | `https://www.lusotec.cl/landing-v1/` | `https://www.lusotec.cl/landing-v1/en/` | `OK` | Operativo en desarrollo. |
| **URL de Producción Futura** | `https://www.lusotec.cl/` | `https://www.lusotec.cl/en/` | `PENDIENTE DEPLOY` | Migrar tras autorización. |
| **Title Tag** | `LUSOTEC SPA \| Productos químicos y asesoría técnica para cuero` | `LUSOTEC SPA \| Chemical Products & Technical Advice for Leather` | `OK` | Específico por idioma (59 y 58 caracteres). |
| **Meta Description** | `Productos químicos especializados, asesoría técnica y soluciones para la industria del cuero...` | `Specialized chemical products, technical advice and solutions for the leather industry...` | `OK` | Optimizadas por idioma (137 y 124 caracteres). |
| **Canonical Tag** | `https://www.lusotec.cl/landing-v1/` | `https://www.lusotec.cl/landing-v1/en/` | `PENDIENTE DEPLOY` | Cambiar a `https://www.lusotec.cl/` y `https://www.lusotec.cl/en/` en el deploy. |
| **Hreflang Tags** | `es`, `en`, `x-default` apuntan a URLs `/landing-v1/` | `es`, `en`, `x-default` apuntan a URLs `/landing-v1/` | `PENDIENTE DEPLOY` | Actualizar a URLs raíz sin `/landing-v1/` en el deploy. |
| **Robots Directive** | `<meta name="robots" content="noindex, nofollow">` | `<meta name="robots" content="noindex, nofollow">` | `OK (Desarrollo)` | Cambiar a `<meta name="robots" content="index, follow">` durante el deploy. |
| **Open Graph (OG)** | `og:locale = es_CL`, `og:locale:alternate = en_US` | `og:locale = en_US`, `og:locale:alternate = es_CL` | `OK` | Metas sociales personalizadas por idioma. |
| **Schema (JSON-LD)** | `Organization`, `WebSite`, `ContactPoint`, `FAQPage` (`inLanguage: es-CL`) | `Organization`, `WebSite`, `ContactPoint`, `FAQPage` (`inLanguage: en-US`) | `OK` | Estructurados y válidos sin errores sintácticos. |
| **FAQ Visible** | 4 acordeones en Español | 4 acordeones en Inglés | `OK` | Reflejados 1:1 con el Schema JSON-LD correspondiente. |
| **Imágenes (Optimización)** | WebP optimizado (`leather-bg.webp`, `lab-bg.webp`, `logo-lusotec.webp`) | WebP optimizado (`../assets/leather-bg.webp`, etc.) | `OK` | **Reducción de tamaño del 80%** (de 2.4 MB a 467 KB total). JPGs mantenidos como fallback. |
| **Hero Image (LCP)** | `<link rel="preload" as="image" href="assets/leather-bg.webp">` | `<link rel="preload" as="image" href="../assets/leather-bg.webp">` | `OK` | Preload activo sin lazy loading en el Hero. |
| **Image Dimensions (CLS)** | `width` y `height` definidos en todas las imágenes | `width` y `height` definidos en todas las imágenes | `OK` | Previene cambios bruscos de maquetación (Zero CLS). |
| **Estilos (CSS)** | `style.css` (29 KB) | `../style.css` (29 KB) | `OK` | Compartido, responsive y sin código muerto. |
| **Script (JS)** | `script.js` (5.6 KB refactorizado) | `../script.js` (5.6 KB refactorizado) | `OK` | Sin código de traducción JS innecesario, validado con `node -c`. |
| **Formulario Contacto** | HTML y `<option>` values en Español | HTML y `<option>` values en Inglés | `OK` | Resuelto bug de categorías cruzadas. |
| **Google Sheets Webhook** | Conectado a ejecutable de producción | Conectado a ejecutable de producción | `OK` | Registra `idioma`, `area_interes`, `source`, `utm_*` correctamente. |
| **Parámetros UTM** | Captura automática de `utm_source`, `utm_medium`, `utm_campaign` | Captura automática de `utm_source`, `utm_medium`, `utm_campaign` | `OK` | Incorporados transparentemente al payload. |
| **WhatsApp Float & Link** | Enlace prellenado en Español | Enlace prellenado en Inglés | `OK` | `https://wa.me/56957181291` activo en ambas. |
| **Correo de Contacto** | `mailto:busma.cuero@gmail.com?subject=Consulta%20Lusotec` | `mailto:busma.cuero@gmail.com?subject=Lusotec%20Inquiry` | `OK` | Asunto prellenado por idioma. |
| **vCard Download** | `vcard-victor.vcf` | `../vcard-victor.vcf` | `OK` | Archivo VCF funcional y accesible. |
| **QR Code SVG** | `assets/qr-lusotec.svg` (`/landing-v1/`) | `../assets/qr-lusotec.svg` (`/landing-v1/`) | `PENDIENTE DEPLOY` | Cambiar a `qr-lusotec-prod.svg` (`/`) durante el deploy final. |
| **Diseño Responsive** | Validado en Desktop, Tablet y Mobile | Validado en Desktop, Tablet y Mobile | `OK` | Menú desplegable y maquetación fluida en ambas vistas. |
| **Sitemap XML** | Creado en la raíz para `https://www.lusotec.cl/` y `/en/` | Creado en la raíz para `https://www.lusotec.cl/` y `/en/` | `PENDIENTE DEPLOY` | No incluye URLs `/landing-v1/`. |
| **`robots.txt`** | Preparado en la raíz para producción | Preparado en la raíz para producción | `PENDIENTE DEPLOY` | Bloquea `/landing-v1/` durante la etapa de revisión. |
| **`llms.txt`** | Creado en la raíz para IA Search | Creado en la raíz para IA Search | `OK` | Contiene información factual libre de enlaces temporales. |

---

## 📐 Comparativa de Peso de Assets (Antes vs Después)

| Archivo de Imagen | Formato Original | Tamaño Original | Formato Optimizado | Tamaño Optimizado | Reducción (%) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **`leather-bg` (Hero)** | JPG | 1,154 KB | **WebP** | **308 KB** | **-73.3%** |
| **`lab-bg` (Sobre Nosotros)** | JPG | 838 KB | **WebP** | **103 KB** | **-87.7%** |
| **`logo-lusotec` (Marca)** | JPG | 410 KB | **WebP** | **15.5 KB** | **-96.2%** |
| **PESO TOTAL IMÁGENES** | **JPG** | **2,402 KB (2.4 MB)** | **WebP** | **426.5 KB** | **-82.2%** |

---

© 2026 LUSOTEC SPA — Documentación técnica de QA Pre-Deploy.
