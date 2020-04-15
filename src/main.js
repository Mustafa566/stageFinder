/* eslint-disable */
import Vue from 'vue'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'
import NProgress from 'nprogress';
import App from './App.vue'
import AddIntership from './components/crud/AddIntership.vue'
import EditItem from './components/crud/EditItem.vue'
import Internship from './components/crud/Internship.vue'
import Login from './components/auth/Login.vue'
import ProfileInfo from './components/auth/ProfileInfo.vue'
import Profile from './components/crud/Profile.vue'
import Bot from './components/chatBot/Bot.vue'
import Index from './components/Index.vue'
import faq from './components/Faq.vue'
import '../node_modules/nprogress/nprogress.css'
import firebase from "firebase"
import './config/db'
import VueHead from 'vue-head'
import json from './components/chatBot/info.json';
import VModal from 'vue-js-modal'
 
Vue.use(VModal)
Vue.use(VueHead)
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
    component: faq,
  },
  {
    name: 'test',
    path: '/test',
    component: test,
  },
  {
    name: 'Bot',
    path: '/Bot',
    component: Bot ,
  },
  {
    name: 'Index',
    path: '/index',
    component: Index,
  },
  {
    name: 'Login',
    path: '/login',
    component: Login,
  },
  {
    name: 'ProfileInfo',
    path: '/ProfileInfo',
    component: ProfileInfo,
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
