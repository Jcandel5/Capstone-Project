<template>
    <div class="jobForm mx-auto">
        <div class=CurrentJobs>
            <b-button class="EmoloyeeCurrentJobPage">
                <router-link :to="{ path: 'EmoloyeeCurrentJobPage' }">Your Current Jobs</router-link>
            </b-button>
        </div>
        <div class=jobSearch>
            <b-button id='job'>
                <router-link :to="{ path: 'JobForm' }">Jobs</router-link>
            </b-button>
        </div>
        <div class="paySearch">
            <b-button id='pay'>
                <router-link :to="{ path: 'PayForm' }">Pay</router-link>
            </b-button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'EmployeeSearchPage'
}
</script>
<style>
.CurrentJobs{
    display:flex;
    justify-content: center;
    margin-bottom: 50px;
}
.jobSearch{
    display:flex;
    justify-content: center;
    margin-bottom: 50px;
}
.paySearch{
    display:flex;
    justify-content: center;
    margin-bottom: 50px;
}
.areaSearch{
    display:flex;
    justify-content: center;
    margin-bottom: 50px;
}
.EmoloyeeCurrentJobPage{
    margin-top: 15px;
}
.jobForm{
    background-color: tan;
    width: 350px;
    height: auto;
    border-radius: 20px;
}
button#pay{
    margin-bottom: 5px;
}
div.row.buttons{
    margin-bottom: 15px;
}

</style>
