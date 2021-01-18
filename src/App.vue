<template>
  <div id="app">
    <div id="container">
      <!--<div id="header">
        &lt;!&ndash;gutter属性来调整布局之间的宽度-&#45;&#45;分栏间隔,即水平方向的列距离&ndash;&gt;
        <div class="header-col1">
          <el-avatar :size="200" :src="~assets/img/bgimg1.jpg"></el-avatar>&lt;!&ndash;./assets/imgs/bgimg2.jpg&ndash;&gt;
        </div>
        <div class="header-col2">
          <div class="grid-content bg-purple-light">Motto</div>
          <div class="grid-content bg-purple-light">她那个时候年轻不懂事，不明白很多东西早已暗中标好了价格</div>
        </div>
        <div class="header-col3">
          <i id="qq" class="iconfont icon-zypw-QQ">2074863066</i>
          <i id="wechat" class="iconfont icon-zypw-weixin">zy1614735214</i>
          <i id="telephone" class="iconfont icon-zypw-iPhoneX">17317673034</i>
          <i id="settings" class="el-icon-setting">设置</i>
        </div>-->
      </div>
      <div id="body">
        <!--<div id="search">
          <el-input
            id="searchInput"
            style="width: 800px; height: 50px;margin-left: 650px;margin-top: 50px"
            prefix-icon="iconfont icon-zypw-weixin"
            suffix-icon="el-icon-search"
            placeholder=" 搜你所想..."
            v-model="input"
            :disabled="false">
          </el-input>
        </div>-->
      </div>
      <!--<div id="content">
        <router-link to="/" tag="el-button">登录</router-link>
        <router-link to="/homepage" tag="el-button">homepage</router-link>
        <router-link to="/pictures" tag="el-button">photos</router-link>
        <router-link to="/vlogs" tag="el-button">v-log</router-link>
        <router-link to="/profile" tag="el-button">profile</router-link>
      </div>-->
      <div>
        <!--router-view会替换掉展示组件的第一层根标签-->
        <router-view id="content-view"></router-view>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        //严重怀疑这种方式只能传网络资源图片
        bgimg: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
      }
    }
  }
</script>

<style>
  /*整体布局：上下*/
  #container {
    display: flex;
    flex-direction: column;
  }

  /*头部布局：水平*/
  #header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    /*background-image: url("./assets/imgs/bgimg2.jpg");*/
  }

  .header-col2 {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 800px;
    font-size: 50px;
    font-family: 楷体;
    font-style: italic;
  }

  .header-col3 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 30px;
  }

  /*主体内容模块：上下分布*/
  #body {
    margin: 0px;
    /*background-image: url("./assets/imgs/bgpicture.jpg");*/
    background-size: cover;
    background-repeat: no-repeat;
  }

  /*content内容模块：上下分布*/
  #content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

  }

  #content-view{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
