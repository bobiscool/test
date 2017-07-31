<!--Created by WuYiPing -->
<template>
    <div class="big">
       <ul ref="design">
         <li>移动安全解决方案</li>
       </ul>
       <ul ref="develop" v-cloak>
         <li v-for="(item,index) in developListTem">
          <span class="value"> {{item}}</span></span> <span class="del" @click="deleteSort('developListTem',index)">X</span>
         </li>
       </ul>
       <ul ref="public"></ul>
       <ul ref="monitor">
         <li v-for="(item,index) in monitorTem">
           {{item}} <span class="del" @click="deleteSort('monitorTem',index)">X</span>
         </li>
       </ul>
    </div>
</template>

<script type="text/ecmascript-6">
 import Sortable from "sortablejs"
 import _ from "lodash"
    export default{
        data(){
            return {
                //todo 这里是data区域
              designSort:null,
              developSort:null,
              publicSort:null,
              monitorSort:null,
              developList:[ //用于保存最原始的值
                  '应用加固',
                  '应用签名',
                  '安全检测'
              ],
              developListTem:[ //  用于铺设list的
                '应用加固',
                '应用签名',
                '安全检测',
                "A",
                "B",
                "C",
                "D",
                "E",
              ],
              developListCheck:[ //  用于对比是否可行的
                '应用加固',
                '应用签名',
                '安全检测',
                "A",
                "B",
                "C",
                "D",
                "E",
              ],
              monitorList:[
                  '终端威胁监测',
                "渠道监测"
              ],
              monitorTem:[
                '终端威胁监测',
                "渠道监测"
              ],
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
          checkIndex:function (who,evt) {
              var _self = this;
            //拿到oldIndex newIndex 然后 对比调换
            // LI 调换之后 数据 并没有 调换 li调换 如果不行的话要调换成原来的那个
            // 那流程 可以调换之后 check值得顺序
            // 不行 再调换回来 拿值的顺序 DOM 操作
//            let _tem = this[who][evt.newIndex];
//            this[who][evt.newIndex] = this[who][evt.oldIndex];

            let liList = evt.from.getElementsByClassName('value');
            let temValue = [];
            _.forEach(liList,function (item) {
              temValue.push(String.trim(item.innerHTML));
            });

            let aIndex = temValue.findIndex(function (value) {
              return value=="A";
            });

            let bIndex = temValue.findIndex(function (value) {
              return value=="B";
            });

            console.log(temValue);
            if(aIndex&&(aIndex>bIndex)){
                alert("A流程必须在b流程之前执行！");
                let _tem = _self[who];

//                console.log(_self[who]);
              /**
               * 强制刷新 撤销刚刚这一步
               */
              _self.$set(_self,who,[]);
              setTimeout(function () {
                _self.$set(_self,who,_tem);
              },100);
            }else {
                console.log("排序正常");
//                console.log(temValue);
//                _self.$set(_self,who,[]);
                setTimeout(function () {
                  _self.$set(_self,who,temValue);
//                  _self.$forceUpdate();
                },1000);

            }

//             console.log(evt.from.getElementsByClassName('value'));
          },

          deleteSort:function (who,index) {
            this[who].splice(index,1);
          },
          checkFunc:function () {

          }
        },
        mounted: function () {

            //TODO 函数执行区域
          var _self = this;
          _self.designSort = Sortable.create(_self.$refs.design,{
              animation:150,
            ghostClass:"sortable-ghost",
            chosenClass:"sortable-chosen",
            dragClass: "sortable-drag",
            onEnd:_self.checkIndex
          });

          _self.developSort = Sortable.create(_self.$refs.develop,{
//            animation:150,
            ghostClass:"sortable-ghost",
            chosenClass:"sortable-chosen",
            dragClass: "sortable-drag",
//            onEnd:_self.checkIndex,
            onEnd:function (evt) {
              _self.checkIndex('developListTem',evt)
            }
          });

          _self.monitorSort = Sortable.create(_self.$refs.monitor,{
            animation:150,
            ghostClass:"sortable-ghost",
            chosenClass:"sortable-chosen",
            dragClass: "sortable-drag",
            onEnd:function (evt) {
              _self.checkIndex('developListTem',evt)
            }
          });



        }
    }
</script>
<style lang="scss">
    body {
        background-color: #fff;
    }

  .big {
    margin: 10px auto;
    width:1000px;
    height:300px;
    border: 1px solid black;
    display:flex;

    ul {
      float: left;
     border: 1px solid #2c3e50;
     flex:1;
      width:24.5%;
      height: 100%;
    }

    li {
      background: #42b983;
    }
    .sortable-ghost {
      opacity: 0.2;
    }
    .sortable-drag {
      background: #24B694;
    }
    .sortable-chosen {
      background: #30C4C9;
    }
    .del {
      color: white;
      opacity: 0;
      cursor: pointer;
    }
    .del:hover {
      color:red;
      opacity: 1;



    }

    [v-cloak] {
      display: none;
    }
  }
</style>
