/* STOCK & FOUND 88 — V6 REAL STORE */
(() => {
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];

  function homeEnhance(){
    document.title='STOCK & FOUND 88 — Found Differently';

    const heroP=$('.hero-copy p');
    if(heroP) heroP.innerHTML='WE GO LOOKING.<br><strong>YOU FIND.</strong>';

    const heroBtn=$('.hero-bottom .btn');
    if(heroBtn) heroBtn.innerHTML='START THE HUNT <b>↗</b>';

    const manifestoP=$('.manifesto p');
    if(manifestoP) manifestoP.innerHTML='Dal mercato al tuo guardaroba. Cerchiamo brand, occasioni e pezzi difficili da trovare. <strong>Non accumuliamo. Scoviamo.</strong>';

    const manifestoA=$('.manifesto .arrow');
    if(manifestoA) manifestoA.textContent='ENTER THE HUNT ↗';

    const discovery=$$('.discovery-grid a');
    const labels=[
      ['JUST','FOUND.','APPENA TROVATO ↗'],
      ['ALMOST','GONE.','QUANDO È UNO SOLO ↗'],
      ['UNDER','€50.','FOUND FOR LESS ↗'],
      ['THE','EDIT.','SCELTO DA NOI ↗']
    ];
    discovery.forEach((a,i)=>{
      if(!labels[i]) return;
      const b=a.querySelector('b'),s=a.querySelector('small');
      if(b)b.innerHTML=labels[i][0]+'<br><em>'+labels[i][1]+'</em>';
      if(s)s.textContent=labels[i][2];
    });

    const closing=$('.closing');
    if(closing && !$('.v6-finder')){
      const finder=document.createElement('section');
      finder.className='v6-finder';
      finder.innerHTML=`
        <div class="wrap">
          <div class="line"><span>08 / THE FINDER</span><span>FIND YOUR ROUTE</span></div>
          <div class="v6-finder-grid">
            <div>
              <div class="eyebrow">DON'T KNOW WHAT YOU'RE LOOKING FOR?</div>
              <h2>FIND<br><em>YOUR PIECE.</em></h2>
            </div>
            <div class="v6-finder-copy">
              <p>Parti da quello che sai. Categoria, budget o brand. Noi ti portiamo dentro la caccia.</p>
              <form class="v6-finder-form" id="v6FinderForm">
                <label>CATEGORY
                  <select id="v6Cat">
                    <option value="">ANY CATEGORY</option>
                    <option value="Men">MEN</option>
                    <option value="Women">WOMEN</option>
                    <option value="Kids">KIDS</option>
                    <option value="Shoes">SHOES</option>
                    <option value="Accessories">ACCESSORIES</option>
                  </select>
                </label>
                <label>MAX PRICE
                  <select id="v6Price">
                    <option value="">ANY PRICE</option>
                    <option value="30">UNDER €30</option>
                    <option value="50">UNDER €50</option>
                    <option value="80">UNDER €80</option>
                    <option value="120">UNDER €120</option>
                  </select>
                </label>
                <label class="full">WHAT ARE YOU HUNTING?
                  <input id="v6Query" type="search" placeholder="Brand, product, category...">
                </label>
                <div class="full">
                  <button class="btn dark" type="submit">START THE HUNT ↗</button>
                  <div class="v6-finder-result" id="v6FinderResult"></div>
                </div>
              </form>
            </div>
          </div>
        </div>`;
      closing.parentNode.insertBefore(finder,closing);
    }

    const closingH=$('.closing h2');
    if(closingH) closingH.innerHTML='GOOD BRANDS.<br><em>BETTER FINDS.</em>';

    const nl=$('.newsletter');
    if(nl){
      nl.classList.add('v6-newsletter-clean');
      const small=$('#newsletterMsg');
      if(small) small.textContent='';
    }

    setupFinder();
    enhanceMenu();
  }

  function setupFinder(){
    const form=$('#v6FinderForm');
    if(!form || form.dataset.ready) return;
    form.dataset.ready='1';
    form.onsubmit=e=>{
      e.preventDefault();
      const cat=$('#v6Cat')?.value||'';
      const price=$('#v6Price')?.value||'';
      const query=$('#v6Query')?.value.trim()||'';
      const parts=[];
      if(cat) parts.push('cat='+encodeURIComponent(cat));
      if(price) parts.push('under='+encodeURIComponent(price));
      const url='shop.html'+(parts.length?'?'+parts.join('&'):'');
      const result=$('#v6FinderResult');
      if(query){
        sessionStorage.setItem('sf88_finder_query',query);
      }
      if(result) result.textContent='OPENING THE HUNT…';
      setTimeout(()=>location.href=url,160);
    };
  }

  function enhanceMenu(){
    const nav=$('.nav');
    if(nav && !nav.querySelector('[data-v6-finder]')){
      const a=document.createElement('a');
      a.href='#finder';
      a.textContent='FINDER';
      a.dataset.v6Finder='1';
      a.onclick=e=>{
        if(document.body.dataset.page==='home'){
          e.preventDefault();
          document.querySelector('.v6-finder')?.scrollIntoView({behavior:'smooth'});
        }
      };
      nav.appendChild(a);
    }
    const observer=new MutationObserver(()=>{
      const menu=$('.mobile-menu');
      if(menu && !menu.querySelector('.v6-finder-link')){
        const a=document.createElement('a');
        a.className='v6-finder-link';
        a.href='index.html#finder';
        a.textContent='FINDER ↗';
        menu.appendChild(a);
      }
    });
    observer.observe(document.body,{childList:true});
  }

  document.addEventListener('DOMContentLoaded',homeEnhance);
})();
