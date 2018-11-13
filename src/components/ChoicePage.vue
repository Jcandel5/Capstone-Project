<template>
    <div>
        <b-container class="bv-example-row">
            <b-row class="ChoiceButtons ">
                <div class="employerbuttonsection ">
                    <div class="employerbutton">
                        <b-button class="Employer">
                            <router-link :to="{ path: 'Employer' }">
                                <h2>Employer</h2>
                            </router-link>
                        </b-button>
                    </div>
                    <b-col class="employerPhoto">
                        <img height="250" width="250" src="https://snag.gy/yaM0SU.jpg">
                    </b-col>
                </div>
                <div class="employeebuttonsection">
                    <div class="employeebutton">
                        <b-button class="Employee">
                            <router-link :to="{ path: 'Employee' }">
                                <h2>Employee</h2>
                            </router-link>
                        </b-button>
                    </div>
                    <b-col class="employeePhoto">
                        <img height="250" width="250" src="https://snag.gy/jqHRgn.jpg">
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
    text-shadow: 2px 2px black;

}
.Employee{
    margin-top:50px;
    margin-left: 60px;
    background-color: #4db1f2;
    text-shadow: 2px 2px black;
    display:flex;
}
.ChoiceButtons{
    display:flex;
    justify-content: center;
}
.employerPhoto{
    display:flex;
    justify-content: center;
}
.employerbutton{
    display:flex;
    align-content: center;
    align-items: center;
    align-self: center;
    justify-content: center;
    justify-items: center;
    justify-self: center;
}

</style>
