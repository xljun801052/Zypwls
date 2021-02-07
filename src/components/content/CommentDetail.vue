<template>
  <div class="comment_item">
    <Scroll ref="commentDetailRef">
      <!--父评论信息-->
      <div class="parentCommentContent">
        fdasfdfasdfasfsdf大大是打发点
      </div>
      <!--子评论信息-->
      <!--<div class="subCommentContent" >
        &lt;!&ndash; 评论者信息 &ndash;&gt;
        <div class="commentUserInfo">
          <img v-if="userAvatar" :src="userAvatar" alt="" class="avatar"/>
          <img v-else src="~assets/imgs/theme/tutu.png" alt="" class="avatar"/>
          <div>{{ username }}:</div>
          &lt;!&ndash; 评论获赞数 &ndash;&gt;
          <div class="commentFavoriteCount">
            <img src="~assets/imgs/utils/favorite.png" alt="" :class="{favorite:isCurrentUserFavorite===0?true:false}"/>
            <div :class="{favoriteC:isCurrentUserFavorite===0?true:false}">{{ commentFavoriteCount }}</div>
          </div>
        </div>

        &lt;!&ndash; 评论内容 &ndash;&gt;
        <div class="commentContent" v-html="commentContent"></div>

        &lt;!&ndash; 评论相关信息 &ndash;&gt;
        <div class="commentRelatedInfo">
          &lt;!&ndash; 评论时间 &ndash;&gt;
          <div class="commentTime">{{ cTimeAfterTransform }}</div>

          &lt;!&ndash; 评论回复数 &ndash;&gt;
          <div class="commentReplyCount" @click="reply(id)">{{ commentReplyCount }}回复</div>
        </div>
        <Divider dashed class="seperateLine"/>
      </div>-->

      <div class="allSubComments">
        <Comment class="subComment" v-for="(commentItem,index) in allSubComments" :key="index"
                 :id="commentItem.id"
                 :userAvatar="commentItem.userAvatar"
                 :username="commentItem.username"
                 :commentContent="commentItem.commentContent"
                 :commentTime="commentItem.commentTime"
                 :commentFavoriteCount="commentItem.commentFavoriteCount"
                 :isCurrentUserFavorite="commentItem.isCurrentUserFavorite"
        />
      </div>
    </Scroll>
  </div>
</template>

<script>
  import homepageRequest from "../../network/homepageRequest";
  import Scroll from "../common/Scroll";
  import Comment from "./Comment";


  export default {
    name: "Comment",
    components: {
      Scroll,
      Comment,
    },
    data() {
      return {
        commentReleaseTime: "",
        // 改变一下评论分割线的样式，但是目前没起作用!后面优化一下~
        // seperateLineOrientation: 1,
        // seperateLineSize: "small",
        parentId: null,
        allSubComments: [],
      };
    },
    computed: {
      cTimeAfterTransform() {
        let newDate = new Date(); //传入一个时间格式，如果不传入就是获取现在的时间了，这样做不兼容火狐。
        let newTime = newDate.getTime(); // 获取指定时间点的时间戳
        let gapTime = (newTime - this.commentTime) / 1000;
        let day = Math.floor(gapTime / (24 * 3600));
        let hour = Math.floor((gapTime - day * 24 * 3600) / 3600);
        let minute = Math.floor((gapTime - day * 24 * 3600 - hour * 3600) / 60);
        let second = gapTime - day * 24 * 3600 - hour * 3600 - minute * 60;
        if (day > 0) {
          this.commentReleaseTime = day + "天前";
        } else if (hour > 0) {
          this.commentReleaseTime = hour + "小时前";
        } else if (minute > 0) {
          this.commentReleaseTime = minute + "分钟前";
        } else {
          this.commentReleaseTime = "刚刚";
        }
        return this.commentReleaseTime;
      },
    },
    methods: {
      reply(id) {
        console.log("進行回復...")
      }
    },
    created() {
      this.parentId = this.$route.params.cid
      homepageRequest({
        url: "/article/subComments/" + this.parentId,
        method: "post",
        data: {
          "aaa": "bbb"
        }
      }).then(res => {
        console.log("-----sss--------")
        console.log(res)
        this.allSubComments = res
        /*this.userAvatar = res.data.userAvatar;
        this.username = res.data.username;
        this.commentContent = res.data.commentContent;
        this.commentTime = res.data.commentTime;
        this.commentFavoriteCount = res.data.commentFavoriteCount;
        this.isCurrentUserFavorite = res.data.isCurrentUserFavorite;*/

      })
    },
    updated() {
      this.$refs.commentDetailRef.refresh();
    },
  };
</script>

<style scoped>
  .commentUserInfo {
    display: flex;
    font-size: 18px;
    font-weight: bolder;
    font-family: 楷体;
  }

  .avatar {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-left: 5px;
  }

  .commentUserInfo img {
    margin-right: 5px;
  }

  .commentFavoriteCount {
    display: flex;
    position: relative;
    right: -60%;
    align-items: center;
    overflow: hidden;
  }

  .commentContent {
    position: relative;
    left: 42px;
    width: 60%;
  }

  .commentRelatedInfo {
    display: flex;
  }

  .commentTime {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    left: 42px;
    top: 10px;
    border: 1px dashed grey;
    width: 60px;
    border-radius: 20%;
    background: rgba(100, 50, 50, 0.1);
  }

  .commentReplyCount {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    left: 60px;
    top: 10px;
    border: 1px dashed grey;
    width: 60px;
    border-radius: 20%;
    background: rgba(100, 50, 50, 0.1);
  }

  .favorite {
    position: relative;
    bottom: -30px;
    border-right: 20px solid transparent;
    -webkit-filter: drop-shadow(20px 0);
    filter: drop-shadow(0px -30px rgb(255, 0, 51));
  }

  .favoriteC {
    margin-left: -20px;
  }
</style>
