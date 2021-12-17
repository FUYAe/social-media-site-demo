<template>
  <div id="bottom" class="footer">
    <p>Copyright © 2021-2021 yuanfu kaiyan wubin</p>

    <p>
      <a href="https://mail.qq.com/"
        ><img
          src="../assets/youxiang.png"
          height="18px"
          alt=""
        />2956903402@qq.com</a
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "BaseFooter",
  components: {},
};
</script>

<style scoped>
img {
  position: relative;
  top: -1px;
}
.footer {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  height: 100px;
  /* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2); */
}
</style>>

