
/* ============================================================
   STOCK & FOUND MARKET — GLOBAL HEADER / FOOTER LOGO
   One logo implementation across Home + all internal pages.
   ============================================================ */

(() => {
  const LOGO = 'assets/stock-found-market-logo.png';

  const logoSelectors = [
    '#header .logo',
    '#header .site-logo',
    '#header .brand',
    'header .logo',
    'header .site-logo',
    'header .brand',
    '.logo',
    '.site-logo'
  ];

  function pageType(){
    const p=(location.pathname||'').toLowerCase();
    return p.endsWith('/index.html') || p.endsWith('/') ? 'home' : 'internal';
  }

  function findLogo(){
    for(const s of logoSelectors){
      const el=document.querySelector(s);
      if(el) return el;
    }
    return null;
  }

  function mountHeaderLogo(){
    const logo=findLogo();
    if(!logo) return;

    // If an older patch created a logo image, reuse it.
    let img=logo.querySelector('.sfm-real-logo-img');

    if(!img){
      logo.innerHTML='';
      img=document.createElement('img');
      img.className='sfm-real-logo-img';
      img.alt='Stock & Found Market — Est. 1988';
      img.decoding='async';
      img.loading='eager';
      logo.appendChild(img);
    }

    if(img.getAttribute('src') !== LOGO){
      img.src=LOGO;
    }

    logo.setAttribute('aria-label','Stock & Found Market — Est. 1988');
    logo.setAttribute('title','Stock & Found Market — Est. 1988');
  }

  function mountFooterLogo(){
    const footer=document.querySelector('#footer, footer');
    if(!footer) return;

    let target=footer.querySelector('.footgrid > div:first-child, .footer-brand, .footbrand');
    if(!target) target=footer.querySelector('.footgrid > div');

    if(!target) return;

    // Prevent duplicate logos from previous patches.
    target.querySelectorAll('.sfm-footer-logo').forEach((el,i)=>{
      if(i>0) el.remove();
    });

    let img=target.querySelector('.sfm-footer-logo');

    if(!img){
      img=document.createElement('img');
      img.className='sfm-footer-logo';
      img.alt='Stock & Found Market — Est. 1988';
      img.decoding='async';
      img.loading='lazy';
      target.prepend(img);
    }

    if(img.getAttribute('src') !== LOGO){
      img.src=LOGO;
    }

    // Hide old textual logo copies, but keep story/contact text.
    target.querySelectorAll('h1,h2,h3,.logo-text,.brand-text').forEach(el=>{
      if(!el.classList.contains('sfm-footer-logo')){
        const t=(el.textContent||'').trim();
        if(/STOCK\s*&\s*FOUND/i.test(t)) el.classList.add('sfm-footer-brand-copy');
      }
    });
  }

  function boot(){
    document.body.classList.add('sfm-global-logo');
    document.body.dataset.sfmPage=pageType();

    mountHeaderLogo();
    mountFooterLogo();

    // app.js mounts/re-renders header/footer dynamically.
    const observer=new MutationObserver(()=>{
      mountHeaderLogo();
      mountFooterLogo();
    });

    observer.observe(document.body,{childList:true,subtree:true});

    // Stop after the dynamic mount window to avoid unnecessary observers.
    setTimeout(()=>observer.disconnect(),7000);
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',boot,{once:true});
  }else{
    boot();
  }
})();
