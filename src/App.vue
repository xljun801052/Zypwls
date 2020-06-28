<template>
  <div id="app">
    <div id="container">
      <div id="header">
        <!--gutter属性来调整布局之间的宽度---分栏间隔,即水平方向的列距离-->
        <div class="header-col1">
          <el-avatar :size="200" :src="bgimg"></el-avatar><!--./assets/imgs/bgimg2.jpg-->
        </div>
        <div class="header-col2">
            <div class="grid-content bg-purple-light">Motto</div>
            <div class="grid-content bg-purple-light">她那个时候年轻不懂事，不明白很多东西早已暗中标好了价格</div>
        </div>
        <div class="header-col3">
            <i id="qq" class="el-icon-setting">2074863066</i>
            <i id="wechat" class="el-icon-setting"></i>
            <i id="telephone" class="el-icon-setting">设置</i>
            <i id="settings" class="el-icon-setting">设置</i>
        </div>
      </div>
      <div id="body">
        <div id="search">
          <input id="searchInput" type="text" name="searchContent" placeholder="搜你所想..."></input>
          <i id="searchIcon" class="el-icon-search"></i>
        </div>
        <!--<el-row>
          <el-col>
            <div>
              <router-link to="/homepage">homepage</router-link>
            </div>
          </el-col>
          <el-col>
            <div>
              <router-link to="/pictures">photos</router-link>
            </div>
          </el-col>
          <el-col>
            <div>
              <router-link to="/vlogs">v-log</router-link>
            </div>
          </el-col>
          <el-col>
            <div>
              <router-link to="/profile">profile</router-link>
            </div>
          </el-col>
          <router-view/>
        </el-row>-->
        <p>hahahha</p>
        <p>hahahha</p>
        <p>hahahha</p>
        <p>hahahha</p>
        <p>hahahha</p>
        <p>hahahha</p>
        <p>hahahha</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'App',
    data(){
      return{
        //严重怀疑这种方式只能传网络资源图片
        bgimg:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
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
    /*margin-bottom: 5px;*/
    /*background-image: url("./assets/imgs/bgimg2.jpg");*/
  }

  .header-col2{
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
    /*align-items: flex-start;*/
    justify-content: space-around;
    font-size: 50px;
  }

  #body {
    margin: 0px;
    /*background-image: url("./assets/imgs/bgpicture.jpg");*/
    background-size: cover;
    background-repeat: no-repeat;
  }

  #search{
    display: flex;
    flex-direction: row;
    justify-content: center;

  }

  #searchInput{
      width: 1500px;
      height: 50px;
  }
  /*element-ui的icon设置大小是需要通过设置父盒子的font-size属性*/
  #search{
    font-size: 50px;
    margin-top: 20px;
  }



  /*#header {
    !*background-image: url("./assets/imgs/bgimg2.jpg");*!
    background-size: cover; !*设置背景图充满屏幕*!
    background-repeat: no-repeat; !*设置背景图不重复*!
    position: fixed;
    height: 100%; !*在Y轴上显示的部分占图片总体百分比*!
    width: 100%; !*在X轴上显示的部分占图片总体百分比*!
    top: 0px; !*设置与父级元素顶部的距离:也就是顶对齐*!
    left: 0px; !*设置与父级元素左边的距离:也就是左对齐*!

    margin-bottom: 0px;
  }*/

  /*#body {
    !*background-image: url("./assets/imgs/yasuo.jpg");*!
    background-size: cover; !*设置背景图充满屏幕*!
    background-repeat: no-repeat; !*设置背景图不重复*!
    position: fixed;
    height: 100%; !*在Y轴上显示的部分占图片总体百分比*!
    width: 100%; !*在X轴上显示的部分占图片总体百分比*!
    top: 0px; !*设置与父级元素顶部的距离:也就是顶对齐*!
    left: 0px; !*设置与父级元素左边的距离:也就是左对齐*!
  }*/

  /*.header-col {
    height: 100%; !*在Y轴上显示的部分占图片总体百分比*!
    width: 100%; !*在X轴上显示的部分占图片总体百分比*!
  }*/


</style>
