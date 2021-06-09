(function setRem(doc, win) {
  let docEl = doc.documentElement;
  let max = 768;
  let ratio = 750;
  let resizeEvt =
    "orientationchange" in window ? "orientationchange" : "resize";
  let recalc = function () {
    let clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    if (clientWidth > max) {
      clientWidth = max;
    }
    docEl.style.fontSize = 100 * (clientWidth / ratio) + "px";
    adjustRem(docEl, clientWidth);
  };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
  recalc();
  /**
   * [adjustRem 自适应rem]
   * @param  {object} docElE       [doc.documentElement]
   * @param  {number} clientWidth [屏幕宽度]
   * @return {void}
   */
  function adjustRem(docElE, clientWidth) {
    if (!clientWidth || clientWidth >= max) return;
    let div = document.createElement("div");
    div.style.width = "1.4rem";
    div.style.height = "0";

    if (!document.body) {
      return;
    }

    document.body.appendChild(div);
    let expectWidth = (140 * clientWidth) / ratio;
    let fitRadio = div.clientWidth / expectWidth;
    if (fitRadio > 1.1 || fitRadio < 0.9) {
      docElE.style.fontSize = (100 * (clientWidth / ratio)) / fitRadio + "px";
    }
    document.body.removeChild(div);
  }
})(document, window);
