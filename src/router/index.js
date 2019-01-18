import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import HomeSaveTheDate from '@/components/HomeSaveTheDate'
import SaveTheDate from '@/components/sections/SaveTheDate'
import AdminPage from '@/components/AdminPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeSaveTheDate',
      component: HomeSaveTheDate
    },
    {
      path: '/home',
    	name: 'Home',
    	component: Home
    },
    {
      path: '/administration/liste-des-invites/no-password',
      name: 'AdminPage',
      component: AdminPage
    }
  ]
})
