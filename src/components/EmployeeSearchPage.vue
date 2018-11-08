<template>
    <div class="jobForm mx-auto">
        <div class=CurrentJobs>
            <b-button class="EmoloyeeCurrentJobPage">
                <router-link class="currentjobs" :to="{ path: 'EmoloyeeCurrentJobPage' }"><h2>Your Current Jobs</h2></router-link>
            </b-button>
        </div>
        <div class=jobSearch>
            <b-button id='job'>
                <router-link class="jobbutton" :to="{ path: 'JobForm' }"><h2>Jobs</h2></router-link>
            </b-button>
        </div>
        <div class="paySearch">
            <b-button id='pay'>
                <router-link class="jobspays" :to="{ path: 'PayForm' }"><h2>Pay</h2></router-link>
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
    border-radius: 10px;
}
.jobForm{
    background-color: #4db1f2;
    width: 350px;
    height: auto;
    border-radius: 25px;
}
button#pay{
    margin-bottom: 5px;
}
div.row.buttons{
    margin-bottom: 15px;
}
button#job{
    border-radius: 15px;
}
button#pay{
     border-radius: 15px;
}
.currentjobs{
    text-shadow: 1px 1px black;
}
.jobbutton{
    text-shadow: 1px 1px black;
}
.jobspays{
    text-shadow: 1px 1px black;
}

</style>
