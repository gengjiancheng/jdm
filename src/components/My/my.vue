<template>
  <div class="myBox">
    <div class="header">
      <van-icon class="lt" name="arrow-left" @click="fn" />
      <span class="title">我的京东</span>
      <van-icon class="rt" name="ellipsis" />
    </div>
    <div class="headerBox">
      <div class="rt">
        <van-icon name="setting-o" />
        <span style="font-size:12px">账号管理</span>
      </div>
      <div class="user cl">
        <div class="imgBox lt"></div>
        <div class="Word lt" style="margin-left:4vw">
          jd_6358c559550b5
          <van-icon name="edit" />
          <div
            class="Word2 rt"
            style=" width: 12.5vw;
            height: 5vw;
            line-height: 5vw;
            vertical-align: middle;
            border-radius: 12px 12px 12px 12px;
            background-color: #c8483f;
            font-size: 10px;
            color: #fff;
            margin-left:3vw"
          >铜牌</div>
        </div>
        <br />
        <div class="lt" style="margin-left:4vw;margin-top:2vw;font-size:12px;color:#fff">用户名:我才懒得热情</div>
        <div class="gx lt">共享值500</div>
      </div>
    </div>
    <div class="mid">
      <div>
        <div
          class="pay"
          style="background:url(https://img11.360buyimg.com/jdphoto/s40x40_jfs/t14911/113/1615678148/168/7734f24f/5a53578eN0e2811b6.png) 50%/auto 20px no-repeat;"
        ></div>
        <span>去付款</span>
      </div>
      <div>
        <div
          class="shou"
          style="background: url(https://img11.360buyimg.com/jdphoto/s40x40_jfs/t14608/2/1636876268/266/b4ebb3f2/5a535791N627c296c.png)50% / auto 20px no-repeat;"
        ></div>
        <span style="margin-top:4vw">待收货</span>
      </div>
      <div>
        <div
          class="tui"
          style="background:url(https://img11.360buyimg.com/jdphoto/s40x40_jfs/t15049/345/1573771240/492/7ef15694/5a5357eaNab882dcb.png) 50%/auto 20px no-repeat;"
        ></div>
        <span>退换/售后</span>
      </div>
      <div>
        <div
          class="all"
          style="background:url(https://img30.360buyimg.com/jdphoto/jfs/t14953/346/2113764063/185/1a1dcd24/5a6d7b8bN8431ea1a.png) 50%/auto 20px no-repeat;"
        ></div>
        <span>全部订单</span>
      </div>
    </div>
    <div class="mid2">
      <div>
        <span style="font-size:16px">0</span> 张
        <span>京东卷</span>
      </div>
      <div>
        <span>开通有礼</span>
        <span>白条</span>
      </div>
      <div>
        <span style="font-size:16px">6</span> 个
        <span>京豆</span>
      </div>
      <div>
        <span style="font-size:16px">0</span> 元
        <span>白条</span>
      </div>
      <div>
        <div
          style="width:20vw;height:5.63vw; background:url(https://img11.360buyimg.com/jdphoto/s40x40_jfs/t20329/11/1228908740/243/73a7934c/5b235f37Ne85fdb85.png) no-repeat center center scroll;background-size: auto 100%;"
        ></div>
        <span>我的资产</span>
      </div>
    </div>
    <div class="mid3">
      <div>
        <span>0</span>
        <br />
        <span>商品收藏</span>
      </div>
      <div>
        <span>1</span>
        <br />
        <span>店铺收藏</span>
      </div>
      <div>
        <span>4</span>
        <br />
        <span>我的足迹</span>
      </div>
    </div>
    <div class="mid4">
      <div>
        <div
          class="pay"
          style="background-image: url(https://img14.360buyimg.com/jdphoto/jfs/t1/24988/22/12030/2316/5c94d6d4E7cdcf995/c8fe8e84d89685f7.png!q70.webp);
        background-position-x: 9vw;
        background-position-y: 3.7vw;
        background-size: 27% 56%;
        background-repeat-x: no-repeat;
        background-repeat-y: no-repeat;"
        ></div>
        <span>我的预约</span>
      </div>
      <div>
        <div
          class="pay"
          style="background-image: url(//img10.360buyimg.com/jdphoto/jfs/t12931/150/1327543095/1276/e9e67341/5a1e9ee2Nb5baf153.png!q70.webp);
        background-position-x: 9vw;
        background-position-y: 3.7vw;
        background-size:  27% 56%;
        background-repeat-x: no-repeat;
        background-repeat-y: no-repeat;"
        ></div>
        <span>京东火车票</span>
      </div>
      <div>
        <div
          class="pay"
          style="background-image: url(//img14.360buyimg.com/jdphoto/jfs/t13612/121/1346421356/1355/9014e74f/5a1e9f1cNab886864.png!q70.webp);
        background-position-x: 9vw;
        background-position-y: 3.7vw;
        background-size:  27% 56%;
        background-repeat-x: no-repeat;
        background-repeat-y: no-repeat;"
        ></div>
        <span>应用推荐</span>
      </div>
      <div>
        <div
          class="pay"
          style="background-image: url(//img30.360buyimg.com/jdphoto/jfs/t12514/60/1318835455/1723/d6ae70f5/5a1e9e39Ndc5e9285.png!q70.webp);
        background-position-x: 9vw;
        background-position-y: 3.7vw;
        background-size:  27% 56%;
        background-repeat-x: no-repeat;
        background-repeat-y: no-repeat;"
        ></div>
        <span>用户福利</span>
      </div>
      <div>
        <div
          class="pay"
          style="background-image: url(//img14.360buyimg.com/jdphoto/jfs/t13612/121/1346421356/1355/9014e74f/5a1e9f1cNab886864.png!q70.webp);
        background-position-x: 9vw;
        background-position-y: 3.7vw;
        background-size:  27% 56%;
        background-repeat-x: no-repeat;
        background-repeat-y: no-repeat;"
        ></div>
        <span>应用推荐</span>
      </div>
      <div>
        <div
          class="pay"
          style="background-image: url(//img30.360buyimg.com/jdphoto/jfs/t12514/60/1318835455/1723/d6ae70f5/5a1e9e39Ndc5e9285.png!q70.webp);
        background-position-x: 9vw;
        background-position-y: 3.7vw;
        background-size:  27% 56%;
        background-repeat-x: no-repeat;
        background-repeat-y: no-repeat;"
        ></div>
        <span>用户福利</span>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "my",
  data() {
    return {};
  },
  methods:{
    fn(){
      this.$router.back();
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
.myBox {
  // background-color: #f7f7f7;
  min-height: 100%;
  .header {
    min-height: 45px;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 4vw 0 4vw;
    .title {
      font-size: 16px;
    }
    .lt,
    .rt {
      font-size: 20px;
    }
  }
  .headerBox {
    width: 100%;
    height: 40vw;
    background: linear-gradient(90deg, #eb3c3c, #ff7459);
    border-radius: 0 0 5vw 5vw;
    position: relative;
    box-shadow: 0 2px 4px rgba(228, 57, 60, 0.4);
    overflow: hidden;
    // margin-bottom: 1vw;
    > .rt {
      width: 20vw;
      height: 10vw;
      line-height: 10vw;
      font-size: 12px;
      text-align: center;
      position: absolute;
      top: 0;
      right: 4vw;
      color: rgba(76, 0, 0, 0.7);
      overflow: hidden;
    }
    > .user {
      width: 90vw;
      height: 22vw;
      // background: yellow;
      margin: 8vw 5vw 0 5vw;
      position: relative;
      > .imgBox {
        width: 20vw;
        height: 20vw;
        overflow: hidden;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.4);
        border-radius: 60px;
        background-image: url("https://img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png");
        background-position-x: 0px;
        background-position-y: 0px;
        background-size: 100% 100%;
        background-repeat-x: no-repeat;
        background-repeat-y: no-repeat;
        // > .Word {
        //   width: 120vw;
        //   margin-left: 10vw;
        //   > .Word2 {
        //     width: 40px;
        //     height: 16px;
        //     height: 16px;
        //     line-height: 16px;
        //     vertical-align: middle;
        //     border-radius: 0 12px 12px 0;
        //     background-color: #c8483f;
        //     font-size: 10px;
        //     color: #fff;
        //   }
        // }
      }
      > div:nth-child(2) {
        font-size: 14px;
        color: #ffffff;
        > span {
          width: 6.3vw;
          height: 6.3vw;
          display: block;
        }
      }
      > .gx {
        max-width: 20vw;
        height: 5vw;
        line-height: 16px;
        padding: 0 2.5vw;
        margin: 1.88vw 2.5vw 0 0;
        border-radius: 10px;
        font-size: 10px;
        color: #fff;
        background: #c8483f;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        position: absolute;
        left: 24vw;
        top: 13vw;
      }
    }
  }
  .mid {
    height: 19.2vw;
    margin: 5.07vw 0;
    background: #fff;
    width: 100%;
    display: flex;
    .pay,
    .shou,
    .tui,
    .all {
      width: 25vw;
      height: 9.38vw;
    }

    > div > span {
      color: #666666;
      font-size: 12px;
      // display: block;
      flex: 1;
    }
  }
  .mid2 {
    height: 15.7vw;
    margin: 6vw 0;
    background: #fff;
    display: flex;
    > div {
      color: #e93b3d;
    }
    > div > span:nth-child(1) {
      font-size: 10px;
      line-height: 5.63vw;
      height: 5.63vw;
      color: #e93b3d;
      white-space: nowrap;
    }
    > div > span:nth-child(2) {
      display: block;
      color: #666666;
      font-size: 12px;
      flex: 1;
    }
  }
  .mid3 {
    height: 24vw;
    // margin: 12px 0;
    background: #fff;
    display: flex;
    position: relative;
    > div {
      width: 39vw;
      height: 24vw;
      > span:nth-child(1) {
        font-size: 16px;
        font-weight: 700;
        color: #333;
        position: relative;
      }
      > span:nth-child(3) {
        font-size: 12px;
        color: #666;
        line-height: 10.7vw;
        display: block;
        text-align: center;
        margin-left: 6.6vw;
        position: absolute;
        top: 7.19vw;
      }
    }
  }
  .mid4 {
    background: #fff;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .pay,
    .shou,
    .tui,
    .all {
      width: 25vw;
      height: 9.38vw;
    }

    > div > span {
      color: #666666;
      font-size: 12px;
      // display: block;
      flex: 1;
    }
  }
}
</style>