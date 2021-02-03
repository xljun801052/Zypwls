<template>
  <div>
    <Scroll ref="articleDetailScroll">
      <div id="articleDetail">
        <!-- 文章详情部分 -->
        <div>
          <Back class="backItem" />
          <h2 class="article_title">{{ article.title }}</h2>
          <Divider />
          <div class="article_readAndCollectInfo">
            <!-- <span>发布时间: {{ article.pubTime }}</span> -->
            <span class="article_readTimes"
              >阅读数: {{ article.readTimes }}</span
            >
            <span class="article_collectTimes"
              >收藏数量: {{ article.collectTimes }}</span
            >
          </div>
          <div class="article_content">
            <p v-html="article.content"></p>
          </div>
        </div>
        <Divider />

        <!-- 历史评论展示 -->
        <div class="historyCommentArea">
          <div class="commentIndicator">
            <img src="~assets/imgs/homepage/comment.png" alt="" />
            <div>
              人生好比白驹过隙 不如小憩评论一句
              <img src="~assets/imgs/emotions/2018new_aini_org.png" alt="" />
            </div>
          </div>

          <div v-for="(commentItem, index) in historyComments" :key="index">
            <Comment
              :userAvatar="commentItem.userAvatar"
              :username="commentItem.username"
              :commentContent="commentItem.commentContent"
              :commentTime="commentItem.commentTime"
              :commentFavoriteCount="commentItem.commentFavoriteCount"
              :commentReplyCount="commentItem.commentReplyCount"
              :isCurrentUserFavorite="commentItem.isCurrentUserFavorite"
            />
          </div>
        </div>

        <!-- 发表评论部分 -->
        <div class="releaseCommentArea">
          <vue-editor v-model="comment"></vue-editor>
          <div class="commentInfoClick">
            <Button type="primary" class="commentHandle">爷,说两句</Button>
            <Button type="dashed" class="commentHandle">缄默不言</Button>
          </div>
          <div>{{ comment }}</div>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script>
import { VueEditor, Quill } from "vue2-editor";
import homepageRequest from "../../../../network/homepageRequest";

import Back from "../../../../components/common/Back";
import Scroll from "../../../../components/common/Scroll";
import Comment from "../../../../components/content/Comment";

export default {
  name: "ArticleDetail",
  components: {
    VueEditor,
    Scroll,
    Back,
    Comment,
  },
  data() {
    return {
      aId: "",
      historyComments: [],
      comment: "",
      article: {
        title: "",
        readTimes: 0,
        collectTimes: 0,
        content: "",
      },
    };
  },
  created() {
    this.aId = this.$route.params.id;

    // 获取文章详情数据
    homepageRequest({
      url: "/article/detail/" + this.aId,
      method: "post",
      data:{
        "aaa":"abc"
      }
    }).then((res) => {
      this.article = res;
    });

    // 获取历史评论信息数据
    homepageRequest({
      url: "/article/comments/" + this.aId,
      method: "post",
      data:{
        "aaa":"abd"
      }
    }).then((res) => {
      this.historyComments = res;
    });
  },
  updated() {
    this.$refs.articleDetailScroll.refresh();
  },
};
</script>

<style scoped>
.backItem {
  padding-top: 15px;
  padding-left: 20px;
}

#articleDetail {
  background: rgba(192, 243, 134, 0.8);
  border-radius: 5px;
}

.article_title {
  padding-top: 10px;
  text-align: center;
  font-size: 30px;
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

.commentIndicator {
  display: flex;
  align-items: baseline;
  font-family: 楷体;
  font-size: 22px;
  font-weight: bolder;
  color: red;
}

.commentIndicator img {
  height: 20px;
  width: 20px;
  margin-right: 5px;
}

.historyCommentArea {
  /* background:rgba(100,50,50,0.4);   */
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
