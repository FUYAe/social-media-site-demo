<template>
  <div class="video-main">
    <span>{{ myData.name }}视频介绍</span>
    <video autoplay controls id="videoElement" :src="myData.videoSrc"></video>
  </div>
</template>
<script>
export default {
  name: "VideoPage",
  data() {
    return {
      myData: {},
    };
  },
  mounted() {
    this.myData=this.$store.getters.getItemByCid("mainDatalight",this.$route.params.id)
    this.$store.state.isInnerPage = true;
  },
  beforeDestroy() {
    this.$store.state.isInnerPage = false;
  },
};
</script>
<style scoped>
.video-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1000px;
}
.video-main video {
  width: 1000px;
}
@font-face {
  font-style: normal;
  font-family: myyiti;
  src: url("../assets/font/yiti.ttf");
}

.video-main span {
  font-size: 1.5em;
  margin-bottom: 30px;
  margin-top: 20px;
  font-family: myyiti;
  color: rgb(41, 123, 138);
}
@media (max-width: 800px) {
  .video-main video {
    width: 98vw;
  }
}
</style>