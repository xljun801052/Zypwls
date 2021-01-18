<template>
  <div id="app">
    <div id="header">
      <div id="navbar_img">
        <img src="~assets/imgs/theme/tutu.png" alt="404" />
      </div>
      <div id="navbar_motto">
        <span
          >请看我头戴簪花,一路走来一路盛开, 频频遗漏一些,又深陷风霜雨雪的感动...
        </span>
      </div>
      <!-- <Divider /> -->
      <!-- <div class="header-col2">
          <div class="grid-content bg-purple-light">Motto</div>
          <div class="grid-content bg-purple-light">她那个时候年轻不懂事，不明白很多东西早已暗中标好了价格</div>
        </div>
        <div class="header-col3">
          <i id="qq" class="iconfont icon-zypw-QQ">2074863066</i>
          <i id="wechat" class="iconfont icon-zypw-weixin">zy1614735214</i>
          <i id="telephone" class="iconfont icon-zypw-iPhoneX">17317673034</i>
          <i id="settings" class="el-icon-setting">设置</i>
        </div> -->
    </div>
    <div id="body">
      <div>
        <!--router-view会替换掉展示组件的第一层根标签-->
        <router-view id="content-view"></router-view>
      </div>
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
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>

<style scoped>
#app {
  position: relative;
  height: 100vh;
  width: 100%;
  background-image: url("~@/assets/imgs/background/bgimg2.jpg"); /*css中使用别名'~@'*/
  background-size: cover; /*设置背景图充满屏幕*/
  background-repeat: no-repeat; /*设置背景图不重复*/
}

#header {
  display: flex;
}
#navbar_img img {
  border-radius: 50%;
  position: absolute;
  top: 30px;
  left: 240px;
  height: 200px;
  width: 200px;
}

#navbar_motto {
  font-family: 楷体;
  font-size: 25px;
  color: rgb(34, 8, 66);
  position: absolute;
  top: 100px;
  left: 580px;
}
</style>
