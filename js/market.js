
/* STOCK & FOUND 88 — MARKET EXPERIENCE V1 */
(() => {
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];

  const money = v => new Intl.NumberFormat('it-IT',{style:'currency',currency:'EUR'}).format(Number(v)||0);
  const esc = s => String(s ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  function pick(pool, predicate=()=>true){
    const x=pool.filter(predicate);
    return x[Math.floor(Math.random()*x.length)] || pool[0];
  }

  function card(p){
    return `<a class="card" href="product.html?id=${encodeURIComponent(p.id)}">
      <div class="media"><img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy"><span class="badge">${esc(p.badge||'FOUND')}</span></div>
      <div class="meta"><small>${esc(p.brand)} · ${esc(p.category)}</small><strong>${esc(p.name)}</strong><span>${p.compareAt?'<del>'+money(p.compareAt)+'</del>':''}${money(p.price)}</span></div>
    </a>`;
  }

  function home(products){
    const featured = $('#featured');
    if(!featured || !products.length) return;

    // Turn the existing featured block into a market table without changing the catalog source.
    const justFound = products.filter(p=>p.badge==='JUST FOUND');
    const almost = products.filter(p=>p.badge==='ALMOST GONE');
    const edit = products.filter(p=>p.badge==='THE EDIT');
    const under50 = products.filter(p=>Number(p.price)<50);

    const hero = pick(justFound.length?justFound:products);
    const sideA = pick(almost.length?almost:products,p=>p.id!==hero.id);
    const sideB = pick(edit.length?edit:products,p=>p.id!==hero.id && p.id!==sideA.id);
    const rail = [...products].sort(()=>Math.random()-.5).slice(0,4);

    featured.className='market-table';
    featured.innerHTML = `
      <a class="market-stall" href="product.html?id=${encodeURIComponent(hero.id)}">
        <img src="${esc(hero.image)}" alt="${esc(hero.name)}">
        <div class="market-stall-copy">
          <div><small>JUST FOUND · ${esc(hero.brand)}</small><strong>${esc(hero.name)}</strong></div>
          <span class="price">${money(hero.price)}</span>
        </div>
      </a>
      <div class="market-stack">
        <a class="market-tile" href="product.html?id=${encodeURIComponent(sideA.id)}">
          <div class="tile-copy"><small>ALMOST GONE</small><strong>${esc(sideA.name)}</strong><span>${money(sideA.price)} ↗</span></div>
          <img src="${esc(sideA.image)}" alt="${esc(sideA.name)}">
        </a>
        <a class="market-tile" href="product.html?id=${encodeURIComponent(sideB.id)}">
          <div class="tile-copy"><small>THE EDIT</small><strong>${esc(sideB.name)}</strong><span>${money(sideB.price)} ↗</span></div>
          <img src="${esc(sideB.image)}" alt="${esc(sideB.name)}">
        </a>
      </div>`;

    const intro=document.createElement('section');
    intro.className='market-intro wrap';
    intro.innerHTML=`<div class="market-intro-grid">
      <div><div class="market-kicker">02 / TODAY AT THE MARKET</div><h2>DON'T SHOP.<br><em>GO LOOKING.</em></h2></div>
      <div><p>Al mercato non entri con un catalogo in mano. Guardi, segui un dettaglio, trovi un brand, scopri un prezzo. Abbiamo portato quel comportamento online.</p>
      <div class="market-actions"><a class="market-action" href="finder.html">I KNOW WHAT I WANT ↗</a><button class="market-action" id="sfSurpriseHome">SURPRISE ME ↗</button></div></div>
    </div>`;
    const section=featured.closest('.section');
    section?.parentNode.insertBefore(intro,section);

    const railSec=document.createElement('section');
    railSec.className='section wrap';
    railSec.innerHTML=`<div class="line"><span>03 / KEEP LOOKING</span><span>${String(rail.length).padStart(2,'0')} RANDOM FINDS</span></div><div class="market-rail">${rail.map(card).join('')}</div>`;
    section?.parentNode.insertBefore(railSec,section.nextSibling);

    const pulse=document.createElement('div');
    pulse.className='market-pulse';
    pulse.innerHTML=`<div class="market-pulse-track"><span>FOUND TODAY ✦</span><b>${products.length} PIECES</b><span>✦</span><span>LIMITED STOCK</span><span>✦</span><span>${new Set(products.map(p=>p.brand)).size} BRANDS</span><span>✦</span><span>MARKET → ONLINE</span><span>✦</span><span>FOUND TODAY ✦</span><b>${products.length} PIECES</b></div>`;
    document.querySelector('main')?.prepend(pulse);

    $('#sfSurpriseHome')?.addEventListener('click',()=>{
      const p=pick(products);
      if(p) location.href='product.html?id='+encodeURIComponent(p.id);
    });
  }

  function shop(products){
    const grid=$('#products');
    if(!grid) return;
    const tools=document.createElement('div');
    tools.className='hunt-tools';
    tools.innerHTML=`<div class="chips">
      <button class="hunt-chip active" data-hunt="">ALL FINDS</button>
      <button class="hunt-chip" data-hunt="JUST FOUND">JUST FOUND</button>
      <button class="hunt-chip" data-hunt="ALMOST GONE">ALMOST GONE</button>
      <button class="hunt-chip" data-hunt="THE EDIT">THE EDIT</button>
      <button class="hunt-chip" data-hunt="UNDER50">UNDER €50</button>
    </div><button class="shuffle" id="sfShuffle">SURPRISE ME ↗</button>`;
    grid.parentNode.insertBefore(tools,grid);

    const apply=(mode)=>{
      $$('.hunt-chip').forEach(b=>b.classList.toggle('active',b.dataset.hunt===mode));
      let list=[...products];
      if(mode==='UNDER50') list=list.filter(p=>Number(p.price)<50);
      else if(mode) list=list.filter(p=>p.badge===mode);
      list.sort((a,b)=> (a.badge==='JUST FOUND'? -1:0) - (b.badge==='JUST FOUND'? -1:0));
      grid.innerHTML=list.length?list.map(card).join(''):`<div class="market-empty"><strong>NOTHING HERE.</strong><span>La caccia continua. Prova un altro banco.</span></div>`;
      const count=$('#resultCount'); if(count) count.textContent=String(list.length).padStart(2,'0')+' FINDS';
    };
    $$('.hunt-chip').forEach(b=>b.addEventListener('click',()=>apply(b.dataset.hunt)));
    $('#sfShuffle')?.addEventListener('click',()=>{
      const p=pick(products);
      if(p) location.href='product.html?id='+encodeURIComponent(p.id);
    });
  }

  function finder(products){
    const form=$('#finderForm'); if(!form) return;
    const host=form.parentElement;
    if($('#sfModes')) return;
    const modes=document.createElement('div');
    modes.id='sfModes'; modes.className='finder-modes';
    modes.innerHTML=`<button type="button" class="finder-mode active" data-mode="know"><strong>I KNOW.</strong><small>Categoria, budget, brand. So già cosa cercare.</small></button>
      <button type="button" class="finder-mode" data-mode="browse"><strong>SHOW ME.</strong><small>Dammi una selezione e lasciami guardare.</small></button>
      <button type="button" class="finder-mode" data-mode="surprise"><strong>SURPRISE ME.</strong><small>Non cerco niente di preciso. Voglio trovare.</small></button>`;
    form.parentElement.insertBefore(modes,form);
    $$('.finder-mode').forEach(b=>b.addEventListener('click',()=>{
      $$('.finder-mode').forEach(x=>x.classList.remove('active')); b.classList.add('active');
      if(b.dataset.mode==='browse') location.href='shop.html';
      if(b.dataset.mode==='surprise'){const p=pick(products); if(p) location.href='product.html?id='+encodeURIComponent(p.id);}
    }));
    const proof=document.createElement('div');
    proof.className='market-proof';
    proof.innerHTML=`<div><b>LOOK</b><small>Segui ciò che attira l'occhio.</small></div><div><b>COMPARE</b><small>Prezzo, brand e disponibilità in un colpo.</small></div><div><b>CLAIM</b><small>Quando hai trovato il pezzo, prendilo.</small></div>`;
    host.appendChild(proof);
  }

  document.addEventListener('DOMContentLoaded',async()=>{
    try{
      const r=await fetch('data/products.json?v=89.1',{cache:'no-store'});
      const data=await r.json();
      const products=data.products||[];
      if(!products.length) return;
      const page=document.body.dataset.page;
      if(page==='home') home(products);
      if(page==='shop') shop(products);
      if(page==='finder') finder(products);
    }catch(e){console.error('SF88 market layer',e)}
  });
})();
