/**
 * Created by mac WuYiPing on 17/8/4.
 */
import _ from "lodash"

export const newUser = {
  highlightEle:null,
  mask:null,
  element:null,
  //特别注意 这种 带简单数据的 就不要 放到 vue 里面的methods里面了 不然this指向不清楚
  copyElement:function (ele) {
    this.element=ele;
    let _tem = ele.getBoundingClientRect();
    // console.log(_tem)
    this.highlightEle = ele.cloneNode(true);
    this.highlightEle.style.position = "absolute";
    this.highlightEle.style.left = _tem.left+"px";
    this.highlightEle.style.top = _tem.top+"px";
  },
  createDiv:function () {
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
  },
  resize:function () {
    var _self = this;
    window.onresize =function () {
      _self.mask.style.width = window.innerWidth+"px";
      _self.mask.style.height = window.innerHeight+"px";
      _self.copyElement(_self.element);

    }
  }
}
