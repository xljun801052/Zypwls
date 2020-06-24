import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入element-ui和对应样式库 并使用  此处是全局引入，后续项目包体积太大可以考虑按需引入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
