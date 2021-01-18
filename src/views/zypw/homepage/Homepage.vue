<template>
  <div>
    <div id="homepage">
      <!-- homepage的title部分 -->
      <div id="homepage-title">
        <span>小日春和-随笔</span>
      </div>
      <!-- homepage的内容部分 -->
      <div>
        <HomepageItem
          id="homepage-content"
          v-for="(item, index) in allPosts"
          :key="index"
        >
          <!--这里需要使用路由跳转时参数传递知识点进行解决，父子组件通讯以及父子组件访问貌似适合用-->
          <router-link
            class="title"
            :to="'/homepageDetail/' + testData"
            tag="button"
            @click="showContentDetails"
          >
            {{ item.title }}
          </router-link>
          <br />
          <div class="abstract">
            分类:{{ index + 1 }}||标签：{{ item.tag }}||发布于:{{
              item.time
            }}||阅读数:{{ item.readTimes }}
          </div>
          <br />
          <div class="contentAbstract">
            {{ item.content }}
          </div>
        </HomepageItem>
      </div>
    </div>
  </div>
</template>

<script>
//使用懒加载模式导入组件：当路由被访问时才加载对应的代码，这样就更加高效率了
const HomepageItem = () => import("./childComps/HomepageItem");

export default {
  name: "homepage",
  components: {
    HomepageItem,
  },
  data() {
    return {
      message: "我是homepage的message",
      currentData: 0,
      allPosts: [
        {
          title: "主题一",
          tag: "美妆生活",
          time: "2020-06-23 14:53:23",
          content:
            "最近在项目部署后发现在tomcat窗口中打印出的日志中中文是乱码的",
          readTimes: 10035,
          detailURL: "http://www.baidu.com",
          id: 111,
        },
        {
          title: "主题二",
          tag: "小厨娘生活",
          time: "2020-06-23 14:27:35",
          content:
            "因为在开发环境中是没有乱码出现的，所以判断是因为服务器编码导致日志在窗口中显示成了乱码",
          readTimes: 15237,
          detailURL: "http://www.bilibili.com",
          id: 222,
        },
        {
          title: "主题三",
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
    showContentDetails() {},
  },
  created() {
    // 组件创建的时候去请求数据，保存在data中
  },
};
</script>

<style>
#homepage {
  position: relative;
  top: 250px;
}

/*头部样式设置：居中对齐*/
#homepage-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

/*整体内容样式布局：居中对齐*/
#homepage-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

/*title内容样式*/
.title {
  font-family: "Courier New";
  font-size: 30px;
  color: chocolate;
}

/*概要内容样式*/
.abstract {
  font-family: "Courier New";
  font-size: 25px;
  color: aqua;
}

/*文本超过限制时用...进行显示代替*/
.contentAbstract {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-flex: inherit;
  -webkit-box-orient: vertical;
}
</style>
