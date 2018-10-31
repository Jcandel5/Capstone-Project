<template>
  <div id="app">
    <div id="navBar" 
      :auth="auth" 
      :authenticated="authenticated">
          <button
            class="btn btn-primary btn-margin"
            v-if="!authenticated"
            @click="login()">
              Log In
          </button>
          <button
            class="btn btn-primary btn-margin"
            v-if="!authenticated"
            @click="logout()">
              Log Out
          </button>
          <Home/>
    <router-view
        :auth="auth" 
        :authenticated="authenticated">
    </router-view>
    </div>
  </div>
  
</template>
<script>

import signup from './views/Signup.vue'
import signin from './views/SignIn.vue'
import AuthService from './Auth/AuthService'
import Home from './views/Home.vue'
import EmployeeSearchPage from './components/EmployeeSearchPage.vue'

let auth = new AuthService()
const { login, logout, authenticated, authNotifier } = auth
export default {
  name: 'App',
  components: {
    signup,
    signin,
    Home,
    EmployeeSearchPage
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

</style>
