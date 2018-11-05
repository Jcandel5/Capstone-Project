<template>
  <div id="app">
    <Home />
    <b-container class="bv-example-row" :auth="auth" :authenticated="authenticated">
      <b-row>
      <span><b-button b-col v-if="!authenticated" @click="login()">
        Log In
      </b-button>
      <b-button b-col v-if="!authenticated" @click="logout()">
        Log Out
      </b-button></span>
      <div class="homeButton">
      <HomeButton />
      </div>
      </b-row>
      <router-view :auth="auth" :authenticated="authenticated">
      </router-view>
    </b-container>
  </div>

</template>
<script>
import PayForm from './views/PayForm.vue'
import JobForm from './views/JobForm.vue'
import AreaForm from './views/AreaForm.vue'
import AuthService from './Auth/AuthService'
import Home from './views/Home.vue'
import HomeButton from './components/HomeButon.vue'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);


let auth = new AuthService()
const {
  login,
  logout,
  authenticated,
  authNotifier
} = auth
export default {
  name: 'App',
  components: {
    PayForm,
    JobForm,
    AreaForm,
    Home,
    HomeButton
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
#app{
  background-color: green;
  height: 1340px;
} 
.bv-example-row{
  display: flex;
  float: center;
  justify-content: center;
}
button{
  color: white;
  margin-top: 15px;
}

</style>
