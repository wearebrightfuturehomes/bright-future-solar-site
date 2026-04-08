const header = document.getElementById('siteHeader');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => navMenu.classList.toggle('open'));
}

window.addEventListener('scroll', () => {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 16);
});

const revealEls = document.querySelectorAll('.reveal');
const staggerParents = document.querySelectorAll('.stagger-parent');
staggerParents.forEach(parent => {
  [...parent.querySelectorAll('.stagger-item')].forEach((item, index) => {
    item.style.setProperty('--delay', `${index * 120}ms`);
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.style.transitionDelay = el.style.getPropertyValue('--delay') || '0ms';
      el.classList.add('is-visible');
      observer.unobserve(el);
    }
  });
}, { threshold: 0.16 });

revealEls.forEach(el => observer.observe(el));

const counters = document.querySelectorAll('.counter');
const animateCounter = (el) => {
  const target = Number(el.dataset.target || 0);
  const duration = 1800;
  const start = performance.now();
  const frame = (now) => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 4);
    el.textContent = Math.round(target * eased).toLocaleString();
    if (t < 1) requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
};

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));
