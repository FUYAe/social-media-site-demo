<template>
  <div class="up">
    <img :src="dataItem.logo" alt="图片加载失败" />
    <div class="up-brief">
      <span>
        <h1><el-popover
    placement="right"
    width="120"
    trigger="hover"
    content="点击直达官网"><a :href="dataItem.link" slot="reference">{{ dataItem.name }}</a></el-popover></h1>
        <h4 v-html="dataItem.brief"></h4>
      </span>
      <div class="max-show">
        <el-row>
          <el-button ref="upbutton" @click="upPage($event)"
            ><i class="el-icon-arrow-left"></i
          ></el-button>
          <router-link
            active-class="active"
            :to="{
              name: 'prospect',
              params: {
                id: $route.params.id,
              },
            }"
            ><el-button>前景分析</el-button></router-link
          >
          <router-link
            push
            active-class="active"
            :to="{
              name: 'videoPlayer',
              params: {
                id: $route.params.id,
              },
            }"
            ><el-button>视频介绍</el-button></router-link
          >
          <router-link
            active-class="active"
            :to="{
              name: 'imgbrief',
              params: {
                id: $route.params.id,
              },
            }"
            ><el-button>图文介绍</el-button></router-link
          >
          <el-button ref="downbutton" @click="nextPage($event)"
            ><i class="el-icon-arrow-right"></i
          ></el-button>
        </el-row>
      </div>
      <div class="min-show">
        <el-row>
          <router-link
            active-class="active"
            :to="{
              name: 'prospect',
              params: {
                id: $route.params.id,
              },
            }"
            ><el-button>前景分析</el-button></router-link
          >
          <router-link
            active-class="active"
            :to="{
              name: 'videoPlayer',
              params: {
                id: $route.params.id,
              },
            }"
            ><el-button>视频介绍</el-button></router-link
          >

          <router-link
            active-class="active"
            :to="{
              name: 'imgbrief',
              params: {
                id: $route.params.id,
              },
            }"
            ><el-button>图文介绍</el-button></router-link
          >
        </el-row>
        <el-row>
          <el-button ref="upbutton" @click="upPage($event)"
            ><i class="el-icon-arrow-left"></i
          ></el-button>
          <el-button ref="downbutton" @click="nextPage($event)"
            ><i class="el-icon-arrow-right"></i
          ></el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailPageUp",
  props: ["dataItem", "nextPage", "upPage"],
};
</script>
<style scoped>
.min-show {
  display: none;
}
.max-show {
  display: block;
}
.up {
  display: flex;
  height: 451px;
}
.up-brief {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
}

.up img {
  width: 400px;
  height: 400px;
  margin: 10px;
  border-radius: 10px;
}

.el-button:hover a {
  color: #409eff;
}

a {
  color: #606266;
}
p {
  text-indent: 2em;
}
span h4 {
  text-align: left;
  text-indent: 2em;
}
.el-button {
  margin-left: 4px;
  margin-right: 4px;
  padding: 10px 16px;
}
a .el-button {
  margin-left: 4px;
  margin-right: 4px;
  padding: 10px 16px;
  width: 90px;
}

@media screen and (max-width: 800px) {
  .max-show {
    display: none;
  }
  .min-show {
    display: flex;
    flex-direction: column;
  }
  .el-row {
    display: none;
    /* width: 60vm; */
    display: flex;
    flex-wrap: wrap;
    /* background: #fff; */
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  img {
    display: none;
  }

  .up {
    height: auto;
    width: 100vw;
  }
  .up-brief {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 0px;
  }
  .el-button {
    width: 20vmin;
    padding: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  a .el-button {
    margin-left: 2px;
    margin-right: 2px;
    padding: 5px;
    padding-top: 10px;
    padding-bottom: 10px;

    width: 20vmin;
  }
}
</style>