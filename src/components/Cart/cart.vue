<template>
  <div class="box">
    <!-- 购物车头部 -->
    <div class="header">
      <div @click="goback">
        <van-icon class="arrow" name="arrow-left" />
      </div>
      <div class="cart">购物车</div>
      <div class="menu" @click="myshow">
        <van-icon name="ellipsis" />
      </div>
    </div>
    <!-- 未购物的状态 -->
    <div class="myshow" v-show="totalAmount === 0">
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
          <!-- <div class="count_down">
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
          </div>-->
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
    </div>
    <!-- 已有购物的状态 -->
    <div class="myhide" v-show="totalAmount !== 0">
      <template v-for="(shopItem, index) in order">
        <van-checkbox v-model="checkedAll" class="title" :key="shopItem.shopName">{{shopItem.shopName}}</van-checkbox>
        <van-checkbox-group v-model="result" ref="checkboxGroup" :key="index">
          <van-checkbox v-for="(item, itemIndex) in shopItem.projectList" :key="itemIndex" :name="item.id">
            <van-card
              :price="item.price"
              :desc="item.desc"
              :title="item.title"
              :thumb="item.thumb"
            >
              <div slot></div>
              <div slot="tags">
                <van-tag plain type="danger">满300减30</van-tag>
                <van-tag plain type="danger">免费分期</van-tag>
              </div>
              <div slot="footer">
                <van-stepper min=0 v-model="item.num" @change="numChange($event)"/>
              </div>
            </van-card>
          </van-checkbox>
        </van-checkbox-group>
      </template>

    </div>
    <!-- 你还想要 -->
    <div class="shopcart_mod_title shopcart_mod_title1">
      <span class="shopcart_mod_title_text">可能你还想要</span>
    </div>
    <!-- 提交订单 -->
    <div class="submitorder" v-show="totalAmount !== 0">
      <van-submit-bar :price="totalAmount" button-text="提交订单" @submit="onSubmit">
        <van-checkbox v-model="checked">全选</van-checkbox>
      </van-submit-bar>
    </div>
    <ba v-show="discover"></ba>
  </div>
</template>
<script>
// @ is an alias to /src
import Dia from "../dia";
export default {
  name: "cart",
  data() {
    return {
      price: "",
      checked: false,
      totalAmount: 0,
      order: [
        {
          shopName: "京东自营",
          totalAmount: 0,
          totalNum: 0,
          projectList: [
            {
              price: 100,
              desc: "【多C多美味】高端红西柚 小蛮腰",
              title: "蒙牛 纯甄小蛮腰 高端轻酪乳风味酸牛奶 红西柚口味 230g*10 礼盒装（新老包装随机发货）",
              thumb: "https://img.yzcdn.cn/vant/t-thirt.jpg",
              num: 1,
              totalAmount: 0,
              id: 0
            },
            {
              price: 100,
              desc: "【多C多美味】高端红西柚 小蛮腰",
              title: "蒙牛 纯甄小蛮腰 高端轻酪乳风味酸牛奶 红西柚口味 230g*10 礼盒装（新老包装随机发货）",
              thumb: "https://img.yzcdn.cn/vant/t-thirt.jpg",
              num: 1,
              totalAmount: 0,
              id: 1
            }
          ]
        },
        {
          shopName: "鸿星尔克",
          totalAmount: 0,
          totalNum: 0,
          projectList: [
            {
              price: 90,
              desc: "【多C多美味】高端红西柚 小蛮腰",
              title: "蒙牛 纯甄小蛮腰 高端轻酪乳风味酸牛奶 红西柚口味 230g*10 礼盒装（新老包装随机发货）",
              thumb: "https://img.yzcdn.cn/vant/t-thirt.jpg",
              num: 1,
              totalAmount: 0,
              id: 3
            }
          ]
        }
      ],
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
      ],
      result: [],
      result1: [],
      arr: [
        {
          value: "ping",
          num: 1
        },
        {
          value: "ping1",
          num: 1
        }
      ],
      arr1: [
        {
          value: "ping",
          num: 1
        },
        {
          value: "ping1",
          num: 1
        }
      ],
      discover: false
    };
  },
  mounted () {
    this.calculatTotalAmount();
    this.numChange();
  },
  computed: {
    checkedAll: {
      get() {
        return this.arr.length == this.result.length;
      },
      set(value) {
        if (value) {
          this.arr.forEach(item => {
            this.result.push(item.value);
          });
          return;
        }
        this.result = [];
      }
    },
    checkedAll1: {
      get() {
        return this.arr1.length == this.result1.length;
      },
      set(value) {
        if (value) {
          this.arr1.forEach(item => {
            this.result1.push(item.value);
          });
          return;
        }
        this.result1 = [];
      }
    }
  },
  methods: {
    onSubmit() {
      this.$router.push("/pay");
    },
    myshow() {
      console.log(this.$router);
      this.discover = !this.discover;
    },
    goback() {
      this.$router.back();
    },
    calculatTotalAmount() {
      this.totalAmount = 0;
      for (let shopItem of this.order) {
        this.totalAmount += shopItem.totalAmount;
      }
      this.totalAmount *= 100;
    },
    numChange (e) {
      this.order = this.order.map(shopItem => {
        shopItem.totalAmount = 0;
        shopItem.totalNum = 0;
        shopItem.projectList.map(projectItem => {
            projectItem.totalAmount = projectItem.num * projectItem.price;
            shopItem.totalAmount += projectItem.totalAmount;
            shopItem.totalNum += projectItem.num;
            return projectItem;
        });
        return shopItem;
      });

      this.calculatTotalAmount();
    }
  },
  components: {
    ba: Dia
  }
};
</script>
<style lang="less" scoped>
.box {
  background-color: rgb(247, 247, 247);
  //导航栏
  .header {
    background-color: #fff;
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
      font-size: 18px;
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
      z-index: 0;
      pointer-events: none;
      background-color: #e5e5e5;
      height: 1px;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
  //购物车图片
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
  //京东秒杀
  .shopcart_mod_title {
    margin: 15px 0;
    font-size: 3.2vw;
    color: #999;
    text-align: center;
    height: 12px;
    .shopcart_mod_title_text {
      z-index: 2;
      padding: 0 4vw;
      position: relative;
      background-color: #f7f7f7;
      top: -25px;
      font-size: 12px;
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
      left: 20vw;
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
      top: 48%;
    }
  }
  .carousel {
    background-color: #fff;
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
            width: 15px;
            height: 18px;
            line-height: 18px;
          }
        }
      }
      .link {
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
    //可以滑动的图片
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
                margin-top: 3px;
              }
            }
          }
        }
      }
    }
  }
  .myhide {
    /deep/.van-card__title {
      font-size: 14px;
    }
    /deep/.van-checkbox__icon {
      margin-left: 2vw;
    }
    /deep/.van-checkbox__icon .van-icon {
      border-color: rgb(255, 0, 0) !important;
      background-color: rgb(255, 0, 0) !important;
    }
    /deep/.van-card__bottom {
      text-align: left;
    }
    .title {
      font-size: 16px;
      font-weight: 700;
      text-align: left;
    }
  }

  /* .myhide {
    // padding: 0vw 5vw;
    text-align: left;
    width: 100vw;
    height: 60vw;
    .head {
      height: 10vw;
      .inp{
        border-radius: 50%;
      }
      span {
        height: 10vw;
        line-height: 10vw;
        font-weight: 700;
        font-size: 20px;
      }
      .bodyBox {
        width: 100vw;
        overflow: hidden;
        .left {
          height: 50vw;
          width: 5vw;
          line-height: 50vw;
          float: left;
        }
        .right {
          overflow: hidden;
          height: 50vw;
          width: 85vw;
          img {
            width: 30vw;
            height: 30vw;
            float: left;
          }
          p {
            width: 55vw;
            float: left;
          }
          .choose {
            background: #999;
            height: 10vw;
            width: 55vw;
            line-height: 10vw;
            float: left;
          }
          .price {
            width: 65vw;
            float: left;
          }
        }
      }
    }
  } */
  .shopcart_mod_title1 {
    .shopcart_mod_title_text::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 25vw;
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
      top: 98%;
    }
  }
  .submitorder {
    /deep/.van-checkbox__icon--checked .van-icon {
      border-color: rgb(255, 0, 0) !important;
      background-color: rgb(255, 0, 0) !important;
    }
    .van-submit-bar {
      height: 29vw;
    }
  }
}
</style>