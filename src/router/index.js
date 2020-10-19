import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import login from "@/views/login.vue"
import register from "@/views/register.vue"
import Dashboard from "@/views/dashboard.vue"

  const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta:{
      requireAuth:true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta:{
      requireVisitor:true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta:{
      requireVisitor:true
    }
  }
  ]
  /*
  {
    path: '/about',
    name: 'About',
    
    component: () => import( webpackChunkName: "about"  '../views/About.vue')
  }
]*/


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




  // Complete the animation of the route progress bar.
  //NProgress.done()


export default router
