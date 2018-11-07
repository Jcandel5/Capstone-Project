<template>
<div>
  <div class="payForm">
    <h1>Pay Form</h1>
    </div>
      <div v-if="jobs && jobs.length">
        <div v-for="(job, index)  in jobs" v-bind:key='"job" + index' :job='job'>
            <b-card-group deck>
          <b-container class="payContainer">
            <b-row class="text-center">
            <b-card bg-variant="info" text-variant="white" class="text-center">
              <b-col class="card-text"><h4>{{job.pay}}  {{job.title}}</h4></b-col>
              <b-col class="card-text"><h5>{{job.jobDescription}}  {{job.area}}</h5></b-col>
            <div class="requestJob">
              <b-button class="requestJob">Request Job</b-button>
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
  name: "PayForm",
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

<style scoped>
.payForm{
  margin-top: 25px;
}
/* .title{
  background-color: lightblue
  
}
.area{
  background-color: coral
}
.pay{
  background-color: indianred
}
.jobContainer{
  margin-bottom: 5px;
  border: 2px solid black;
} */
</style>

