<template>
  <div>
    <div class="navBox">
      <div class="top" v-show="show">
        <div class="leftIcon lt">
          <van-icon name="manager-o" color="white" size="25px" />
        </div>
        <span class="text">发现</span>
        <div class="rightIcon rt">
          <router-link to="/search">
            <van-icon name="search" color="white" size="25px" />
          </router-link>
          <van-icon class="chat" name="chat-o" color="white" size="25px" />
        </div>
      </div>
    </div>
    <van-tabs v-model="active" :duration="0" :swipe-threshold="2">
      <van-tab title="关注" to="/index/Find/Follow"></van-tab>
      <van-tab title="直播" to="/index/Find/Broadcast"></van-tab>
    </van-tabs>
    <router-view></router-view>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "find",
  data() {
    return {
      active: 0,
      show: true
    };
  },
  components: {},
  methods: {}
};
</script>
<style lang="less" scoped>
// .van-tab {
//   padding: 0;
//   margin: 0;
// }
.lt {
  float: left;
}
.rt {
  float: right;
}
.navBox {
  height: 20vw;
  width: 100vw;
  background: red;
  overflow: hidden;
  padding-top: 3vw;
  .leftIcon {
    width: 15vw;
    height: 15vw;
    line-height: 15vw;
  }
  .rightIcon {
    width: 30vw;
    height: 15vw;
    line-height: 15vw;
    .chat {
      padding-left: 2vw;
    }
  }
  .text {
    text-align: center;
    margin-left: 10vw;
    line-height: 10vw;
    height: 10vw;
    font-size: 25px;
  }
}
</style>