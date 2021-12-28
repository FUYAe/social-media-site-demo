<template>
  <div class="home-main">
    <!-- home的主要信息页 -->
    <HomeMain />
    <HomeSideBar />
  </div>
</template>

<script>
import HomeMain from "@/components/HomeMain.vue";
import HomeSideBar from "@/components/HomeSideBar.vue";
import HomeCarousel from "@/components/HomeCarousel.vue";
export default {
  name: "Home",
  components: {
    HomeMain,
    HomeCarousel,
    HomeSideBar,
  },
};
</script>

<style scoped>
.home-main {
  width: 1200px;
  position: relative;
  margin: auto;
}
@media (max-width: 800px) {
  .home-main {
    width: 100vw;
  }
}
</style>>

