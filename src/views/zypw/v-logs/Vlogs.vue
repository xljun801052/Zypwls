<template>
  <div>
    <div id="v-logs">
      <div id="vlog-start">这是Vlogs.vue界面</div>

      <div id="games" class="module">
        <div class="title">电竞赛事LOL</div>
        <hr style="border: 2px cadetblue solid;width: 80%;align-items: center">
        <div id="games-videos">
          <div class="videos">
            操作锦集1
          </div>
          <div class="videos">
            操作锦集2
          </div>
          <div class="videos">
            操作锦集3
          </div>
          <div class="videos">
            操作锦集4
          </div>
        </div>
      </div>

      <div id="life" class="module">
        <div class="title">仙女日常QAQ</div>
        <hr style="border: 2px deeppink solid;width: 80%;align-items: center">
        <div id="life-videos">
          <div class="videos">
            美妆时刻
          </div>
          <div class="videos">
            和男友的小开心
          </div>
          <div class="videos">
            呼啦啦啦~~~
          </div>
          <div class="videos">
            一个神奇的魔方1！
          </div>
          <div class="videos">
            一个神奇的魔方2！
          </div>
          <div class="videos">
            一个神奇的魔方3！
          </div>
          <div class="videos">
            一个神奇的魔方4！
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'vlogs',
    data() {
      return {
        tableData: [
          {}
        ]
      }
    }

  }

</script>

<style>
  #v-logs {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  #vlog-start{
    font-size: 60px;
    color: #3a8ee6;
    font-family: 华文彩云;
    margin-top:20px;
  }

  #games {
    display: flex;
    flex-flow: column wrap;
  }

  #life{
    display: flex;
    flex-flow: column wrap;
  }


  .module{
    width: 1800px;
  }

  hr{
    margin:15px 0px;
    width: 100%;
  }

  .title {
    display: flex;
    flex-flow: row nowrap;
    align-self: flex-start;
    font-size: 50px;
    font-family: "Courier New";
    color: #9a6e3a;
  }

  .videos{
    width: 500px;
    height: 300px;
    border: 1px deepskyblue dashed;
    margin: 15px 20px 50px 20px;
    background-image: url("../../../assets/imgs/info/yasuo.jpg");
    background-size: contain;
  }

  #games-videos, #life-videos {
    display: flex;
    flex-flow: row wrap;
    /*justify-content：对多出的部分不好控制*/
    /*justify-content: space-evenly;*/
    /*align-content：没用呀！*/
    /*align-content: space-around;*/
  }

</style>
