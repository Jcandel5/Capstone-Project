<template>
<div>
  <div class="jobsForm">
    <h1>Jobs Form</h1>
  </div>
      <div v-if="jobs && jobs.length">
        <div v-for="(job, index)  in jobs" v-bind:key='"job" + index' :job='job'>
            <b-card-group deck>
          <b-container class="jobContainer">
            <b-row class="text-center">
            <b-card bg-variant="info" text-variant="white" class="text-center">
             <b-col class="card-text"><h4>{{job.title}}  {{job.pay}}</h4></b-col>
              <b-col class="card-location"><h5>{{job.jobDescription}}  {{job.area}}</h5></b-col>
            <div class="buttons">
              <b-button class="requesttheJob">Request Job</b-button>
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
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue';
export default {
  name: "JobForm",
  data () {
    return {
      jobs: [], 
      apiURL: "https://protected-forest-50209.herokuapp.com/api/jobs"
    }
  },
  mounted () {
    axios.get(this.apiURL)
    .then(response => {
      console.log(response.data)
      this.jobs = response.data
    }) 
  }
}
</script>

<style>

/* .jobContainer{
  border: 5px solid black;
} */
div.card.text-center{
  margin-top:15px;
}
</style>

