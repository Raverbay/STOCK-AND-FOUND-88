/* STOCK & FOUND 88 — V6.1 HARD INTERACTION FIX */
(function(){
  function install(){
    const menuBtn=document.getElementById('menuBtn');
    if(!menuBtn)return;

    menuBtn.onclick=function(ev){
      ev.preventDefault();
      ev.stopPropagation();

      const search=document.getElementById('searchPanel');
      if(search) search.classList.remove('open');

      let menu=document.getElementById('mobileMenu');
      if(!menu){
        menu=document.createElement('div');
        menu.id='mobileMenu';
        menu.className='mobile-menu';
        menu.innerHTML=
          '<div class="mobile-menu-top"><span>STOCK &amp; FOUND 88</span><button type="button" id="closeMobileV61">CLOSE ×</button></div>'+
          '<a href="shop.html">THE HUNT ↗</a>'+
          '<a href="shop.html?badge=NEW%20FIND">JUST FOUND ↗</a>'+
          '<a href="shop.html?badge=LAST%20PIECE">ALMOST GONE ↗</a>'+
          '<a href="shop.html?cat=Men">MEN ↗</a>'+
          '<a href="shop.html?cat=Women">WOMEN ↗</a>'+
          '<a href="shop.html?cat=Kids">KIDS ↗</a>'+
          '<a href="shop.html?cat=Shoes">SHOES ↗</a>'+
          '<a href="shop.html?cat=Accessories">ACCESSORIES ↗</a>'+
          '<a href="finder.html">FINDER ↗</a>';
        document.body.appendChild(menu);
        document.getElementById('closeMobileV61').onclick=function(){
          menu.classList.remove('open');
          document.body.classList.remove('lock');
        };
        menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',function(){
          menu.classList.remove('open');
          document.body.classList.remove('lock');
        }));
      }
      menu.classList.add('open');
      document.body.classList.add('lock');
    };

    const search=document.getElementById('searchPanel');
    if(search) search.classList.remove('open');
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install,{once:true});
  else install();
})();
