<template>
  <div>
    <h1> Current Jobs</h1>
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
          <div class="editJob">
            <b-button>
              <router-link :to="{ path: 'EmployerEditJobPage' }">Edit</router-link>
            </b-button>
          </div>
          <div class="deleteJob">
            <b-button type="submit">
              Delete
            </b-button>
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
.jobstitle {
  display: flex;
  justify-content: left;
}
.jobspay {
  display: flex;
  justify-content: left;
}
.jobsarea {
  display: flex;
  justify-content: left;
}
div.jobstitle {
  margin-bottom: 15px;
  background-color: white;
}
div.jobspay {
  margin-bottom: 15px;
  background-color: white;
}
div.jobsarea {
  margin-bottom: 15px;
  background-color: white;
}
.editJob {
  display: flex;
  justify-content: center;
}
.deleteJob {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
</style>
