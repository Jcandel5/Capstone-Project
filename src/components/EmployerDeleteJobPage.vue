<template>
    <div>
        <h1>Employer Delete job Page</h1>
            <div class="Post">
      <form id="app" @submit="onSubmit">

        <div class="title">
          <label class="title">Job Title</label>
          <input class="title" v-model="form.title" type="text" name="title">
        </div>
        <div class="pay">
          <label class="pay">Pay</label>
          <input class="pay" v-model="form.pay" type="text" name="pay">
        </div>
        <div class="area">
          <label class="area">Area</label>
          <input class="area" v-model="form.area" type="text" name="area">
        </div>
        <div>
            
        </div>
        <div>
          <button type="submit">Delete Job </button>
        </div>
      </form>
    </div>
    <!-- <button type="sumbit">Post Job</button> -->
    </div>
</template>

<script>
export default {
    name: "EmployerDeleteJobPage",
    data() {
    return {
      msg: "Your Post Has Been Added",
      // jobs : {title: "", pay: "", area: ""},
      apiURL: "https://protected-forest-50209.herokuapp.com/api/jobs",
      form: {
        title: "",
        pay: "",
        area: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      return fetch(this.apiURL, {
        method: "post",
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
    mounted() {
      axios.delete(this.apiURL).then(response => {
        console.log(response.data);
        this.newJob = response.data;
      });
    }
  },
};
</script>

<style>
</style>
