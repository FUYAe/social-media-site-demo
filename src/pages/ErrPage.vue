<template>
  <div>
    <img src="../assets/error.png" alt="" srcset="" />
  </div>
</template>

<script>
export default {
  name: "ErrPage",
  components: {},
};
</script>

<style scoped>
div {
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
img {
  width: 400px;
  height: 400px;
}
@media (max-width: 800px) {
  img {
    width: 80vw;
    height: 80vw;
  }
}
</style>
