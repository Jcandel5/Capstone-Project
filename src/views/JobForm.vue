<template>
 <div class="jobsForm">
   <h1>Jobs Form</h1>
   <div v-if="jobs && jobs.length">
   <div v-for="job of jobs">
  {{ job.title }} {{job.area}}
</div>
   </div>
 </div>
</template>
<script>
import axios from 'axios'
export default {
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

</style>

