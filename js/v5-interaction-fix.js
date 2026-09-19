/* STOCK & FOUND 88 — V5 INTERACTION FIX */
document.addEventListener('DOMContentLoaded',()=>{
  const style=document.createElement('style');
  style.textContent=`
    .search-panel{visibility:hidden!important;opacity:0!important;pointer-events:none!important;transform:translateY(-110%)!important;display:block!important}
    .search-panel.open{visibility:visible!important;opacity:1!important;pointer-events:auto!important;transform:translateY(0)!important}
    .mobile-menu{visibility:hidden!important;opacity:0!important;pointer-events:none!important;transform:translateX(100%)!important;display:flex!important}
    .mobile-menu.open{visibility:visible!important;opacity:1!important;pointer-events:auto!important;transform:translateX(0)!important}
    #menuBtn{position:relative;z-index:205!important;touch-action:manipulation}
    @media(max-width:900px){.search-panel{top:76px!important;inset-inline:0!important}.mobile-menu{z-index:250!important}}
  `;
  document.head.appendChild(style);

  const btn=document.querySelector('#menuBtn');
  if(!btn) return;

  btn.onclick=()=>{
    const search=document.querySelector('#searchPanel');
    if(search) search.classList.remove('open');

    let menu=document.querySelector('#mobileMenu');
    if(!menu){
      menu=document.createElement('div');
      menu.id='mobileMenu';
      menu.className='mobile-menu';
      menu.innerHTML=`
        <div class="mobile-menu-top">
          <span>STOCK &amp; FOUND 88</span>
          <button id="closeMobile" type="button">CLOSE ×</button>
        </div>
        <a href="shop.html">THE HUNT ↗</a>
        <a href="shop.html?badge=NEW%20FIND">JUST FOUND ↗</a>
        <a href="shop.html?badge=LAST%20PIECE">ALMOST GONE ↗</a>
        <a href="shop.html?cat=Men">MEN ↗</a>
        <a href="shop.html?cat=Women">WOMEN ↗</a>
        <a href="shop.html?cat=Kids">KIDS ↗</a>
        <a href="shop.html?cat=Shoes">SHOES ↗</a>
        <a href="shop.html?cat=Accessories">ACCESSORIES ↗</a>
      `;
      document.body.appendChild(menu);
      menu.querySelector('#closeMobile').onclick=()=>{
        menu.classList.remove('open');
        document.body.classList.remove('lock');
      };
    }
    menu.classList.add('open');
    document.body.classList.add('lock');
  };
});
