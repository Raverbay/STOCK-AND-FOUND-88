
/* STOCK & FOUND 88 — MARKET EXPERIENCE V2 */
(() => {
  const boot = () => {
    document.body.classList.add('sf88-market-v2');

    // Add stable hooks without changing the existing content model.
    document.querySelectorAll('.brand-wall, .categories, .split, .closing, .newsletter')
      .forEach(el => el.classList.add('sf88-v2-section'));

    // Make the market story explicitly identifiable to CSS/analytics.
    const split = document.querySelector('.split');
    if (split) {
      split.setAttribute('data-sf-section','market-story');
    }

    // Remove accidental horizontal overflow caused by older layers.
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, {once:true});
  } else {
    boot();
  }
})();
