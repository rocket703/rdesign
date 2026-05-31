(function () {
  const reduced =
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1 — Scroll progress
  const progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    const updateProgress = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      progressBar.style.width = pct + '%';
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  // FAQ: nur eine Karte gleichzeitig offen
  const faqItems = document.querySelectorAll('.faq-item');
  if (faqItems.length) {
    faqItems.forEach((item) => {
      item.addEventListener('toggle', () => {
        if (!item.open) return;
        faqItems.forEach((other) => {
          if (other !== item) other.open = false;
        });
      });
    });
  }

  // Tab-Titel wenn man wegnavigiert
  const awayTitle = 'Holst du Kaffee?';
  const defaultTitle = document.title;
  document.addEventListener('visibilitychange', () => {
    document.title = document.hidden ? awayTitle : defaultTitle;
  });

  if (reduced) return;

  // 11 — Footer outline text parallax (nur Desktop, dezent)
  const footerText = document.querySelector('.huge-outline-text');
  const footerVisual = document.querySelector('.footer-visual-bottom');
  const parallaxMq = window.matchMedia('(min-width: 769px)');

  if (footerText && footerVisual) {
    const updateFooterParallax = () => {
      if (!parallaxMq.matches) {
        footerText.style.removeProperty('--footer-offset');
        return;
      }
      const rect = footerVisual.getBoundingClientRect();
      const viewH = window.innerHeight;
      if (rect.top < viewH && rect.bottom > 0) {
        const progress = (viewH - rect.top) / (viewH + rect.height);
        const offset = (progress - 0.5) * 16;
        footerText.style.setProperty('--footer-offset', offset + 'px');
      }
    };
    window.addEventListener('scroll', updateFooterParallax, { passive: true });
    parallaxMq.addEventListener('change', updateFooterParallax);
    updateFooterParallax();
  }
})();
