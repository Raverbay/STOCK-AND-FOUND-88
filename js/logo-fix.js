
/* STOCK & FOUND MARKET — LOGO LOCKUP FIX */
(() => {
  function findLogo(){
    return document.querySelector(
      '#header .site-logo, #header .logo, #header .brand, header .site-logo, header .logo, header .brand, .site-logo, .logo'
    );
  }

  function buildLogo(){
    const logo = findLogo();
    if(!logo || logo.dataset.sfmLogoFixed === '1') return;

    logo.dataset.sfmLogoFixed = '1';

    // Replace the old mixed text/pseudo lockup with one controlled structure.
    logo.innerHTML =
      '<span class="sfm-logo-main">STOCK &amp; FOUND</span>' +
      '<span class="sfm-logo-market">MARKET</span>' +
      '<span class="sfm-logo-est">EST. 1988</span>';
  }

  function cleanHero(){
    const hero = document.querySelector('.hero');
    if(!hero) return;

    const cta = hero.querySelector('.hero-bottom .btn');
    if(cta){
      cta.textContent = 'START THE MARKET ↗';
    }

    // Remove empty/ghost elements responsible for oversized white blocks.
    hero.querySelectorAll('.hero-bottom a, .hero-bottom button').forEach(el=>{
      if(!el.textContent.trim() && !el.querySelector('img')){
        el.style.display='none';
      }
    });
  }

  function boot(){
    document.body.classList.add('sfm-logo-fix');
    buildLogo();
    cleanHero();

    // Header is dynamically mounted by app.js.
    setTimeout(buildLogo,100);
    setTimeout(buildLogo,350);
    setTimeout(buildLogo,900);

    const observer = new MutationObserver(() => buildLogo());
    observer.observe(document.body,{childList:true,subtree:true});

    setTimeout(()=>observer.disconnect(),3000);
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',boot,{once:true});
  }else{
    boot();
  }
})();
