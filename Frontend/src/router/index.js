import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DateView from '../views/DateView.vue'
import Editor from '@/components/editorInput.vue'
import InboxPage from '../views/InboxPage.vue'
import Sidebar from '@/components/sideBar.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/date',
    name: 'date',
    component: DateView
  },
  {
    path: '/editor',
    name: 'editor',
    component: Editor
  },
  {
    path: '/inbox',
    name: 'inboxpage',
    component: InboxPage
  },
  {
    path: '/sidebar',
    name: 'sidebar',
    component: Sidebar
  }
  
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //   }
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

