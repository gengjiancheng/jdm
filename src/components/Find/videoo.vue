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
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "videoo",
  data() {
    return {
      ary: [
        {
          img: require('../../assets/a.jpg'),
          count: 1,
          id:1
        },
        {
          img: require('../../assets/b.jpg'),
          count: 2,
          id:2
        },
        {
          img: require('../../assets/c.jpg'),
          count: 3,
          id:3
        },
        {
          img: require('../../assets/d.jpg'),
          count: 4,
          id:4
        }
      ]
    };
  },
  components: {}
};
</script>
<style lang="less" scoped>
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
</style>