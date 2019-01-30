// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//Import vue resource for ajax calls
//import VueResource from 'vue-resource';
import VueRouter from 'vue-router'

//Import smooth scroll package
//import vueSmoothScroll from 'vue2-smooth-scroll'
//Vue.use(vueSmoothScroll);

//Vue.use(VueResource);

import Website from './components/Website';
import Code from './components/Code';
import ThreeD from './components/ThreeD';
import About from "./components/About";
import Contact from './components/Contact';

import Sticky from 'vue-sticky-directive'
Vue.use(Sticky);

Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: Website
  },
  {
    path: '/code',
    component: Code
  },
  {
    path: '/3d',
    component: ThreeD
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/contact',
    component: Contact
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.config.productionTip = false

export const bus = new Vue();

// Filters
Vue.filter('to-uppercase', function (value) {
  return value.toUpperCase();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
