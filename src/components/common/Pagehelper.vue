<template>
  <div>
    <Page  :total="total" size="small" :page-size="pageSize" />
  </div>
</template>

<script>
  export default {
    name: "Pagehelper",
    props: {
      total: {
        type: Number,
        default: 0
      },
      pageSize: {
        type: Number,
        default: 5
      },
    },
  }
</script>

<style scoped>
  .pageStyle{
    font-size: 15px;
  }
</style>
