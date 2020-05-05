<template>
  <div class="home">
    <van-search shape="round" background="#F69C0A" placeholder="请输入搜索关键词" />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(img, index) in image" :key="index">
        <img :src="img" alt width="100%" height="100%" />
      </van-swipe-item>
    </van-swipe>
    <div class="grid">
      <van-grid :column-num="3" :border="false" class="six">
        <van-grid-item v-for="(item, index) in grids" :key="index" class="item">
          <img :src="item.img" alt="">
          <p>{{item.text}}</p>
        </van-grid-item>
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
        require("../assets/img/swift1.webp"),
        require("../assets/img/swift2.webp"),
        require("../assets/img/swift3.webp"),
      ],
      grids: [{
        img: require("@/assets/img/word.png"),
        text: "单词"
      },{
        img: require("@/assets/img/listen.png"),
        text: "听力"
      },{
        img: require("@/assets/img/speak.png"),
        text: "口语"
      },{
        img: require("@/assets/img/read.png"),
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
  font-weight: bold;
  font-size: 18px;
  margin: 10px 25px 10px 25px;
  border-radius: 30px;
  padding: 10px;
  background-color: white;
}
.grid img {
  width: 35px;
  height: 35px;
}
.home {
  width: 100%;
  height: 100%;
  background-color: cornsilk;
}
.my-swipe{
  border-radius: 20px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 5px;
}
.item {
  padding: 0px;
}
</style>