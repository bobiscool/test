/**
 * Created by mac WuYiPing on 17/8/4.
 */

class guide {

  highlightEle:HTMLDivElement;
  mask:HTMLDivElement;
  element:HTMLDivElement;
  //特别注意 这种 带简单数据的 就不要 放到 vue 里面的methods里面了 不然this指向不清楚
  constructor(ele){
    var _self = this;
    _self.copyElement(ele);
    _self.createDiv();
  };

  show() {
    this.mask.style.display="block";
  };
  hide() {
    this.mask.style.display="none";
  };
  copyElement(ele) {
    this.element=ele;
    let _tem = ele.getBoundingClientRect();
    // console.log(_tem)
    this.highlightEle = ele.cloneNode(true);
    this.highlightEle.style.position = "absolute";
    this.highlightEle.style.left = _tem.left+"px";
    this.highlightEle.style.top = _tem.top+"px";
  };
  createDiv() {
  // 创建 mask
    let _self=this;
    let body = document.getElementsByTagName("body")[0];
    let mask = document.createElement("div");
    mask.style.width = window.innerWidth+"px";
    mask.style.height = window.innerHeight+"px";
    mask.style.zIndex = "100000";
    mask.style.position = "absolute";
    mask.style.left = "0";
    mask.style.top = "0";
    mask.style.backgroundColor = "rgba(94, 94, 94, 0.5)";
    mask.appendChild( _self.highlightEle);

    _self.mask=mask;
    _self.resize();
    body.appendChild(mask);
  };
  resize() {
    var _self = this;
    window.onresize =function () {
      _self.mask.style.width = window.innerWidth+"px";
      _self.mask.style.height = window.innerHeight+"px";
      _self.copyElement(_self.element);

    }
  };
  /**
   *
   * @param tipElement 需要传入 一个 完整htmlElement
   */
  addTip(tipElement) {
    // 添加个性化 说明
  };
  addText(text) {
    // 如果没有 tipEle那就退而求其次 转向说明
  };
}
