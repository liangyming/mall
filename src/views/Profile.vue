<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <div slot="center">个人中心</div>
    </nav-bar>
    <login />
    <money />
    <div class="line"></div>
    <profile-list />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Login from "../components/profile/Login";
import Money from "../components/profile/Money";
import ProfileList from "../components/profile/profileList";

export default {
  name: "Profile",
  components: { ProfileList, Money, Login, NavBar }
};
</script>

<style scoped>
.profile {
  width: 100%;
  height: 100%;
}

.nav-bar {
  font-weight: 600;
  color: white;
  background-color: #4fc08d;
  margin-bottom: 1px;
}

.line {
  width: 100%;
  height: 10px;
  background-color: #eeeeee;
}

.scroll-height {
  position: absolute;
  top: 44px;
  right: 0;
  bottom: 50px;
  left: 0;
  overflow: hidden;
}
</style>
