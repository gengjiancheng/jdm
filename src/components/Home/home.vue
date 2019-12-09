<template>
  <div class="mainBox">
    <div class="one">
      <div class="topBox cl">
        <div class="lt line"></div>
        <van-search
          v-model="value"
          label=" .  .  ."
          placeholder="请输入搜索关键词"
          shape="round"
          @search="onSearch"
          class="inp lt"
          background="transparent"
        ></van-search>
        <div class="log rt">登陆</div>
      </div>
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in imgList" :key="item.id">
          <img :src="item.img" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="mall_nav">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import { getAddressApi } from "../../api/address";
export default {
  name: "home",
  data() {
    return {
      address: "",
      imgList: [
        {
          id: 1,
          img: require("../../pictures/1.jpg")
        },
        {
          id: 2,
          img: require("../../pictures/2.jpg")
        },
        {
          id: 3,
          img: require("../../pictures/3.jpg")
        },
        {
          id: 4,
          img: require("../../pictures/4.jpg")
        },
        {
          id: 5,
          img: require("../../pictures/5.jpg")
        },
        {
          id: 6,
          img: require("../../pictures/6.jpg")
        },
        {
          id: 7,
          img: require("../../pictures/7.jpg")
        },
        {
          id: 8,
          img: require("../../pictures/8.jpg")
        }
      ]
    };
  },
  methods: {
    getAddress(name) {
      getAddressApi({ name }).then(result => {
        this.address = result.address;
      });
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
.one {
  background: url("./back-img.jpg") no-repeat center center;
  background-size: 100%;
  height: 50vw;
}
.mainBox {
  width: 100vw;
  height: 100vw;
  box-sizing: border-box;
  .topBox {
    background: transparent;
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 12vw;
    .line {
      width: 15vw;
      height: 100%;
      background: url("./1.png") no-repeat 50% center;
      background-size: 40% 40%;
    }
    .inp {
      height: 12vw;
      line-height: 12vw;
      width: 70%;
      padding: 10px 0;
    }
    .inp::before {
      content: "";
      display: block;
      background: url("./2.png") no-repeat left center;
      background-size: 100% 100%;
      width: 6vw;
      height: 5vw;
      position: absolute;
      left: 18vw;
    }
    .log {
      height: 100%;
      line-height: 12vw;
      padding: 0 4vw 0 0;
      color: #fff;
      font-size: 3.8vw;
    }
  }
}
.van-swipe {
  width: 92vw;
  height: 38vw;
  position: absolute;
  top: 13vw;
  left: 4vw;
  border-radius: 2vw;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>