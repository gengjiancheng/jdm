<template>
  <div>
    <van-icon class="icon" name="arrow-left"  />
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @keydown.enter="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <div class="searchBox">
      <h2>历史记录</h2>
      <van-icon class="icon" name="delete" @click="clear" size="25px" />
      <ul>
        <li v-for="item in list" :key="item.id">{{item.value}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "search",
  data() {
    return {
      value: "",
      list: []
    };
  },
  components: {},
  methods: {
    onSearch() {
      let obj = {
        value: this.value,
        id: Math.random()
      };
      this.list.unshift(obj);
      this.value = "";
      this.$router.push("/detail");
    },
    clear() {
      this.list = [];
    }
  }
};
</script>
<style lang="less" scoped>
.icon {
  position: absolute;
  top: 4.5vw;
  left: 0;
  font-size: 20px;
}
.van-search--show-action {
  padding: 10px 10px 10px 25px;
}
.searchBox {
  width: 100vw;
  height: 45vw;
  background: #eee;
  border-radius: 10px;
  position: relative;
  box-shadow: 1px 1px 1px 1px #666;
  h2 {
    height: 10vw;
    line-height: 10vw;
    text-align: left;
  }
  ul {
    height: 35vw;
    width: 90vw;
    padding: 0 5vw;
    overflow: hidden;
    li {
      float: left;
      height: 5vw;
      line-height: 5vw;
      margin-right: 3vw;
      font-size: 20px;
    }
  }
  .icon {
    position: absolute;
    top: 1vw;
    right: 2vw;
  }
}
</style>