
/* STOCK & FOUND MARKET — HOME OPTIMIZATION */
(() => {
  const setText = (selector, text) => {
    document.querySelectorAll(selector).forEach(el => {
      if (el.dataset.sfmLocked) return;
      el.textContent = text;
    });
  };

  function renameBrand() {
    document.title = document.title
      .replace(/STOCK\s*&\s*FOUND\s*88/gi, 'STOCK & FOUND MARKET')
      .replace(/STOCK\s*&\s*FOUND/gi, 'STOCK & FOUND MARKET');

    document.querySelectorAll('a,span,div,p,h1,h2,h3,small').forEach(el => {
      if (el.children.length) return;
      const t = (el.textContent || '').trim();
      if (!t) return;

      if (/^STOCK\s*&\s*FOUND\s*88$/i.test(t)) {
        el.textContent = 'STOCK & FOUND MARKET';
        el.dataset.sfmLocked = '1';
      } else if (/^STOCK\s*&\s*FOUND$/i.test(t)) {
        el.textContent = 'STOCK & FOUND';
        el.dataset.sfmLocked = '1';
      } else if (/BRANDED STOCK\s*[·•]\s*FOUND DIFFERENTLY\s*[·•]\s*EST\.?\s*1988/i.test(t)) {
        el.textContent = 'BRANDED STOCK · FOUND DIFFERENTLY · EST. 1988';
        el.dataset.sfmLocked = '1';
      }
    });
  }

  function cleanHero() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // Remove empty/ghost blocks that can appear from old layered patches.
    hero.querySelectorAll('.btn, a, button').forEach(el => {
      const text = (el.textContent || '').trim();
      const rect = el.getBoundingClientRect();
      if (!text && rect.width > 40 && rect.height > 20) {
        el.style.display = 'none';
      }
    });

    const cta = hero.querySelector('.hero-bottom .btn');
    if (cta) {
      cta.textContent = 'START THE MARKET ↗';
      cta.style.display = 'inline-flex';
      cta.style.visibility = 'visible';
      cta.style.opacity = '1';
    }
  }

  function normalizeBottom() {
    const split = document.querySelector('.split');
    if (split) {
      split.setAttribute('data-market-section','physical-market');
    }

    const closing = document.querySelector('.closing');
    if (closing) {
      const btn = closing.querySelector('.btn');
      if (btn) btn.textContent = 'ENTER THE MARKET ↗';
    }

    const newsletter = document.querySelector('.newsletter');
    if (newsletter) {
      const h = newsletter.querySelector('h2');
      if (h) h.innerHTML = "DON’T MISS<br><em>THE NEXT FIND.</em>";
    }
  }

  function boot() {
    document.body.classList.add('sfm-home');
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';

    renameBrand();
    cleanHero();
    normalizeBottom();

    // Re-run once because the existing app mounts header/footer dynamically.
    setTimeout(() => {
      renameBrand();
      cleanHero();
      normalizeBottom();
    }, 250);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, {once:true});
  } else {
    boot();
  }
})();
