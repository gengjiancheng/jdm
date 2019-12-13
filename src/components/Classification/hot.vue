<template>
  <div class="hotbox">
    <h4>热门分类</h4>
    <a href="http://coupon.m.jd.com/ranklist/hotSaleRankList.action?ptag=137886.4.1">
    <van-icon class="icon-1" name="chart-trending-o" />
    <span>排行榜</span>
     <van-icon name="arrow" /></a>
    <van-grid :column-num="4">
      <van-grid-item v-for="value in 40" :key="value" icon="" text="" />
    </van-grid>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "hot",
  data() {
    return {};
  },
  components: {},
  created() {
    this.$store.dispatch("getHotList",{})
  },
  mounted() {
    console.log(this.$store.state.hotList)
  }
};
</script>
<style lang="less" scoped>
   .hotbox{
     overflow: auto;
     height: 600px;
     h4{
       width: 20vw;
       font-size: 3vw;

     }
     a{
        color:#848689;
        position: absolute;
        top: -4vw;
        right: 3vw;
        span{
            font-size:4vw;
        }
        .icon-1{
           color:#ff8080;
        }
     }
   }
   
</style>