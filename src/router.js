import { createRouter, createWebHistory } from 'vue-router'

import Filmvisarna from './views/Filmvisarna.vue'
import Filmer from './views/Filmer.vue'
import Login from './views/Login.vue'
import Biljetter from './views/Biljetter.vue'
import FilmerDetails from './views/FilmerDetails.vue'
import SkapaKonto from './views/SkapaKonto.vue'

const routes = [
  {
    name: 'FilmerDetails',
    path: '/filmerDetails/:id',
    component: FilmerDetails
  },
  {
    name: 'Filmvisarna',
    path: '/',
    component: Filmvisarna
  },
  {
    name: 'Filmer',
    path: '/filmer', // dynamic $route.params.id
    component: Filmer
  },
  {
    name: 'Login',
    path: '/login',
    component: Login
  },
  {
    name: 'Biljetter',
    path: '/biljetter',
    component: Biljetter
  },
  {
    name: 'SkapaKonto',
    path: '/skapaKonto',
    component: SkapaKonto
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})