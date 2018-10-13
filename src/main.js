import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import firebase from 'firebase'

import router from './router/index'

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyDQov3sM_8FqcishMXFSIs_xkC3o54QfHo",
  authDomain: "tournament-5a6d7.firebaseapp.com",
  databaseURL: "https://tournament-5a6d7.firebaseio.com",
  projectId: "tournament-5a6d7",
  storageBucket: "",
  messagingSenderId: "260699172374"
};
firebase.initializeApp(config);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')