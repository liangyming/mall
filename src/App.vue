<template>
  <div id="app">
    <router-view class="view"></router-view>
    <tab-bar class="tb"></tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/TabBar";

export default {
  name: "App",
  components: {
    TabBar
  }
}
</script>>

<style>
@import "./assets/css/base.css";

#app {
  position: relative;
}
.view {
  margin-bottom: 50px;
}
.tb {
  display: flex;
  position: absolute;
  bottom: 0px;
}
</style>
