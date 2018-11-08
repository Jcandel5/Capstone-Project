<template>
  <div>
    <h1>Jobs Form</h1>


    <b-container class="jobContainer">

      <div class="jobs" v-if="jobs && jobs.length" v-for="(job, index)  in jobs" v-bind:key='"job" + index' :job='job'>
        <b-row class="text-center">
          <b-card bg-variant="info" text-variant="white" class="text-center">
            <b-col class="card-text">
              <h4>{{job.title}} {{job.pay}}</h4>
            </b-col>
            <b-col class="card-location">
              <h5>{{job.jobDescription}} {{job.area}}</h5>
            </b-col>
            <div class="buttons">
              <b-button class="requesttheJob">Request Job</b-button>
            </div>
          </b-card>
        </b-row>
      </div>
    </b-container>
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
div.card-body{
  height: 290px;
  margin: 10px;
}
.jobContainer{
  margin-bottom: 15px;
}
.editJob {
  display: flex;
  justify-content: center;
}
.deleteJob {
  display: flex;
  justify-content: center;
} 
.requesttheJob{
  box-shadow: 3.5px 3.5px 2.5px black;
  background-color: #4db1f2;
}
div.card-body{
  border: 3px solid white;
  border-radius: 15px;
}
h5{
  text-shadow: 2px 2px black;
}
h4{
  text-shadow: 2px 2px black;
}
.jobContainer{
  display:flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width:100%;
}
.jobs{
  display:flex;
  align-content: center;
  width:350px;
  height: 300px;
}
div.card.text-center{
  margin: 20px;
  height: 250px;
}

.requestJob{
  margin: 10px;
}

h1{
  border: 1px solid white;
}
</style>

