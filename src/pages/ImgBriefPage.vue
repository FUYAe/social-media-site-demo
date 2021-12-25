<template>
  <div class="img-brief-main">
    <h1>{{ myData.name }}</h1>
    <div class="img-mian">
      <img
        class="img"
        v-for="(img, index) in myData.imgs"
        :src="img"
        alt=""
        :key="index"
      />
    </div>
    <div class="brief-main">
      <div class="brief-main-item">
        <p class="brief-who">牡丹花香精彩评论</p>
        <p class="brief-what">
          每天都看这个栏目，内容丰富，喜欢看自媒体视频，还有各地的新闻，还有好听的歌曲。
        </p>
      </div>
      <div class="brief-main-item">
        <p class="brief-who">牡丹花香精彩评论</p>
        <p class="brief-what">
          每天都看这个栏目，内容丰富，喜欢看自媒体视频，还有各地的新闻，还有好听的歌曲。
        </p>
      </div>
      <div class="brief-main-item">
        <p class="brief-who">牡丹花香精彩评论</p>
        <p class="brief-what">
          每天都看这个栏目，内容丰富，喜欢看自媒体视频，还有各地的新闻，还有好听的歌曲。
        </p>
      </div>
      <div class="brief-main-item">
        <p class="brief-who">牡丹花香精彩评论</p>
        <p class="brief-what">
          每天都看这个栏目，内容丰富，喜欢看自媒体视频，还有各地的新闻，还有好听的歌曲。
        </p>
      </div>
      <div class="brief-main-item">
        <p class="brief-who">牡丹花香精彩评论</p>
        <p class="brief-what">
          每天都看这个栏目，内容丰富，喜欢看自媒体视频，还有各地的新闻，还有好听的歌曲。
        </p>
      </div>
      <div class="brief-main-item">
        <p class="brief-who">牡丹花香精彩评论</p>
        <p class="brief-what">
          每天都看这个栏目，内容丰富，喜欢看自媒体视频，还有各地的新闻，还有好听的歌曲。
        </p>
      </div>
      <div class="brief-main-item">
        <p class="brief-who">牡丹花香精彩评论</p>
        <p class="brief-what">
          每天都看这个栏目，内容丰富，喜欢看自媒体视频，还有各地的新闻，还有好听的歌曲。
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ImgBriefPage",
  data() {
    return {
      mdata: [],
      myData: {},
    };
  },
  mounted() {
    this.mdata = this.$store.state.briefImgData;
    this.myData = this.mdata.filter((item) => {
      return item.cid == this.$route.params.id;
    })[0];
    this.$store.state.isInnerPage = true;
  },
  beforeDestroy() {
    this.$store.state.isInnerPage = false;
  },
};
</script>
<style scoped>
@font-face {
  font-style: normal;
  font-family: myyiti;
  src: url("../assets/font/yiti.ttf");
}
.img-brief-main {
  margin-top: 10px;
  width: 920px;
  height: 100%;
  padding: 60px;
  background-color: #fff;
  box-sizing: content-box;
}
.brief-main{
  padding: 60px;
  margin-top: 10px;
  box-sizing: border-box;
}
.img-mian{
  height: 384px;
}
.img-brief-main > h1 {
  font-family: myyiti;
  margin-bottom: 10px;
  margin-top: 10px;
}

.img {
  width: 230px;
  float: left;
}
p {
  text-align: left;
  line-height: 25px;
}
.brief-main-item {
  margin-top: 16px;
}
p.brief-what {
  color: rgb(92, 92, 92);
  text-indent: 2em;
  font-size: 13px;
}
p.brief-who {
  font-family: myyiti;
  color: rgb(41, 94, 119);
}
@media (max-width: 800px) {
  .img-brief-main {
    margin-top: 10px;
    width: 100vw;
    padding: 0px;
    height: 100%;
    background-color: #fff;
  
  }
  .img {
    width: 24vw;
    float: left;
  }
  .img-mian{
    height: 22vh;
    padding: 2vw;
    
  }
   .brief-main{
     margin-top: 10px;
     padding: 20px;
   }
}
</style>