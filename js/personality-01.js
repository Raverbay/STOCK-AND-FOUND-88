
/* STOCK & FOUND 88 — PERSONALITY BOOT */
(() => {
  function boot(){
    if (document.body.classList.contains('sf-personality')) return;
    document.body.classList.add('sf-personality');

    // Give the page a proprietary data signature.
    document.documentElement.setAttribute('data-sf-brand','stock-and-found-88');

    // Add a tiny live-looking archive marker without touching commerce logic.
    const hero = document.querySelector('.hero');
    if (hero && !hero.querySelector('.sf-found-index')) {
      const mark = document.createElement('div');
      mark.className = 'sf-found-index';
      mark.textContent = 'ARCHIVE 88 / MARKET EDITION';
      mark.style.cssText =
        'position:absolute;left:20px;bottom:18px;z-index:8;font:900 8px/1 "DM Mono",monospace;letter-spacing:.14em;opacity:.72;';
      hero.appendChild(mark);
    }
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded',boot,{once:true});
  }else{
    boot();
  }
})();
