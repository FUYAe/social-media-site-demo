<template>
  <div class="item-container">
    <HomeMainItem
      v-for="(item, index) in finaldata"
      :key="index"
      :item="item"
    />
    <h2 id="tip" style="display: none">无结果</h2>
  </div>
</template>
<script>
import HomeMainItem from "../components/HomeMainItem.vue";

export default {
  name: "MobileSearchPage",
  components: {
    HomeMainItem,
  },
  data() {
    return {
      finaldata: [],
    };
  },
  mounted() {
    let data = this.$store.state.mainData;
    this.finaldata = data.filter((item) => {
      return item.name.indexOf(this.$route.params.searchtxt.trim()) != -1;
    });
    if (this.finaldata.length == 0) {
      document.getElementById("tip").setAttribute("style", "display: block;");
      setTimeout(() => {
        this.$router.push({
          name: "home",
        });
      }, 5000);
    }
  },
};
</script>

<style scoped>
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
  .item-container {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.01);
    /* height: 700px; */
    width: 100vw;
    min-height: 90vh;
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