import Vue from 'vue'
import App from './App.vue'
// import ytui from './index';


import TicketBase from '../lib/TicketBase/index';

import '../lib/TicketBase/index.css'
Vue.use(TicketBase)
import Ticket2 from '../lib/Ticket2/index';

import '../lib/Ticket2/index.css'
Vue.use(Ticket2)
// import ytdemo from '../lib/index/index';
// import '../lib/index/index.css'
// Vue.use(ytdemo)
console.log(process.env.NODE_ENV);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
