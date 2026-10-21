/* Projects index filter (/projects/), revision 2026-10.
   Progressive enhancement: without JS every card shows and the filter bar stays hidden
   (projects.css shows the bar only under html.js). The pressed filter is mirrored in the URL
   as ?f=<key>, so links such as /projects/?f=human-ai open pre-filtered. Unknown keys fall
   back to All. Plain ES5 on purpose: production minifies this file with Uglifier. */
(function () {
  'use strict';

  var root = document.querySelector('.pf');
  var bar = document.querySelector('[data-pf-bar]');
  if (!root || !bar) return;

  function toArray(list) { return Array.prototype.slice.call(list); }

  var chips = toArray(bar.querySelectorAll('button[data-filter]'));
  var items = toArray(root.querySelectorAll('[data-tags]'));
  var sections = toArray(root.querySelectorAll('[data-pf-section]'));
  var status = bar.querySelector('[data-pf-status]');
  var total = items.length;
  var names = {};
  chips.forEach(function (chip) {
    names[chip.getAttribute('data-filter')] = chip.getAttribute('data-name');
  });

  function isKey(key) { return Object.prototype.hasOwnProperty.call(names, key); }

  function hasTag(el, key) {
    return (' ' + el.getAttribute('data-tags') + ' ').indexOf(' ' + key + ' ') > -1;
  }

  // Read ?f= from the URL. Returns { key, tidy }, where tidy means the URL should be
  // rewritten to the canonical form (unknown key, odd casing, or an explicit f=all).
  function readKey() {
    var raw = null;
    try { raw = new URLSearchParams(window.location.search).get('f'); } catch (e) { raw = null; }
    if (raw === null) return { key: 'all', tidy: false };
    var key = String(raw).replace(/^\s+|\s+$/g, '').toLowerCase();
    if (!isKey(key)) key = 'all';
    return { key: key, tidy: key === 'all' || key !== raw };
  }

  // Mirror the filter in the URL without adding history entries.
  function writeKey(key) {
    if (!window.history || !window.history.replaceState) return;
    try {
      var params = new URLSearchParams(window.location.search);
      if (key === 'all') { params['delete']('f'); } else { params.set('f', key); }
      var query = params.toString();
      window.history.replaceState(window.history.state, '',
        window.location.pathname + (query ? '?' + query : '') + window.location.hash);
    } catch (e) { /* the filter still works, the URL just does not follow */ }
  }

  function fadeIn(el) {
    el.classList.add('in'); // skip the scroll reveal for cards a filter brings back
    el.classList.remove('pf-enter');
    void el.offsetWidth; // restart the animation
    el.classList.add('pf-enter');
  }

  function apply(key, animate) {
    var shown = 0;
    items.forEach(function (el) {
      var on = key === 'all' || hasTag(el, key);
      var wasHidden = el.hidden;
      el.hidden = !on;
      if (on) {
        shown += 1;
        if (animate && wasHidden) fadeIn(el);
      }
    });
    sections.forEach(function (section) {
      section.hidden = !section.querySelector('[data-tags]:not([hidden])');
    });
    chips.forEach(function (chip) {
      chip.setAttribute('aria-pressed', chip.getAttribute('data-filter') === key ? 'true' : 'false');
    });
    root.setAttribute('data-active', key);
    if (status) {
      status.textContent = key === 'all'
        ? 'Showing all ' + total + ' projects'
        : 'Showing ' + shown + ' of ' + total + (total === 1 ? ' project' : ' projects') + ' tagged ' + names[key];
    }
  }

  bar.addEventListener('click', function (event) {
    var el = event.target;
    while (el && el !== bar && !(el.nodeName === 'BUTTON' && el.hasAttribute('data-filter'))) {
      el = el.parentNode;
    }
    if (!el || el === bar) return;
    var key = el.getAttribute('data-filter');
    // Pressing the active filter again turns it off.
    if (key !== 'all' && el.getAttribute('aria-pressed') === 'true') key = 'all';
    apply(key, true);
    writeKey(key);
  });

  items.forEach(function (el) {
    el.addEventListener('animationend', function () { el.classList.remove('pf-enter'); });
  });

  var start = readKey();
  if (start.tidy) writeKey(start.key);
  // On a plain load the status text already matches, so the live region stays quiet.
  if (start.key !== 'all') apply(start.key, false);
})();
