import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('../views/Login/Login.vue');
const Register = () => import('../views/Register/Register');
const Home = () => import('../views/Home/Home');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home',
  },
  {
    path: '/login',
    component: Login,
  },
 
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/home',
    component: Home,
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  
})


export default router
