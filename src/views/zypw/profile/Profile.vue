<template>
  <div>
    <div id="profile">
      <div id="profile-start">这是Profile.vue界面</div>
      <div id="profile-content">
        <div id="self-introduction">
          <el-avatar :size="150" :src="bgimg"></el-avatar>
          <div>
            个人信息介绍:巴拉巴拉巴贝拉拉巴拉巴拉巴拉
          </div>
          <el-button>edit your profile</el-button>
        </div>
        <el-timeline :reverse="reverse">
          <el-timeline-item
            class="time-axis-item"
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp">
            {{activity.content}}
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'profile',
    data(){
      return{
        bgimg:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        reverse: true,
        activities: [{
          content: '活动按期开始',
          timestamp: '2018-04-15'
        }, {
          content: '通过审核',
          timestamp: '2018-04-13'
        }, {
          content: '创建成功',
          timestamp: '2018-04-11'
        },{
          content: '活动按期开始',
          timestamp: '2018-04-15'
        }, {
          content: '通过审核',
          timestamp: '2018-04-13'
        }, {
          content: '创建成功',
          timestamp: '2018-04-11'
        },{
          content: '活动按期开始',
          timestamp: '2018-04-15'
        }, {
          content: '通过审核',
          timestamp: '2018-04-13'
        }, {
          content: '创建成功',
          timestamp: '2018-04-11'
        }]
      }
    }

  }

</script>

<style>
  #profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  #profile-start {
    font-size: 60px;
    color: #13ce66;
    font-family: 华文彩云;
    margin-top: 20px;
  }

  .time-axis-item{
    margin:20px;
  }

  #profile-content{
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
  }

  #self-introduction{
    display: flex;
    flex-flow: column wrap;
    margin: 30px 250px;
    width: 30%;
  }
  el-timeline{
    width: 50%;
    margin-left: 10px;
  }
</style>
