<template>
<div>
    <b-container class="bv-example-row">
    <b-row class="ChoiceButtons">
        <b-button class="Employer"><router-link :to="{ path: 'Employer' }">Employer</router-link></b-button>
        <b-button class="Employee"><router-link :to="{ path: 'Employee' }">Employee</router-link></b-button>
    </b-row>
    </b-container>
</div>
</template>


<script>
export default {
    name: "ChoicePage"

}
</script>


<style>
.Employer{
    margin-top:50px;
}
.Employee{
    margin-top:50px;
    margin-left: 50px;
}
.ChoiceButtons{
    display:flex;
    justify-content: center;
}


</style>
