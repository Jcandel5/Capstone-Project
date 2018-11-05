<template>
  <div class="jobsForm">
    <h1>Jobs Form</h1>
      <div v-if="jobs && jobs.length">
        <div v-for="(job, index)  in jobs" v-bind:key='"job" + index' :job='job'>
          <div class="jobContainer">
            <b-card-group deck class="mb-3">
            <b-card bg-variant="success" text-variant="white" header="Job" class="text-center">
              <p class="card-text">{{job.title}}</p>
              <p class="card-text">{{job.pay}}.</p>
              <p class="card-text">{{job.jobDescription}}.</p>
              <p class="card-text">{{job.area}} </p>
            </b-card>
          </b-card-group>
            <div class="requestJob">
              <b-button class="requestJob">Request Job</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import axios from 'axios'
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
h1{
  display:flex;
  justify-content: center;
  margin-top: 15px;
  color:white;
}
.jobtitle{
  display:flex;
  justify-content: left;
  background-color: white;
  margin-bottom: 15px;
}
.jobpay{
  display:flex;
  justify-content: left;
  background-color: white;
  margin-bottom: 15px;
}
.jobarea{
  display:flex;
  justify-content: left;
  background-color: white;
  margin-bottom: 15px;
}
.requestJob{
  margin-bottom: 5px;
  margin-top: 5px;
  display:flex;
  justify-content: center;
}
/* .jobContainer{
  border: 5px solid black;
} */
</style>

