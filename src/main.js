import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/less/common.less' // 引入共有样式
// 全局引入vant
import vant from 'vant'
import 'vant/lib/index.css'
Vue.use(vant)
// 全局引入ele
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
