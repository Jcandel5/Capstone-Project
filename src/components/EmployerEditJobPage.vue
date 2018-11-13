<template>
  <div>
    <h1>Employer Edit Page</h1>
    <div class="editPage mx-auto">
      <div class="EmployerCurrent">
      </div>
      <div class="Edit">
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
          <div class="repostJob">
            <b-button type="submit">Re-Post Job </b-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: "EmployerEditPage",
  data() {
    return {
      msg: "You Have Re-Posted",
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
      alert('You fixed a post!')
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
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  color: white;
  background-color: #4db1f2;
  border-radius: 20px;
  width: 350px;
  text-shadow: 2px 2px black;
}
.title{
  display:flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  
}
.pay{
  display:flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}
.area{
  display:flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}
.description{
  display:flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
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

.repostJob{
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
.editPage{
  background-color: #4db1f2;
  width: 450px;
  border-radius: 20px;
}
form#app{
  background-color: #4db1f2;
  width: 450px;
  border-radius: 20px;
}





</style>
