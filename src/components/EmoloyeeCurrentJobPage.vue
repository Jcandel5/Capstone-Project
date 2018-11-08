<template>
  <div>

    <h1> Current Jobs</h1>

    <b-container class="jobContainer">
      <div class="jobs" v-if="jobs && jobs.length" v-for="(job, index)  in jobs" v-bind:key='"job" + index' :job='job'>
        <b-row class="text-center">
          <b-card bg-variant="info" text-variant="white" class="text-center">
            <b-col class="card-title">
              <h4>{{job.title}} {{job.pay}}</h4>
            </b-col>
            <b-col class="card-location">
              <h5>{{job.jobDescription}} {{job.area}}</h5>
            </b-col>

            <div class="buttons">
              <b-button class="collectMoney">Collect Money</b-button>
            </div>
          </b-card>
        </b-row>
      </div>
    </b-container>
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

.jobContainer{
  display:flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width:100%;
}
div.card-deck{
  width:150px;
}
.jobs{
  display:flex;
  align-content: center;
  width:350px;
  height: 300px;
}
/* div.card-body{
  width:350px;
} */
div.card.text-center{
  margin: 20px;
  height: 250px;
}
div.row.text-center{
  height:300px;
}
.requestJob{
  margin: 10px;
}
.collectMoney{
  margin: 10px;
}
h1{
  border: 1px solid white;
}

</style>
