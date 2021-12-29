<template>
  <div class="pre-view-main">
    <h2>{{ myData.name }}</h2>
    <div class="pre-view" v-html="myData.prospect" v-cloak></div>
  </div>
</template>
<script>
export default {
  name: "ProSpectPage",
  data() {
    return {
      myData: {},
    };
  },
  mounted() {
    this.myData = this.$store.getters.getItemByCid(
      "preView",
      this.$route.params.id
    );
    this.$store.state.isInnerPage = true;
  },
  beforeDestroy() {
    this.$store.state.isInnerPage = false;
  },
};
</script>
<style scoped>
.pre-view-main {
  width: 1000px;
  background-color: #fff;
  padding: 70px;
  margin-top: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.01);
  border-radius: 10px;
}
.pre-view >>> p {
  text-align: left;
  text-indent: 2em;
  line-height: 50px;
}
.pre-view >>> h2 {
  margin-top: 30px;
  text-align: center;
  color: rgb(80, 142, 223);
}
.pre-view >>> h1 {
  margin-top: 30px;
  text-align: center;
  color: rgb(80, 142, 223);
}
.pre-view >>> h3 {
  margin-top: 30px;
  text-align: center;
  color: rgb(80, 142, 223);
}
@media (max-width: 800px) {
  .pre-view-main {
    width: 100vw;
    background-color: #fff;
    padding: 30px;
    margin-top: 20px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.01);
    border-radius: 10px;
  }
  .pre-view-main >>> p {
    line-height: 35px;
  }
}
</style>