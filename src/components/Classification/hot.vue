<template>
  <div class="hotbox">
    <h4>热门分类</h4>
    <a href="http://coupon.m.jd.com/ranklist/hotSaleRankList.action?ptag=137886.4.1">
    <van-icon class="icon-1" name="chart-trending-o" />
    <span>排行榜</span>
     <van-icon name="arrow" /></a>
    <van-grid :column-num="3">
      <van-grid-item v-for="value in 15" :key="value" icon="photo" text="文字" />
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
  components: {}
};
</script>
<style lang="less" scoped>
   .hotbox{
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