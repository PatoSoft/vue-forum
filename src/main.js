// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase'
import App from './App'
import router from './router'
import store from '@/store'
import AppDate from '@/components/AppDate'

Vue.component('AppDate', AppDate)

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA1XHFq49GI00zhuyFFLDjCbq0SQAVelpI',
  authDomain: 'vue-forum-e677c.firebaseapp.com',
  databaseURL: 'https://vue-forum-e677c.firebaseio.com',
  projectId: 'vue-forum-e677c',
  storageBucket: 'vue-forum-e677c.appspot.com',
  messagingSenderId: '376054174586',
  appId: '1:376054174586:web:0c454aad7a6ce06df9bcc3',
  measurementId: 'G-8YTK3Y1Y8P'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
