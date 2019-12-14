<template>
  <div class="hotbox">
    <h4>热门分类</h4>
    <a href="http://coupon.m.jd.com/ranklist/hotSaleRankList.action?ptag=137886.4.1">
    <van-icon class="icon-1" name="chart-trending-o" />
    <span>排行榜</span>
     <van-icon name="arrow" /></a>
    <van-grid :column-num="4">
      <van-grid-item v-for="item in hotList.data" :key="item.id" :icon="item.img" :text="item.desc" />
    </van-grid>
  </div>
</template>
<script>
import {mapState} from "vuex";
// @ is an alias to /src
export default {
  name: "hot",
  data() {
    return {
      ary:[]
    };
  },
  components: {},
  created() {
    console.log(this.$store);
     this.$store.dispatch('getHotList',{})

    // this.ary = this.$store.state.hotList
    // console.log(this.ary)
    
  },
  computed:{
    ...mapState(["hotList"])
  },
  mounted() {
    console.log(this.hotList);
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