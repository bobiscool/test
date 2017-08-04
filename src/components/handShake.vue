<!--Created by WuYiPing -->
<template>

  <div class="big">
    <span class="some" id="newUser">新手引导</span>
    <span class="some">新手引导</span>
    <span class="some" id="newUser3">新手引导</span>

    <img  id="newUser2" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3961207246,4105016695&fm=26&gp=0.jpg">
    <span class="handS"></span>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from "jquery"
  import {browser} from "./detectBrower"
  import { newUser } from "as/utils/newUser.js"
  export default{
    data(){
      return {
        //todo 这里是data区域
      }
    },
    components: {
      //TODO 添加子组件
    },
    computed: {
      //TODO 计算区
    },
    methods: {
      //TODO 方法区
      loop: function () {
        var _self = this;
        $(".handS").animate({
          top: 50,
          left: 0
        }, 500, function () {
          $(".handS").animate({
            top: 12,
            left: 0
          }, 500, function () {
            _self.loop();
          })
        })
      }
    },
    mounted: function () {
      var _self = this;
      //TODO 函数执行区域

      if (browser.isIe() && browser.getVersion() <= 9) {
        _self.loop();
      }


      newUser.copyElement(document.getElementById("newUser2"))

      newUser.createDiv();

    }
  }
</script>
<style lang="scss">
  body {
    background-color: #fff;
  }

  .big {
    margin: 10px auto;
    width: 1000px;
    height: 300px;
    border: 1px solid rgba(94, 94, 94, 0.36);
    /*display: flex;*/
    position: absolute;

  }

  .handS {
    display: inline-block;
    width: 53px;
    height: 80px;
    background: url("~as/hand.png");
    animation-name: aha;
    animation-duration: 1000ms;
    animation-iteration-count: 100;
    position: absolute;
    left: 0;
    top:20px;
  }

  @keyframes aha {
    0% {
      top: 20px;
    }

    20% {
      top: 30px;
    }
    50% {
      top: 50px;
    }
    80% {
      top: 30px;
    }

    100% {
      top: 20px;
    }
  }

  .some {
    position: absolute;
    top:0;
    left:0px;
    background: #42b983;
  }

  #newUser2 {
    left: 300px;
  }
</style>
