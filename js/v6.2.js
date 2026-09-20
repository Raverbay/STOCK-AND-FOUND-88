/* STOCK & FOUND 88 — V6.2 UNIVERSAL MENU */
(function(){
  function boot(){
    if(window.__SF88_MENU_V62__) return;
    window.__SF88_MENU_V62__=true;

    function closeMenu(){
      const m=document.getElementById('mobileMenu');
      if(m)m.classList.remove('open');
      document.body.classList.remove('lock');
    }

    function openMenu(){
      let m=document.getElementById('mobileMenu');
      if(!m){
        m=document.createElement('div');
        m.id='mobileMenu';
        m.className='mobile-menu';
        m.innerHTML=
          '<div class="mobile-menu-top"><span>STOCK &amp; FOUND 88</span><button type="button" data-sf-close>CLOSE ×</button></div>'+
          '<a href="index.html">HOME ↗</a>'+
          '<a href="shop.html">THE HUNT ↗</a>'+
          '<a href="shop.html?badge=NEW%20FIND">JUST FOUND ↗</a>'+
          '<a href="shop.html?badge=LAST%20PIECE">ALMOST GONE ↗</a>'+
          '<a href="shop.html?cat=Men">MEN ↗</a>'+
          '<a href="shop.html?cat=Women">WOMEN ↗</a>'+
          '<a href="shop.html?cat=Kids">KIDS ↗</a>'+
          '<a href="shop.html?cat=Shoes">SHOES ↗</a>'+
          '<a href="shop.html?cat=Accessories">ACCESSORIES ↗</a>'+
          '<a href="finder.html">FINDER ↗</a>';
        document.body.appendChild(m);
        m.querySelector('[data-sf-close]').addEventListener('click',function(e){
          e.preventDefault();
          closeMenu();
        });
        m.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
      }
      const search=document.getElementById('searchPanel');
      if(search)search.classList.remove('open');
      m.classList.add('open');
      document.body.classList.add('lock');
    }

    /* Delegated click: works even when app.js creates/recreates the header later. */
    document.addEventListener('click',function(e){
      const btn=e.target.closest && e.target.closest('#menuBtn');
      if(btn){
        e.preventDefault();
        e.stopImmediatePropagation();
        openMenu();
      }
    },true);

    document.addEventListener('keydown',function(e){
      if(e.key==='Escape')closeMenu();
    });

    /* Make sure a newly rendered header still has a visible/tappable button. */
    const observer=new MutationObserver(function(){
      const btn=document.getElementById('menuBtn');
      if(btn){
        btn.setAttribute('type','button');
        btn.setAttribute('aria-label','Apri menu');
      }
    });
    observer.observe(document.body,{childList:true,subtree:true});
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});
  else boot();
})();
