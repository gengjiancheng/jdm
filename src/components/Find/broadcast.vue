<template>
  <div>
    <div class="swiper">
      <van-swipe :loop="true" :width="300">
        <van-swipe-item v-for="item in ary" :key="item.id">
          <img :src="item.img" alt />
          <p>Vol:{{item.count}}</p>
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="anchor">
      <ul>
        <li class="lt">
          <div class="icon">
            <van-icon name="ellipsis" size="25px" />
          </div>
          <p class="zhu">主播力荐</p>
        </li>
        <li class="lt">
          <img src="../../assets/a.jpg" alt />
          <p>火锅鸡</p>
        </li>
        <li class="lt">
          <img src="../../assets/b.jpg" alt />
          <p>羊肠汤</p>
        </li>
        <li class="lt">
          <img src="../../assets/c.jpg" alt />
          <p>驴肉火烧</p>
        </li>
      </ul>
    </div>

    <div class="broad">
      <ul>
        <li>
          <img class="lt" src="../../assets/a.jpg" alt />
          <div class="R rt">
            <h3 class="lt">不买多只只卖实惠等你来撩!</h3>
            <p class="lt">lha潮码潮物</p>
            <div class="picBox">
              <div class="leftB">
                <img src="../../assets/a.jpg" alt />
                <p class="price">￥28.3</p>
              </div>
              <div class="rightB">
                <img src="../../assets/b.jpg" alt />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "broadcast",
  data() {
    return {
      ary: [
        {
          img: require("../../assets/a.jpg"),
          count: 1,
          id: 1
        },
        {
          img: require("../../assets/b.jpg"),
          count: 2,
          id: 2
        },
        {
          img: require("../../assets/c.jpg"),
          count: 3,
          id: 3
        }
      ]
    };
  },
  components: {}
};
</script>
<style lang="less" scoped>
.lt {
  float: left;
}
.rt {
  float: right;
}
.swiper {
  background: #ffffff;
  img {
    width: 75vw;
    height: 45vw;
    border-radius: 3vw;
    position: relative;
  }
  p {
    position: absolute;
    bottom: 2vw;
    left: 50%;
  }
}
.anchor {
  margin-top: 10vw;
  ul {
    width: 100vw;
    height: 30vw;
    li {
      width: 25vw;
      height: 30vw;
      img {
        width: 20vw;
        height: 20vw;
        border-radius: 2vw;
      }
      p {
        width: 25vw;
        text-align: center;
        line-height: 10vw;
        height: 10vw;
      }
      .zhu {
        width: 25vw;
        height: 10vw;
        text-align: center;
        font-size: 9vw;
        font-weight: 400;
      }
    }
  }
}
.broad {
  width: 100vw;
  ul {
    width: 100vw;
    li {
      width: 100vw;
      height: 50vw;
      > img {
        width: 50vw;
        height: 50vw;
      }
      .R {
        width: 46vw;
        height: 46vw;
        padding: 2vw;
        > h3 {
          width: 50vw;
          text-align: left;
        }
        .picBox {
            width: 44vw;
            height: 20vw;
        }
      }
    }
  }
}
</style>