<template>
  <div id="app">
    <div id="nav">
      <nav id="zypw-module" class="homepageGuide" v-if="true">
        <router-link to="/homepage">homepage</router-link>
        <router-link to="/pictures">photos</router-link>
        <router-link to="/vlogs">v-log</router-link>
        <router-link to="/profile">profile</router-link>
        <router-view />
      </nav>
      <nav id="xlyspw-module" class="homepageGuide" v-else>
        <router-link to="/tecs">tec</router-link>
        <router-link to="/article">article</router-link>
        <router-view />
      </nav>
    </div>
    
  </div>
</template>

<style>
#nav {
  background-image: url("./assets/imgs/bgimg2.jpg");
  background-size: cover; /*设置背景图充满屏幕*/
  background-repeat: no-repeat; /*设置背景图不重复*/
  position: fixed;
  height: 100%; /*在Y轴上显示的部分占图片总体百分比*/
  width: 100%; /*在X轴上显示的部分占图片总体百分比*/
  top: 0px; /*设置与父级元素顶部的距离:也就是顶对齐*/
  left: 0px; /*设置与父级元素左边的距离:也就是左对齐*/
}

nav {
  /*margin-left: 30%;*/
  /*margin-right: 30%;*/
  width: 100%;/*如果宽度不足以显示文本，则会自动向下扩展，即增加nav标签元素高度*/
  height: 50px;
  text-align: center;
}
.homepageGuide {

}
</style>
