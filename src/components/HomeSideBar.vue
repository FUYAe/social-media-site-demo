<template>
  <div class="side-bar">
    <div class="item1">
      <span>|搜索</span>
      <br />
      <div>
        <input
          class="input"
          type="text"
          @keyup.enter="searchMoth"
          v-model="searchText"
          placeholder="开始精彩搜索"
        />
        <i @click="searchMoth" class="el-icon-search"></i>
      </div>
    </div>
    <div v-if="searchResultIsShow" class="search-result">
      <p class="search-item" v-if="searchIsNull">无结果</p>
      <p class="search-item" v-for="item in finaldata" :key="item.cid">
        <router-link
          active-class="active"
          :to="{
            name: 'detail',
            params: {
              id: item.cid,
            },
          }"
        >
          <img :src="item.logo" width="15px" height="15px" alt="!" style="margin-bottom: 2px" />
          {{ item.name }}
        </router-link>
      </p>
    </div>

    <div class="item2">
      <p>生活就像骑自行车，不会自己倒，除非你不往前蹬。</p>
      <p>
        Life is like riding a bicycle, not falling on your own, unless you don't
        go forward.
      </p>
    </div>
    <div class="item3">
      <img src="../assets/loginpng.png" alt />
      <p>登录，添加你喜欢的词条！</p>
      <el-row>
        <el-button @click="showMessage" type="primary">
          <i class="el-icon-user"></i> 登录
        </el-button>
        <el-button @click="showMessage" type="success">
          <i class="el-icon-circle-plus-outline"></i> 注册
        </el-button>
      </el-row>
    </div>
    <div class="item4">
      <p class="new-header">新发布</p>

      <p class="new-item" v-for="item in $store.state.mainDatalight" :key="item.cid">
        <router-link
          active-class="active"
          :to="{
            name: 'detail',
            params: {
              id: item.cid,
            },
          }"
        >
          <img :src="item.logo" width="15px" height="15px" alt="!" style="margin-bottom: 2px" />
          {{ item.name }}
        </router-link>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeSideBar",
  data() {
    return {
      searchText: "",
      finaldata: [],
      searchResultIsShow: false,
      searchIsNull: false,
    };
  },
  watch: {
    searchText(newValue, oldValue) {
      if (newValue == "") {
        setTimeout(() => {
          this.searchResultIsShow = false;
        }, 4000);
      }
    },
  },
  methods: {
    searchMoth() {
      if (this.searchText == "") return;
      let data = this.$store.state.mainDatalight;
      this.finaldata = data.filter((item) => {
        return item.name.indexOf(this.searchText.trim()) != -1;
      });
      this.searchResultIsShow = true;
      document
        .getElementsByClassName("item1")[0]
        .setAttribute("style", "margin-bottom: 10px;");
      if (this.finaldata.length == 0) {
        this.searchIsNull = true;
      }
      if (this.finaldata.length != 0) {
        this.searchIsNull = false;
      }
      if (this.finaldata.length == 0) {
        setTimeout(() => {
          this.searchText = "";
          this.searchResultIsShow = false;
          document
            .getElementsByClassName("item1")[0]
            .setAttribute("style", "margin-bottom: 40px;");
        }, 5000);
      }
    },
    showMessage() {
      this.$store.dispatch("showMessage","功能尚待完善，敬请期待！")
    },
  },
};
</script>
<style scoped>
.side-bar {
  transition: 0.6s all ease;
  /* position: fixed;
  left: 984.5px;
  top: 48px; */
  width: 280px;
  float: right;
  /* background-color: #fff; */
  /* height: 1400px; */
}
.side-bar > div {
  /* background-color: #fff; */
  /* height: 200px; */
  border-radius: 10px;
  margin-bottom: 40px;
  transition: all 0.1s;
}
.side-bar > div:hover {
  transform: scale(1.01);
}
/* item1 */
.input {
  border: none;
  width: 80%;
  height: 30px;
  margin-top: 20px;
  border-bottom: rgb(212, 208, 208) 1px solid;
}
.el-icon-search {
  border-bottom: rgb(212, 208, 208) 1px solid;
  padding-bottom: 8px;
  font-weight: bolder;
  color: rgb(212, 208, 208);
}
.item1 {
  position: relative;
  margin-top: 40px;
}
.item1 > span {
  float: left;
  color: #409eff;
  font-weight: bold;
  font-size: 15px;
}
.item1 div {
  margin-top: 15px;
  background-color: #fff;
  height: 70px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 16px 48px #e7ebf6;
}
.item1 > div > i:hover {
  color: black;
}
.search-result {
  transition: 0.6s all ease;
  background-color: #fff;
  box-shadow: 0 16px 48px #e7ebf6;
  margin-top: 0px;
  padding: 8px;
  min-height: 40px;
}
/* item1-search-item */
.search-item {
  text-align: left;
  text-indent: 2em;
  line-height: 25px;
  color: rgb(110, 110, 110);
}
.search-item > a {
  text-align: left;
  line-height: 25px;
  color: rgb(110, 110, 110);
}
.search-item > a:hover {
  color: rgb(73, 73, 73);
}

/* item2 */
.item2 {
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 16px 48px #e7ebf6;
}
.item2 > p {
  text-align: center;
  line-height: 23px;
  color: rgb(104, 100, 100);
}
/* item3 */
.item3 {
  position: relative;
  box-shadow: 0 16px 48px #e7ebf6;
  background-color: #fff;
  padding: 20px;
}
.item3 > p {
  margin-top: 10px;
  text-align: center;
  line-height: 23px;
  color: rgb(104, 100, 100);
}
.item3 > img {
  border-radius: 60px;
  height: 60px;
  width: 60px;
  background-color: rgb(238, 238, 238);
}
.item3 div {
  margin-top: 15px;
  background-color: #fff;
  height: 70px;
  border-radius: 10px;
  margin-bottom: 20px;
}
/* item4 */
.item4 {
  margin-top: 15px;
  background-color: #fff;
  box-shadow: 0 16px 48px #e7ebf6;
  padding: 20px;
}
.item4 > .new-header {
  font-weight: bold;
  color: rgb(109, 108, 108);
  font-size: 15px;
  text-align: left;

  border-bottom: rgb(226, 226, 226) 1px solid;
}
.item4 > .new-item {
  text-align: left;
  text-indent: 2em;
  line-height: 25px;
  color: rgb(110, 110, 110);
}
.item4 > .new-item > a {
  text-align: left;
  line-height: 25px;
  color: rgb(110, 110, 110);
}
.item4 > .new-item > a:hover {
  color: rgb(73, 73, 73);
}

::-moz-placeholder {
  color: rgb(212, 208, 208);
}
:-moz-placeholder {
  color: rgb(212, 208, 208);
}
::-webkit-input-placeholder {
  color: rgb(212, 208, 208);
}
:-ms-input-placeholder {
  color: rgb(212, 208, 208);
}
.el-button {
  margin: 15px;
}
@media (max-width: 800px) {
  .side-bar {
    display: none;
  }
}
</style>
