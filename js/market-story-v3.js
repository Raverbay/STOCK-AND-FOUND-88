
/* STOCK & FOUND 88 — MARKET STORY V3
   Interaction layer: contextual story + surprise navigation.
*/
(function(){
  'use strict';

  function init(){
    const root =
      document.querySelector('.market-intro') ||
      document.querySelector('.market-story') ||
      document.querySelector('.sfm-market-story-v2');

    if(!root || root.dataset.sfmStoryV3 === '1') return;
    root.dataset.sfmStoryV3 = '1';

    /* Add a compact context bar without disturbing existing markup. */
    const context = document.createElement('div');
    context.className = 'sfm-story-context';
    context.innerHTML =
      '<span><strong>THE HUNT</strong> / how it works</span>' +
      '<span class="context-action">LOOK → SPOT → CLAIM</span>';

    const firstHeading = root.querySelector('h1,h2,.market-title');
    if(firstHeading && firstHeading.parentNode){
      firstHeading.parentNode.insertBefore(context, firstHeading);
    }

    /* Make existing story steps interactive. */
    const steps = root.querySelectorAll(
      '.market-step,.story-step,.step,.sfm-story-step,[data-step]'
    );

    const modes = [
      ['LOOKING MODE','Start without a plan. Let the market show you something.'],
      ['HUNT MODE','Follow the detail. Compare the find. Decide when it feels right.'],
      ['SURPRISE MODE','No brief. No list. Just see what turns up.']
    ];

    steps.forEach((step, i)=>{
      step.classList.add('market-story-v3-reveal');
      step.addEventListener('click', ()=>{
        steps.forEach(s=>s.classList.remove('is-active'));
        step.classList.add('is-active');

        const c = root.querySelector('.sfm-story-context .context-action');
        if(c){
          const m = modes[i] || modes[0];
          c.textContent = m[0] + ' — ' + m[1];
        }
      });
    });

    /* Scroll reveal */
    const io = ('IntersectionObserver' in window)
      ? new IntersectionObserver(entries=>{
          entries.forEach(e=>{
            if(e.isIntersecting){
              e.target.classList.add('is-visible');
              io.unobserve(e.target);
            }
          });
        },{threshold:.08})
      : null;

    root.querySelectorAll('.market-story-v3-reveal').forEach(el=>{
      if(io) io.observe(el);
      else el.classList.add('is-visible');
    });

    /* Surprise Me: use the existing product grid if present. */
    root.querySelectorAll('a,button').forEach(el=>{
      const txt=(el.textContent||'').trim().toUpperCase();
      if(!txt.includes('SURPRISE')) return;

      el.addEventListener('click',()=>{
        const finds = document.querySelectorAll(
          '#featured .product-card, #featured [data-product-id], .product-card'
        );
        if(!finds.length) return;
        const target = finds[Math.floor(Math.random()*finds.length)];
        target.scrollIntoView({behavior:'smooth',block:'center'});
        target.classList.add('sfm-surprise-hit');
        setTimeout(()=>target.classList.remove('sfm-surprise-hit'),1200);
      });
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded',init);
  }else{
    init();
  }
})();
