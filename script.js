(() => {
  const cards = [...document.querySelectorAll('.milestone[tabindex]')];
  const mobile = window.matchMedia('(max-width: 768px)');

  function closeOthers(current) {
    cards.forEach((card) => {
      if (card !== current) {
        card.classList.remove('is-open');
        card.setAttribute('aria-expanded', 'false');
      }
    });
  }

  cards.forEach((card) => {
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `${card.querySelector('h3').textContent}. Activate to reveal more details.`);

    card.addEventListener('click', (event) => {
      if (event.target.closest('a')) return;
      if (!mobile.matches) return;
      const open = card.classList.toggle('is-open');
      card.setAttribute('aria-expanded', String(open));
      if (open) closeOthers(card);
    });

    card.addEventListener('keydown', (event) => {
      if (event.target !== card || !['Enter', ' '].includes(event.key)) return;
      event.preventDefault();
      const open = card.classList.toggle('is-open');
      card.setAttribute('aria-expanded', String(open));
      if (open) closeOthers(card);
    });
  });
})();
