
/* STOCK & FOUND MARKET — REMOVE STANDALONE 88 */
(() => {
  function cleanText(node){
    if(node.nodeType === Node.TEXT_NODE){
      let t = node.nodeValue || '';

      // Remove standalone "88" while never touching the year "1988".
      t = t
        .replace(/(^|[\s·•/|])88(?=\s|$)/g, '$1')
        .replace(/\b88\s*[·•]\s*EST\.\s*1988\b/gi, 'EST. 1988')
        .replace(/\bS&F\s*\/\s*88\b/gi, 'S&F MARKET')
        .replace(/\bFND\.088\b/gi, 'FND')
        .replace(/\bARCHIVE\s*88\b/gi, 'ARCHIVE');

      node.nodeValue = t;
      return;
    }

    if(node.nodeType !== Node.ELEMENT_NODE) return;

    // Don't touch scripts/styles.
    const tag = node.tagName;
    if(tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') return;

    [...node.childNodes].forEach(cleanText);
  }

  function boot(){
    document.body.classList.add('sfm-no88');

    cleanText(document.body);

    // Dynamic header/footer can be mounted after DOMContentLoaded.
    setTimeout(() => cleanText(document.body), 250);
    setTimeout(() => cleanText(document.body), 900);

    // Keep the only desired origin reference.
    document.querySelectorAll('.logo, .site-logo, .brand').forEach(el => {
      const txt = el.textContent || '';
      if(/EST\.\s*1988/i.test(txt)){
        // Let the existing brand typography remain; only clean standalone 88.
        el.dataset.sfmCleaned = '1';
      }
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', boot, {once:true});
  }else{
    boot();
  }
})();
