<template>
  <div class="course">
    <van-sticky>
      <van-dropdown-menu class="a">
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </van-sticky>
    <div class="detail">
      <van-card
        :num="value.num"
        :tag="value.tag"
        :price="value.price"
        :thumb="value.thumb"
        :origin-price="value.origin"
        v-for="(value, index) in cr" :key="index"
      >
        <template #title>
          <h2>{{value.title}}</h2>
        </template>
        <template #desc>
          <br>
        </template>
        <template #tags>
          <van-tag round type="success">公开课</van-tag>
          <van-tag round type="warning" style="margin-left: 5px">{{value.tags}}</van-tag>
        </template>
        <template #footer>
          <van-button size="mini">试学</van-button>
          <van-button size="mini">购买</van-button>
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
        { text: "￥0~599", value: "c" },
        { text: "￥600以上", value: "d" },
      ],
      cr: [{
        num: "2880",
        price: "9.9",
        origin: "89.9",
        tag: "直播中",
        tags: "四六级",
        title: "唐迟英语六级全程班",
        thumb: "//fudao.qq.com/tx_tls_gate=https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDFwRZynRSWSTVDxSE1mZNXvibyLz68V6zYOKPYmMnH697GZ1jjxicScTnwFNWbQ6IQ0/356?"
      },{
        num: "3580",
        price: "99.9",
        origin: "399.8",
        tag: "",
        tags: "考研",
        title: "21考研英语75分+集训营",
        thumb: "//fudao.qq.com/tx_tls_gate=https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDxcY6b10xpS7ZXiaerT8dR67Rg28lnACDMlQrdotGVyibZMHZMQw9yRzUCpFBbY7LoM/356?"
      },{
        num: "6666",
        price: "0.0",
        tag: "",
        tags: "考研",
        // origin: "",
        title: "21考研高分规划",
        thumb: "//fudao.qq.com/tx_tls_gate=https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLAHgYjWah2QGvhenueYUy83sWyr3qrynOckaiblrltxh3FD9SClibuDnTIW9FxDn1lSI/356?"
      }]
    };
  }
};
</script>

<style scoped>
.a {
  background-color: #4fc08d;
}
.detail {
  font-size: 20px;
  font-weight: bolder;
}

</style>
