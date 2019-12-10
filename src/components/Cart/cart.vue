<template>
  <div>
    <div class="header">
      <div>
        <van-icon class="arrow" name="arrow-left" />
      </div>
      <div class="cart">购物车</div>
      <div class="menu" @click="submit">
        <van-icon name="ellipsis" />
      </div>
    </div>
    <div class="cart_img">
      <img src="@/assets/cartimg.png" alt />
      <p>购物车空空如也，去逛逛吧~</p>
    </div>
    <div class="shopcart_mod_title">
      <span class="shopcart_mod_title_text">京东秒杀</span>
    </div>
    <div class="carousel">
      <div class="skill_head">
        <div class="title">京东秒杀</div>
        <div class="count_down">
          <span class="time">18点场</span>
          <div class="count_down_detail">
            <van-count-down :time="time">
              <template v-slot="timeData">
                <span class="item">{{ timeData.hours }}</span>
                <span class="item">{{ timeData.minutes }}</span>
                <span class="item">{{ timeData.seconds }}</span>
              </template>
            </van-count-down>
          </div>
        </div>
        <div class="link"></div>
      </div>
      <div class="swiper">
        <ul>
          <li v-for="item in ary" :key="item.id">
            <div class="image">
              <img :src="item.pic" alt />
            </div>
            <p class="price">
              ¥288.00
              <span class="del">￥499.00</span>
            </p>
          </li>
          <li class="mall_seckill_item type_more">
            <div class="btn">
              <i class="inner">查看更多</i>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="shopcart_mod_title shopcart_mod_title">
      <span class="shopcart_mod_title_text">可能你还想要</span>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "cart",
  data() {
    return {
      ary: [
        {
          id: 1,
          pic: require("@/assets/img1.dpg.webp"),
          price: "￥20000",
          oldprice: "￥40000"
        },
        {
          id: 2,
          pic: require("@/assets/img2.dpg.webp"),
          price: "￥20000",
          oldprice: "￥40000"
        },
        {
          id: 3,
          pic: require("@/assets/img3.dpg.webp"),
          price: "￥20000",
          oldprice: "￥40000"
        },
        {
          id: 4,
          pic: require("@/assets/img4.dpg.webp"),
          price: "￥20000",
          oldprice: "￥40000"
        },
        {
          id: 5,
          pic: require("@/assets/img5.dpg.webp"),
          price: "￥20000",
          oldprice: "￥40000"
        },
        {
          id: 6,
          pic: require("@/assets/img6.dpg.webp"),
          price: "￥20000",
          oldprice: "￥40000"
        },
        {
          id: 7,
          pic: require("@/assets/img1.dpg.webp"),
          price: "￥20000",
          oldprice: "￥40000"
        },
        {
          id: 8,
          pic: require("@/assets/img2.dpg.webp"),
          price: "￥20000",
          oldprice: "￥40000"
        },
        {
          id: 9,
          pic: require("@/assets/img3.dpg.webp"),
          price: "￥20000",
          oldprice: "￥40000"
        },
        {
          id: 10,
          pic: require("@/assets/img4.dpg.webp"),
          price: "￥20000",
          oldprice: "￥40000"
        },
        {
          id: 11,
          pic: require("@/assets/img5.dpg.webp"),
          price: "￥20000",
          oldprice: "￥40000"
        },
        {
          id: 12,
          pic: require("@/assets/img6.dpg.webp"),
          price: "￥20000",
          oldprice: "￥40000"
        }
      ],
      timeData: [
        {
          hours: 1,
          minutes: 1,
          seconds: 1
        }
      ]
    };
  },
  components: {}
};
</script>
<style lang="less" scoped>
.header {
  display: flex;
  width: 100%;
  height: 11.73vw;
  position: relative;

  .arrow {
    width: 11.73vw;
    height: 11.73vw;
    font-size: 5.33vw;
    line-height: 11.73vw;
  }
  .cart {
    flex: 1;
    height: 11.73vw;
    line-height: 11.73vw;
  }
  .menu {
    width: 11.73vw;
    height: 11.73vw;
    font-size: 5.33vw;
    line-height: 11.73vw;
  }
  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    pointer-events: none;
    background-color: #e5e5e5;
    height: 1px;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
.cart_img {
  height: 33vw;
  padding: 18.67vw 0 17.33vw;
  text-align: center;
  img {
    width: 24vw;
    height: 24vw;
  }
  p {
    font-size: 16px;
    line-height: 4.27vw;
    color: #333;
    margin-top: 4vw;
  }
}
.shopcart_mod_title {
  margin: 15px 0;
  font-size: 3.2vw;
  color: #999;
  text-align: center;
  .shopcart_mod_title_text {
    z-index: 2;
    padding: 0 4vw;
    position: relative;
    background-color: #f7f7f7;
  }
  .shopcart_mod_title_text::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0.8vw;
    margin-top: -0.53vw;
    width: 1.06vw;
    height: 1.06vw;
    background-color: #ccc;
    transform: rotate(45deg);
  }
  .shopcart_mod_title_text::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 19vw;
    margin-top: -0.53vw;
    width: 1.06vw;
    height: 1.06vw;
    background-color: #ccc;
    transform: rotate(45deg);
  }
  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    pointer-events: none;
    background-color: #ccc;
    height: 1px;
    left: 10px;
    right: 10px;
    top: 49%;
  }
}
.carousel {
  width: 93vw;
  margin: 0 0 4vw 4vw;
  .skill_head {
    width: 93vw;
    height: 12vw;
    line-height: 12vw;
    display: flex;
    .title {
      width: 18vw;
      font-size: 4.27vw;
      color: #333;
      margin: 0 2.67vw 0 4vw;
      font-weight: 700;
    }
    .count_down {
      display: flex;
      flex: 1;
      .time {
        color: #999;
        font-size: 3.2vw;
      }
      .count_down_detail {
        display: flex;
        align-items: center;
        .item {
          margin-left: 5px;
        }
      }
    }
    .link {
      width: 8.27vw;
      position: relative;
      display: block;
      padding: 0 21px 0 10px;
      font-size: 12px;
      &::after {
        content: "";
        display: inline-block;
        vertical-align: middle;
        width: 6px;
        height: 10px;
        background-image: url("../../assets/jiantou.svg");
        background-repeat: no-repeat;
        background-size: 100%;
        position: absolute;
        right: 10px;
        top: 50%;
        margin-top: -6px;
      }
    }
    .count_down_detail {
      .item {
        display: inline-block;
        width: 22px;
        margin-right: 5px;
        color: #fff;
        font-size: 12px;
        text-align: center;
        background-color: #1989fa;
      }
    }
  }
  .swiper {
    > ul {
      width: 100%;
      height: 100%;
      overflow-y: scroll;
      display: flex;
      > li {
        width: 100%;
        padding: 0 1.33vw 1.33vw 1.33vw;
        margin-right: 2.67vw;
        .image {
          display: inline-block;
          width: 21vw;
          height: 21vw;
          > img {
            width: 100%;
            height: 100%;
          }
        }
        .price {
          font-size: 4.27vw;
          margin-top: 1.33vw;
          color: #f2270c;
          .del {
            display: block;
            font-size: 12px;
            color: #ccc;
            line-height: 1;
            text-decoration: line-through;
          }
        }
      }
      .mall_seckill_item {
        width: 55px;
        height: 100%;
        bottom: 20px;
        padding: 0;
        .btn {
          display: block;
          width: 45px;
          height: 100%;
          background-color: #f7f7f7;
          .inner {
            font-size: 12px;
            color: #999;
            margin: 25px 0;
            padding-bottom: 12px;
            writing-mode: vertical-rl;
            letter-spacing: 2px;
            &::after {
              content: "";
              display: inline-block;
              width: 6px;
              height: 10px;
              background-image: url("../../assets/jiantou.svg");
              background-repeat: no-repeat;
              margin-top:3px;
            }
          }
        }
      }
    }
  }
}


</style>