(function () {
  const reduced =
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced) return;

  function initBubbles() {
    if (document.querySelector('.subtle-bubbles')) return;

    const bubblesContainer = document.createElement('div');
    bubblesContainer.className = 'subtle-bubbles';
    bubblesContainer.setAttribute('aria-hidden', 'true');
    document.body.appendChild(bubblesContainer);

    const isMobile = window.innerWidth < 768;
    const bubbleCount = isMobile ? 10 : 36;

    for (let i = 0; i < bubbleCount; i++) {
      const bubble = document.createElement('div');
      bubble.className = 'subtle-bubble';

      const size = Math.random() * 3 + 2;
      bubble.style.width = size + 'px';
      bubble.style.height = size + 'px';
      bubble.style.left = Math.random() * 100 + '%';

      const drift = (Math.random() - 0.5) * 60;
      bubble.style.setProperty('--drift', drift + 'px');
      bubble.style.animationDelay = Math.random() * 20 + 's';
      bubble.style.animationDuration = Math.random() * 15 + 15 + 's';

      bubblesContainer.appendChild(bubble);
    }
  }

  if ('requestIdleCallback' in window) {
    requestIdleCallback(initBubbles, { timeout: 2500 });
  } else {
    setTimeout(initBubbles, 200);
  }
})();
