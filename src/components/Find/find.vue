<template>
  <div>
    <div class="navBox">
      <div class="top">
        <div class="leftIcon lt">
          <van-icon name="manager-o" color="white" size="25px" />
        </div>
        <span class="text">发现</span>
        <div class="rightIcon rt">
          <van-icon name="search" color="white" size="25px" />
          <van-icon class="chat" name="chat-o" color="white" size="25px" />
        </div>
      </div>
    </div>
    <van-tabs v-model="active" :duration="0" :swipe-threshold="6">
      <van-tab title="关注" to="/index/Find/Follow"></van-tab>
      <van-tab title="晒一晒">晒一晒</van-tab>
      <van-tab title="京品">京品</van-tab>
      <van-tab title="5G">5G</van-tab>
      <van-tab title="直播">直播</van-tab>
      <van-tab title="视频">视频</van-tab>
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
      active: 0
    };
  },
  components: {}
};
</script>
<style lang="less" scoped>
.van-tab {
  padding: 0;
  margin: 0;
}
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