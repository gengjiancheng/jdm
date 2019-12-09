import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Icon,Tab,Tabs,Tabbar,TabbarItem } from 'vant'

Vue.use(Icon).use(Tab).use(Tabs).use(Tabbar).use(TabbarItem);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
