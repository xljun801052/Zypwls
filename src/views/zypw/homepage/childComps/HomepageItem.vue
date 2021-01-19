<template>
  <div id="homepageItem">
    <!--帖子标题-->
    <router-link
      class="title"
      :to="'/homepageDetail/' + testData"
      tag="button"
      @click="showContentDetails"
    >
      {{ item.title }}
    </router-link>

    <!--帖子的分类、标签、发布时间、阅读数等信息-->
    <div class="abstract">
      分类:{{ index + 1 }}||标签：{{ item.tag }}||发布于:{{item.time}}||阅读数:{{ item.readTimes }}
    </div>

    <!--帖子内容信息-->
    <div>
      <div class="contentAbstract">{{ item.content }}</div>
      <div class="readMore"><a href="javascript:void(0);" @click="showContentDetails(item.id)">阅读更多</a></div>
    </div>

    <!---->
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
    methods:{
      // 展示文章详情内容
      showContentDetails(arti_id) {
        this.$router.push("/article_detail/"+arti_id)
      },
    }
  };
</script>

<style scoped>
  .title {
    font-family: 楷体;
    font-weight: bold;
    font-size: 20px;
    color: white;
    background: rgba(0, 255, 153, 0.5);
    border-radius: 15px;
  }

  .abstract {
    font-family: 楷体;
    font-weight: bold;
    font-size: 18px;
    color: #2dfdaa;
  }

  /*文本超过限制时用...进行显示代替*/
  .contentAbstract {
    font-family: 楷体;
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 350px;
    color: #2dfdaa;
  }

  .readMore {
    font-family: 楷体;
    font-size: 18px;
    color: #2dfdaa;
    text-align: center;
    margin-top: 10px;
  }
</style>
