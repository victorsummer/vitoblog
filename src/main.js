// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

function responsive(){
  if (window.innerWidth > 750) {
    document.getElementsByTagName('html')[0].style.fontSize = 100 + 'px';
  } else {
    document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth / 7.5 + 'px';
  }
};
responsive();
window.onresize = responsive;
