import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Vuex from 'vuex'
import { store } from './store'
import firebase  from './utilities/firebase'

Vue.use(Vuex)
Vue.config.productionTip = false
router.beforeEach((to,from,next)=>{
	firebase.auth().onAuthStateChanged((user)=>{
  if(to.matched.some(record => record.meta.requireAuth)){
    if(!user){
      next({
        path:'/login'
      }) 
    }
    else{
        next()  
    }
  }
  else if(to.matched.some(record => record.meta.requireVisitor)){
    if(user){
      next({
        path:'/dashboard'
      })
    }else{
      next()
    }
  }
  else{
    next()
  }
   })
});

new Vue({
	router,store,
  render: h => h(App),
}).$mount('#app')
