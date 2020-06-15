import Vue from 'vue'
import moment from "moment";
import babelPolyfill from 'babel-polyfill'
import JsonExcel from 'vue-json-excel'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import CKEditor from '@ckeditor/ckeditor5-vue';

import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);
Vue.component('pagination', require('laravel-vue-pagination'));
Vue.component('downloadExcel', JsonExcel)
window.axios = require('axios');
Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.use( CKEditor );
const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

new Vue({
  el: '#app',
  router,
  icons,
  template: '<App/>',
  components: {
    App
  },
})



Vue.filter('getStatus', function (value) {
  if(value==0){
    return "Pending"
  }else if(value==1){
    return "Progress"
  }else if(value==2){
    return "Deal"
  }else if(value==3){
    return "Completed"
  }else if(value==4){
    return "Delivered"
  }else if(value==5){
    return "Closed"
  }

});

Vue.filter('formatDate', function(value) {

  if (value) {

    return moment(String(value)).format('DD/MM/YYYY hh:mm A')

  }

});

Vue.filter('formatTime', function(value) {

  if (value) {

    return moment.unix(value).format("DD/MM/YYYY hh:mm A");

  }

});
Vue.filter('formatDateTime', function(value) {

  if (value) {

    return moment.unix(value).format("DD/MM/YYYY");

  }

});
