<template>
  <div>
    <div class="headtitle mx-auto">
    <h1> Current Jobs</h1>
    </div>
    <div v-if="jobs && jobs.length">
      <div v-for="(job, index)  in jobs" v-bind:key='"job" + index' :job='job'>
          <b-card-group deck>
        <b-container class="jobContainer">
          <b-row class="text-center">
            <b-card bg-variant="info" text-variant="white"  class="text-center">
              <b-col class="card-title"><h4>{{job.title}}  {{job.pay}}</h4></b-col>
              <b-col class="card-location"><h5>{{job.jobDescription}} {{job.area}}</h5></b-col>
          <div class="buttons">
              <b-button class="requestJob">Request Job</b-button>
              <b-button class="collectMoney">Collect Money</b-button>
          </div>
            </b-card>
          </b-row>
          </b-container>
          </b-card-group>
        </div>
      </div>
    </div>
</template>

<script>
import axios from "axios";
import BootstrapVue from 'bootstrap-vue';
export default {
  name: "EmployerCurrentJobPage",
  data() {
    return {
      jobs: [],
      apiURL: "https://protected-forest-50209.herokuapp.com/api/jobs"
    };
  },
  mounted() {
    axios.get(this.apiURL).then(response => {
      console.log(response.data);
      this.jobs = response.data;
    });
  }
};
</script>

<style>
h1{
  width:450px;
}
.headtitle{
  display:flex;
  justify-content: center;
  color: white;
  background-color: #4db1f2;
  border-radius: 20px;
  width: 450px;
  margin-bottom: 15px;
  margin-top: 25px;
}
.requestJob{
  margin-bottom: 5px;
  height: 50px;
  margin-top: 15px;
  margin-right: 150px;
}
.collectMoney{
  margin-bottom: 5px;
  height: 50px;
}
.card-title{
  color:black;
}
.card-location{
  color:black;
}
div.card-body{
  padding-bottom:15px;
}
div.card.text-center{
  margin-top:15px;
}

</style>
