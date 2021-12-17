<template>
  <div class="item-main">
    <img :src="item.logo" alt="" width="100px" height="100px" />
    <div class="brief">
      <h4>
        <b>{{ item.name }}</b>
      </h4>
      <div>
        <p class="brief-text">
          {{ item.firstbrief }}
        </p>

        <p class="more">
          <router-link
            active-class="active"
            :to="{
              name: 'detail',
              params: {
                id: item.cid,
              },
            }"
            ><span class="more">详情<i class="el-icon-d-arrow-right"></i></span
          ></router-link>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeMainItem",
  props: ["item"],
  data() {
    return {
      currentDate: new Date(),
    };
  },
};
</script>
<style scoped>
.item-main {
  height: "120px";
  width: 800px;
  display: flex;
  justify-content: space-between;
  background-color: #f5f6f8;
  border-radius: 15px;
  box-shadow: 0 2px 12px 0 rgba(70, 70, 70, 0.1);
  padding: 5px;
  margin: 10px;
}
.item-main:hover {
  box-shadow: 0 2px 12px 0 rgba(70, 70, 70, 0.15);
  position: relative;
  top: -0.4px;
  left: -0.4px;
}
img {
  border-radius: 10px;
}
.brief {
  width: 900px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.brief div {
  padding: 5px;
  text-align: right;
}
.more {
  color: #aaa;
  text-align: end;
  position: relative;
  top: 6px;
}
.more:hover {
  color: #555;
}
h4 {
  text-align: left;
  width: 100%;
  padding-left: 5px;
}
.brief-text {
  line-height: 15px;
  text-align: left;
  padding-right: 3em;
  font-size: 0.9em;
  color: rgba(0, 0, 0, 0.5);
}
@media (max-width: 800px) {
  .brief-text {
    display: none;
  }
  .item-main {
    height: "50px";
    width: 80vw;
    display: flex;
    justify-content: space-between;
    background-color: #f5f6f8;
    border-radius: 15px;
    box-shadow: 0 2px 12px 0 rgba(70, 70, 70, 0.1);
    padding: 2vw;
    margin: 4vw;
  }
  img {
    width: 15vw;
    height: 15vw;
  }
}
</style>

