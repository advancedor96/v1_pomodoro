import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'vue-material-design-icons/styles.css'
import VueMaterialIcon from 'vue-material-icon'
Vue.config.productionTip = false

Vue.component(VueMaterialIcon.name, VueMaterialIcon)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
