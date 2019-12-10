<template>
  <div>
    <div class="header">
      <div>
        <van-icon class="arrow" name="arrow-left" />
      </div>
      <div class="cart">购物车</div>
      <div class="menu">
        <van-icon name="ellipsis" />
      </div>
    </div>
    <div class="shopchart_login_btn">
      <span>登录后可同步账户购物车中的商品</span>
      <span>
        <van-button class="login_btn" type="primary" color="#f2270c">登录</van-button>
      </span>
    </div>
    <div class="cart_img">
      <img src="@/assets/cartimg.png" alt />
      <p>登录后可同步购物车中商品</p>
    </div>
    <div class="shopcart_mod_title">
      <span class="shopcart_mod_title_text">京东秒杀</span>
    </div>
    <div class="carousel">
      <van-swipe :loop="false" :width="300">
        <van-swipe-item v-for="item in ary" :key="item.id">
          <div class="image">
            <img :src="item.pic" alt="">
          </div>
          <p class="price">{{item.price}}</p>
          <p class="old_price">{{item.oldprice}}</p>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "cart",
  data() {
    return {
      ary:[
        {
          id:1,
          pic:require('@/assets/img1.dpg.webp'),
          price:'￥20000',
          oldprice:'￥40000'
        },
         {
          id:2,
          pic:require('@/assets/img2.dpg.webp'),
          price:'￥20000',
          oldprice:'￥40000'
        },
         {
          id:3,
          pic:require('@/assets/img3.dpg.webp'),
          price:'￥20000',
          oldprice:'￥40000'
        },
         {
          id:4,
          pic:require('@/assets/img4.dpg.webp'),
          price:'￥20000',
          oldprice:'￥40000'
        },
         {
          id:5,
          pic:require('@/assets/img5.dpg.webp'),
          price:'￥20000',
          oldprice:'￥40000'
        },
         {
          id:6,
          pic:require('@/assets/img6.dpg.webp'),
          price:'￥20000',
          oldprice:'￥40000'
        },

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
.shopchart_login_btn {
  height: 16vw;
  line-height: 16vw;
  > span:nth-child(1) {
    font-size: 14px;
    color: #333;
  }
  > span {
    .login_btn {
      width: 19vw;
      height: 8vw;
      line-height: 8vw;
      text-align: center;
      margin-left: 2.7vw;
      border-radius: 4px;
    }
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
    top: 58%;
  }
}
.carousel{
 .image{
   display:inline-block;
   width:21vw;
   height:21vw;
   >img{
     width:100%;
     height:100%;
   }
 }
}
</style>