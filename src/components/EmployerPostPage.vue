<template>
    <div>
    <div class="profileButton">
      <b-button class="jobprofile">
        <router-link :to="{ path: 'EmployerProfilePage' }"><h4>Profile</h4></router-link>
      </b-button>
    </div>
    <h1>Employer Post Page</h1>
  <div class="postPage mx-auto">
    <div class="EmployerCurrent">
      <b-button class="currentjob">
        <router-link :to="{ path: 'EmployerCurrentJobPage' }">Your Current Jobs</router-link>
      </b-button>
    </div>

    <div class="Post">
      <form id="app" @submit="onSubmit">
        <div class="title">
          <label class="jobtitles">Job Title</label>
          <input class="jobtitle" v-model="form.title" type="text" name="title">
        </div>
        <div class="description">
          <label class="jobdescriptions">Description</label>
          <input class="jobdescription" v-model="form.description" type="text" name="description">
        </div>
        <div class="pay">
          <label class="jobpays">Pay</label>
          <input class="jobpay" v-model="form.pay" type="text" name="pay">
        </div>
        <div class="area">
          <label class="jobareas">Area</label>
          <input class="jobarea" v-model="form.area" type="text" name="area">
        </div>
        <div class="postJob">
          <b-button class="postjob" v-on:click="notify" type="submit">Post Job </b-button>
        </div>
      </form>
    </div>
    </div>
    <!-- <button type="sumbit">Post Job</button> -->
  </div>
</template>

<script>
import axios from "axios";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: "EmployerPostPage",
  data() {
    return {
      msg: "Your Post Has Been Added",
      jobs : {title: "", pay: "", area: ""},
      apiURL: "https://protected-forest-50209.herokuapp.com/api/jobs",
      form: {
        title: "",
        pay: "",
        area: "",
        id: ""
      }
    };
  },
  methods: {
    notify(evt){
      alert('You made a post!')
    },
    onSubmit(evt) {
      evt.preventDefault();
      return fetch(this.apiURL, {
        method: "post",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(this.form)
      }).then(resp => {
        console.log("form response", resp);
        if (!resp.ok) {
          if (resp.status >= 400 || resp.status < 500) {
            return resp.json().then(data => {
              const err = {
                errorMessage: data.message
              };
              throw err;
              ballz = true;
            });
          }
          const err = {
            errorMessage: "Blah"
          };
          throw err;
        }
        return resp.json();
      });
    },
    mounted() {
      axios.post(this.apiURL).then(response => {
        console.log(response.data);
        this.newJob = response.data;
      });
    }
  },
};
</script>

<style>
h1{
  border-radius: 10px;
  border:1px solid white;
}
.postJob{
  display:flex;
  margin-bottom: 15px;
  align-content: center;
  align-items: center;
  align-self: center;
  justify-content: center;
  justify-items: center;
  justify-self: center;
}
.postPage{
  background-color: #4db1d1;
  width: 450px;
  border-radius: 20px;
  margin-bottom: 50px;
}
form#app{
  background-color: #4db1d1;
  width: 450px;
}
.profileButton{
  display:flex;
  justify-content: center;
}
.jobtitles{
  color:black;
}
.jobdescriptions{
  color:black;
  margin-right: 15px;
}
.jobpays{
  color:black;
}
.jobareas{
  color:black;
}
input.jobtitle{
  width:250px;
  margin-right: 35px;
}
input.jobpay{
  width:250px;
  margin-bottom: 10px;
}
input.jobdescription{
  width:250px;
  margin-right: 60px;
}
input.jobarea{
  width:250px;
  margin-right:5px;
  margin-bottom: 10px;
}
.jobprofile{
  background-color: #4db1f2;
  margin-top: 5px;
}
.currentjob{
  background-color: #579cf0;
  text-shadow: 1px 1px black;
}
.postjob{
  background-color: #579cf0;
  text-shadow: 1px 1px black;
}
button.jobprofile{
  border: 1px solid white;
}
.currentjob{
  border: 1px solid white;
}
.postjob{
  border: 1px solid white;
}
</style>
