<template>
  <div id="homepageDetail">
    我是homepage主页内容详情 哈哈哈哈<br>
    路由参数：<h2>{{parentData}}</h2>
    data：<h2>{{parData}}</h2>
  </div>
</template>

<script>
  export default {
    name: "HomepageDetail",
    data() {
      return {
        parData: ""
      }
    },
    computed: {
      parentData() {
        this.parData = this.$route.params.testData;
        return this.parData;
      }
    }
  }
</script>

<style scoped>
#homepageDetail{
    background-image: url("../../assets/imgs/background/bgimg3.jpg");
    background-size: cover; /*设置背景图充满屏幕*/
    background-repeat: no-repeat; /*设置背景图不重复*/
    position: fixed;
    height: 100%; /*在Y轴上显示的部分占图片总体百分比*/
    width: 100%; /*在X轴上显示的部分占图片总体百分比*/
    top: 0px; /*设置与父级元素顶部的距离:也就是顶对齐*/
    left: 0px; /*设置与父级元素左边的距离:也就是左对齐*/
  }
</style>
