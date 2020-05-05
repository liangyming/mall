<template>
  <div class="course">
    <van-dropdown-menu class="a">
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <div class="detail">
      <van-card
        :num="value.num"
        :tag="value.tag"
        :price="value.price"
        :thumb="value.thumb"
        :origin-price="value.origin"
        v-for="(value, index) in cr"
        :key="index"
        class="card"
      >
        <template #title>
          <h2>{{value.title}}</h2>
        </template>
        <template #desc>
          <br />
        </template>
        <template #tags>
          <van-tag round type="success">公开课</van-tag>
          <van-tag round type="warning" style="margin-left: 5px">{{value.tags}}</van-tag>
        </template>
        <template #footer>
          <van-button size="mini" type="warning">收藏</van-button>
          <van-button size="mini" type="primary">分享</van-button>
        </template> 
      </van-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "course",
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部课程", value: 0 },
        { text: "直播课", value: 1 },
        { text: "录播课", value: 2 }
      ],
      option2: [
        { text: "全部价格", value: "a" },
        { text: "免费", value: "b" },
        { text: "￥0~9", value: "c" },
        { text: "￥10以上", value: "d" }
      ],
      cr: [{
          num: "2880",
          price: "0.9",
          origin: "9.9",
          tag: "直播中",
          tags: "词汇",
          title: "小猪佩奇学英语",
          thumb: require('@/assets/img/course1.webp')
        },{
          num: "3580",
          price: "0.0",
          origin: "1.0",
          tag: "",
          tags: "双语",
          title: "爱探险的朵拉双语课程",
          thumb: require('@/assets/img/course2.webp')
        },{
          num: "6666",
          price: "0.0",
          tag: "",
          tags: "故事",
          origin: "0.0",
          title: "世界童话故事英文版",
          thumb: require('@/assets/img/course3.webp')
        }]
    };
  }
};
</script>

<style scoped>
.a {
  background-color: #4fc08d;
  border-radius: 25px 25px 1px 1px;
  width: 330px;
  margin: auto;
}
.detail {
  font-size: 20px;
  font-weight: bolder;
}
.card {
  /* background-image: url("http://img2.imgtn.bdimg.com/it/u=3708392930,3357618940&fm=26&gp=0.jpg"); */
  border-radius: 20px;
  margin: 0px 10px 10px 10px;
}
</style>
