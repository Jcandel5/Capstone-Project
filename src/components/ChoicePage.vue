<template>
    <div>
        <b-button class="Employer"><router-link :to="{ path: 'Employer' }">Employer</router-link></b-button>
        <b-button class="Employee"><router-link :to="{ path: 'Employee' }">Employee</router-link></b-button>
    </div>
</template>


<script>
export default {
    name: "ChoicePage"

}
</script>


<style scoped>


</style>
