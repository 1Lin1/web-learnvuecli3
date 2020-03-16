import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueComPositionApi from '@vue/composition-api'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入全局路由守卫
import './router/guard'

Vue.use(ElementUI);
Vue.use(vueComPositionApi);

Vue.config.productionTip = false;
// Vue.prototype.$HOST = '/linhuan';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
