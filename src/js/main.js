/* ── Nav: add scrolled class for subtle shadow ── */
(function () {
  const nav = document.querySelector('nav');
  if (!nav) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      nav.style.borderBottomColor = '#c8c2b8';
      nav.style.boxShadow = '0 2px 16px rgba(24,21,18,0.07)';
    } else {
      nav.style.borderBottomColor = '';
      nav.style.boxShadow = '';
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
})();

/* ── Intersection observer: fade-up sections on scroll ── */
(function () {
  const style = document.createElement('style');
  style.textContent = `
    .fade-up { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
    .fade-up.visible { opacity: 1; transform: none; }
  `;
  document.head.appendChild(style);

  const targets = document.querySelectorAll(
    '.project-card, .about-text, .skills-col, .contact-inner > *'
  );

  targets.forEach(el => el.classList.add('fade-up'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(el => observer.observe(el));
})();
