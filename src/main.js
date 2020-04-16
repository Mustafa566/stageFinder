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
import Faq from './components/Faq.vue'
import Reports from './components/admin/Reports.vue'
import '../node_modules/nprogress/nprogress.css'
import firebase from "firebase"
import './config/db'
import VueHead from 'vue-head'
import json from './components/chatBot/info.json';


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
    name: 'Index',
    path: '/Index',
    component: Index,
  },
  {
    name: 'Faq',
    path: '/Faq',
    component: Faq,
  },
  {
    name: 'Internship',
    path: '/Internship',
    component: Internship,
  },
  {
    name: 'Bot',
    path: '/Bot',
    component: Bot ,
  },
  {
    name: 'Login',
    path: '/Login',
    component: Login,
  },
  {
    name: 'ProfileInfo',
    path: '/ProfileInfo',
    component: ProfileInfo,
  },
  {
    name: 'Profile',
    path: '/Profile',
    component: Profile,
  },
  {
    name: 'Add',
    path: '/Add',
    component: AddIntership,
  },
  {
    name: 'Edit',
    path: '/Edit/:id',
    component: EditItem,
  },
  {
    name: 'Reports',
    path: '/Reports',
    component: Reports,
  }
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
