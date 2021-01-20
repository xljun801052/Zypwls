<template>
  <div>
    <Scroll ref="articleDetailScroll">

      <div id="articleDetail">
        <!-- 文章详情部分 -->
        <div>
          <h2 class="article_title">{{ article.title }}</h2>
          <Divider/>
          <div class="article_readAndCollectInfo">
            <!-- <span>发布时间: {{ article.pubTime }}</span> -->
            <span class="article_readTimes">阅读数: {{ article.readTimes }}</span>
            <span class="article_collectTimes">收藏数量: {{ article.collectTimes }}</span>
          </div>
          <div class="article_content">
            <p v-html="article.content"></p>
          </div>
        </div>

        <!-- 发表评论部分 -->
        <div class="releaseCommentArea">
          <vue-editor v-model="comment"></vue-editor>
          <div class="commentInfoClick">
            <Button type="primary" class="commentHandle">爷,说两句</Button>
            <Button type="dashed" class="commentHandle">缄默不言</Button>
          </div>
          <div>{{comment}}</div>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script>
  import {VueEditor, Quill} from "vue2-editor";
  import homepageRequest from "../../../../network/homepageRequest";

  import Scroll from "../../../../components/common/Scroll";

  export default {
    name: "ArticleDetail",
    components: {
      VueEditor,
      Scroll,
    },
    data() {
      return {
        aId: "",
        comment: "",
        article: {
          title: "",
          readTimes: 0,
          collectTimes: 0,
          content: ""
        },
      };
    },
    created() {
      this.aId = this.$route.params.id;
      homepageRequest({
        url: "/article/detail/" + this.aId,
        method: "get",
      }).then(res => {
        this.article = res;
      })
    },
    mounted() {
      this.$nextTick(() => {
        this.$refs.articleDetailScroll.refresh()
      })
      console.log("article-scrollHeight刷新完毕...")
    }
  };
</script>

<style scoped>
  #articleDetail {
    background: rgba(192, 243, 134, 0.8);
    border-radius: 20px;
  }

  .article_title {
    padding-top: 15px;
    text-align: center;
  }

  .article_readAndCollectInfo {
    display: flex;
    justify-content: flex-end;
  }

  #articleDetail span {
    margin-top: -10px;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 12px;
    color: #121514;
  }

  .releaseCommentArea {
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.5);
  }

  .commentInfoClick {
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-evenly;
  }

  .commentHandle {
    font-size: 15px;
    font-family: 楷体;
  }
</style>
