import Vue from 'vue'
import App from './App.vue'

//  全局组件
import TypeNav from './components/TypeNav';
Vue.component(TypeNav.name, TypeNav);

Vue.config.productionTip = false


//映入路由
import router from '@/router';

// 映入仓库
import store from '@/store';

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
