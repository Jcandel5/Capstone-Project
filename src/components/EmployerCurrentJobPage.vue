<template>
  <div>
    <h1> Current Jobs</h1>
        <div v-if="jobs && jobs.length">
          <div v-for="(job, index)  in jobs" v-bind:key='"job" + index' :job='job'>
            <b-card-group deck>
    <b-container class="jobContainer">
      <b-row class="text-center">
              <b-card bg-variant="info" v-bind:jobs="job" text-variant="white" class="text-center">
                <b-col class="card-text"><h4>{{job.title}} {{job.pay}}</h4></b-col>
                <b-col class="card-text"><h5>{{job.jobDescription}} , {{job.area}}</h5></b-col>
                <!-- <b-col class="card-text">{{job._id}}</b-col> -->

                <div class="buttons">
                  <div class="editJob col-6">
                    <b-button>
                      <router-link :to="{ path: 'EmployerEditJobPage', params: {_id} }"><h4>Edit</h4></router-link>
                    </b-button>
                  </div>
                  <div class="deleteJob col-6">
                    <b-button v-on:click="deleteJob"><h4>
                      Delete
                    </h4></b-button>
                    
                  </div>
                </div>
              </b-card>
      </b-row>
    </b-container>
            </b-card-group>
          </div>

        </div>
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
  },mathods:{
    deleteJob(id){
  //deletes from database 
  const deleteURL = this.apiURL + id
  axios.delete(deleteURL)
  .then(() => {
    //delete from vue app
    let index = this.jobs.indexOf(id)
    this.jobs.splice(index, 1)
    console.log(this.job)
  })
},
    deleteJob(evt) {
      evt.preventDefault();
      return fetch(this.apiURL, {
        method: "delete",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(this.form)
      }).then(resp => {
        console.log("form response", resp);
        if (!resp.ok) {
          if (resp.status >= 400 || resp.status < 500) {
            return resp.json().then(data => {
              const err = {
                errorMessage: data.message
              };
              throw err;
              ballz = true;
            });
          }
          const err = {
            errorMessage: "Blah"
          };
          throw err;
        }
        return resp.json();
      });
    },
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
  height: 175px;
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
div{
  color: black;
}

/* div.card-body{
  width:350px;
} */

</style>
