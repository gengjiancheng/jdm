<template>
  <div>
    <van-icon  class="log" name="arrow-left" />
    <van-search v-model="value" placeholder="请输入搜索关键词" shape="round" @search="onSearch">
    <van-icon class="login" name="ellipsis" />
    </van-search>
  </div>
</template>
<script>
// @ is an alias to /src
import Vue from 'vue';
import { Search } from 'vant';

Vue.use(Search);
export default {
  name: "classification",
  data() {
    return {};
  },
  components: {}
};
</script>
<style lang="less">
    
    
</style>