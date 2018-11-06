import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
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
    {
      path: '/EmployerCurrentJobPage',
      name: 'EmployerCurrentJobPage',

      component: () => import('./components/EmployerCurrentJobPage.vue')
    },
    {
      path: '/EmployerEditJobPage',
      name: 'EmployerEditJobPage',

      component: () => import('./components/EmployerEditJobPage.vue')
    },
    {
      path: '/EmoloyeeCurrentJobPage',
      name: 'EmoloyeeCurrentJobPage',

      component: () => import('./components/EmoloyeeCurrentJobPage.vue')
    },{
      path: '/EmployerCurrentJobPage/:employerId/edit',
      component: require('./components/EmployerEditJobPage.vue'),
      props: true,

      component: () => import('./components/EmployerEditJobPage.vue')
    },




  ]
})
