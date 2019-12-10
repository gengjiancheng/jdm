<template>
  <div>
    <div class="nav">
      <van-tabbar v-model="active">
        <router-link to="/index/Home" tag="span">
          <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        </router-link>
        <router-link to="/index/Classification" tag="span">
          <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
        </router-link>
        <router-link to="/index/Find" tag="span">
          <van-tabbar-item icon="share">发现</van-tabbar-item>
        </router-link>
        <router-link to="/index/Cart" tag="span">
          <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
        </router-link>
        <router-link to="/index/My" tag="span">
          <van-tabbar-item icon="contact">我的</van-tabbar-item>
        </router-link>
      </van-tabbar>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {
      active: 0
    };
  },
  components: {}
};
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
.nav {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 15vw;
  display: flex;
  box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, 0.6);
  background: white;
  z-index: 1000;
  
  }
  span {
    flex: 1;
    width: 20vw;
    line-height: 15vw;
    font-size: 4vw;
    
}
</style>