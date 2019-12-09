<template>
  <div class='mianBox'>
    <span>首页</span>
    <div class="get_address_btn" @click="getAddress('fang')">
      获取fang地址
    </div>
    <div class="get_address_btn" @click="getAddress('cui')">
      获取cui地址
    </div>
    <div class="show_address" v-text="address"></div>
  </div>
</template>
<script>
// @ is an alias to /src
import {getAddressApi} from '../../api/address';
export default {
  name: "home",
  data() {
    return {
      address: ""
    };
  },
  methods: {
    getAddress (name) {
      getAddressApi({name}).then(result => {
        this.address = result.address;
      });
    }
  },
  components: {}
};
</script>
<style lang="less">
</style>