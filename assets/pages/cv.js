/* Résumé page (/cv/): "Print or save as PDF" button. Loaded with `defer` through `extra_js`.
   The button ships with the `hidden` attribute and is only revealed here, so visitors
   without JavaScript never see a control that does nothing. */
(function () {
  'use strict';
  var screenTitle = document.title;
  var printTitle = 'Leo Huang - Resume';   // browsers use the document title as the default PDF file name

  function beforePrint() {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
    document.title = printTitle;
  }
  function afterPrint() { document.title = screenTitle; }

  window.addEventListener('beforeprint', beforePrint);
  window.addEventListener('afterprint', afterPrint);

  var btn = document.querySelector('[data-print]');
  if (!btn || typeof window.print !== 'function') return;
  btn.hidden = false;
  btn.addEventListener('click', function () { window.print(); });
})();
