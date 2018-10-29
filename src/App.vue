<template>
  <div id="app">
    <div id="navBar" 
      :auth="auth" 
      :authenticated="authenticated">
      <!-- <div id="Home">
        <router-link to="/">Home</router-link>
      </div>
      <div id="Signup">
        <router-link to="/signup">Sign Up</router-link>
      </div>
      <div id="Login">
        <router-link to="/signin">Sign In</router-link>
      </div> -->
    
    <button
            class="btn btn-primary btn-margin"
            v-if="!authenticated"
            @click="login()">
              Log In
          </button>
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

let auth = new AuthService()
const { login, logout, authenticated, authNotifier } = auth
export default {
  name: 'App',
  components: {
    signup,
    signin
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
