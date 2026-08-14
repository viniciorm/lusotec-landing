/**
 * LUSOTEC SPA - Landing Page V1 Script
 * Handles Bilingual Translation Engine (ES|EN), LocalStorage Persistence,
 * Mobile Navigation Drawer, Category Selection, Real QR Code Integration,
 * Google Sheets Form Submission Handler with Error Protection, and UTM Parameter Tracking.
 */

// ==========================================================================
// 1. Translations Dictionary (ES | EN)
// ==========================================================================
const translations = {
    es: {
        page_title: "LUSOTEC SPA | Productos químicos y asesoría técnica para cuero",
        page_desc: "Productos químicos especializados, asesoría técnica y soluciones para la industria del cuero. Conoce las soluciones de LUSOTEC SPA.",
        nav_home: "Inicio",
        nav_about: "Lusotec",
        nav_solutions: "Soluciones",
        nav_derivatives: "Cuero y derivados",
        nav_faq: "Preguntas frecuentes",
        nav_contact: "Contacto",
        cta_header: "Solicitar asesoría",
        language_label: "Idioma:",

        // Hero
        hero_badge: "LUSOTEC SPA · SOLUCIONES PARA LA INDUSTRIA",
        hero_title: "Soluciones y alternativas para cuero y derivados",
        hero_text: "Productos químicos especializados, asesoría técnica y soluciones orientadas a optimizar procesos, mejorar el rendimiento y garantizar la calidad en la industria del curtido.",
        hero_cta_main: "Conoce nuestras soluciones",
        hero_cta_sec: "Contáctanos",

        // About
        about_tag: "SOBRE NOSOTROS",
        about_title: "Experiencia y conocimiento al servicio de la industria",
        about_p1: "LUSOTEC SPA se especializa en la producción y distribución de productos químicos, asesoría técnica y soluciones para la industria del cuero y el sector del curtido.",
        about_p2: "Nuestro objetivo es optimizar recursos, mejorar el rendimiento y garantizar la calidad de los productos, atendiendo tanto al mercado nacional como internacional.",
        about_p3: "La empresa nace para responder a la creciente demanda de productos químicos especializados, eficientes y sostenibles, promoviendo la optimización de recursos y la economía circular en la industria del curtido.",
        about_p4: "Contamos con profesionales comprometidos con ofrecer productos de alta calidad y un servicio que supere las expectativas de nuestros clientes.",
        about_badge_text: "Compromiso con la Calidad & Economía Circular",

        // Values
        val_1_title: "Experiencia técnica",
        val_1_desc: "Conocimiento especializado para resolver desafíos técnicos específicos de cada curtiembre.",
        val_2_title: "Calidad consistente",
        val_2_desc: "Estándares rigurosos de formulación y control para garantizar resultados confiables lote a lote.",
        val_3_title: "Optimización de recursos",
        val_3_desc: "Soluciones diseñadas para reducir costos, tiempos de proceso y maximizar el rendimiento.",
        val_4_title: "Soluciones sostenibles",
        val_4_desc: "Promoción de principios de economía circular e insumos respetuosos con el medio ambiente.",

        // Solutions
        solutions_tag: "NUESTRAS SOLUCIONES",
        solutions_title: "Productos para las distintas etapas del proceso",
        solutions_subtitle: "Contamos con diferentes familias de productos y soluciones para la industria del cuero.",
        cat_1_title: "Ribera y precurtido",
        cat_1_sub: "Beamhouse & Pretanning",
        cat_2_title: "Recurtición, sintanes y taninos",
        cat_2_sub: "Retanning, Syntans & Tannins",
        cat_3_title: "Engrasantes",
        cat_3_sub: "Fatliquors",
        cat_4_title: "Colorantes",
        cat_4_sub: "Dyes",
        cat_5_title: "Terminación y auxiliares",
        cat_5_sub: "Finishing & Auxiliaries",
        cat_cta: "Consultar productos",

        // Advice Section
        advice_tag: "VALOR AGREGADO",
        advice_title: "No se trata solamente de suministrar un producto",
        advice_lead: "Cada proceso, materia prima y resultado esperado presenta desafíos diferentes.",
        advice_desc: "Por eso, LUSOTEC complementa su oferta de productos con asesoría técnica y acompañamiento para identificar alternativas adecuadas a las necesidades de cada cliente.",
        advice_cta: "Solicitar asesoría",
        pil_1_title: "Optimización de recursos",
        pil_1_desc: "Buscamos soluciones que contribuyan a procesos más eficientes.",
        pil_2_title: "Rendimiento y calidad",
        pil_2_desc: "Productos y alternativas orientados a obtener resultados consistentes.",
        pil_3_title: "Acompañamiento técnico",
        pil_3_desc: "Atención directa para entender cada necesidad y recomendar soluciones.",
        pil_4_title: "Soluciones sostenibles",
        pil_4_desc: "Promovemos la optimización de recursos y alternativas alineadas con una industria más eficiente y sostenible.",

        // Derivatives
        derivatives_tag: "DERIVADOS DE ORIGEN ANIMAL",
        derivatives_title: "Nuevas alternativas y aplicaciones",
        derivatives_subtitle: "Nuestra experiencia en la industria nos permite explorar y desarrollar soluciones asociadas al aprovechamiento de materias primas y derivados de origen animal.",
        collagen_badge: "PROTEÍNAS & PÉPTIDOS",
        collagen_title: "Colágeno hidrolizado",
        collagen_desc: "Colágeno sometido a hidrólisis para obtener péptidos y aminoácidos de alta biodisponibilidad.",
        collagen_attr_1: "Alta biodisponibilidad",
        collagen_attr_2: "Fácil digestión y absorción",
        collagen_attr_3: "Aplicaciones funcionales",
        process_title: "Proceso de Hidrólisis del Colágeno:",
        step_1: "Fibra de colágeno",
        step_2: "Gelatina",
        step_3: "Péptidos",
        step_4: "Aminoácidos",
        gelatin_badge: "USO INDUSTRIAL",
        gelatin_title: "Gelatina industrial",
        gelatin_desc: "Producto obtenido a partir del colágeno de origen animal, procesado bajo estándares de calidad para diferentes aplicaciones industriales.",
        protein_badge: "NUTRICIÓN & ALIMENTACIÓN",
        protein_title: "Proteína de vacuno deshidratada",
        protein_desc: "Fuente natural de proteína de alta calidad con aplicaciones en suplementos, alimentos y productos para mascotas.",
        apps_heading: "Campos de Aplicación",
        app_1: "Suplementos y alimentos funcionales",
        app_2: "Nutrición animal",
        app_3: "Productos para mascotas",
        app_4: "Cosmética y cuidado personal",
        app_5: "Nutrición y bienestar",
        app_6: "Aplicaciones industriales",

        // FAQ Section
        faq_tag: "PREGUNTAS FRECUENTES",
        faq_title: "Preguntas Frecuentes",
        faq_subtitle: "Información clave sobre nuestras soluciones, procesos y acompañamiento técnico.",
        faq_1_q: "¿Qué soluciones ofrece LUSOTEC para la industria del cuero?",
        faq_1_a: "LUSOTEC ofrece productos químicos y soluciones para diferentes etapas del proceso del cuero, incluyendo ribera y precurtido, recurtición, sintanes y taninos, engrasantes, colorantes, terminación y auxiliares.",
        faq_2_q: "¿LUSOTEC ofrece asesoría técnica?",
        faq_2_a: "Sí. LUSOTEC complementa su oferta de productos con asesoría técnica y acompañamiento para identificar alternativas adecuadas a las necesidades y procesos de cada cliente.",
        faq_3_q: "¿Qué soluciones ofrece LUSOTEC para terminación?",
        faq_3_a: "LUSOTEC cuenta con soluciones de terminación que incluyen acrílicos, poliuretanos, auxiliares y pigmentos.",
        faq_4_q: "¿LUSOTEC trabaja con colágeno y derivados?",
        faq_4_a: "LUSOTEC explora y desarrolla soluciones asociadas al aprovechamiento de materias primas y derivados de origen animal, incluyendo colágeno hidrolizado, gelatina industrial y proteína de vacuno deshidratada.",

        // Contact & Form
        contact_tag: "CONTÁCTANOS",
        contact_title: "¿Necesitas una solución para tu proceso?",
        contact_subtitle: "Conversemos sobre tus necesidades. Ya sea que busques un producto específico, una alternativa para mejorar un proceso o asesoría técnica, cuéntanos tu requerimiento.",
        lbl_name: "Nombre y apellido *",
        lbl_company: "Empresa *",
        lbl_country: "País / Ciudad",
        lbl_phone: "Teléfono / WhatsApp *",
        lbl_email: "Correo electrónico *",
        lbl_area: "Área de interés",
        lbl_message: "Mensaje / Requerimiento *",
        lbl_consent: "Autorizo a LUSOTEC SPA a contactarme en relación con esta consulta.",
        btn_send: "Enviar consulta",
        opt_1: "Ribera y precurtido",
        opt_2: "Recurtición, sintanes y taninos",
        opt_3: "Engrasantes",
        opt_4: "Colorantes",
        opt_5: "Terminación y auxiliares",
        opt_6: "Colágeno y derivados",
        opt_7: "Asesoría técnica",
        opt_8: "Otro",
        ph_name: "Ej: Juan Pérez",
        ph_company: "Ej: Curtiembre S.A.",
        ph_country: "Ej: Chile / Santiago",
        ph_phone: "+56 9 1234 5678",
        ph_email: "correo@empresa.com",
        ph_message: "Describe tu consulta o necesidad técnica...",

        // Contact Info
        contact_role: "Gerente General / General Manager",
        lbl_phones: "Teléfonos de contacto:",
        lbl_mail: "Correo electrónico:",
        lbl_web: "Sitio web:",
        btn_wa: "Contactar por WhatsApp",
        btn_mail: "Enviar correo",
        btn_vcard: "Guardar contacto",
        qr_title: "Escanea para visitar lusotec.cl",

        // Footer
        footer_tagline: "Soluciones y alternativas para cuero y derivados",
        footer_subtagline: "Productos químicos · Asesoría técnica · Soluciones especializadas",
        footer_contact: "Contacto",
        footer_vcard: "vCard",
        footer_rights: "Todos los derechos reservados.",

        // Status messages
        msg_sending: "Enviando consulta...",
        msg_success: "¡Gracias por contactarnos! Tu consulta ha sido registrada exitosamente. Nos comunicaremos contigo a la brevedad.",
        msg_error: "El servicio de envío automático está en configuración. Por favor, contáctanos directamente a través de WhatsApp (+56 9 5718 1291) o por correo a busma.cuero@gmail.com."
    },
    en: {
        page_title: "LUSOTEC SPA | Chemical Products & Technical Advice for Leather",
        page_desc: "Specialized chemical products, technical advice and solutions for the leather industry. Discover LUSOTEC SPA solutions.",
        nav_home: "Home",
        nav_about: "Lusotec",
        nav_solutions: "Solutions",
        nav_derivatives: "Leather & Derivatives",
        nav_faq: "FAQ",
        nav_contact: "Contact",
        cta_header: "Request technical advice",
        language_label: "Language:",

        // Hero
        hero_badge: "LUSOTEC SPA · INDUSTRY SOLUTIONS",
        hero_title: "Solutions and alternatives for leather and derivatives",
        hero_text: "Specialized chemical products, technical advice and solutions designed to optimize processes, improve performance and ensure quality in the tanning industry.",
        hero_cta_main: "Explore our solutions",
        hero_cta_sec: "Contact us",

        // About
        about_tag: "ABOUT US",
        about_title: "Experience and knowledge serving the industry",
        about_p1: "LUSOTEC SPA specializes in the production and distribution of chemical products, technical advice and solutions for the leather and tanning industry.",
        about_p2: "Our objective is to optimize resources, improve performance and guarantee product quality, serving both national and international markets.",
        about_p3: "The company was created to respond to the growing demand for specialized, efficient and sustainable chemical products, promoting resource optimization and circular economy principles in the tanning industry.",
        about_p4: "We rely on committed professionals focused on delivering high-quality products and service that exceeds customer expectations.",
        about_badge_text: "Commitment to Quality & Circular Economy",

        // Values
        val_1_title: "Technical expertise",
        val_1_desc: "Specialized knowledge to solve specific technical challenges for each tannery.",
        val_2_title: "Consistent quality",
        val_2_desc: "Rigorous formulation and quality control standards to guarantee reliable batch-to-batch results.",
        val_3_title: "Resource optimization",
        val_3_desc: "Solutions engineered to lower costs, shorten process cycles and maximize yield.",
        val_4_title: "Sustainable solutions",
        val_4_desc: "Promoting circular economy principles and environmentally responsible inputs.",

        // Solutions
        solutions_tag: "OUR SOLUTIONS",
        solutions_title: "Products for the different stages of the process",
        solutions_subtitle: "We offer different product families and solutions for the leather industry.",
        cat_1_title: "Beamhouse & pretanning",
        cat_1_sub: "Beamhouse & Pretanning",
        cat_2_title: "Retanning, syntans & tannins",
        cat_2_sub: "Retanning, Syntans & Tannins",
        cat_3_title: "Fatliquors",
        cat_3_sub: "Fatliquors",
        cat_4_title: "Dyes",
        cat_4_sub: "Dyes",
        cat_5_title: "Finishing & auxiliaries",
        cat_5_sub: "Finishing & Auxiliaries",
        cat_cta: "Ask about our products",

        // Advice Section
        advice_tag: "ADDED VALUE",
        advice_title: "More than supplying a product",
        advice_lead: "Every process, raw material and expected result presents different challenges.",
        advice_desc: "LUSOTEC therefore complements its product offering with technical advice and support to identify suitable alternatives for each customer's needs.",
        advice_cta: "Request technical advice",
        pil_1_title: "Resource optimization",
        pil_1_desc: "Solutions designed to contribute to more efficient processes.",
        pil_2_title: "Performance and quality",
        pil_2_desc: "Products and alternatives focused on consistent results.",
        pil_3_title: "Technical support",
        pil_3_desc: "Direct attention to understand each requirement and recommend suitable solutions.",
        pil_4_title: "Sustainable solutions",
        pil_4_desc: "Promoting resource optimization and alternatives aligned with a more efficient and sustainable industry.",

        // Derivatives
        derivatives_tag: "ANIMAL DERIVATIVES",
        derivatives_title: "New alternatives and applications",
        derivatives_subtitle: "Our industry experience allows us to explore and develop solutions associated with the use of animal-origin raw materials and derivatives.",
        collagen_badge: "PROTEINS & PEPTIDES",
        collagen_title: "Hydrolyzed collagen",
        collagen_desc: "Collagen subjected to hydrolysis to obtain highly bioavailable peptides and amino acids.",
        collagen_attr_1: "High bioavailability",
        collagen_attr_2: "Easy digestion and absorption",
        collagen_attr_3: "Functional applications",
        process_title: "Collagen Hydrolysis Process:",
        step_1: "Collagen fibre",
        step_2: "Gelatin",
        step_3: "Peptides",
        step_4: "Amino acids",
        gelatin_badge: "INDUSTRIAL USE",
        gelatin_title: "Industrial gelatin",
        gelatin_desc: "Product obtained from animal-origin collagen and processed under quality standards for different industrial applications.",
        protein_badge: "NUTRITION & FOOD",
        protein_title: "Dehydrated beef protein",
        protein_desc: "Natural source of high-quality protein with applications in supplements, food and pet products.",
        apps_heading: "Application Fields",
        app_1: "Supplements and functional foods",
        app_2: "Animal nutrition",
        app_3: "Pet products",
        app_4: "Cosmetics and personal care",
        app_5: "Nutrition and wellness",
        app_6: "Industrial applications",

        // FAQ Section
        faq_tag: "FREQUENTLY ASKED QUESTIONS",
        faq_title: "Frequently Asked Questions",
        faq_subtitle: "Key information about our solutions, processes, and technical advice.",
        faq_1_q: "What solutions does LUSOTEC offer for the leather industry?",
        faq_1_a: "LUSOTEC offers chemical products and solutions for different stages of the leather making process, including beamhouse & pretanning, retanning, syntans & tannins, fatliquors, dyes, finishing & auxiliaries.",
        faq_2_q: "Does LUSOTEC offer technical advice?",
        faq_2_a: "Yes. LUSOTEC complements its product offering with technical advice and support to identify suitable alternatives for each customer's needs and processes.",
        faq_3_q: "What finishing solutions does LUSOTEC offer?",
        faq_3_a: "LUSOTEC provides finishing solutions that include acrylics, polyurethanes, auxiliaries, and pigments.",
        faq_4_q: "Does LUSOTEC work with collagen and derivatives?",
        faq_4_a: "LUSOTEC explores and develops solutions associated with animal-origin raw materials and derivatives, including hydrolyzed collagen, industrial gelatin, and dehydrated beef protein.",

        // Contact & Form
        contact_tag: "CONTACT US",
        contact_title: "Do you need a solution for your process?",
        contact_subtitle: "Let's talk about your needs. Whether you are looking for a specific product, an alternative to improve your process or technical advice, tell us about your requirements.",
        lbl_name: "Full name *",
        lbl_company: "Company *",
        lbl_country: "Country / City",
        lbl_phone: "Phone / WhatsApp *",
        lbl_email: "Email *",
        lbl_area: "Area of interest",
        lbl_message: "Requirement / Message *",
        lbl_consent: "I authorize LUSOTEC SPA to contact me regarding this inquiry.",
        btn_send: "Send inquiry",
        opt_1: "Beamhouse & Pretanning",
        opt_2: "Retanning, Syntans & Tannins",
        opt_3: "Fatliquors",
        opt_4: "Dyes",
        opt_5: "Finishing & Auxiliaries",
        opt_6: "Collagen & Derivatives",
        opt_7: "Technical advice",
        opt_8: "Other",
        ph_name: "Ex: John Doe",
        ph_company: "Ex: Tannery Corp.",
        ph_country: "Ex: USA / New York",
        ph_phone: "+1 555 123 4567",
        ph_email: "email@company.com",
        ph_message: "Describe your inquiry or technical requirement...",

        // Contact Info
        contact_role: "General Manager",
        lbl_phones: "Contact phones:",
        lbl_mail: "Email address:",
        lbl_web: "Website:",
        btn_wa: "Contact via WhatsApp",
        btn_mail: "Send email",
        btn_vcard: "Save contact",
        qr_title: "Scan to visit lusotec.cl",

        // Footer
        footer_tagline: "Solutions and alternatives for leather and derivatives",
        footer_subtagline: "Chemical products · Technical advice · Specialized solutions",
        footer_contact: "Contact",
        footer_vcard: "vCard",
        footer_rights: "All rights reserved.",

        // Status messages
        msg_sending: "Sending inquiry...",
        msg_success: "Thank you for reaching out! Your inquiry has been successfully registered. We will contact you shortly.",
        msg_error: "The automated form service is currently being configured. Please contact us directly via WhatsApp (+56 9 5718 1291) or email at busma.cuero@gmail.com."
    }
};

// Category Subproduct lists in ES and EN
// Category 5 simplified according to client requirements: Acrílicos, Poliuretanos, Auxiliares, Pigmentos
const categoryItems = {
    es: {
        1: ["Humectantes", "Desengrasantes", "Auxiliares de píquel", "Basificantes", "Desencalantes", "Bactericidas", "Fungicidas", "Enzimas", "Sulfato de cromo"],
        2: ["Taninos", "Sintanes", "Agentes dispersantes", "Auxiliares de taninos", "Neutralizantes", "Resinas acrílicas", "Agentes de relleno", "Polifosfatos"],
        3: ["Engrasantes aniónicos", "Engrasantes sintéticos", "Engrasantes sulfatados", "Engrasantes sulfitados", "Engrasantes fosfóricos", "Engrasantes con lecitina", "Engrasantes con lanolina", "Engrasantes vegetales", "Engrasantes resistentes al agua"],
        4: ["Colorantes ácidos en polvo", "Colorantes líquidos", "Colorantes complejo metálico"],
        5: ["Acrílicos", "Poliuretanos", "Auxiliares", "Pigmentos"]
    },
    en: {
        1: ["Humectants", "Degreasers", "Pickle auxiliaries", "Basifying agents", "Deliming agents", "Bactericides", "Fungicides", "Enzymes", "Chromium sulphate"],
        2: ["Tannins", "Syntans", "Dispersing agents", "Tannin auxiliaries", "Neutralizing agents", "Acrylic resins", "Fillers", "Polyphosphates"],
        3: ["Anionic fatliquors", "Synthetic fatliquors", "Sulphated fatliquors", "Sulphited fatliquors", "Phosphoric fatliquors", "Lecithin fatliquors", "Lanolin fatliquors", "Vegetable fatliquors", "Waterproof fatliquors"],
        4: ["Acid powder dyes", "Liquid dyes", "Metal complex dyes"],
        5: ["Acrylics", "Polyurethanes", "Auxiliaries", "Pigments"]
    }
};

// Current Active Language
let currentLang = localStorage.getItem('lusotec_lang') || 'es';

// ==========================================================================
// 2. Language Switcher Engine
// ==========================================================================
function switchLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('lusotec_lang', lang);

    // Update active class on language toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.id.includes(lang)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update text content of data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update form placeholders
    const phMap = {
        'nombre': 'ph_name',
        'empresa': 'ph_company',
        'pais_ciudad': 'ph_country',
        'telefono': 'ph_phone',
        'email': 'ph_email',
        'mensaje': 'ph_message'
    };

    Object.keys(phMap).forEach(id => {
        const input = document.getElementById(id);
        if (input && translations[lang][phMap[id]]) {
            input.placeholder = translations[lang][phMap[id]];
        }
    });

    // Update category lists
    updateCategoryLists(lang);

    // Update WhatsApp links prefilled text
    updateWhatsAppLinks(lang);

    // Update Page Title and Meta Description
    document.title = translations[lang].page_title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', translations[lang].page_desc);

    // Set HTML lang attribute
    document.documentElement.lang = lang;
}

function updateCategoryLists(lang) {
    for (let i = 1; i <= 5; i++) {
        const listUl = document.getElementById(`cat-list-${i}`);
        if (listUl && categoryItems[lang][i]) {
            listUl.innerHTML = categoryItems[lang][i].map(item => `<li>${item}</li>`).join('');
        }
    }
}

function updateWhatsAppLinks(lang) {
    const msg = lang === 'en' 
        ? "Hello Victor, I would like to receive information about Lusotec solutions."
        : "Hola Víctor, quisiera recibir información sobre las soluciones de Lusotec.";
    
    const waUrl = `https://wa.me/56957181291?text=${encodeURIComponent(msg)}`;
    
    const floatBtn = document.getElementById('whatsapp-float');
    if (floatBtn) floatBtn.href = waUrl;

    document.querySelectorAll('.btn-whatsapp').forEach(btn => {
        btn.href = waUrl;
    });
}

// ==========================================================================
// 3. Mobile Navigation Drawer
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
// 4. Category CTA Selection Handler
// ==========================================================================
function selectCategoryAndScroll(categoryName) {
    const select = document.getElementById('area_interes');
    if (select) {
        for (let i = 0; i < select.options.length; i++) {
            if (select.options[i].value === categoryName || select.options[i].text.includes(categoryName)) {
                select.selectedIndex = i;
                break;
            }
        }
    }
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// ==========================================================================
// 5. Contact Form Submission & Webhook Handling (Strict Error Protection)
// ==========================================================================
async function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const statusDiv = document.getElementById('form-status');
    const submitBtn = document.getElementById('form-submit-btn');

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
    submitBtn.textContent = translations[currentLang].msg_sending;
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
        statusDiv.textContent = translations[currentLang].msg_success;
        form.reset();
    } catch (err) {
        console.error('Form submit error:', err);
        statusDiv.className = 'form-status-msg error';
        statusDiv.style.display = 'block';
        statusDiv.innerHTML = `
            <p style="margin-bottom: 8px;">${translations[currentLang].msg_error}</p>
            <a href="https://wa.me/56957181291?text=${encodeURIComponent('Hola Víctor, envío mi consulta desde la web: ' + payload.mensaje)}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm" style="margin-top: 6px;">
                💬 ${translations[currentLang].btn_wa} (+56 9 5718 1291)
            </a>
        `;
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = translations[currentLang].btn_send;
    }
}

// ==========================================================================
// 6. Active Nav Link Scroll Observer
// ==========================================================================
function initScrollObserver() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

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
// 7. Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage(currentLang);
    initScrollObserver();
});
