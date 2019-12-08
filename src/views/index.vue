<template>
  <div>
    <div class="nav">
      <router-link to="/index/Home" tag="span">首页</router-link>
      <router-link to="/index/Classification" tag="span">分类</router-link>
      <router-link to="/index/Find" tag="span">发现</router-link>
      <router-link to="/index/Cart" tag="span">购物车</router-link>
      <router-link to="/index/My" tag="span">我的</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {};
  },
  components: {}
};
</script>
<style lang="less">
.nav {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 15vw;
  display: flex;
  span {
    flex: 1;
    line-height: 15vw;
    font-size: 4vw;
  }
}
</style>