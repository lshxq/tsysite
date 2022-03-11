import Vue from 'vue'
import App from './App.vue'
import './assets/main.sass'
import tsy from 'tsyvue'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(element)
Vue.use(tsy)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
