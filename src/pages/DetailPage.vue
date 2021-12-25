<template>
  <div class="container">
    <DetailPageUp :dataItem="dataItem" :upPage="upPage" :nextPage="nextPage" />
    <DetailPageDown :dataItem="dataItem" :activeName="activeName" />
  </div>
</template>

<script>
import DetailPageUp from "@/components/DetailPageUp.vue";
import DetailPageDown from "@/components/DetailPageDown.vue";
export default {
  name: "DetailPage",
  components: {
    DetailPageUp,
    DetailPageDown,
  },
  data() {
    return {
      activeName: "first",
      dataAll: [],
      dataItem: {},
    };
  },
  methods: {
    nextPage(e) {
      let mid = Number(this.$route.params.id) + 1;
      if (mid > 6) {
        mid = 1;
      }
      if (mid < 1) {
        mid = 6;
      }
      this.dataItem = this.dataAll.filter((item) => {
        return item.cid == mid;
      })[0];

      this.$route.params.id = mid;
      this.$router.replace({
        name: "detail",
        params: {
          id: mid,
        },
      });
      this.$nextTick(function () {
        e.target.blur();
      });

      // 解决点击页面更新后元素不失去焦点问题---硬解，应该有更好的办法
      // this.$children[0].$children[0].$children[0].$el.blur();
      // for (let i = 0; i < 2; i++) {
      //   this.$children[0].$children[2].$children[i].$el.blur();
      // }
    },
    upPage(e) {
      let mid = Number(this.$route.params.id) - 1;
      if (mid > 6) {
        mid = 1;
      }
      if (mid < 1) {
        mid = 6;
      }
      this.dataItem = this.dataAll.filter((item) => {
        return item.cid == mid;
      })[0];
      this.$route.params.id = mid;
      this.$router.replace({
        name: "detail",
        params: {
          id: mid,
        },
      });
      this.$nextTick(function () {
        e.target.blur();
      });
      // this.$children[0].$children[0].$children[4].$el.blur();
      // for (let i = 0; i < 2; i++) {
      //   console.log(this.$children[0].$children[2].$children[i].$el);
      // }
    },
  },
  mounted() {
    console.log(this);
    let mid = this.$route.params.id - 1;
    if (mid > 6 || mid < 1) {
      mid = 1;
      this.$route.params.id = mid;
      this.$router.push({
        name: "detail",
        params: {
          id: mid,
        },
      });
    }

    this.dataAll = this.$store.state.mainData;
    this.dataItem = this.dataAll.filter((item) => {
      return item.cid == this.$route.params.id;
    })[0];
  },
};
</script>

<style scoped>
.container {
  margin-top: 60px;
  margin-bottom: 30px;
  /* border-radius: 3px; */
  width: 1000px;
  display: flex;
  /* border: 1px solid #e5e5e5;
  background: #fff; */
  flex-direction: column;
  justify-content: space-between;
}

@media screen and (max-width: 800px) {
  .container {
    margin-top: 0px;
    width: 100vw;
    display: flex;
    border: 1px solid #e5e5e5;
    background: #fff;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
