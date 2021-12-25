<template>
  <div class="down">
    <el-tabs v-model="activename">
      <el-tab-pane label="业务介绍" name="first">
        <p v-html="dataItem.businessIntro"></p>
      </el-tab-pane>
      <el-tab-pane label="涉及技术" name="second">
        <p v-html="dataItem.technology"></p>
      </el-tab-pane>
      <el-tab-pane label="技术效果" name="third">
        <p v-html="dataItem.techEffect"></p
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: "DetailPageDown",
  props: ["dataItem", "activeName"],
  data() {
    return {
      activename: this.activeName,
    };
  },
};
</script>
<style scoped>
.down {
  border-radius: 6px;
  /* border: 1px solid #e5e5e5; */
  box-shadow: 0 16px 48px #e7ebf6;
  background: #fff;
  text-align: left;
  margin-top: 40px;
  padding: 60px;
  padding-top: 20px;
  min-height: 800px;
}

p {
  text-indent: 2em;
}

@media screen and (max-width: 800px) {
  .down {
    width: 100vw;
    padding: 30px;
  }
  .el-tab-pane,
  .el-tabs {
    width: 100vm;
  }
}
</style>