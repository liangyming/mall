<template>
  <div class="home">
    <van-search v-model="value" shape="round" background="#4fc08d" placeholder="请输入搜索关键词" />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(img, index) in image" :key="index">
        <img :src="img" alt width="100%" height="100%" />
      </van-swipe-item>
    </van-swipe>
    <div class="grid">
      <van-grid :column-num="3" border="false" class="six">
        <van-grid-item v-for="(item, index) in grids" :key="index" :icon="item.img" :text="item.text"/>
      </van-grid>
    </div>
    <div class="course">
      <course/>
    </div>
  </div>
</template>

<script>
import course from "../components/home/course"

export default {
  name: "Home",
  data() {
    return {
      image: [
        "http://edu-image.nosdn.127.net/23ab6fd234884de0b8b997b709634d91.png?imageView&quality=100&thumbnail=776y360",
        "https://edu-image.nosdn.127.net/167823c6de8c4a9181abfca8b55a6699.png?imageView&quality=100",
        "https://edu-image.nosdn.127.net/0ae41d8850dd460aa61a096d543f4bd8.png?imageView&quality=100",
        "https://edu-image.nosdn.127.net/b87eee0126384ab2a65ddc82722c957a.png?imageView&quality=100&thumbnail=776y360"
      ],
      grids: [{
        img: require("@/assets/img/word.png"),
        text: "单词"
      },{
        img: "audio",
        text: "听力"
      },{
        img: require("@/assets/img/speak.png"),
        text: "口语"
      },{
        img: "todo-list",
        text: "阅读"
      },{
        img: require("@/assets/img/write.png"),
        text: "写作"
      },{
        img: require("@/assets/img/grammar.png"),
        text: "语法"
      }]
    };
  },
  components: {course}
};
</script>

<style scoped>
  .grid {
    font-family:Arial,Helvetica,sans-serif;
    font-size: 40px;
    font-weight: bold;
    color: aquamarine;
    margin-top: 10px;
  }
  .home {
    width: 100%;
    height: 100%;
  }
  .six {
    background-color: chartreuse;
  }
</style>