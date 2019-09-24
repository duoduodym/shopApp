import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style/reset.css'
import '@/assets/style/common.less'
import '@/assets/font/iconfont.css'
import {Button,Row, Col,Swipe, SwipeItem} from 'vant';
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
