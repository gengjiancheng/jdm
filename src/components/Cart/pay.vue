<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <div class="left" @click="goback">
        <van-icon name="arrow-left" />
      </div>
      <span class="right">确认订单</span>
    </div>
    <!-- 收货人信息 -->
    <div class="address">
      <ul>
        <li>
          <strong>XXX</strong>
          <strong>xxxxxxxxxx</strong>
        </li>
        <li class="address_add">
          <span class="tag">默认</span>
          哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
        </li>
      </ul>
    </div>
    <!-- 购物信息 -->
    <div class="body">
      <!-- 购买的物品信息 -->
      <van-card
        num="2"
        price="100.00"
        desc="【多C多美味】高端红西柚 小蛮腰"
        title="
            蒙牛 纯甄小蛮腰 高端轻酪乳风味酸牛奶 红西柚口味 230g*10 礼盒装（新老包装随机发货）
        "
        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      >
        <div slot></div>
        <div slot="tags">
          <van-tag plain type="danger">满300减30</van-tag>
          <van-tag plain type="danger">免费分期</van-tag>
        </div>
      </van-card>
      <!-- 7天无理由退还货描述 -->
      <ul>
        <li>
          <img src="@/assets/7icon.png" alt />不支持7天无理由退货
        </li>
        <li>
          <img src="@/assets/8icon.png" alt />价格说明
        </li>
      </ul>
      <!-- 配送服务 -->
      <div class="order">
        <ul class="order_list">
          <li>
            <strong>配送服务</strong>
            <div class="shopption_content">
              <p>
                京东快递
                <span class="jd_supper">(可选京准达)</span>
              </p>
              <div class="type_justify">
                <div class="left">中小件送货时间</div>12-12 周四 09:00-15:00
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "pay",
  data() {
    return {
      arr: [
        {
          value: "ping",
          num: 1
        },
        {
          value: "ping1",
          num: 1
        }
      ]
    };
  },
  methods:{
    goback(){
      this.$router.back()
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
.header {
  overflow: hidden;
  height: 11.73vw;
  line-height: 11.73vw;
  .left {
    float: left;
    width: 5vw;
    display: inline-block;
    font-size: 5.5vw;
    margin-top: 3vw;
    margin-left: 3vw;
  }
  .right {
    text-align: center;
    font-size: 4.8vw;
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
    top: 11.73vw;
  }
}
.address {
  padding: 3.2vw 2.67vw 4.27vw 2.67vw;
  background: #fff url("../../assets/line.png") -7px bottom repeat-x;
  background-size: 64px 5px;
  > ul {
    text-align: left;
    position: relative;
    padding-right: 30px;
    word-wrap: break-word;
    word-break: normal;
    > li:nth-child(1) {
      height: 24px;
    }
    > li > strong {
      font-size: 16px;
    }
    .address_add {
      font-size: 14px;
      color: #666;
      .tag {
        padding: 3px 3px;
        line-height: 6vw;
        color: #e93b3d;
        font-size: 10px;
        margin-right: 3px;
      }
      .tag::after {
        content: "";
        width: 4.4vw;
        height: 2.6vw;
        position: absolute;
        top: 7.5vw;
        bottom: 0;
        left: -1px;
        right: 0;
        padding: 3px 6px;
        vertical-align: middle;
        margin: -2px 7px 0 0;
        font-size: 10px;
        border: 1px solid #e93b3d;
        border-radius: 2px;
        background: none;
        display: inline-block;
      }
    }
  }
}
.body {
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 0 10px;
  background: #fff;
  position: relative;
  > ul {
    padding: 6px 0;
    padding-left: 85px;
    overflow: hidden;
    > li {
      float: left;
      margin-right: 5px;
      font-size: 12px;
      color: #999;
      > img {
        width: 15px;
        height: 15px;
        vertical-align: middle;
        margin: -2px 2px 0 0;
      }
    }
  }
  .order {
    .order_list {
      > li {
        padding: 10px 20px 10px 0;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          z-index: 1;
          background-color: #e5e5e5;
          height: 1px;
          left: 0;
          top: 0;
          right: -10px;
        }
        > strong {
          position: absolute;
          left: 0;
          top: 12px;
          font-weight: 400;
          font-size: 16px;
        }
        .shopption_content {
          p {
            display: inline-block;
            margin: 5px 0;
            .jd_supper {
              float: right;
              max-width: 200px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
  .van-card__desc {
    text-align: left;
  }
  .van-tag,
  .van-card__price {
    float: left;
  }
}
</style>