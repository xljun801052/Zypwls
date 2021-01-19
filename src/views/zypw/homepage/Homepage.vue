<template>
  <div>
    <div id="homepage">

      <!--设置局部滚动-->
      <Scroll ref="homepageScroll">
        <!-- homepage的模块title部分 -->
        <div id="homepage-title">
          <span>小日春和-随笔</span>
        </div>
        <!-- homepage的内容部分 -->
        <div id="homepage-content">
          <HomepageItem
            class="homepage-item"
            v-for="(item, index) in allPosts"
            :key="index"
            :item="item"
            @click.native="showContentDetails"
          >
          </HomepageItem>
        </div>

        <!--分页部分-->
        <Pagehelper class="pagehelper"></Pagehelper>
      </Scroll>
    </div>
  </div>
</template>

<script>
  //使用懒加载模式导入组件：当路由被访问时才加载对应的代码，这样就更加高效率了
  const HomepageItem = () => import("./childComps/HomepageItem");
  const Pagehelper = () => import("components/common/Pagehelper")
  // const Scroll = () => import("components/common/Scroll")
  import Scroll from "../../../components/common/Scroll";

  export default {
    name: "homepage",
    components: {
      HomepageItem,
      Pagehelper,
      Scroll,
    },
    data() {
      return {
        message: "我是homepage的message",
        currentData: 0,
        allPosts: [
          {
            title: "三体首发",
            tag: "美妆生活",
            time: "2020-06-23 14:53:23",
            content:
              "最近在项目部署后发现在tomcat窗口中打印出的日志中中文是乱码的",
            readTimes: 10035,
            detailURL: "http://www.baidu.com",
            id: 111,
          },
          {
            title: "黑暗森林",
            tag: "小厨娘生活",
            time: "2020-06-23 14:27:35",
            content:
              "因为在开发环境中是没有乱码出现的，所以判断是因为服务器编码导致日志在窗口中显示成了乱码",
            readTimes: 15237,
            detailURL: "http://www.bilibili.com",
            id: 222,
          },
          {
            title: "死神永生",
            tag: "小仙女日常",
            time: "2020-06-23 17:34:24",
            content:
              "还好日志文件中打印出来的中文不是乱码，但是窗口中老显示乱码也是要解决的，解决方案如下：",
            readTimes: 18772,
            detailURL: "http://www.google.com",
            id: 333,
          },
          {
            title: "三体首发",
            tag: "美妆生活",
            time: "2020-06-23 14:53:23",
            content:
              "最近在项目部署后发现在tomcat窗口中打印出的日志中中文是乱码的",
            readTimes: 10035,
            detailURL: "http://www.baidu.com",
            id: 111,
          },
          {
            title: "黑暗森林",
            tag: "小厨娘生活",
            time: "2020-06-23 14:27:35",
            content:
              "因为在开发环境中是没有乱码出现的，所以判断是因为服务器编码导致日志在窗口中显示成了乱码",
            readTimes: 15237,
            detailURL: "http://www.bilibili.com",
            id: 222,
          },
          {
            title: "死神永生",
            tag: "小仙女日常",
            time: "2020-06-23 17:34:24",
            content:
              "还好日志文件中打印出来的中文不是乱码，但是窗口中老显示乱码也是要解决的，解决方案如下：",
            readTimes: 18772,
            detailURL: "http://www.google.com",
            id: 333,
          }, {
            title: "三体首发",
            tag: "美妆生活",
            time: "2020-06-23 14:53:23",
            content:
              "最近在项目部署后发现在tomcat窗口中打印出的日志中中文是乱码的",
            readTimes: 10035,
            detailURL: "http://www.baidu.com",
            id: 111,
          },
          {
            title: "黑暗森林",
            tag: "小厨娘生活",
            time: "2020-06-23 14:27:35",
            content:
              "因为在开发环境中是没有乱码出现的，所以判断是因为服务器编码导致日志在窗口中显示成了乱码",
            readTimes: 15237,
            detailURL: "http://www.bilibili.com",
            id: 222,
          },
          {
            title: "死神永生",
            tag: "小仙女日常",
            time: "2020-06-23 17:34:24",
            content:
              "还好日志文件中打印出来的中文不是乱码，但是窗口中老显示乱码也是要解决的，解决方案如下：",
            readTimes: 18772,
            detailURL: "http://www.google.com",
            id: 333,
          }, {
            title: "三体首发",
            tag: "美妆生活",
            time: "2020-06-23 14:53:23",
            content:
              "最近在项目部署后发现在tomcat窗口中打印出的日志中中文是乱码的",
            readTimes: 10035,
            detailURL: "http://www.baidu.com",
            id: 111,
          },
          {
            title: "黑暗森林",
            tag: "小厨娘生活",
            time: "2020-06-23 14:27:35",
            content:
              "因为在开发环境中是没有乱码出现的，所以判断是因为服务器编码导致日志在窗口中显示成了乱码",
            readTimes: 15237,
            detailURL: "http://www.bilibili.com",
            id: 222,
          },
          {
            title: "死神永生",
            tag: "小仙女日常",
            time: "2020-06-23 17:34:24",
            content:
              "还好日志文件中打印出来的中文不是乱码，但是窗口中老显示乱码也是要解决的，解决方案如下：",
            readTimes: 18772,
            detailURL: "http://www.google.com",
            id: 333,
          },
        ],
      };
    },
    methods: {
      
    },
    created() {
      // 组件创建的时候去请求数据，保存在data中
    },
    mounted() {
      this.$nextTick(()=>{
        console.log("---");
        this.$refs.homepageScroll.refresh()
      })
    }
  };
</script>

<style>
  #homepage {
    position: relative;
    border-radius: 10px;
    height: 400px;
  }

  span {
    font-family: 楷体;
    font-size: 30px;
    color: rgb(1, 253, 203);
    /*text-shadow: 0 0 20px #fdec84,*/
    /*10px -10px 30px #ffae35,*/
    /*20px -20px 40px #ec760c,*/
    /*-20px -60px 50px #cd4607,*/
    /*0px -80px 60px #973717,*/
    /*10px -40px 70px #451b0e;*/
  }

  /*头部样式设置：居中对齐*/
  #homepage-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }


  #homepage-content {
    overflow: hidden;
  }

  /*整体内容样式布局：居中对齐*/
  .homepage-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 40px;
  }

  .pagehelper {
    font-family: 楷体;
    font-size: 15px;
    text-align: center;
    margin-bottom: 10px;
  }
</style>
