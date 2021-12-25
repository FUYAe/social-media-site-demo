<template>
  <div class="main-container" style="height: 100%,">
    <!-- 页面加载动画 -->
    <BaseLoading />
    <!-- mainFooter -->
    <BaseHeader />

    <!-- 占位，补充header的z-index缺失 -->
    <div style="margin-top: 40px">&nbsp;</div>

    <!-- 路由位 -->
    <div class="display-container">
      <router-view :key="$route.fullPath"></router-view>
    </div>
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";
import BaseLoading from "@/components/BaseLoading";
export default {
  name: "App",
  components: {
    BaseHeader,
    BaseFooter,
    BaseLoading,
  },
};
</script>

<style>
.main-container {
  background-color: #f8fafc;
}
.display-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
/* 屏幕小于800隐藏轮播图按钮，放在app组件主要是因为app组件无scoped */
@media (max-width: 800px) {
  .el-carousel__arrow {
    display: none;
  }
}
/* 全局css配置 */
.el-popover{
  width: 20px;
}
em {
  color: rgba(0, 0, 0, 0.3);
}
p {
  line-height: 35px;
}
.d p,
h1,
h2,
h3,
h4,
h5 {
  user-select: none;
}
html,
body {
  height: 100%;
  text-align: center;
  min-height: 100%;
  background-color: #f8fafc;
}
* {
  z-index: 0;
  user-select: none;
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
html,
body,
div,
ul,
li,
h1,
h2,
h3,
h4,
h5,
h6,
p,
dl,
dt,
dd,
ol,
form,
input,
textarea,
th,
td,
select {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Microsoft YaHei";
  font-size: 14px;
  color: #333;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}
ul,
ol {
  list-style: none;
}

img {
  border: none;
  vertical-align: middle;
}

a {
  text-decoration: none;
  color: #232323;
}

table {
  border-collapse: collapse;
  table-layout: fixed;
}

input,
textarea {
  outline: none;
  border: none;
}

textarea {
  resize: none;
  overflow: auto;
}

.clearfix {
  zoom: 1;
}

.clearfix:after {
  content: ".";
  width: 0;
  height: 0;
  visibility: hidden;
  display: block;
  clear: both;
  overflow: hidden;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

.tl {
  text-align: left;
}

.tc {
  text-align: center;
}

.tr {
  text-align: right;
}

.ellipse {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.inline {
  display: inline-block;
  *display: inline;
  *zoom: 1;
}
</style>
