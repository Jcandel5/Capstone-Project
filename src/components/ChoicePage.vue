<template>
    <div>
        <b-container class="bv-example-row">
            <b-row class="ChoiceButtons ">
                <div class="employerbuttonsection ">
                    <div>
                        <b-button class="Employer">
                            <router-link :to="{ path: 'Employer' }">
                                <h2>Employer</h2>
                            </router-link>
                        </b-button>
                    </div>
                    <b-col class="employerPhoto">
                        <img src="https://snag.gy/yaM0SU.jpg">
                    </b-col>
                </div>
                <div class="employeebuttonsection">
                    <div>
                        <b-button class="Employee">
                            <router-link :to="{ path: 'Employee' }">
                                <h2>Employee</h2>
                            </router-link>
                        </b-button>
                    </div>
                    <b-col class="employeePhoto">
                        <img src="https://snag.gy/jqHRgn.jpg">
                    </b-col>
                </div>
            </b-row>
        </b-container>
    </div>
</template>


<script>
import BootstrapVue from 'bootstrap-vue';
export default {
    name: "ChoicePage"

}
</script>


<style>
.Employer{
    margin-top:50px;
    background-color: #4db1f2;

}
.Employee{
    margin-top:50px;
    margin-left: 350px;
    background-color: #4db1f2;
}
.ChoiceButtons{
    display:flex;
    justify-content: center;
}
.employerPhoto{
    display:flex;
}

</style>
