<template>
  <div id="app">
    <Home />
    <b-container class="bv-example-row" :auth="auth" :authenticated="authenticated">
      <b-row class="buttons">
      <span><b-button class="login" b-col v-if="!authenticated" @click="login()"><h5>
        Log In
      </h5></b-button>
      <b-button class="logout" b-col v-if="!authenticated" @click="logout()"><h5>
        Log Out
      </h5></b-button></span>
      <HomeButton />
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
  background-color: #2f445b;
  height: 100%;
} 

button{
  margin-top: 15px;
}
a{
  color: white;
}
.buttons{
  display:flex;
  justify-content: center;
}
.login{
  background-color: #4db1f2;
  margin-right: 15px;
}
.logout{
  background-color: #4db1f2;
  margin-right: 15px;
}
h5{
  margin-top: 5px;
}




</style>
