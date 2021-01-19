<template>
  <div>
    <Page styles="color:red" :total="total" size="small" :page-size="pageSize"/>
  </div>
</template>

<script>
  export default {
    name: "Pagehelper",
    props: {
      total: {
        type: Number,
        default: 90 // 先给个大一点的默认值，显示效果，生产上改为0
      },
      pageSize: {
        type: Number,
        default: 10
      },
    },
  }
</script>

<style scoped>
  .pagehelper {
    color: #2dfdaa;
  }
</style>
