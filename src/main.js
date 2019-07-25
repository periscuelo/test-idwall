import Vue from 'vue';
import Vuesax from 'vuesax';
import App from './App.vue';
import router from './router';

import 'material-icons/iconfont/material-icons.css';
import 'vuesax/dist/vuesax.css';

Vue.use(Vuesax);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
