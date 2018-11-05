<template>
  <div>
    <div class="EmployerCurrent">
      <b-button>
        <router-link :to="{ path: 'EmployerCurrentJobPage' }">Your Current Jobs</router-link>
      </b-button>
    </div>
    <h1>Employer Post Page</h1>

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
        <div>

        </div>
        <div class="postJob">
          <b-button v-on:click="notify" type="submit" >Post Job </b-button>
        </div>
      </form>
    </div>
    <!-- <button type="sumbit">Post Job</button> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EmployerPostPage",
  data() {
    return {
      msg: "Your Post Has Been Added",
      // jobs : {title: "", pay: "", area: ""},
      apiURL: "https://protected-forest-50209.herokuapp.com/api/jobs",
      form: {
        title: "",
        pay: "",
        area: ""
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
  display:flex;
  justify-content: center;
  margin-bottom: 15px;
  color: white;
}
.title{
  display:flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  
}
.pay{
  display:flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}
.area{
  display:flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}
.description{
  display:flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}
.jobtitle{
  margin-left: 15px;
  display: flex;
  width: 150px;
}
.jobpay{
  margin-left: 15px;
  display: flex;
  width: 350px;
  color:white;
}
.jobarea{
  margin-left: 15px;
  display: flex;
  width: 350px;
}
.jobdescription{
  margin-left: 5px;
  display: flex;
  width: 250px;
}

.postJob{
  display:flex;
  align-content: center;
  align-items: center;
  align-self: center;
  justify-content: center;
  justify-items: center;
  justify-self: center;
}
.EmployerCurrent{
   display:flex;
  align-content: center;
  align-items: center;
  align-self: center;
  justify-content: center;
  justify-items: center;
  justify-self: center;
  margin-top: 50px;
  margin-bottom: 15px;
}
.jobpays{
  color:white;
}
.jobareas{
  color:white;
}
.jobtitles{
  color:white;
}
.description{
  color: white;
}
input.jobpay{
  color:black;
}




</style>
