<template>
  <div class="mainBox">
    <div class="one">
      <div class="topBox cl">
        <div class="lt line"></div>
        <van-search
          v-model="value"
          label=" .  .  ."
          placeholder="请输入搜索关键词"
          shape="round"
          class="inp lt"
          background="transparent"
        ></van-search>
        <div class="log rt">登陆</div>
      </div>
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in imgList" :key="item.id">
          <img :src="item.img" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="mall_nav">
      <van-swipe indicator-color="#ccc" :loop="false">
        <van-swipe-item>
          <ul>
            <li v-for="item in mallList1" :key="item.id">
              <div>
                <img :src="item.img" alt />
              </div>
              <span v-html="item.desc"></span>
            </li>
          </ul>
        </van-swipe-item>
        <van-swipe-item>
          <ul>
            <li v-for="item in mallList2" :key="item.id">
              <div>
                <img :src="item.img" alt />
              </div>
              <span v-html="item.desc"></span>
            </li>
          </ul>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div>
      <div class="rapBox">
        <img src="../../pictures/rap3.jpg" alt />
        <img src="../../pictures/rap2.gif" alt />
        <img src="../../pictures/rap.jpg" alt />
      </div>
      <div class="killBox">
        <div class="onekill">
          <div class="text cl">
            <div class="log lt cl">
              <img src="../../pictures/kill.png" alt class="lt" />
              <div class="lt">
                <strong>16点场</strong>
              </div>
            </div>
            <div class="killtime_box lt">
              <span>00</span>:
              <span>35</span>:
              <span>09</span>
            </div>
            <div class="miao rt">
              更多秒杀
              <van-icon name="arrow" />
            </div>
          </div>
          <van-swipe :loop="false" :width="80">
            <van-swipe-item>
              <img src="../../pictures/kill3.jpg" alt="">
              <span class='price_now'>￥180</span>
              <span class='price_past' >￥238</span>
            </van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
          </van-swipe>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import { getAddressApi } from "../../api/address";
export default {
  name: "home",
  data() {
    return {
      address: "",
      value: "",
      imgList: [
        {
          id: 1,
          img: require("../../pictures/1.jpg")
        },
        {
          id: 2,
          img: require("../../pictures/2.jpg")
        },
        {
          id: 3,
          img: require("../../pictures/3.jpg")
        },
        {
          id: 4,
          img: require("../../pictures/4.jpg")
        },
        {
          id: 5,
          img: require("../../pictures/5.jpg")
        },
        {
          id: 6,
          img: require("../../pictures/6.jpg")
        },
        {
          id: 7,
          img: require("../../pictures/7.jpg")
        },
        {
          id: 8,
          img: require("../../pictures/8.jpg")
        }
      ],
      mallList1: [
        {
          id: 1,
          img: require("../../pictures/qian1.png"),
          desc: "京东超市"
        },
        {
          id: 2,
          img: require("../../pictures/qian2.png"),
          desc: "数码电器"
        },
        {
          id: 3,
          img: require("../../pictures/qian3.png"),
          desc: "京东服饰"
        },
        {
          id: 4,
          img: require("../../pictures/qian4.png"),
          desc: "京东生鲜"
        },
        {
          id: 5,
          img: require("../../pictures/qian5.png"),
          desc: "京东到家"
        },
        {
          id: 6,
          img: require("../../pictures/qian6.png"),
          desc: "充值缴费"
        },
        {
          id: 7,
          img: require("../../pictures/qian7.png"),
          desc: "9.9元拼"
        },
        {
          id: 8,
          img: require("../../pictures/qian8.png"),
          desc: "领券"
        },
        {
          id: 9,
          img: require("../../pictures/qian9.png"),
          desc: "赚钱"
        },
        {
          id: 10,
          img: require("../../pictures/qian10.png"),
          desc: "PLUS会员"
        }
      ],
      mallList2: [
        {
          id: 11,
          img: require("../../pictures/qian11.png"),
          desc: "京东国际"
        },
        {
          id: 12,
          img: require("../../pictures/qian12.png"),
          desc: "京东拍卖"
        },
        {
          id: 13,
          img: require("../../pictures/qian13.png"),
          desc: "唯品会"
        },
        {
          id: 14,
          img: require("../../pictures/qian14.jpg"),
          desc: "玩3C"
        },
        {
          id: 15,
          img: require("../../pictures/qian15.png"),
          desc: "沃尔玛"
        },
        {
          id: 16,
          img: require("../../pictures/qian16.png"),
          desc: "美妆馆"
        },
        {
          id: 17,
          img: require("../../pictures/qian17.png"),
          desc: "京东旅行"
        },
        {
          id: 18,
          img: require("../../pictures/qian18.png"),
          desc: "拍拍二手"
        },
        {
          id: 19,
          img: require("../../pictures/qian19.png"),
          desc: "物流查询"
        },
        {
          id: 20,
          img: require("../../pictures/qian20.png"),
          desc: "全部"
        }
      ],
      
    };
  },
  created() {
    this.getData()
  },
  methods: {
    getAddress(name) {
      getAddressApi({ name }).then(result => {
        this.address = result.address;
      });
    },
    getData () {
      let xhr = new XMLHttpRequest();
      xhr.open('get', './killdata.json', true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && /200|304/.test(xhr.status)) {
            let data = xhr.response;
            console.log(data)
        }
      }
      xhr.send()
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
.one {
  background: url("./back-img.jpg") no-repeat center center;
  background-size: 100%;
  height: 50vw;
  border: 1px solid transparent;
}
.mainBox {
  overflow: onscroll;
  background-color: #f6f6f6;
  width: 100vw;
  box-sizing: border-box;
  .topBox {
    background: transparent;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 12vw;
    .line {
      width: 15vw;
      height: 100%;
      background: url("./1.png") no-repeat 50% center;
      background-size: 40% 40%;
    }
    .inp {
      height: 12vw;
      line-height: 12vw;
      width: 70%;
      padding: 10px 0;
    }
    .inp::before {
      content: "";
      display: block;
      background: url("./2.png") no-repeat left center;
      background-size: 100% 100%;
      width: 6vw;
      height: 5vw;
      position: absolute;
      left: 18vw;
    }
    .log {
      height: 100%;
      line-height: 12vw;
      padding: 0 4vw 0 0;
      color: #fff;
      font-size: 3.8vw;
    }
  }
}
.one > .van-swipe {
  width: 92vw;
  height: 37vw;
  margin: 13vw 4vw;
  border-radius: 2vw;
  img {
    width: 100%;
    height: 100%;
  }
}
.mall_nav {
  width: 98vw;
  height: 40vw;
  margin: 0 1vw;
  ul {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    color: #666666;
    li {
      width: 20%;
      height: 20vw;
      padding: 2vw;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      text-align: center;
      img {
        width: 10vw;
        height: 10vw;
      }
      span {
        margin-top: 1.8vw;
        font-size: 3vw;
      }
    }
  }
}
.mall_nav .van-swipe__indicators {
  position: absolute;
  bottom: 0vw;
}
.rapBox {
  display: flex;
  background-color: #fff;
  margin: 3vw 0 0 0;
  width: 100%;
  height: 26vw;
  img {
    width: 33%;
    height: 100%;
    &:nth-child(2) {
      width: 34%;
    }
  }
}
.killBox {
  background-color: #cb3403;
  border: 1px solid transparent;
  width: 100%;
  height: 200vw;
  .onekill {
    width: 96vw;
    margin: 2vw 2vw;
    height: 45vw;
    border-radius: 2vw;
    background-color: #fff;
    .text {
      width: 100%;
      padding: 2vw 2vw;
      background: url("../../pictures/kill2.png") no-repeat center center;
      background-size: 100%;
      text-align: center;
      .log {
        height: 5vw;
        line-height: 5vw;
        img {
          height: 100%;
          margin-right: 2vw;
        }
      }
      .killtime_box {
        margin: 1vw 0 0 2vw;
      }
      .miao {
        color: #cb3403;
        font-size: 3vw;
        margin: 1vw 3vw 0 0;
      }
    }
  }
  .onekill>.van-swipe{
    width: 100%;
    height: 100%;
    .van-swipe-item{
      display: flex;
      flex-direction: column;
      span{
        font-size: 4vw;
        &:nth-child(2){
          color:#cb3403;
          margin:2vw 0;
          font-weight: 800;
        }
        &:nth-child(3){
          color: #666666;;
          text-decoration: line-through;
        }
      }
    }
    img{
      height: 40%;
      width: 18vw;
      margin-left: 2vw;
    }
  }
}
</style>