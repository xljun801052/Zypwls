<template>
  <div>
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

</style>
