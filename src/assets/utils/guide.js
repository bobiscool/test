/**
 * Created by mac WuYiPing on 17/8/4.
 */
var Guide = (function () {
    //特别注意 这种 带简单数据的 就不要 放到 vue 里面的methods里面了 不然this指向不清楚
    function Guide(ele) {
        var _self = this;
        _self.copyElement(ele);
        _self.createDiv();
    }
    ;
    Guide.prototype.show = function () {
        this.mask.style.display = "block";
    };
    ;
    Guide.prototype.hide = function () {
        this.mask.style.display = "none";
    };
    ;
    Guide.prototype.copyElement = function (ele) {
        this.element = ele;
        var _tem = ele.getBoundingClientRect();
        // console.log(_tem)
        this.highlightEle = ele.cloneNode(true);
        this.highlightEle.style.position = "absolute";
        this.highlightEle.style.left = _tem.left + "px";
        this.highlightEle.style.top = _tem.top + "px";
    };
    ;
    Guide.prototype.createDiv = function () {
        // 创建 mask
        var _self = this;
        var body = document.getElementsByTagName("body")[0];
        var mask = document.createElement("div");
        mask.style.width = window.innerWidth + "px";
        mask.style.height = window.innerHeight + "px";
        mask.style.zIndex = "100000";
        mask.style.position = "absolute";
        mask.style.left = "0";
        mask.style.top = "0";
        mask.style.backgroundColor = "rgba(94, 94, 94, 0.5)";
        mask.appendChild(_self.highlightEle);
        _self.mask = mask;
        _self.resize();
        body.appendChild(mask);
    };
    ;
    Guide.prototype.resize = function () {
        var _self = this;
        window.onresize = function () {
            _self.mask.style.width = window.innerWidth + "px";
            _self.mask.style.height = window.innerHeight + "px";
            _self.copyElement(_self.element);
        };
    };
    ;
    /**
     *
     * @param tipElement 需要传入 一个 完整htmlElement
     */
    Guide.prototype.addTip = function (tipElement) {
        // 添加个性化 说明
    };
    ;
    Guide.prototype.addText = function (text) {
        // 如果没有 tipEle那就退而求其次 转向说明
    };
    ;
    return Guide;
}());
