<template>
  <div class="profile-list">
    <van-cell-group>
      <van-cell title="我的消息" icon="manager" size="large" is-link />
      <van-cell title="积分商城" icon="point-gift" size="large" is-link />
    </van-cell-group>
    <div class="line"></div>
    <van-cell-group>
      <van-cell title="我的课程" icon="shopping-cart" size="large" is-link />
      <van-cell title="学校认证" icon="friends" size="large" is-link />
      <van-cell title="学习打卡" icon="checked" size="large" is-link />
    </van-cell-group>
    <div class="line"></div>
    <van-cell-group>
      <van-cell title="点赞APP" icon="good-job" size="large" is-link />
      <van-cell title="设置" icon="setting" size="large" is-link />
    </van-cell-group>
    <div class="line-botton"></div>
  </div>
</template>

<script>
export default {
  name: "profileList"
};
</script>

<style scoped>
.profile-list {
  width: 100%;
}

.profile-list-icon {
  font-size: 24px;
  display: inline-block;
  margin-right: 7px;
}

.line {
  width: 100%;
  height: 10px;
  background-color: #eeeeee;
}

.line-botton {
  width: 100%;
  height: 33px;
  background-color: #eeeeee;
}
</style>
