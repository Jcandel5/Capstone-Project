<template>
  <div class="jobsForm">
    <h1>Jobs Form</h1>
      <div v-if="jobs && jobs.length">
        <div v-for="job of jobs">
          <div class="jobContainer">
            <div class="title">
              {{ job.title }} 
            </div>
            <div class="area">
              {{job.area}}
            </div>
            <div class="pay">
              {{job.pay}}
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

<style scoped>
/* .title{
  background-color: lightblue
  
}
.area{
  background-color: coral
}
.pay{
  background-color: indianred
} */
/* .jobContainer{
  margin-bottom: 5px;
  border: 2px solid black;
}  */
</style>

