<template>
  <div class="aaa">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
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
          <li class="lt" v-for="item in ary2" :key="item.id">
            <img :src="item.img" alt />
            <p>{{item.desc}}</p>
          </li>
        </ul>
      </div>
      <div class="broad">
        <ul>
          <li v-for="item in ary1" :key="item.id">
            <img class="lt" :src="item.img1" alt />
            <div class="R lt">
              <h3 class="lt">{{item.desc}}</h3>
              <p class="lt">{{item.shop}}</p>
              <div class="picBox lt">
                <div class="leftB lt">
                  <img :src="item.img2" alt />
                  <p class="price">￥{{item.price}}</p>
                </div>
                <div class="rightB rt">
                  <img :src="item.img3" alt />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </van-pull-refresh>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "broadcast",
  data() {
    return {
      isLoading: false,
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
      ],
      ary1: [
        {
          id: 1,
          img1: require("../../assets/a.jpg"),
          desc: "二零三!",
          shop: "lha潮码潮物",
          img2: require("../../assets/b.jpg"),
          price: "28.3",
          img3: require("../../assets/c.jpg")
        },
        {
          id: 2,
          img1: require("../../assets/6.jpg"),
          desc: "左手指月!",
          shop: "lha潮码潮物",
          img2: require("../../assets/5.jpg"),
          price: "155.7",
          img3: require("../../assets/7.jpg")
        },
        {
          id: 3,
          img1: require("../../assets/5.jpg"),
          desc: "阍者!",
          shop: "lha潮码潮物",
          img2: require("../../assets/6.jpg"),
          price: "230.4",
          img3: require("../../assets/7.jpg")
        },
        {
          id: 4,
          img1: require("../../assets/6.jpg"),
          desc: "忽而今夏!",
          shop: "lha潮码潮物",
          img2: require("../../assets/a.jpg"),
          price: "1200",
          img3: require("../../assets/8.jpg")
        },
        {
          id: 5,
          img1: require("../../assets/d.jpg"),
          desc: "不亏不欠!",
          shop: "lha潮码潮物",
          img2: require("../../assets/7.jpg"),
          price: "1581",
          img3: require("../../assets/6.jpg")
        }
      ],
      ary2: [
        {
          id: 1,
          img: require("../../assets/a.jpg"),
          desc: "火锅鸡"
        },
        {
          id: 2,
          img: require("../../assets/5.jpg"),
          desc: "驴肉火烧"
        },
        {
          id: 3,
          img: require("../../assets/8.jpg"),
          desc: "羊肠汤"
        }
      ]
    };
  },
  components: {},
  created() {
    this.onRefresh();
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    }
  }
};
</script>
<style lang="less" scoped>
.aaa {
  background: #eee;
}
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
    overflow: hidden;
    li {
      width: 100vw;
      height: 50vw;
      background: white;
      margin: 2vw 0 2vw 0;
      border-radius: 15px;
      > img {
        width: 50vw;
        height: 50vw;
      }
      .R {
        width: 46vw;
        height: 46vw;
        padding: 2vw;
        > h3 {
          width: 100vw;
          text-align: left;
        }
        >p{
          width: 100vw;
          text-align: left;
        }
        .picBox {
          width: 44vw;
          height: 22vw;
          .leftB {
            width: 22vw;
            height: 22vw;
            position: relative;
            > img {
              width: 100%;
              height: 100%;
              border-radius: 2vw;
            }
            p {
              position: absolute;
              left: 0;
              bottom: 0;
              height: 5vw;
              width: 100%;
              text-align: center;
              background: rgba(0, 0, 0, 0.4);
            }
          }
          .rightB {
            width: 22vw;
            height: 22vw;
            // position: relative;
            > img {
              width: 100%;
              height: 100%;
              border-radius: 2vw;
            }
          }
        }
      }
    }
  }
}
</style>