<template>
  <div>
    <div class="headtitle mx-auto">
    <h1> Employee Current Jobs</h1>
    </div>
    <div v-if="jobs && jobs.length">
      <div v-for="(job, index)  in jobs" v-bind:key='"job" + index' :job='job'>
        <div class="jobContainer">
          <b-card-group deck class="mb-3">
            <b-card bg-variant="success" text-variant="white"  class="text-center">
              <p class="card-title">{{job.title}} , {{job.pay}}</p>
              <p class="card-location">{{job.jobDescription}} , {{job.area}}</p>
            </b-card>
          </b-card-group>
          <div class="buttons">
              <b-button class="requestJob">Request Job</b-button>
              <b-button class="collectMoney">Collect Money</b-button>
          </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from "axios";
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
.headtitle{
  display:flex;
  justify-content: center;
  color: white;
  background-color: tan;
  border-radius: 20px;
  width: 450px;
  margin-bottom: 15px;
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
  color:blue;
}
button{
  margin-bottom: 15px;
}
.buttons{
  margin-bottom: 30px;
}

</style>
