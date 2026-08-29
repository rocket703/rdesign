(function () {
  // 1 — Scroll progress
  const progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    let scheduled = false;
    const updateProgress = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      progressBar.style.transform = `scaleX(${pct / 100})`;
      scheduled = false;
    };
    const scheduleProgress = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(updateProgress);
    };
    window.addEventListener('scroll', scheduleProgress, { passive: true });
    window.addEventListener('resize', scheduleProgress, { passive: true });
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

})();
