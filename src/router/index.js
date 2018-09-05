import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import SaveTheDate from '@/components/sections/SaveTheDate'
import AdminPage from '@/components/AdminPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SaveTheDate',
      component: SaveTheDate
    },
    {
      path: '/home',
    	name: 'Home',
    	component: Home
    },
    {
      path: '/admin',
      name: 'AdminPage',
      component: AdminPage
    }
  ]
})
