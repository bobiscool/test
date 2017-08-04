/**
 * Created by mac WuYiPing on 17/8/4.
 */

export const  browser = {
  isIe: function () {
    //检测是否是 ie
    return navigator.appVersion.indexOf("MSIE") != -1;
  },
  navigator: navigator.appVersion,
  getVersion: function() {
    var version = 999; //随便写一个版本
    if (navigator.appVersion.indexOf("MSIE") != -1)
    // 拿到版本
      console.log("fuck (#‵′)凸 ie!");
    version = parseFloat(navigator.appVersion.split("MSIE")[1]);
    return version;
  }
};

