<template>
  <div id="app">
      <Home/>
    <div id="navBar" 
      :auth="auth" 
      :authenticated="authenticated">
          <button v-if="!authenticated"
            @click="login()">
              Log In
          </button>
          <button v-if="!authenticated"
            @click="logout()">
              Log Out
          </button>
      <router-view
        :auth="auth" 
        :authenticated="authenticated">
      </router-view>
    </div>
      
  </div>
  
</template>
<script>

import PayForm from './views/PayForm.vue'
import JobForm from './views/JobForm.vue'
import AreaForm from './views/AreaForm.vue'
import AuthService from './Auth/AuthService'
import Home from './views/Home.vue'



let auth = new AuthService()
const { login, logout, authenticated, authNotifier } = auth
export default {
  name: 'App',
  components: {
    PayForm,
    JobForm,
    AreaForm,
    Home
  },
  data() {
    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })
    return {
      auth,
      authenticated
    }
  },
  methods: {
    login,
    logout
  }
}
</script>

<style>
/* #app{
  background-color: black;
} */
/* #navBar{
  display: flex;
  float: center;
  justify-content: center;
} */

</style>
