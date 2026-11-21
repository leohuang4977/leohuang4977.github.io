/* Interactive enhancements: additive, self-contained, vanilla JS. Loaded site-wide
   (scope layout and the case studies) with `defer`, after the shared scripts.
   Paired with assets/enhancements.css.
   Revision 2026-11 (motion budget): the rotating hero word, the blob cursor and the
   skill-chip tilt were retired. Only the shrinking nav remains here. */
(function () {
  'use strict';

  // 7.2 — Sticky / shrinking nav. The case studies' own scope-fx script already toggles
  // .shrunk at the same 24 px (it marks <html data-lh-fx>), so this module stands down there.
  (function () {
    var header = document.querySelector('header.topbar');
    if (!header || document.documentElement.dataset.lhFx) return;
    var on = false;
    function onScroll(){ var s=(window.scrollY||document.documentElement.scrollTop)>24; if(s!==on){header.classList.toggle('shrunk',s);on=s;} }
    window.addEventListener('scroll', onScroll, { passive:true });
    onScroll();
  })();
})();
