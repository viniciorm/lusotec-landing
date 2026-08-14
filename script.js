/**
 * LUSOTEC SPA - Landing Page V1 Script
 * Handles Mobile Navigation Drawer, Category Selection, Active Scroll Observer,
 * Google Sheets Form Submission Handler with Error Protection, and UTM Parameter Tracking.
 * Dual-Language support (ES | EN) is statically rendered in independent HTML pages.
 */

// ==========================================================================
// 1. Language Detection & Status Messages
// ==========================================================================
const currentLang = (document.documentElement.lang && document.documentElement.lang.toLowerCase().startsWith('en')) ? 'en' : 'es';

const formMessages = {
    es: {
        msg_sending: "Enviando consulta...",
        msg_success: "¡Gracias por contactarnos! Tu consulta ha sido registrada exitosamente. Nos comunicaremos contigo a la brevedad.",
        msg_error: "Hubo un problema al enviar el formulario. Por favor, intenta nuevamente o contáctanos por WhatsApp.",
        btn_send: "Enviar consulta",
        btn_wa: "Contactar por WhatsApp"
    },
    en: {
        msg_sending: "Sending inquiry...",
        msg_success: "Thank you for reaching out! Your inquiry has been successfully registered. We will contact you shortly.",
        msg_error: "There was a problem submitting the form. Please try again or contact us via WhatsApp.",
        btn_send: "Send inquiry",
        btn_wa: "Contact via WhatsApp"
    }
};

// ==========================================================================
// 2. Mobile Navigation Drawer
// ==========================================================================
const menuToggle = document.getElementById('menu-toggle');
const navMobile = document.getElementById('nav-mobile');

if (menuToggle && navMobile) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMobile.classList.toggle('active');
    });
}

function closeMobileMenu() {
    if (menuToggle && navMobile) {
        menuToggle.classList.remove('active');
        navMobile.classList.remove('active');
    }
}

// ==========================================================================
// 3. Category CTA Selection Handler
// ==========================================================================
function selectCategoryAndScroll(categoryName) {
    const select = document.getElementById('area_interes');
    if (select) {
        let matched = false;
        for (let i = 0; i < select.options.length; i++) {
            const optVal = select.options[i].value.toLowerCase();
            const optText = select.options[i].text.toLowerCase();
            const target = categoryName.toLowerCase();

            if (optVal === target || optText === target || optVal.includes(target) || target.includes(optVal)) {
                select.selectedIndex = i;
                matched = true;
                break;
            }
        }
        if (!matched && select.options.length > 0) {
            // Fallback matching
            for (let i = 0; i < select.options.length; i++) {
                if (select.options[i].value.toLowerCase().includes(categoryName.substring(0, 5).toLowerCase())) {
                    select.selectedIndex = i;
                    break;
                }
            }
        }
    }
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// ==========================================================================
// 4. Contact Form Submission & Webhook Handling (Strict Error Protection)
// ==========================================================================
async function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const statusDiv = document.getElementById('form-status');
    const submitBtn = document.getElementById('form-submit-btn');
    const msgs = formMessages[currentLang] || formMessages.es;

    const formData = new FormData(form);
    const urlParams = new URLSearchParams(window.location.search);
    
    const payload = {
        timestamp: new Date().toISOString(),
        idioma: currentLang,
        nombre: formData.get('nombre') || '',
        empresa: formData.get('empresa') || '',
        pais_ciudad: formData.get('pais_ciudad') || '',
        telefono: formData.get('telefono') || '',
        email: formData.get('email') || '',
        area_interes: formData.get('area_interes') || '',
        mensaje: formData.get('mensaje') || '',
        consentimiento: formData.get('consentimiento') ? 'Sí' : 'No',
        source: 'landing_lusotec',
        utm_source: urlParams.get('utm_source') || '',
        utm_medium: urlParams.get('utm_medium') || '',
        utm_campaign: urlParams.get('utm_campaign') || ''
    };

    submitBtn.disabled = true;
    submitBtn.textContent = msgs.msg_sending;
    statusDiv.className = 'form-status-msg';
    statusDiv.style.display = 'none';

    // Definitive Google Apps Script Webhook URL
    const GOOGLE_SCRIPT_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbwJrdIE4B6m5AIqhfQXOumiFo3fKLmbuyIKUfthtVJAiQlGFXDLQ9risD-sANkqlsB3xw/exec';

    try {
        await fetch(GOOGLE_SCRIPT_WEBHOOK_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        statusDiv.className = 'form-status-msg success';
        statusDiv.style.display = 'block';
        statusDiv.textContent = msgs.msg_success;
        form.reset();
    } catch (err) {
        console.error('Form submit error:', err);
        statusDiv.className = 'form-status-msg error';
        statusDiv.style.display = 'block';
        const waMsg = currentLang === 'en' 
            ? 'Hello Victor, I sent my message from the website: ' + payload.mensaje
            : 'Hola Víctor, envío mi consulta desde la web: ' + payload.mensaje;

        statusDiv.innerHTML = `
            <p style="margin-bottom: 8px;">${msgs.msg_error}</p>
            <a href="https://wa.me/56957181291?text=${encodeURIComponent(waMsg)}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm" style="margin-top: 6px;">
                💬 ${msgs.btn_wa} (+56 9 5718 1291)
            </a>
        `;
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = msgs.btn_send;
    }
}

// ==========================================================================
// 5. Active Nav Link Scroll Observer
// ==========================================================================
function initScrollObserver() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (sections.length === 0 || navLinks.length === 0) return;

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ==========================================================================
// 6. Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    initScrollObserver();
});
