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
    heroCardTitle: 'Premium solar planning with long-term value.',
    heroCardText: 'Bright Future supports every step, from consultation and custom planning to installation, incentives, and energy savings.',
    aboutTag: 'Why Choose Solar Energy with Bright Future?',
    aboutTitle: 'Experience the future of solar power.',
    feature1Title: 'Quality and Innovation',
    feature1Text: 'Cutting-edge solar technology and premium materials ensure efficient, long-lasting energy systems.',
    feature2Title: 'Environmental Impact',
    feature2Text: 'Reduce your carbon footprint and support a cleaner, greener future with sustainable solar energy solutions.',
    feature4Title: 'Customized Solutions',
    feature4Text: 'Tailored solar systems designed around each property to maximize output, comfort, savings, and long-term efficiency.',
    servicesTag: 'More Energy More Savings',
    servicesTitle: 'Energy savings made easy with the solar.',
    servicesText: 'Bright Future guides you through energy-efficient solar systems that reduce costs, simplify adoption, and maximize value.',
    service1Text: 'Lower energy bills with smart solar systems.',
    service2Text: 'Increase property value and long-term efficiency.',
    service4Text: 'Use incentives and rebates to reduce upfront cost.',
    projectsTag: 'More Energy More Savings',
    projectsTitle: 'Transform your home’s power into the future.',
    navHome: 'Home',
    navAbout: 'About',
    navServices: 'Services',
    navProjects: 'Projects',
    navContact: 'Contact',
    navQuote: 'Request a Quote'
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
    heroCardTitle: 'Planeación solar premium con valor a largo plazo.',
    heroCardText: 'Bright Future te acompaña en cada paso, desde la consulta y planificación hasta la instalación, incentivos y ahorro energético.',
    aboutTag: '¿Por qué elegir energía solar con Bright Future?',
    aboutTitle: 'Experimenta el futuro de la energía solar.',
    feature1Title: 'Calidad e innovación',
    feature1Text: 'Tecnología solar de vanguardia y materiales premium para sistemas eficientes y duraderos.',
    feature2Title: 'Impacto ambiental',
    feature2Text: 'Reduce tu huella de carbono y apoya un futuro más limpio y verde con soluciones solares sostenibles.',
    feature4Title: 'Soluciones personalizadas',
    feature4Text: 'Sistemas solares diseñados según cada propiedad para maximizar producción, comodidad, ahorro y eficiencia.',
    servicesTag: 'Más energía, más ahorro',
    servicesTitle: 'El ahorro energético hecho fácil con solar.',
    servicesText: 'Bright Future te guía con sistemas solares eficientes que reducen costos, simplifican la adopción y maximizan el valor.',
    service1Text: 'Reduce facturas con sistemas solares inteligentes.',
    service2Text: 'Aumenta el valor de tu propiedad y la eficiencia a largo plazo.',
    service4Text: 'Usa incentivos y rebates para reducir el costo inicial.',
    projectsTag: 'Más energía, más ahorro',
    projectsTitle: 'Transforma la energía de tu hogar hacia el futuro.',
    navHome: 'Inicio',
    navAbout: 'Nosotros',
    navServices: 'Servicios',
    navProjects: 'Proyectos',
    navContact: 'Contacto',
    navQuote: 'Solicitar cotización'
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
  if (header) header.classList.toggle('scrolled', window.scrollY > 18);
});

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.reveal-on-scroll, .slide-left, .slide-right, .zoom-in').forEach((el) => el.classList.add('visible'));
  langButtons.forEach((btn) => btn.addEventListener('click', () => applyLanguage(btn.dataset.lang)));
  applyLanguage('en');
  if (window.lucide) window.lucide.createIcons();
});
