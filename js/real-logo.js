
/* STOCK & FOUND MARKET — USE GENERATED LOGO ARTWORK */
(() => {
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

  function findLogo(){
    for(const selector of logoSelectors){
      const el=document.querySelector(selector);
      if(el) return el;
    }
    return null;
  }

  function mountHeaderLogo(){
    const logo=findLogo();
    if(!logo) return;

    if(logo.dataset.sfmRealLogo==='1') return;

    logo.dataset.sfmRealLogo='1';
    logo.setAttribute('aria-label','Stock & Found Market — Est. 1988');
    logo.setAttribute('title','Stock & Found Market — Est. 1988');

    logo.innerHTML='';
    const img=document.createElement('img');
    img.className='sfm-logo-art';
    img.src='assets/stock-found-market-logo.png';
    img.alt='Stock & Found Market — Est. 1988';
    img.decoding='async';
    img.loading='eager';
    logo.appendChild(img);
  }

  function mountFooterLogo(){
    const footer=document.querySelector('#footer, footer');
    if(!footer || footer.querySelector('.sfm-footer-logo')) return;

    // Put the real mark only where an existing footer brand area is identifiable.
    const target=footer.querySelector('.footgrid > div:first-child, .footer-brand, .footbrand');
    if(!target) return;

    const img=document.createElement('img');
    img.className='sfm-footer-logo';
    img.src='assets/stock-found-market-logo.png';
    img.alt='Stock & Found Market — Est. 1988';
    img.decoding='async';
    img.loading='lazy';

    target.prepend(img);
  }

  function boot(){
    document.body.classList.add('sfm-real-logo');
    mountHeaderLogo();
    mountFooterLogo();

    // app.js mounts the header dynamically, so keep a short observer.
    const observer=new MutationObserver(()=>{
      mountHeaderLogo();
      mountFooterLogo();
    });
    observer.observe(document.body,{childList:true,subtree:true});
    setTimeout(()=>observer.disconnect(),5000);
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',boot,{once:true});
  }else{
    boot();
  }
})();
