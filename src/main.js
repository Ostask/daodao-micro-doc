import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/style/public.scss';
import '@/style/el.scss';
import App from './App.vue'
import router from "./router"
import store from './store'
import './permission' // progress bar

import "@/utils/request"

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
