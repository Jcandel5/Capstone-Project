import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: "/home"
    },
    {
      path: '/JobForm',
      name: 'signin',
      component: () => import('./views/JobForm.vue')
    },
    {
      path: '/PayForm',
      name: 'signup',
      component: () => import('./views/PayForm.vue')
    },
    {
      path: '/AreaForm',
      name: 'signup',
      component: () => import('./views/AreaForm.vue')
    },
    {
      path: '/callback',
      name: 'Employee Search Page',
      
      component: () => import('./components/EmployeeSearchPage.vue')
    },
    
    
  ]
})
