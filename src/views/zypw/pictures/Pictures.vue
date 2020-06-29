<template>
  <div>
    <div id="picture">
      <!--<router-link to='/'>返回首页</router-link>
      <router-link to='/'>添加美照</router-link>
      <router-link to='/'>删除美照</router-link>
      <div class="left">
        <button style="vertical-align: middle;" @click="pre" v-show="index!=0">上一张</button>
      </div>

      <div class="pic">
        <img style="vertical-align: middle;" :src="imgArr[index]" alt/>
      </div>

      <div class="right">
        <button style="vertical-align: middle;" @click="nxt" v-show="index<imgArr.length-1">下一张</button>
      </div>-->
      <div id="photo-category" class="photo-info">
        <div><el-button>日常生活1</el-button></div>
        <div><el-button>日常生活1</el-button></div>
        <div><el-button>日常生活1</el-button></div>
      </div>
      <div id="photo-serial" class="photo-info">
        <el-table>

        </el-table>
      </div>
      <div id="photo-detail" class="photo-info">
        <el-table>

        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "pictures",
    data() {
      return {
        imgArr: [
          "../../../assets/imgs/rabbit.jpg",
          "../../../assets/imgs/Titanic.jpg"
        ],
        index: 0
      };
    },
    methods: {
      pre: function () {
        this.index--;
      },
      nxt: function () {
        this.index++;
      }
    }
  };
</script>

<style>

  /*整体内容布局：按列分3列*/
  #picture {
    display: flex;
    /*卧槽，为啥这个地方用flex-direction没有用 但是flex-flow就可以？*/
    flex-flow: row nowrap;
    justify-content: space-around;
    margin-top: 50px;
  }

  .photo-info {
    width: 500px;
    height: 400px;
    border: 2px deeppink solid;
  }

  /*左侧列：照片分类*/
  #photo-category {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

</style>
