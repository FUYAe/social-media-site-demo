<template>
  <div class="slide-main">
    <h1>新媒体，改变生活！</h1>
    <!-- 使用elementui的走马灯 -->
    <el-carousel height="500px" :interval="5000" arrow="always">
      <el-carousel-item v-for="(item, index) in carouselImgs" :key="index">
        <img :src="item" alt srcset />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: "HomeCarousel",
  computed: {
    carouselImgs() {
      return this.$store.state.carouselImgs;
    },
  },
};
</script>
<style scoped>
@font-face {
  font-style: normal;
  font-family: maobihanti;
  src: url("../assets/font/maobihanti.ttf");
}

.slide-main {
  position: relative;
  display: block;
  /* margin-top: 30px; */
  margin-bottom: 30px;
  width: 900px;
  box-shadow: 0 16px 48px #e7ebf6;
}
.slide-main,
img {
  border-radius: 10px;
}
.el-carousel {
  width: 900px;
  display: block;
  border-radius: 10px;
}
img {
  /* 图片不拉伸 */
  object-fit: cover;
  width: 900px;
  transition: all 0.9s ease;
}
.slide-main:hover img {
  transform: scale(1.2);
}
.slide-main h1 {
  width: 100%;
  position: absolute;
  z-index: 9;
  margin: 0 auto;
  color: rgba(25, 48, 63, 0.9);
  top: 60%;
  left: 0;
  font: 4em sans-serif;
  font-family: "maobihanti";
}
@media (max-width: 800px) {
  .slide-main {
    margin-top: 1px;
    margin-bottom: 30px;
    width: 100vmin;
    overflow: hidden;
  }
  .slide-main,
  img {
    border-radius: 10px;
  }
  img,
  .el-carousel {
    width: 100vmin;
    height: 30vmax;
    overflow: hidden;
  }

  .slide-main h1 {
    width: 100vw;
    font-size: 30px;
  }
}
</style>