import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import Cart from '../views/Cart.vue'
import Menu from '../views/Menu.vue'
import Profile from '../views/Profile.vue'
import Status from '../views/Status.vue'
import About from '../views/About.vue'
import Account from '../components/Account.vue'
import AccountLogin from '../components/AccountLogin.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/landing',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/status',
    name: 'Status',
    component: Status
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    children: [
      {
        path: '',
        name: 'LogIn',
        component: AccountLogin,
      },
      {
        path: ':id',
        name: 'ProfilePage',
        component: Account,
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
