/* STOCK & FOUND 88 — V5 PERSONALITY LAYER */
(() => {
  const set = (sel, value) => { const el=document.querySelector(sel); if(el) el.textContent=value; };
  const all = (sel, fn) => document.querySelectorAll(sel).forEach(fn);

  function apply(){
    document.title = document.title.replace(/Found Differently|Find your piece|Complete your find|THE DROP/g, 'FOUND DIFFERENTLY');

    // Header: less generic e-commerce, more "hunt".
    all('.nav a', a => {
      const href=a.getAttribute('href')||'';
      if(href==='shop.html') a.textContent='THE HUNT';
      else if(href.includes('badge=NEW')) a.textContent='JUST FOUND';
      else if(href.includes('badge=LAST')) a.textContent='ALMOST GONE';
    });

    // Home hero.
    const heroP=document.querySelector('.hero-copy p');
    if(heroP) heroP.innerHTML='WE GO LOOKING.<br><strong>YOU FIND.</strong>';
    const heroTag=document.querySelector('.hero-tag');
    if(heroTag) heroTag.innerHTML='SAME BRANDS<br>A DIFFERENT ROUTE';
    const heroBtn=document.querySelector('.hero-bottom .btn');
    if(heroBtn) heroBtn.innerHTML='START THE HUNT <b>↗</b>';

    // Home manifesto.
    const manifestoH=document.querySelector('.manifesto h2');
    if(manifestoH) manifestoH.innerHTML='FIND<br><em>THE PIECE.</em>';
    const manifestoP=document.querySelector('.manifesto p');
    if(manifestoP) manifestoP.innerHTML='Prima del feed c’era il mercato. Cerchiamo brand, occasioni e pezzi difficili da trovare. <strong>Non accumuliamo. Scoviamo.</strong>';
    const manifestoA=document.querySelector('.manifesto .arrow');
    if(manifestoA) manifestoA.textContent='ENTER THE HUNT ↗';

    // Discovery cards.
    const discovery=document.querySelectorAll('.discovery-grid a');
    const discoveryCopy=[
      ['JUST','FOUND.','APPENA TROVATO ↗'],
      ['ALMOST','GONE.','QUANDO È UNO SOLO ↗'],
      ['UNDER','€50.','FOUND FOR LESS ↗'],
      ['THE','EDIT.','SCELTO DA NOI ↗']
    ];
    discovery.forEach((a,i)=>{
      if(!discoveryCopy[i]) return;
      const b=a.querySelector('b'), s=a.querySelector('small');
      if(b) b.innerHTML=discoveryCopy[i][0]+'<br><em>'+discoveryCopy[i][1]+'</em>';
      if(s) s.textContent=discoveryCopy[i][2];
    });

    // Market section.
    const darkH=document.querySelector('.darkband h2');
    if(darkH) darkH.innerHTML='SAW IT<br>AT THE <em>MARKET?</em>';
    const darkP=document.querySelector('.darkband p');
    if(darkP) darkP.textContent='Potrebbe essere qui. Il mercato è dove inizia la caccia. Lo store è dove ritrovi quello che non vuoi perdere.';
    const darkBtn=document.querySelector('.darkband .btn');
    if(darkBtn) darkBtn.textContent='KEEP LOOKING ↗';

    // Story.
    const splitP=document.querySelector('.split .copy p');
    if(splitP) splitP.textContent='Dal 1988 cerchiamo cose che meritano di essere trovate. A volte le trovi al mercato. A volte online. La caccia è la stessa.';
    const stamp=document.querySelector('.stamp');
    if(stamp) stamp.textContent='WE GO LOOKING / YOU FIND / EST. 1988';

    // Closing.
    const closingH=document.querySelector('.closing h2');
    if(closingH) closingH.innerHTML='GOOD BRANDS.<br><em>BETTER FINDS.</em>';
    const closingP=document.querySelector('.closing p');
    if(closingP) closingP.textContent='Non sai cosa stai cercando? Perfetto. È spesso così che trovi qualcosa di meglio.';
    const closingBtn=document.querySelector('.closing .btn');
    if(closingBtn) closingBtn.textContent='KEEP LOOKING ↗';

    // Newsletter.
    const nlH=document.querySelector('.newsletter h2');
    if(nlH) nlH.innerHTML='DON’T MISS<br>THE NEXT FIND.';
    const nlP=document.querySelector('.newsletter p');
    if(nlP) nlP.textContent='Nuovi finds, pezzi limitati e cose che spariscono velocemente. Ti scriviamo solo quando vale la pena.';
    const nlBtn=document.querySelector('#newsletterForm .btn');
    if(nlBtn) nlBtn.textContent='SHOW ME THE FINDS ↗';

    // Product page.
    set('.crumb span:last-child','THE FIND');
    const add=document.querySelector('#add');
    if(add) add.textContent="I'LL TAKE IT ↗";
    const note=document.querySelector('.note');
    if(note) note.innerHTML='ALMOST GONE / SELECTED PIECE<br>Se lo trovi, non è detto che lo ritrovi.';
    const sizeEyebrow=[...document.querySelectorAll('.product-info .eyebrow')].find(x=>x.textContent.includes('SCEGLI'));
    if(sizeEyebrow) sizeEyebrow.textContent='PICK YOUR SIZE';

    // Cart.
    const cartTop=document.querySelector('.carttop span');
    if(cartTop) cartTop.textContent='YOUR FIND';
    const cartCta=document.querySelector('.cartbottom .btn');
    if(cartCta) cartCta.textContent="I'LL TAKE IT ↗";

    // Checkout.
    const checkoutH=document.querySelector('.checkout h1');
    if(checkoutH) checkoutH.innerHTML='FOUND<br><em>IT.</em>';
    const checkoutP=document.querySelector('.checkout-grid>div>p');
    if(checkoutP) checkoutP.textContent='Hai trovato il pezzo. Lasciaci i tuoi dati e ci occupiamo noi del resto.';
    const checkoutBtn=document.querySelector('#checkoutForm .btn');
    if(checkoutBtn) checkoutBtn.textContent='CLAIM MY FIND ↗';

    // Footer.
    const footP=document.querySelector('.footgrid>div:first-child p');
    if(footP) footP.innerHTML='WE GO LOOKING.<br>YOU FIND.';
    const story=[...document.querySelectorAll('.footgrid p')].find(x=>x.textContent.includes('Dal mercato'));
    if(story) story.innerHTML='Dal mercato al tuo guardaroba.<br>Scoviamo dal 1988.';
  }

  document.addEventListener('DOMContentLoaded', apply);
})();