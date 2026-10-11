// Mobil: Karten zum Wischen – Punkte zeigen die aktuelle Karte und springen per Tipp dorthin.
// Markup: [data-carousel] > [data-carousel-track] (Karten als direkte Kinder) + [data-carousel-dot] Buttons.
export function initCarousels(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>('[data-carousel]').forEach((carousel) => {
    const track = carousel.querySelector<HTMLElement>('[data-carousel-track]');
    const dots = [...carousel.querySelectorAll<HTMLButtonElement>('[data-carousel-dot]')];
    if (!track || !dots.length) return;
    const items = [...track.children] as HTMLElement[];
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const setActive = (active: number) => {
      dots.forEach((dot, index) => {
        if (index === active) dot.setAttribute('aria-current', 'true');
        else dot.removeAttribute('aria-current');
      });
    };

    // aktive Karte = die, deren Mitte der Mitte der Leiste am nächsten liegt
    let frame = 0;
    track.addEventListener(
      'scroll',
      () => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          const center = track.scrollLeft + track.clientWidth / 2;
          let active = 0;
          let best = Infinity;
          items.forEach((item, index) => {
            const distance = Math.abs(item.offsetLeft + item.offsetWidth / 2 - center);
            if (distance < best) {
              best = distance;
              active = index;
            }
          });
          setActive(active);
        });
      },
      { passive: true },
    );

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        const item = items[index];
        if (!item) return;
        track.scrollTo({
          left: item.offsetLeft - (track.clientWidth - item.offsetWidth) / 2,
          behavior: reduceMotion.matches ? 'auto' : 'smooth',
        });
        setActive(index);
      });
    });
  });
}
