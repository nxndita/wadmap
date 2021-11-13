import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Map from '../views/map.vue'
import SignUp from '../views/SignUp.vue'
import Admin from '../views/Admin.vue'
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
    component: Map
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
  {
    path: '/admin',
    name: 'Admin',
    component: Admin ,
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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
