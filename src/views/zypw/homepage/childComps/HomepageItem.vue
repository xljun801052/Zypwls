<template>
  <div id="homepageItem">
    {{ item }}
  </div>
</template>

<script>
export default {
  name: "HomepageItem",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
</style>