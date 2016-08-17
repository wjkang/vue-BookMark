import Vue from 'vue'
import App from './components/App.vue'
import login from './views/login.vue'
import signup from './views/signup.vue'
require('./assets/style/docs.css');
new Vue({
  el: 'body',
  components: { signup }
})
