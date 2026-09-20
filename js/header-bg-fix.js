
/* STOCK & FOUND MARKET — HEADER BACKGROUND MATCH */
(() => {
  function apply(){
    document.body.classList.add('sfm-header-bg-fix');
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',apply,{once:true});
  }else{
    apply();
  }
})();
