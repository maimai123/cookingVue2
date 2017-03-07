import Vue from 'vue';
import App from './app';
import store from '../../vuex/store';

const app = new Vue({
  el: '#app',
  store,
  render: m => m(App)
})
