<template>
  <div class="about">
    <nav-bar class="nav-bar">
      <div slot="center">智能小猪佩奇</div>
    </nav-bar>
    <div class="up">
      <textarea name="en" cols="25" rows="4" readonly v-model="text"></textarea>
    </div>
    <audio controls hidden id="audio" @play="isshow=true" @pause="isshow=false">
      <source :src="src" type="audio/mpeg" />
    </audio>
    <div class="pig">
      <img src="../assets/img/pig.gif" alt v-if="isshow" />
      <img src="../assets/img/pig2.jpg" alt v-else />
    </div>
    <div class="down">
      <div class="switch">
        <van-icon :name="icon" @click="vary" size="42px"/>
      </div>
      <div class="in" v-if="i">
        <input type="text" name="Name" v-model="inputing" />
        <button id="bt1" @click="send">确认</button>
      </div>
      <div class="button" v-else>
        <recorder @music="recorderplay"></recorder>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import recorder from "@/components/about/recorder";
import { request } from "@/network/request";
import axios from "axios";

export default {
  name: "About",
  data() {
    return {
      isshow: false,
      i: true,
      src: null,
      text: "",
      inputing: "",
      icon: "music-o"
    };
  },
  methods: {
    //播放音乐，并改变图片
    autoplay() {
      var Audio = document.getElementById("audio");
      Audio.load();
      Audio.play();
    },
    //切换语音文字
    vary() {
      if (this.i) {
        this.i = false;
        this.icon = "comment-circle-o"
      } else {
        this.i = true;
        this.icon = "music-o"
      }
    },
    //发送文字信息到后台
    send() {
      request({
        method: 'post',
        url: '/about1',
        data: {'text': this.inputing},
        responseType: 'blob'    //二进制返回格式
      }).then(res1 => {
        const myBlob = new Blob([res1.data],{type: 'wav/audio'})
        const r_url = window.URL.createObjectURL(myBlob)
        this.src = r_url
        request({
          method: 'post',
          url: '/about2',
        }).then(res2 => {
          this.text = res2.data
        }).catch( err2 => {
          alert(err2)
        })
        this.autoplay()
      }).catch(err1 => {
        alert(err1)
      })
    },
    //从子组件请求res数据，并播放
    recorderplay(voice, suc) {
      const myBlob = new Blob([voice],{type: 'wav/audio'})
      const r_url = window.URL.createObjectURL(myBlob)
      this.src = r_url
      this.text = suc
      this.autoplay();
    }
  },
  components: { NavBar, recorder }
};
</script>

<style scoped>
.about {
  background-color: whitesmoke;
}
.nav-bar {
  font-weight: 600;
  color: white;
  background-color: #4fc08d;
}
.up {
  text-align: center;
  margin: auto;
  width: 360px;
}
.up textarea {
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: #fdd420;
  border-radius: 20px;
  border-style: solid;
  border-width: 5px;
  border-color: orange;
  width: 90%;
}
.pig {
  text-align: center;
  margin: auto;
}
.pig img {
  height: 8rem;
  width: 90%;
}
.down {
  /* background-color: papayawhip; */
  position:fixed;
  bottom: 55px;
  width: 100%;
}

.in {
  background-color: papayawhip;
}
.in input {
  float: left;
  width: 70%;
  height: 42px;
  border-radius: 10px;
}
.in button {
  float: right;
  margin-right: 3px;
  border-radius: 6px;
  background: dodgerblue;
  color: white;
  font-size: 25px;
  height: 42px;
  width: 16%;
}
.switch {
  float: left;
}
</style>