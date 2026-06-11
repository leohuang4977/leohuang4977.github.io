/* Interactive enhancements — additive, self-contained, vanilla JS. Loaded site-wide
   (scope layout) with `defer`, after the shared scripts. Every module is its own
   IIFE and guards its selectors, so nothing throws on a page missing an element.
   Paired with assets/enhancements.css. Honors prefers-reduced-motion throughout. */
(function () {
  'use strict';

  // 7.1 — Rotating hero word
  (function () {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.querySelectorAll('.rotate[data-words]').forEach(function (el) {
      var words = el.getAttribute('data-words').split(',').map(function (w){return w.trim();}).filter(Boolean);
      if (words.length < 2) return;
      // Markup ships ONE word. Build the static screen-reader twin and hide the
      // animated word from assistive tech + crawlers, so the sentence is read /
      // indexed once ("...how people make decisions...") instead of doubled.
      var base = (el.textContent || words[0]).trim();
      el.setAttribute('aria-hidden', 'true');
      if (!(el.nextSibling && el.nextSibling.classList && el.nextSibling.classList.contains('sr-only'))) {
        var twin = document.createElement('span');
        twin.className = 'sr-only';
        twin.textContent = base;
        el.parentNode.insertBefore(twin, el.nextSibling);
      }
      var probe = document.createElement('span');
      probe.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap;font:inherit;';
      el.appendChild(probe);
      var max = 0;
      words.forEach(function (w){ probe.textContent = w; max = Math.max(max, probe.offsetWidth); });
      el.removeChild(probe);
      el.style.minWidth = Math.ceil(max) + 'px';   // reserve widest word → no horizontal reflow
      el.textContent = words[0];
      if (reduce) return;                            // static first word under reduced motion
      var i = 0;
      el.style.transition = 'opacity .25s ease, transform .25s ease';
      setInterval(function () {
        el.style.opacity = '0'; el.style.transform = 'translateY(-4px)';
        setTimeout(function () {
          i = (i + 1) % words.length;
          el.textContent = words[i];
          el.style.opacity = '1'; el.style.transform = 'none';
        }, 260);
      }, 2200);
    });
  })();

  // 7.2 — Sticky / shrinking nav
  (function () {
    var header = document.querySelector('header.topbar');
    if (!header) return;
    var on = false;
    function onScroll(){ var s=(window.scrollY||document.documentElement.scrollTop)>24; if(s!==on){header.classList.toggle('shrunk',s);on=s;} }
    window.addEventListener('scroll', onScroll, { passive:true });
    onScroll();
  })();

  // 7.4 — Custom cursor "squishy blob"
  (function () {
    var fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return;
    var blob = document.createElement('div');
    blob.className = 'cursor-blob'; blob.setAttribute('aria-hidden','true');
    document.body.appendChild(blob);
    document.documentElement.classList.add('has-cursor-blob');
    var mx=innerWidth/2, my=innerHeight/2, x=mx, y=my, px=x, py=y, visible=false, raf=null, hovering=false;
    function onMove(e){ mx=e.clientX; my=e.clientY; if(!visible){visible=true;blob.style.opacity='1';} if(!raf) raf=requestAnimationFrame(loop); }
    function loop(){
      x+=(mx-x)*0.22; y+=(my-y)*0.22;
      var dx=x-px, dy=y-py; px=x; py=y;
      var speed=Math.min(Math.sqrt(dx*dx+dy*dy)/16, 0.65);
      var ang=Math.atan2(dy,dx)*180/Math.PI;
      var base=hovering?1.7:1;
      blob.style.transform='translate('+x+'px,'+y+'px) translate(-50%,-50%) rotate('+ang+'deg) scale('+(base+speed)+','+(base-speed*0.7)+')';
      if(Math.abs(mx-x)>0.1||Math.abs(my-y)>0.1) raf=requestAnimationFrame(loop); else raf=null;
    }
    window.addEventListener('mousemove', onMove, { passive:true });
    document.addEventListener('mouseleave', function(){ visible=false; blob.style.opacity='0'; });
    var interactive='a, button, [role="button"], input, textarea, select, summary, label';
    document.addEventListener('mouseover', function(e){ if(e.target.closest(interactive)) hovering=true; });
    document.addEventListener('mouseout',  function(e){ if(e.target.closest(interactive)) hovering=false; });
  })();

  // Skills chips — cursor-follow tilt + neighbor echo (CV/Résumé Skills section only).
  // Skips coarse pointers and reduced motion; static green hover stays via CSS.
  (function () {
    var fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return;
    var chips = document.querySelectorAll('.skills .chip');
    if (!chips.length) return;
    chips.forEach(function (chip) {
      chip.addEventListener('mousemove', function (e) {
        var r = chip.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width  - 0.5;  // -0.5..0.5
        var py = (e.clientY - r.top)  / r.height - 0.5;
        chip.style.transform =
          'perspective(500px) translateY(-2px) scale(1.04) rotateY(' +
          (px * 10) + 'deg) rotateX(' + (-py * 10) + 'deg)';
      });
      chip.addEventListener('mouseenter', function () {
        var sibs = chip.parentElement ? chip.parentElement.children : [];
        for (var i = 0; i < sibs.length; i++) {
          if (sibs[i] !== chip && sibs[i].classList.contains('chip')) sibs[i].classList.add('neighbor');
        }
      });
      chip.addEventListener('mouseleave', function () {
        chip.style.transform = '';
        var sibs = chip.parentElement ? chip.parentElement.children : [];
        for (var i = 0; i < sibs.length; i++) sibs[i].classList.remove('neighbor');
      });
    });
  })();
})();
