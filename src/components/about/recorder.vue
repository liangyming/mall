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
      suc: null
    };
  },
  methods: {
    startRec() {
      var that = this;
      this.rec = Recorder(); //使用默认配置，mp3格式
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
      var that = this;
      this.rec.stop(
        function(blob, duration) {
          // var audio = document.createElement("audio");
          // audio.controls = true;
          // document.body.appendChild(audio);
          // 非常简单的就能拿到blob音频url
          // audio.src = URL.createObjectURL(blob);
          // audio.play();
          var form = new FormData();
          form.append("upfile", blob, "recorder.mp3");
          request({
            url: "/home/multidata",
            data: form
          }).then(res => {
            //console.log(res);
            that.suc = res;
          }).catch(err => {
            console.log(err);
          });
        },function(msg) {
          alert("录音失败:" + msg);
        });
        //test
        setTimeout(() => {
          this.$emit('music');
        }, 1000);
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
