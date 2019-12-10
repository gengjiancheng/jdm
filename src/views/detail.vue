<template>
  <div>
    <div class="body">
      <div class="header">
        <div class="leftH">
          <van-icon class="one" name="arrow-left" size="25px" />
        </div>
        <div class="rightH">
          <van-icon class="two" name="share" size="25px" />
          <van-icon class="three" name="chat-o" size="25px" />
        </div>
      </div>
      <div class="swiper">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img src="../assets/logo.png" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../assets/logo.png" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../assets/logo.png" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../assets/logo.png" alt />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="detail">
        <div class="price">￥559.00</div>
        <van-icon class="icon" size="25px" name="gold-coin-o" />
        <van-icon class="icon" size="25px" name="like-o" />
        <p class="title">adidas阿迪达斯三叶草2019新款中性贝壳头superstar金标休闲鞋 B27140 42</p>
        <p class="noticy">
          开PLUS年卡会员 下单预估省
          <i>30.00元</i>
          <i class="open">立即开通</i>
        </p>
        <p class="sport">12.12暖暖预售火爆开启！运动大牌直降，两券叠加300-60、400-80、600-140、800-170、900-230点我查看更多详情</p>
      </div>

      <div class="discount" @click="appear">
        <div class="leftBox">优惠</div>
        <div class="rightBox">
          <ul>
            <li>
              <span>白条</span>满99减5元(数量有限，先到先得)
            </li>
            <li>
              <span>领券</span>满900减180 满600减120 满300减60
            </li>
            <li>
              <span>满减</span>满300元减30元，满600元减60元，满900元减90元
            </li>
          </ul>
        </div>
      </div>
      <van-action-sheet class="elastic" v-model="show" title="优惠">
        <h2>白条支付</h2>
        <p>满99减5元(数量有限，先到先得)</p>
        <h2>促销</h2>
        <p>满300元减30元、满600元减60元、满900元减90元</p>
      </van-action-sheet>

      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
        <van-goods-action-icon icon="shop-o" text="店铺" info="12" />
        <van-goods-action-button type="warning" text="加入购物车" @click="submit" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "detail",
  data() {
    return {
      show: false
    };
  },
  components: {},
  methods: {
    appear() {
      this.show = !this.show;
    },
    submit() {
      this.$router.push("/index/Cart");
    }
  }
};
</script>
<style lang="less" scoped>
.body {
  width: 100vw;
  .header {
    width: 100%;
    overflow: hidden;
    .three {
      margin-left: 2vw;
    }
    .leftH {
      float: left;
    }
    .rightH {
      float: right;
    }
  }
  .swiper {
    float: left;
    background: #fff;
    width: 90vw;
    height: 50vw;
    padding: 0 5vw;
    img {
      width: 50vw;
      height: 50vw;
    }
  }
  .detail {
    height: 40vw;
    width: 96vw;
    padding: 0 2vw;
    background: #ccc;
    margin-top: 2vw;
    overflow: hidden;
    .price {
      color: red;
      font-size: 25px;
      font-weight: 700;
      float: left;
    }
    .icon {
      float: right;
    }
    .title {
      width: 96vw;
      float: left;
      text-align: left;
      font-size: 14px;
      font-weight: 600;
    }
    .noticy {
      background: #fff7cc;
      height: 8vw;
      line-height: 8vw;
      width: 90vw;
      padding: 0 3vw;
      text-align: left;
      float: left;
      font-size: 14px;
      border-radius: 5px;
      i {
        color: red;
        font-style: normal;
      }
      .open {
        float: right;
        color: #000;
      }
    }
    .sport {
      float: left;
      color: #ccc;
      font-size: 5px;
      text-align: left;
    }
  }
  .discount {
    width: 100vw;
    height: 36vw;
    .leftBox {
      height: 36vw;
      width: 20vw;
      float: left;
      margin-top: 5vw;
    }
    .rightBox {
      height: 36vw;
      width: 80vw;
      float: left;
      text-align: left;
      ul {
        li {
          width: 80vw;
          height: 12vw;
        }
      }
    }
  }
  .elastic {
    height: 70vw;
    h2 {
      text-align: left;
      font-size: 16px;
    }
    p {
      text-align: left;
      font-size: 16px;
    }
  }
}
</style>