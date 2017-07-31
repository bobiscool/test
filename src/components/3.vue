<!--Created by WuYiPing -->
<template>
    <div class="big">
      <ul>
        <li v-for="item in tem">
          {{item}}
        </li>
      </ul>
      <textarea v-model="dh">

      </textarea>
      <button @click="go">go</button>
    </div>
</template>

<script type="text/ecmascript-6">

    export default{
        data(){
            return {
                //todo 这里是data区域
              tem:[
                  "1",
                  "2",
                  "3",
                  "4",
                  "5"
              ],
              dh:""
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
          go(){

          }
        },
        mounted: function () {
            var _self = this;
          setTimeout(function () {
            _self.$set(_self,'tem',['1','3','5','2','4'])
          },2000);

          setTimeout(function () {
            _self.$set(_self,'tem',['1','5','3','2','4'])
          },4000);
          setTimeout(function () {
            _self.$set(_self,'tem',['1','2','5','3','4'])
          },6000);
          setTimeout(function () {
            _self.$set(_self,'tem',['1','3','2','5','4'])
          },10000);
            //TODO 函数执行区域
        }
    }
</script>
<style lang="scss">
    body {
        background-color: #fff;
    }
</style>
