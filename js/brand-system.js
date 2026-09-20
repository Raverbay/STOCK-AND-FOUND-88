
/* ============================================================
   STOCK & FOUND MARKET — BRAND SYSTEM JS V1
   Applies the brand consistently to every page without changing
   the commerce/data engine.
   ============================================================ */

(() => {
  const LOGO = 'assets/stock-found-market-logo.png';

  function cleanLegacyBranding(){
    // Remove standalone 88 codes from visible text, preserving EST. 1988.
    const walker=document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node){
          const p=node.parentElement;
          if(!p) return NodeFilter.FILTER_REJECT;
          const tag=p.tagName;
          if(tag==='SCRIPT'||tag==='STYLE'||tag==='NOSCRIPT') return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    const nodes=[];
    let n;
    while((n=walker.nextNode())) nodes.push(n);

    nodes.forEach(node=>{
      let t=node.nodeValue||'';
      t=t
        .replace(/\bS&F\s*\/\s*88\b/gi,'S&F MARKET')
        .replace(/\bFND\.088\b/gi,'FND')
        .replace(/\bARCHIVE\s*88\b/gi,'ARCHIVE')
        .replace(/(^|[\s·•/|])88(?=\s|$)/g,'$1');
      node.nodeValue=t;
    });
  }

  function applyDocumentMeta(){
    const path=location.pathname.toLowerCase();
    let section='MARKET';

    if(path.includes('shop')) section='THE HUNT';
    else if(path.includes('product')) section='THE FIND';
    else if(path.includes('finder')) section='FINDER';
    else if(path.includes('checkout')) section='CHECKOUT';
    else if(path.includes('order')) section='ORDER CONFIRMATION';

    document.documentElement.dataset.sfmSection=section;

    const title=document.title||'';
    document.title=title
      .replace(/Stock\s*&\s*Found\s*88/gi,'Stock & Found Market')
      .replace(/Stock\s*&\s*Found/gi,'Stock & Found Market');

    if(!document.querySelector('meta[name="theme-color"]')){
      const m=document.createElement('meta');
      m.name='theme-color';
      m.content='#080808';
      document.head.appendChild(m);
    }
  }

  function mountLogo(){
    const selectors=[
      '#header .logo','#header .site-logo','#header .brand',
      'header .logo','header .site-logo','header .brand',
      '.logo','.site-logo'
    ];

    let logo=null;
    for(const s of selectors){
      logo=document.querySelector(s);
      if(logo) break;
    }
    if(!logo || logo.dataset.sfmBrandLogo==='1') return;

    logo.dataset.sfmBrandLogo='1';
    logo.setAttribute('aria-label','Stock & Found Market — Est. 1988');
    logo.setAttribute('title','Stock & Found Market — Est. 1988');
    logo.innerHTML='';

    const img=document.createElement('img');
    img.className='sfm-brand-logo';
    img.src=LOGO;
    img.alt='Stock & Found Market — Est. 1988';
    img.decoding='async';
    img.loading='eager';
    logo.appendChild(img);
  }

  function normalizeLegacyButtons(){
    document.querySelectorAll('.hero-bottom .btn').forEach(btn=>{
      if(!btn.textContent.trim()) btn.textContent='START THE MARKET ↗';
    });

    document.querySelectorAll('.closing .btn').forEach(btn=>{
      if(!btn.textContent.trim()) btn.textContent='ENTER THE MARKET ↗';
    });
  }

  function removeLegacyTeal(){
    const candidates=document.querySelectorAll(
      '.darkband,.dark-band,.teal,.blue-band,.cyan-band,[data-color="teal"]'
    );
    candidates.forEach(el=>{
      el.style.backgroundColor='#080808';
      el.style.color='#F3F2ED';
    });
  }

  function boot(){
    document.body.classList.add('sfm-brand');
    applyDocumentMeta();
    mountLogo();
    normalizeLegacyButtons();
    removeLegacyTeal();
    cleanLegacyBranding();

    // Existing app mounts header/footer dynamically.
    setTimeout(()=>{
      mountLogo();
      normalizeLegacyButtons();
      removeLegacyTeal();
      cleanLegacyBranding();
    },300);

    const observer=new MutationObserver(()=>{
      mountLogo();
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
