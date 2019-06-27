import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';

const socketInstance = socketio('http://localhost:3000', {
  transports: ['websocket'],
});
Vue.use(new VueSocketio({
  debug: true,
  connection: socketInstance
}));  

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
