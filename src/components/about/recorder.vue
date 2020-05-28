<template>
  <div class="recorder">
    <button class="mainBtn" @click="startRec">开始</button>
    <button class="mainBtn" @click="playRec">结束</button>
  </div>
</template>

<script>
import Recorder from "recorder-core/recorder.mp3.min";
import { request } from "@/network/request";

export default {
  name: "recorder",
  data() {
    return {
      rec: 0,
      voice: null,
      suc: null,
      luyin: null
    };
  },
  methods: {
    startRec() {
      var that = this;
      this.rec = Recorder(); //使用默认配置.mp3格式
      //打开麦克风授权获得相关资源
      this.rec.open(
        function() {
          //开始录音
          that.rec.start();
        },
        function(msg, isUserNotAllow) {
          //用户拒绝了权限或浏览器不支持
          alert((isUserNotAllow ? "用户拒绝了权限，" : "") + "无法录音:" + msg);
        }
      );
    },
    playRec() {
      // 停止录音，得到了录音文件blob二进制对象，想干嘛就干嘛
      let that = this;
      this.rec.stop(
        (blob, duration) => {
          // var audio = document.createElement("audio");
          // audio.controls = true;
          // document.body.appendChild(audio);
          // 非常简单的就能拿到blob音频url
          // audio.src = URL.createObjectURL(blob);
          // audio.play();
          this.luyin = new FormData();
          this.luyin.append("upfile", blob, "recorder.mp3");
        },function(msg) {
          alert("录音失败:" + msg);
      });
      console.log(this.luyin)
      request({
        url: "/recorder1",
        method: 'post',
        headers: {'Content-Type': 'multipart/form-data'},
        data: this.luyin,
        responseType: 'blob'    //二进制返回格式
      }).then(res1 => {
        request({
          url: "/recorder2",
          method: 'post'
        }).then(res2 => {
          this.suc = res2.data
          console.log(this.suc)
        })
        console.log(this.suc)
        this.voice = res1.data
        this.$emit('music', this.voice, this.suc)
      }).catch(err1 => {
        alert(err1)
      });
    }
  }
};
</script>

<style scoped>
.mainBtn {
  display: inline-block;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background: #0b1;
  color: #fff;
  width: 30%;
  height: 42px;
  overflow: hidden;
  vertical-align: middle;
  font-size: 20px;
}
.mainBtn:active {
  background: #0a1;
}
.recorder {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-around;
  justify-content: space-around;
}
</style>
