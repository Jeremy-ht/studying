import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'
import './filters'
import './mock/mockServer'

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  loading
})

Vue.component(Button.name, Button)

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router,
  store
})
