<template>
  <div>
    <Scroll class="xxx">
      <div id="articleDetail">
        <!-- 文章详情部分 -->
        <h2>{{ article.title }}</h2>
        <!-- <span>发布时间: {{ article.pubTime }}</span> -->
        <span>阅读数: {{ article.readTimes }}</span>
        <span>收藏数量: {{ article.collectTimes }}</span>
        <div class="article_content">
          <p v-html="article.content"></p>
        </div>
      </div>
      <!-- 评论区富文本编辑器部分 -->
      <div class="commentArea">
        <vue-editor v-model="comment"></vue-editor>
        <button>提交</button>
        <div>{{comment}}</div>
      </div>
    </Scroll>
  </div>
</template>

<script>
import { VueEditor, Quill } from "vue2-editor";

import Scroll from "../../../../components/common/Scroll";

export default {
  name: "ArticleDetail",
  components: {
    VueEditor,
  },
  data() {
    return {
      // articleId: "",
      comment: "<h2>跌幅达大叔大婶</h2>",
      article: {
        title: "弗拉基米尔伯爵",
        readTimes: 15,
        collectTimes: 33,
        content:""
      },
    };
  },
  computed: {
    // 获取文章的id参数
    articleId() {
      this.articleId = this.$route.params.id;
      return this.articleId;
    },
  },
};
</script>

<style scoped>
#articleDetail {
  background: rgba(192, 243, 134, 0.8);
  border-radius: 20px;
}

.commentArea {
  display: flex;
  flex-direction: column;
  background:rgba(255,255,255,0.5);
}
</style>
