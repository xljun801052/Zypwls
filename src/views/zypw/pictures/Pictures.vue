<template>
  <div id="picturemodule">
    <div>
    <router-link to='/'>返回首页</router-link>
    <router-link to='/'>添加美照</router-link>
    <router-link to='/'>删除美照</router-link>
    <div class="left">
      <button style="vertical-align: middle;" @click="pre" v-show="index!=0">上一张</button>
    </div>

    <div class="pic">
      <img style="vertical-align: middle;" :src="imgArr[index]" alt />
    </div>

    <div class="right">
      <button style="vertical-align: middle;" @click="nxt" v-show="index<imgArr.length-1">下一张</button>
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
    pre: function() {
      this.index--;
    },
    nxt: function() {
      this.index++;
    }
  }
};
</script>

<style scoped>

/*@import url('../../../assets/CSS/3DPhotoFrame.css');*/
#picturemodule {
  background-image: url("../../../assets/imgs/Titanic.jpg");
  background-size: cover; /*设置背景图充满屏幕*/
  background-repeat: no-repeat; /*设置背景图不重复*/
  position: fixed;
  height: 100%; /*在Y轴上显示的部分占图片总体百分比*/
  width: 100%; /*在X轴上显示的部分占图片总体百分比*/
  top: 0px; /*设置与父级元素顶部的距离:也就是顶对齐*/
  left: 0px; /*设置与父级元素左边的距离:也就是左对齐*/
}

.left {
  margin: 0px;
  padding: 0px;

  width: 55px;
  height: 100%;
  line-height: 1000px;
}
.right {
  margin: 0px;
  padding: 0px;
  width: 55px;
  height: 100%;
  line-height: 1000px;
}

.pic {
  height: 1000px;
  line-height: 1000px;
}
#app {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>