<template>
  <div>
    <h1> Current Jobs</h1>
    <b-container class="jobContainer">
      <div class="jobs" v-if="jobs && jobs.length" v-for="(job, index)  in jobs" v-bind:key='"job" + index' :job='job'>
        <b-row class="row">
          <b-card bg-variant="info" v-bind:jobs="job" text-variant="white" class="text-center">
            <b-col class="card-text">
              <h4><u>{{job.title}} - {{job.pay}}</u></h4>
            </b-col>
            <b-col class="card-text">
              <h5>{{job.jobDescription}} - {{job.area}}</h5>
              <h6 class="viewHidden">{{job._id}}</h6>
            </b-col>
            <div class="buttons">
              <div class="editJob col-6">
                <b-button class="editButton">
                  <router-link :to="{ path: 'EmployerEditJobPage', params: {_id} }">
                    <h4>Edit</h4>
                  </router-link>
                </b-button>
              </div>
              <div class="deleteJob col-6">
                <b-button class="deleteButton" @click="deleteJob(job)">
                  <h4>
                    Delete
                  </h4>
                </b-button>
              </div>
            </div>
          </b-card>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import BootstrapVue from 'bootstrap-vue'
export default {
  name: "EmployerCurrentJobPage",
  data() {
    return {
      jobs: [],
      apiURL: "https://protected-forest-50209.herokuapp.com/api/jobs"
    };
  },methods:{
    deleteJob(job) {
      console.log("deleted", job._id)
      const deleteURL = this.apiURL + "/" + job._id
      axios.delete(deleteURL)
      .then(() => {
        let index = this.jobs.indexOf(job)
        console.log("index", index)
        this.jobs.splice(index, 1)
        this.jobs.filter(job => job._id !== job)
        
      })
    }
  },
  mounted() {
    axios.get(this.apiURL).then(response => {
      console.log(response.data);
      this.jobs = response.data;
    });
  }
  }
</script>

<style>

div.card-body{
  height: 280px;
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
.editButton{
  box-shadow: 3.5px 3.5px 2.5px black;
  background-color: #4db1f2;
}
.deleteButton{
  box-shadow: 3.5px 3.5px 2.5px black;
  background-color: #4db1f2;
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
.viewHidden{
  display: none;
}
div.card-body{
  border: 3px solid white;
  border-radius: 15px;
}
u{
  text-shadow: 2px 2px black;
}
h5{
  text-shadow: 2px 2px black;
}
h4{
  text-shadow: 2px 2px black;
}
</style>
