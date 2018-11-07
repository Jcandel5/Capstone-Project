<template>
  <div class="payForm">
    <h1>Pay Form</h1>
      <div v-if="jobs && jobs.length">
        <div v-for="(job, index)  in jobs" v-bind:key='"job" + index' :job='job'>
          <div class="jobContainer">
            <b-card-group deck class="mb-3">
            <b-card bg-variant="success" text-variant="white" class="text-center">
              <p class="card-text">{{job.pay}} , {{job.title}}</p>
              <p class="card-text">{{job.jobDescription}} , {{job.area}}</p>
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
  margin-top: 15px;
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

