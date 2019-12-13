<template>
  <div>
    <div class="box">
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
            <van-icon class="chat" name="chat-o" color="white" size="25px" @click="ale" />
          </div>
        </div>
      </div>
      <van-tabs v-model="active" :duration="0" :swipe-threshold="2">
        <van-tab title="关注" to="/index/Find/Follow"></van-tab>
        <van-tab title="直播" to="/index/Find/Broadcast"></van-tab>
      </van-tabs>
      <!-- 右上角消息定位弹框 -->
      <div class="dialog" v-show="discover">
        <ul>
          <li>
            <van-icon name="chat-o" />消息
          </li>
          <router-link to="/index/Home">
            <li>
              <van-icon name="home-o" />首页
            </li>
          </router-link>
          <router-link to="/search">
            <li>
              <van-icon name="search" />搜索
            </li>
          </router-link>
          <router-link to="/index/Find/Follow">
            <li>
              <van-icon name="like-o" />我的关注
            </li>
          </router-link>
          <li>
            <van-icon name="fire-o" />浏览记录
          </li>
          <li>
            <van-icon name="edit" />功能反馈
          </li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "find",
  data() {
    return {
      active: 0,
      show: true,
      discover: false
    };
  },
  components: {},
  methods: {
    ale() {
      this.discover = !this.discover;
    }
  }
};
</script>
<style lang="less" scoped>
.box {
  width: 100vw;
  height: 100%;
  position: relative;
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
  .dialog {
    height: 42vw;
    width: 25vw;
    position: absolute;
    right: 10vw;
    top: 10vw;
    z-index: 30;
    background: rgba(0, 0, 0, 0.2);
    ul {
      height: 42vw;
      width: 25vw;
      text-align: left;
      li {
        width: 22vw;
        height: 7vw;
        line-height: 7vw;
        padding-left: 3vw;
        color: #000;
      }
    }
  }
}
</style>