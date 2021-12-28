<template>
  <div class="main-left">
    <HomeCarousel />
    <div class="item-container">
      <h3>
        热门
        <img src="../assets/huo.png" alt />新媒体公司
      </h3>
      <HomeMainItem v-for="(item, index) in mdata" :key="index" :item="item" />
      <div>more</div>
      <HomeMainSiteBrief />
    </div>
  </div>
</template>

<script>
import HomeMainItem from "./HomeMainItem.vue";
import HomeMainSiteBrief from "./HomeMainSiteBrief.vue";
import HomeCarousel from "@/components/HomeCarousel.vue";
export default {
  name: "HomeMain",
  components: {
    HomeMainItem,
    HomeMainSiteBrief,
    HomeCarousel,
  },
  data() {
    return {
      mdata: [],
    };
  },
  mounted() {
    this.mdata=this.$store.getters.getItems("mainData")
  },
};
</script>

<style scoped>
.main-left {
  float: left;
  margin-top: 20px;
}
.item-container {
  box-shadow: 0 16px 48px #e7ebf6;
  border-radius: 10px;
  /* height: 700px; */
  width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  margin-top: 10px;
}
@font-face {
  font-style: normal;
  font-family: myyiti;
  src: url("../assets/font/yiti.ttf");
}
.item-container h3 {
  margin: 4px;
  font-family: myyiti;
  color: rgb(41, 123, 138);
}
img {
  width: 15px;
  height: 15px;
}
@media (max-width: 800px) {
  .main-left {
    float: none;
  }
  .item-container {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.01);
    /* height: 700px; */
    width: 100vw;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    margin-top: 10px;
    align-items: center;
    flex-wrap: wrap;
  }

  .item-container h3 {
    margin: 4px;
  }
}
</style>