<template>
  <div>
    <div class="imgBox" v-show="show">
      <img src="../../assets/gou.png" alt />
      <p>你还未关注店铺~</p>
      <p>关注后为你精选历史最低价商品</p>
    </div>
    <p class="love">
      猜你喜欢
      <van-icon name="info-o" />
    </p>
    <!-- 右上角消息定位弹框 -->
    <div class="dialog" v-show="discover">
      <ul>
        <li>
          <van-icon name="chat-o" />消息
        </li>
        <router-link to="/index/home">
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

    <!-- 下方轮播图 -->
    <!-- <div class="swiper">
      <h1>
        小米京东自营旗舰店
        <van-button class="btn" round type="info" @click="guan">关注</van-button>
      </h1>
      <ul>
        <li v-for="item in ary" :key="item.id">
          <div class="Box">
            <img :src="item.img" alt />
            <p>60天最低价</p>
          </div>
          <p class="title">{{item.title}}</p>
          <p class="price">￥{{item.price}}</p>
          <p class="oloPrice">￥{{item.oldPrice}}</p>
        </li>
      </ul>
    </div>
    <div class="swiper">
      <h1>
        华为京东自营店
        <van-button class="btn" round type="info" @click="guan">关注</van-button>
      </h1>
      <ul>
        <li v-for="item in ary" :key="item.id">
          <div class="Box">
            <img :src="item.img" alt />
            <p>60天最低价</p>
          </div>
          <p class="title">{{item.title}}</p>
          <p class="price">￥{{item.price}}</p>
          <p class="oloPrice">￥{{item.oldPrice}}</p>
        </li>
      </ul>
    </div>
    <div class="swiper">
      <h1>
        联想京东自营旗舰店
        <van-button class="btn" round type="info" @click="guan">关注</van-button>
      </h1>
      <ul>
        <li v-for="item in ary" :key="item.id">
          <div class="Box">
            <img :src="item.img" alt />
            <p>60天最低价</p>
          </div>
          <p class="title">Redmi K20Pro尊享</p>
          <p class="price">￥2399</p>
          <p class="oloPrice">￥2999</p>
        </li>
      </ul>
    </div>-->
    <div class="swiper">
      <h1>
        小米京东自营旗舰店
        <button class="btn" @click="guan">关注</button>
      </h1>
      <ul>
        <li>
          <div class="Box">
            <img src="../../assets/logo.png" alt />
            <p>60天最低价</p>
          </div>
          <p class="title">Redmi K20Pro</p>
          <p class="price">￥2399</p>
          <p class="oloPrice">￥2999</p>
        </li>
        <li>
          <div class="Box">
            <img src="../../assets/logo.png" alt />
            <p>60天最低价</p>
          </div>
          <p class="title">Redmi K20Pro</p>
          <p class="price">￥2399</p>
          <p class="oloPrice">￥2999</p>
        </li>
        <li>
          <div class="Box">
            <img src="../../assets/logo.png" alt />
            <p>60天最低价</p>
          </div>
          <p class="title">Redmi K20Pro</p>
          <p class="price">￥2399</p>
          <p class="oloPrice">￥2999</p>
        </li>
        <li>
          <div class="Box">
            <img src="../../assets/logo.png" alt />
            <p>60天最低价</p>
          </div>
          <p class="title">Redmi K20Pro</p>
          <p class="price">￥2399</p>
          <p class="oloPrice">￥2999</p>
        </li>
        <li>
          <div class="Box">
            <img src="../../assets/logo.png" alt />
            <p>60天最低价</p>
          </div>
          <p class="title">Redmi K20Pro</p>
          <p class="price">￥2399</p>
          <p class="oloPrice">￥2999</p>
        </li>
        <li>
          <div class="Box">
            <img src="../../assets/logo.png" alt />
            <p>60天最低价</p>
          </div>
          <p class="title">Redmi K20Pro</p>
          <p class="price">￥2399</p>
          <p class="oloPrice">￥2999</p>
        </li>
      </ul>
    </div>
    <div class="swiper">
      <h1>
        小米京东自营旗舰店
        <button class="btn" @click="guan">关注</button>
      </h1>
      <ul>
        <li>
          <div class="Box">
            <img src="../../assets/logo.png" alt />
            <p>60天最低价</p>
          </div>
          <p class="title">Redmi K20Pro</p>
          <p class="price">￥2399</p>
          <p class="oloPrice">￥2999</p>
        </li>
        <li>
          <div class="Box">
            <img src="../../assets/logo.png" alt />
            <p>60天最低价</p>
          </div>
          <p class="title">Redmi K20Pro</p>
          <p class="price">￥2399</p>
          <p class="oloPrice">￥2999</p>
        </li>
        <li>
          <div class="Box">
            <img src="../../assets/logo.png" alt />
            <p>60天最低价</p>
          </div>
          <p class="title">Redmi K20Pro</p>
          <p class="price">￥2399</p>
          <p class="oloPrice">￥2999</p>
        </li>
        <li>
          <div class="Box">
            <img src="../../assets/logo.png" alt />
            <p>60天最低价</p>
          </div>
          <p class="title">Redmi K20Pro</p>
          <p class="price">￥2399</p>
          <p class="oloPrice">￥2999</p>
        </li>
        <li>
          <div class="Box">
            <img src="../../assets/logo.png" alt />
            <p>60天最低价</p>
          </div>
          <p class="title">Redmi K20Pro</p>
          <p class="price">￥2399</p>
          <p class="oloPrice">￥2999</p>
        </li>
        <li>
          <div class="Box">
            <img src="../../assets/logo.png" alt />
            <p>60天最低价</p>
          </div>
          <p class="title">Redmi K20Pro</p>
          <p class="price">￥2399</p>
          <p class="oloPrice">￥2999</p>
        </li>
      </ul>
    </div>
    <div class="swiper">
      <h1>
        小米京东自营旗舰店
        <button class="btn" @click="guan">关注</button>
      </h1>
      <ul>
        <li>
          <div class="Box">
            <img src="../../assets/logo.png" alt />
            <p>60天最低价</p>
          </div>
          <p class="title">Redmi K20Pro</p>
          <p class="price">￥2399</p>
          <p class="oloPrice">￥2999</p>
        </li>
        <li>
          <div class="Box">
            <img src="../../assets/logo.png" alt />
            <p>60天最低价</p>
          </div>
          <p class="title">Redmi K20Pro</p>
          <p class="price">￥2399</p>
          <p class="oloPrice">￥2999</p>
        </li>
        <li>
          <div class="Box">
            <img src="../../assets/logo.png" alt />
            <p>60天最低价</p>
          </div>
          <p class="title">Redmi K20Pro</p>
          <p class="price">￥2399</p>
          <p class="oloPrice">￥2999</p>
        </li>
        <li>
          <div class="Box">
            <img src="../../assets/logo.png" alt />
            <p>60天最低价</p>
          </div>
          <p class="title">Redmi K20Pro</p>
          <p class="price">￥2399</p>
          <p class="oloPrice">￥2999</p>
        </li>
        <li>
          <div class="Box">
            <img src="../../assets/logo.png" alt />
            <p>60天最低价</p>
          </div>
          <p class="title">Redmi K20Pro</p>
          <p class="price">￥2399</p>
          <p class="oloPrice">￥2999</p>
        </li>
        <li>
          <div class="Box">
            <img src="../../assets/logo.png" alt />
            <p>60天最低价</p>
          </div>
          <p class="title">Redmi K20Pro</p>
          <p class="price">￥2399</p>
          <p class="oloPrice">￥2999</p>
        </li>
      </ul>
    </div>
    <div class="swiper">
      <h1>
        小米京东自营旗舰店
        <button class="btn" @click="guan">关注</button>
      </h1>
      <ul>
        <li>
          <div class="Box">
            <img src="../../assets/logo.png" alt />
            <p>60天最低价</p>
          </div>
          <p class="title">Redmi K20Pro</p>
          <p class="price">￥2399</p>
          <p class="oloPrice">￥2999</p>
        </li>
        <li>
          <div class="Box">
            <img src="../../assets/logo.png" alt />
            <p>60天最低价</p>
          </div>
          <p class="title">Redmi K20Pro</p>
          <p class="price">￥2399</p>
          <p class="oloPrice">￥2999</p>
        </li>
        <li>
          <div class="Box">
            <img src="../../assets/logo.png" alt />
            <p>60天最低价</p>
          </div>
          <p class="title">Redmi K20Pro</p>
          <p class="price">￥2399</p>
          <p class="oloPrice">￥2999</p>
        </li>
        <li>
          <div class="Box">
            <img src="../../assets/logo.png" alt />
            <p>60天最低价</p>
          </div>
          <p class="title">Redmi K20Pro</p>
          <p class="price">￥2399</p>
          <p class="oloPrice">￥2999</p>
        </li>
        <li>
          <div class="Box">
            <img src="../../assets/logo.png" alt />
            <p>60天最低价</p>
          </div>
          <p class="title">Redmi K20Pro</p>
          <p class="price">￥2399</p>
          <p class="oloPrice">￥2999</p>
        </li>
        <li>
          <div class="Box">
            <img src="../../assets/logo.png" alt />
            <p>60天最低价</p>
          </div>
          <p class="title">Redmi K20Pro</p>
          <p class="price">￥2399</p>
          <p class="oloPrice">￥2999</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "follow",
  data() {
    return {
      ary: [],
      show: true
    };
  },
  components: {},
  methods: {
    guan() {
      this.show = !this.show;
    }
  }
};
</script>
<style lang="less" scoped>
.imgBox {
  width: 100vw;
  height: 50vw;
  border-radius: 5vw;
  box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, 0.6);
  > img {
    width: 50vw;
    height: 40vw;
  }
  p {
    width: 100vw;
    height: 5vw;
    color: #ccc;
  }
}

.love {
  width: 100vw;
  font-weight: 700;
  text-align: left;
}
.swiper {
  height: 50vw;
  margin-bottom: 5vw;
  > h1 {
    font-weight: 700;
    text-align: left;
    height: 10vw;
    line-height: 10vw;
    .btn {
      line-height: 10vw;
      height: 10vw;
      width: 20vw;
      float: right;
    }
  }
  ul {
    width: 100%;
    overflow: scroll;
    margin-top: 2vw;
    display: flex;
    > li {
      float: left;
      height: 40vw;
      margin-right: 3vw;
      .Box {
        height: 22vw;
        width: 22vw;
        position: relative;
        > img {
          height: 22vw;
          width: 22vw;
        }
        > p {
          position: absolute;
          left: 0;
          bottom: 0;
          height: 3vw;
          background: red;
          color: #fff;
          line-height: 3vw;
        }
      }
    }
    .title {
      text-align: left;
      height: 6vw;
    }
    .price {
      text-align: left;
      height: 6vw;
      color: red;
    }
    .oloPrice {
      text-align: left;
      height: 6vw;
      text-decoration: line-through;
      color: #ccc;
    }
  }
}
</style>