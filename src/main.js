/* eslint-disable */
import Vue from 'vue'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'
import NProgress from 'nprogress';
import App from './App.vue'
import AddIntership from './components/items/AddIntership.vue'
import EditItem from './components/items/EditItem.vue'
import Internship from './components/items/Internship.vue'
import Login from './components/auth/Login.vue'
import Profile from './components/items/Profile.vue'
import Index from './components/items/Index.vue'
import faq from './components/faq.vue'
import '../node_modules/nprogress/nprogress.css'
import firebase from "firebase"
import './config/db'

Vue.use(VueFire)
Vue.use(VueRouter)
Vue.config.productionTip = false

let routes = [
  { 
    path: '/', 
    redirect: '/index',
  },
  {
    name: 'faq',
    path: '/faq',
    component: faq ,
  },
  {
    name: 'Index',
    path: '/index',
    component: Index ,
  },
  {
    name: 'Login',
    path: '/login',
    component: Login,
  },
  {
    name: 'Profile',
    path: '/profile',
    component: Profile,
  },
  {
    name: 'Add',
    path: '/add',
    component: AddIntership,
  },
  {
    name: 'Edit',
    path: '/edit/:id',
    component: EditItem,
  },
  {
    name: 'Internship',
    path: '/internship',
    component: Internship,
  },
];

const router = new VueRouter({ mode: 'history', routes: routes });

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

let app;
firebase.auth().onAuthStateChanged(user => {
  if(!app) {
    app = new Vue({
      render: h => h(App),
      router
    }).$mount('#app')    
  }
})
