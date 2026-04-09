const header = document.getElementById('siteHeader');
const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');
const langButtons = document.querySelectorAll('.lang-btn');

const translations = {
  en: {
    welcome: 'Welcome to Bright Future',
    heroTitle: 'Brighten Your Home with Solar Energy',
    heroText: 'Sustainable power solutions by Bright Future, committed to clean energy and innovation. We help homeowners and businesses lower energy costs, increase property value, and move into a cleaner future.',
    heroCtaPrimary: 'Get Free Consultation',
    heroCtaSecondary: 'Explore Services',
    pill1: 'Lower utility bills',
    pill2: 'Clean renewable energy',
    pill3: 'Trusted solar guidance',
    stat1: 'Federal Tax Credits',
    stat2: 'Free Estimate Form',
    floatingBadge: 'Clean Energy. Smart Savings.',
    heroMiniLabel: 'Sustainable Power',
    heroMiniTitle: 'Premium solar planning with long-term value.',
    heroMiniText: 'Custom systems, expert installation, and financing guidance designed for long-term savings.',
    heroCardTitle: 'Premium solar planning with long-term value.',
    heroCardText: 'Bright Future supports every step, from consultation and custom planning to installation, incentives, and energy savings.',
    aboutTag: 'Why Choose Solar Energy with Bright Future?',
    aboutTitle: 'Reliable, high-quality solar solutions built for long-term value.',
    aboutText: 'Our focus on sustainability, top-tier service, and tailored energy plans makes Bright Future a trusted partner in the transition to clean, renewable power.',
    feature1Title: 'Quality and Innovation',
    feature1Text: 'Cutting-edge solar technology and premium materials ensure efficient, long-lasting energy systems.',
    feature2Title: 'Environmental Impact',
    feature2Text: 'Reduce your carbon footprint and contribute to a cleaner, greener planet through renewable power.',
    feature3Title: 'Expert Guidance',
    feature3Text: 'From consultation to installation, Bright Future provides clarity and confidence every step of the way.',
    feature4Title: 'Customized Solutions',
    feature4Text: 'Custom solar systems designed to maximize output, optimize savings, and support long-term performance.',
    servicesTag: 'Our Solar Services',
    servicesTitle: 'Impactful solar solutions designed to transform how you power your property.',
    servicesText: 'From lower energy bills to stronger home value and cleaner energy, Bright Future turns solar into a practical long-term advantage.',
    service1Title: 'Reduce Your Costs',
    service1Text: 'Lower your electricity bill by generating your own energy with solar panels and enjoy long-term savings.',
    service2Title: 'Increase Property Value',
    service2Text: 'Homes with solar systems often sell faster and at stronger prices.',
    service3Title: 'Green Energy',
    service3Text: 'Choose a clean, renewable source that reduces carbon emissions and environmental impact.',
    service4Title: 'Rebates & Incentives',
    service4Text: 'Take advantage of tax credits and rebates that make your solar investment more affordable.',
    projectsTag: 'Coverage Area',
    projectsTitle: 'We proudly serve clients across multiple regions.',
    projectsText: 'Discover Bright Future’s energy-efficient solar solutions for a cleaner and more sustainable tomorrow.',
    testimonialsTag: 'Clients Testimonials',
    testimonialsTitle: 'What our clients are saying',
    testimonial1: 'Bright Future helped us reduce our bills and gave us confidence in every step of the installation process.',
    testimonial2: 'The team explained the savings, incentives, and timeline in a way that made switching to solar feel easy and smart.',
    testimonial3: 'Professional, sustainable, and worth it. Bright Future delivered the kind of energy solution we were hoping for.',
    contactTag: 'Contact Us',
    contactTitle: 'Request a Quote'
  },
  es: {
    welcome: 'Bienvenido a Bright Future',
    heroTitle: 'Ilumina tu hogar con energía solar',
    heroText: 'Soluciones de energía sostenible de Bright Future, comprometidas con la innovación y la energía limpia. Ayudamos a hogares y negocios a reducir costos, aumentar el valor de su propiedad y avanzar hacia un futuro más limpio.',
    heroCtaPrimary: 'Obtén consulta gratis',
    heroCtaSecondary: 'Explorar servicios',
    pill1: 'Reduce tus facturas',
    pill2: 'Energía renovable limpia',
    pill3: 'Asesoría solar confiable',
    stat1: 'Créditos fiscales federales',
    stat2: 'Formulario gratis de cotización',
    floatingBadge: 'Energía limpia. Ahorro inteligente.',
    heroMiniLabel: 'Energía sostenible',
    heroMiniTitle: 'Planeación solar premium con valor a largo plazo.',
    heroMiniText: 'Sistemas personalizados, instalación experta y guía financiera pensadas para ahorrar a largo plazo.',
    heroCardTitle: 'Planeación solar premium con valor a largo plazo.',
    heroCardText: 'Bright Future te acompaña en cada paso, desde la consulta y planificación hasta la instalación, incentivos y ahorro energético.',
    aboutTag: '¿Por qué elegir energía solar con Bright Future?',
    aboutTitle: 'Soluciones solares confiables y de alta calidad, construidas para valor duradero.',
    aboutText: 'Nuestro enfoque en sostenibilidad, servicio de primer nivel y planes energéticos a medida convierten a Bright Future en un aliado confiable en la transición hacia energía limpia.',
    feature1Title: 'Calidad e innovación',
    feature1Text: 'Tecnología solar de vanguardia y materiales premium para sistemas eficientes y duraderos.',
    feature2Title: 'Impacto ambiental',
    feature2Text: 'Reduce tu huella de carbono y contribuye a un planeta más limpio y verde mediante energía renovable.',
    feature3Title: 'Guía experta',
    feature3Text: 'Desde la consulta hasta la instalación, Bright Future brinda claridad y confianza en cada paso.',
    feature4Title: 'Soluciones personalizadas',
    feature4Text: 'Sistemas solares diseñados para maximizar producción, ahorro y rendimiento a largo plazo.',
    servicesTag: 'Nuestros servicios solares',
    servicesTitle: 'Soluciones solares impactantes diseñadas para transformar cómo energizas tu propiedad.',
    servicesText: 'Desde facturas más bajas hasta mayor valor para tu propiedad y energía limpia, Bright Future convierte lo solar en una ventaja práctica a largo plazo.',
    service1Title: 'Reduce tus costos',
    service1Text: 'Baja tu factura eléctrica generando tu propia energía con paneles solares y disfruta ahorros a largo plazo.',
    service2Title: 'Aumenta el valor de tu propiedad',
    service2Text: 'Las propiedades con sistemas solares suelen venderse más rápido y a mejores precios.',
    service3Title: 'Energía verde',
    service3Text: 'Elige una fuente limpia y renovable que reduce emisiones e impacto ambiental.',
    service4Title: 'Reembolsos e incentivos',
    service4Text: 'Aprovecha créditos fiscales y rebates que hacen tu inversión solar más accesible.',
    projectsTag: 'Área de cobertura',
    projectsTitle: 'Atendemos con orgullo a clientes en múltiples regiones.',
    projectsText: 'Descubre las soluciones solares eficientes de Bright Future para un mañana más limpio y sostenible.',
    testimonialsTag: 'Testimonios de clientes',
    testimonialsTitle: 'Lo que dicen nuestros clientes',
    testimonial1: 'Bright Future nos ayudó a reducir nuestras facturas y nos dio confianza en cada paso de la instalación.',
    testimonial2: 'El equipo explicó el ahorro, los incentivos y el proceso de una forma clara y fácil.',
    testimonial3: 'Profesional, sostenible y totalmente valioso. Bright Future entregó la solución energética que esperábamos.',
    contactTag: 'Contáctanos',
    contactTitle: 'Solicita una cotización'
  }
};

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  langButtons.forEach((btn) => btn.classList.toggle('active', btn.dataset.lang === lang));
}

if (navToggle && mobileNav) {
  navToggle.addEventListener('click', () => mobileNav.classList.toggle('hidden'));
}

window.addEventListener('scroll', () => {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 18);
});

const revealElements = document.querySelectorAll('.reveal-on-scroll');
if (window.innerWidth > 768) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  revealElements.forEach((el) => observer.observe(el));
} else {
  revealElements.forEach((el) => el.classList.add('visible'));
}

langButtons.forEach((btn) => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

window.addEventListener('DOMContentLoaded', () => {
  applyLanguage('en');
  if (window.lucide) window.lucide.createIcons();
});
