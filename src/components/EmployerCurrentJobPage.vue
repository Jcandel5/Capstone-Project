<template>
  <div>
    <h1> Employer Current Jobs</h1>
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
          <div class="editJob">
            <button>
              <router-link :to="{ path: 'EmployerEditJobPage' }">Edit</router-link>
            </button>
          </div>
          <div class="deleteJob">
            <button type="submit">
              Delete
              </button>
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
</style>
