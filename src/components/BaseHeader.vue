<template>
  <div class="header" :class="{ fixed: fixed, hidden: hidden }">
    <div class="header-inner">
      <div class="left">
        <router-link active-class="active" to="/home"
          ><img src="../assets/sitelogo.png" alt=""
        /></router-link>
      </div>
      <div class="phone-show phone-input-outer">
        <input
          class="phone-show phone-input"
          placeholder="开始精彩搜索"
          suffix-icon="el-icon-search"
        /><i class="el-icon-search"></i>
      </div>
      <el-dropdown class="phone-show phone-more">
        <i class="el-icon-more"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            ><router-link active-class="active" to="/home"
              >主页</router-link
            ></el-dropdown-item
          >
          <el-dropdown-item @click="showMessage">登录</el-dropdown-item>
          <el-dropdown-item @click="showMessage">注册</el-dropdown-item>
          <el-dropdown-item @click="showMessage">帮助</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <div class="right no-phone">
        <span v-show="isVideoPage">
          <i class="el-icon-back" @click="pageBack" title="返回上一页"></i>
        </span>
        <span
          ><router-link active-class="active" to="/home"
            >主页</router-link
          ></span
        >

        <span><a href="#bottom" @click="showHelpMessage">帮助</a></span>
      </div>
    </div>
    <div
      class="msg-alert"
      :class="{ msghidden: hidden }"
      v-show="isShowMessage"
      center
      type="warning"
    >
      <p>
        <i class="el-icon-bell"></i>{{ showedMessage
        }}<i class="el-icon-bell"></i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseHeader",
  data() {
    return {
      fixed: false,
      hidden: false,
    };
  },
  methods: {
    showMessage() {
      this.$store.state.showMessage.show = true;
      this.$store.state.showMessage.message = "功能尚待完善，敬请期待！";

      setTimeout(() => {
        this.$store.state.showMessage.show = false;
        this.$store.state.showMessage.message = "";
      }, 1500);
    },
    showHelpMessage() {
      this.$store.state.showMessage.show = true;
      this.$store.state.showMessage.message = "请通过网页底部邮箱联系";

      setTimeout(() => {
        this.$store.state.showMessage.show = false;
        this.$store.state.showMessage.message = "";
      }, 3000);
    },
    pageBack() {
      this.$router.back();
    },
    watchScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop === 0) {
        this.fixed = false;
      } else if (scrollTop >= this.lastScrollTop) {
        this.fixed = false;
        this.hidden = true;
      } else {
        this.fixed = true;
        this.hidden = false;
      }
      this.lastScrollTop = scrollTop;
    },
  },
  computed: {
    isVideoPage() {
      return this.$store.state.isVideoPage;
    },

    isShowMessage() {
      return this.$store.state.showMessage.show;
    },
    showedMessage() {
      return this.$store.state.showMessage.message;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.watchScroll);
  },
};
</script>

<style scoped>
.phone-more {
  padding: 15px;
  font-size: 16px;
}
.phone-input-outer {
  width: 240px;
}
.el-submenu {
  min-width: 100px;
}
.phone-input-outer > i {
  font-weight: bold;
  color: rgb(136, 135, 135);
  padding: 10px;
  width: 20px;
  float: left;
  margin-top: 1px;
  border-bottom: rgb(212, 208, 208) 1px solid;
}
.phone-input-outer > i:hover {
  color: rgb(46, 46, 46);
}
.phone-input {
  float: left;
  width: 80%;
  /* border-radius: 20px; */
  padding: 10px;
  border-bottom: rgb(212, 208, 208) 1px solid;
}
.msg-alert {
  position: fixed;
  text-align: center;
  top: 56px;
  z-index: 9999;
  transition: 0.9s all ease;
  width: 100%;
  margin: 0 auto;
  background-color: #fdf6ec;
  color: #e6a23c;
  border-radius: 10px;
}
.msghidden {
  top: 0;
}
.hidden {
  top: -100px;
}
.fixed {
  background-color: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
span {
  color: #777;
  margin-right: 40px;
}
.el-icon-back {
  color: rgb(124, 124, 124);
  font-size: 18px;
}
span a:hover {
  color: rgb(55, 55, 55);
  position: relative;
  top: -0.05px;
  /* font-size: 16px; */
  /* z-index: 1001; */
}
span a {
  /* color: rgb(219, 219, 219); */
  color: rgb(124, 124, 124);
  font-size: 16px;
}
span .el-icon-back:hover {
  color: rgb(55, 55, 55);
  position: relative;
  top: -0.05px;
}
img {
  width: 120px;
  height: 50px;
}

.header {
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.99);
  /* background-color: rgba(117, 117, 117, 0.2); */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  box-shadow: 0 16px 48px #e7ebf6;
  padding-right: 10px;
  padding-left: 10px;
}
.header-inner {
  z-index: 1000;
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left {
  width: 120px;
  /* margin: 10px; */
  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: blanchedalmond; */
}
.hidden {
  top: -100px;
}
/* .fixed {
  background-color: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
} */

h2 {
  color: coral;
}
img {
  margin-left: 0;
}
.phone-show {
  display: none;
}
.no-phone {
  display: show;
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
@media (max-width: 800px) {
  .header-inner {
    width: 100vw;
  }
  .phone-show {
    display: block;
  }
  .no-phone {
    display: none;
  }
  span {
    color: #777;
    margin-right: 10px;
  }
  .header {
    width: 100vw;
    padding-right: 2vw;
  }
  img {
    width: 3vm;
  }
}

@media (max-width: 400px) {
  .header-inner {
    width: 100vw;
  }
  .phone-input-outer {
    width: 140px;
  }
  .phone-show {
    display: block;
  }
  .no-phone {
    display: none;
  }
  span {
    color: #777;
    margin-right: 10px;
  }
  .header {
    width: 100vw;
    padding-right: 2vw;
  }
  img {
    width: 3vm;
  }
}
</style>
