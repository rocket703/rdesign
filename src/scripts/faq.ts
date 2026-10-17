// FAQ: gleichmäßiges Auf- und Zuklappen, immer nur eine Frage offen
export function initFaq(root: ParentNode = document): void {
  const items = [...root.querySelectorAll<HTMLDetailsElement>('.faq-item')];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const DURATION = 280;

  const animate = (item: HTMLDetailsElement, open: boolean) => {
    const answer = item.querySelector<HTMLElement>('.faq-item__answer');
    if (!answer || reduced) {
      item.open = open;
      return;
    }
    item.getAnimations({ subtree: true }).forEach((a) => a.cancel());
    if (open) item.open = true;
    const full = answer.scrollHeight;
    const from = open ? 0 : full;
    const to = open ? full : 0;
    const animation = answer.animate(
      [
        { height: `${from}px`, opacity: open ? 0 : 1 },
        { height: `${to}px`, opacity: open ? 1 : 0 },
      ],
      { duration: DURATION, easing: 'cubic-bezier(0.25, 0.8, 0.25, 1)' },
    );
    if (!open) item.classList.add('is-closing');
    animation.onfinish = () => {
      if (!open) {
        item.open = false;
        item.classList.remove('is-closing');
      }
    };
  };

  items.forEach((item) => {
    item.querySelector('summary')?.addEventListener('click', (event) => {
      event.preventDefault();
      const willOpen = !item.open || item.classList.contains('is-closing');
      if (willOpen) items.filter((other) => other !== item && other.open).forEach((other) => animate(other, false));
      animate(item, willOpen);
    });
  });
}
