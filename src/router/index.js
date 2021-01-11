import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title :" Home"
    }
  },
  {
     path:"/sing-in",
     name:"Signin",
     component:()=>import('../views/auth/signin.vue'),
     meta:{
       title:"sign-in"
     }
  },
  {
    path:'/dashboard',
    name: "Dashboard", 
    component: ()=> import('../views/Dashboard/index.vue'),
    meta:{
      title: "Dashboard"
    }
  }
]
//component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
const DEFAULT_TITLE = "Cli Auth"
router.afterEach((to)=>{

      Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
  })
});

export default router
