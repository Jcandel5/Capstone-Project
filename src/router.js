import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/JobForm',
      name: 'JobForm',
      component: () => import('./views/JobForm.vue')
    },
    {
      path: '/PayForm',
      name: 'PayForm',
      component: () => import('./views/PayForm.vue')
    },
    {
      path: '/AreaForm',
      name: 'AreaForm',
      component: () => import('./views/AreaForm.vue')
    },
    {
      path: '/Employee',
      name: 'Employee Search Page',
      
      component: () => import('./components/EmployeeSearchPage.vue')
    },
    {
      path: '/callback',
      name: 'Choice Page',
      
      component: () => import('./components/ChoicePage.vue')
    },
    {
      path: '/Employer',
      name: 'EmployerPostPage',
      
      component: () => import('./components/EmployerPostPage.vue')
    },
    
    
    
  ]
})
