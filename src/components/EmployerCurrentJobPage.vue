<template>
  <div>
    <h1> Current Jobs</h1>
    <div v-if="jobs && jobs.length">
      <div v-for="(job, index)  in jobs" v-bind:key='"job" + index' :job='job'>
        <div class="jobContainer">
          <b-card-group deck class="mb-3">
            <b-card bg-variant="success" text-variant="white" class="text-center"> 
              <p class="card-text">{{job.title}} , {{job.pay}}</p>
              <p class="card-text">{{job.jobDescription}} , {{job.area}}</p>
            </b-card>
          </b-card-group>
          <div class="editJob">
            <b-button>
              <router-link :to="{ path: 'EmployerEditJobPage' }">Edit</router-link>
            </b-button>
          <div class="deleteJob">
            <b-button v-on:click="deleteJob">
              Delete
            </b-button>
          </div>
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
  margin-bottom: 30px;
  justify-content: center;
  height: 50px;
}
.deleteJob {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  height: 50px;
  margin-left: 150px;
}
</style>
