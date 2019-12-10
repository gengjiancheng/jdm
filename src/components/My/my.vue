<template>
  <div class="myBox">
    <div class="header">
      <van-icon class="lt" name="arrow-left" />
      <span class="title">我的京东</span>
      <van-icon class="rt" name="ellipsis" />
    </div>
    <div class="headerBox">
      <div class="rt">
        <van-icon name="setting-o" />
        <span>账号管理</span>
      </div>
      <div class="user">
        <div class="imgBox lt"></div>
        <div class="Word lt">
          jd_6358c559550b5
          <van-icon name="edit" />
          <div Word2>铜牌</div>
        </div>
        <br />
        <div>用户名:我才懒得热情</div>
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
      background: yellow;
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
        > .Word {
          width: 120vw;
          > .Word2 {
            width: 40px;
            height: 16px;
            height: 16px;
            line-height: 16px;
            vertical-align: middle;
            border-radius: 0 12px 12px 0;
            background-color: #c8483f;
            font-size: 10px;
            color: #fff;
          }
        }
      }
      > div:nth-child(2) {
        font-size: 14px;
        color: #ffffff;
        > span {
          width: 20px;
          height: 20px;
          display: block;
        }
      }
    }
  }
}
</style>