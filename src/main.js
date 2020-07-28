import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'
import Vuetify from 'vuetify'
import LoadScript from "vue-plugin-load-script";

import 'vuetify/dist/vuetify.min.css'
import 'nes.css/css/nes.min.css'
import '@vuikit/theme'

Vue.config.productionTip = false;
Vue.use(Vuikit);
Vue.use(VuikitIcons);
Vue.use(Vuetify);
Vue.use(LoadScript)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
