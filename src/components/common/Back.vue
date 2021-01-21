<template>
  <div id="back" @click="back">
    <img src="~assets/imgs/utils/back.png" alt="404" />
  </div>
</template>

<script>
export default {
  name: "Back",
  methods: {
    back() {
        this.$router.go(-1)
    },
  },
};
</script>

<style scoped>
#back {
  width: 20px;
  height: 20px;
}

#back img {
   border: 1px solid grey;
   border-radius:50%;
}
</style>