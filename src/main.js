import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/style/theme.scss';
import '@/style/el.scss';
import App from './App.vue'
import router from "./router"
import store from './store'
import './permission' // progress bar
import vMessage from '@/components/Message/index.js' 
import {directiveInstall} from"@/directives/index.js"

import "@/utils/request"

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(vMessage)
Vue.use(directiveInstall)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
