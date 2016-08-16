import Vue from 'vue'
import App from './components/App.vue'
import Sign from './views/sign.vue'
require('./assets/docs.css');
new Vue({
  el: 'body',
  components: { Sign }
})
