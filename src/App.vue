<template>
  <div id="app">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-header style="text-align: center; font-size: 12px">
        <div id="header">
          <!--gutter属性来调整布局之间的宽度---分栏间隔,即水平方向的列距离-->
          <el-row :gutter="0">
            <el-col span="8">
              <div class="header-col">
                <el-avatar size="large" src="./assets/imgs/bgimg2.jpg"></el-avatar>
              </div>
            </el-col>
            <el-col span="8">
              <div class="header-col">
                <el-row type="flex" justify="space-around">
                  <div class="grid-content bg-purple-light">座右铭</div>
                </el-row>
                <el-row type="flex" justify="space-around">
                  <div class="grid-content bg-purple-light">她那个时候年轻不懂事，不明白很多东西早已暗中标好了价格</div>
                </el-row>
              </div>
            </el-col>
            <el-col span="8">
              <div class="header-col">
                <el-row type="flex" class="row-bg" justify="space-around">
                  <i class="el-icon-search">搜索</i>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-around">
                  <i class="el-icon-setting">设置</i>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-header>
      <!--<el-main>
        <div id="body">
          <el-row>
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
          </el-row>
        </div>
      </el-main>-->
    </el-container>
  </div>
</template>

<style>
  #header {
    /*background-image: url("./assets/imgs/bgimg2.jpg");*/
    background-size: cover; /*设置背景图充满屏幕*/
    background-repeat: no-repeat; /*设置背景图不重复*/
    position: fixed;
    height: 100%; /*在Y轴上显示的部分占图片总体百分比*/
    width: 100%; /*在X轴上显示的部分占图片总体百分比*/
    top: 0px; /*设置与父级元素顶部的距离:也就是顶对齐*/
    left: 0px; /*设置与父级元素左边的距离:也就是左对齐*/
  }

  #body {
    /*background-image: url("./assets/imgs/yasuo.jpg");*/
    background-size: cover; /*设置背景图充满屏幕*/
    background-repeat: no-repeat; /*设置背景图不重复*/
    position: fixed;
    height: 100%; /*在Y轴上显示的部分占图片总体百分比*/
    width: 100%; /*在X轴上显示的部分占图片总体百分比*/
    top: 0px; /*设置与父级元素顶部的距离:也就是顶对齐*/
    left: 0px; /*设置与父级元素左边的距离:也就是左对齐*/
  }

  .header-col{
    height: 100%; /*在Y轴上显示的部分占图片总体百分比*/
    width: 100%; /*在X轴上显示的部分占图片总体百分比*/
  }


</style>
