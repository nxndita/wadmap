import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Map from '../views/map.vue'
import SignUp from '../views/SignUp.vue'
import useAuthListener from '../helpers/authListener'
import SignIn from '../views/SignIn.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/map',
    name: 'Map',
    component: Map,
    beforeEnter(to, from, next) {
    
      var hasPermission = useAuthListener();
      console.log(hasPermission)
      if (hasPermission) {
        next()
      } else {
        next ({
          name: 'SignIn'
        })
      }
    
  }
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
