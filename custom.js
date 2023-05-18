
(function injectJS() {
  try {
    injectDynamicCssToChild();
  } catch (e) {
    console.error("failed while inserting to iFrame", e);
  }
})();


function injectDynamicCssToChild() {
  var ymFrameHead = window.frames["ymIframe"].document.getElementsByTagName("head")[0];
  var modularStyles = document.createElement('style');
  modularStyles.type = 'text/css';
  var css = '@font-face {font-family: "Formus"; src: url("/fonts/Faruma(2).otf") format("otf");} body, .from-them div{font-family: "Formus"; color:red;}';
  if (modularStyles.styleSheet) {
    modularStyles.styleSheet.cssText = css;
  } else {
    modularStyles.appendChild(document.createTextNode(css));
  }
  ymFrameHead.appendChild(modularStyles);
}


