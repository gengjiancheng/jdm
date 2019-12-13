<template>
  <div class="box">
    <van-icon @click="jeep" class="log" name="arrow-left" />
    <van-icon @click="out" class="login" name="ellipsis" />
    <van-search class="input" placeholder="请输入搜索关键词" shape="round"></van-search>
    <van-tabs title-active-color="red" @click="die">
      <van-tab v-for="item in ary" :key="item.id" :title="item.title" >
        <my-hot></my-hot>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
// @ is an alias to /src
import myhot from "./hot";
export default {
  name: "classification",
  data() {
    return {
      ary: [
        {
          title: "手机数码",
          id: 1
        },
        {
          title: "家用电器",
          id: 2
        },
        {
          title: "计生情趣",
          id: 3
        },
        {
          title: "美妆护肤",
          id: 4
        },
        {
          title: "个护清洁",
          id: 5
        },
        {
          title: "美妆护肤",
          id: 6
        },
        {
          title: "汽车生活",
          id: 7
        },
        {
          title: "京东超市",
          id: 8
        },
        {
          title: "男鞋",
          id: 9
        },
        {
          title: "男装",
          id: 10
        },
        {
          title: "女装",
          id: 11
        },
        {
          title: "女鞋",
          id: 12
        },
        {
          title: "母婴童装",
          id: 13
        },
        {
          title: "图书音像",
          id: 14
        },
        {
          title: "运动户外",
          id: 15
        },
        {
          title: "女鞋",
          id: 16
        },
        {
          title: "内衣配饰",
          id: 17
        },
        {
          title: "食品生鲜",
          id: 18
        },
        {
          title: "酒水饮料",
          id: 19
        },
        {
          title: "家具家装",
          id: 20
        },
        {
          title: "家居厨具",
          id: 21
        },
        {
          title: "箱包手袋",
          id: 22
        },
        {
          title: "钟表珠宝",
          id: 23
        },
        {
          title: "玩具乐器",
          id: 24
        },
        {
          title: "医药保健",
          id: 25
        },
        {
          title: "宠物生活",
          id: 26
        },
        {
          title: "礼品鲜花",
          id: 27
        },
        {
          title: "农资绿植",
          id: 28
        },
        {
          title: "生活旅行",
          id: 29
        },
        {
          title: "奢侈品",
          id: 30
        },
        {
          title: "京东国际",
          id: 31
        },
        {
          title: "艺术邮币",
          id: 32
        },
        {
          title: "二手商品",
          id: 33
        },
        {
          title: "特产馆",
          id: 34
        },
        {
          title: "京东金融",
          id: 35
        },
        {
          title: "国际名牌",
          id: 36
        },
        {
          title: "拍卖",
          id: 37
        },
        {
          title: "房产",
          id: 38
        },
        {
          title: "工业品",
          id: 39
        }
      ]
    };
  },
  methods: {
    jeep(){
      this.$router.push('/index/home')
    },
    die(name,title){
       let h = document.getElementsByClassName('van-tab')[0],
           t = document.getElementsByClassName('van-tabs__nav')[0]
           h.clientHeight == 0;
           console.log(name,title)
    },
    out(){
       
    }
  },
  components: {
    "my-hot":myhot
  }
};
</script>
<style lang="less" scoped>
.box {
  box-sizing: border-box;
}
.log {
  float: left;
  margin: 4vw 0 0 4vw;
  font-size: 5vw;
}
.input {
  margin: 3vw auto;
  width: 80vw;
}
.login {
  float: right;
  margin: 4vw 4vw 0 0;
  font-size: 5vw;
}
/deep/.van-tabs__wrap {
  height: 600px !important;
  overflow: auto;
}
/deep/.van-tabs__nav{
  flex-direction: column;
}
/deep/.van-tabs__line {
  background-color: #fff;
}
/deep/.van-tabs__nav--line {
  width: 20vw;
  height: 13vw;
}
/deep/.van-tab__pane {
  position: absolute;
  top: 3vw;
  right: 0;
  width: 75vw !important;
}
/deep/span {
  line-height: 11vw;
}
/deep/.van-tabs__wrap--scrollable .van-tabs__nav{
  overflow: visible;
  
}
/deep/.van-grid.van-hairline--top{
  border: none;
}
</style>