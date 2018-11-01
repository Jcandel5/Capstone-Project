<template>
    <div>
        <button class="Employer"><router-link :to="{ path: 'Employer' }">Employer</router-link></button>
        <button class="Employee"><router-link :to="{ path: 'Employee' }">Employee</router-link></button>
    </div>
</template>


<script>
export default {
    name: "ChoicePage"

}
</script>


<style scoped>
/* .Employer{
    display:flex;
    justify-content: center;
}
.Employee{
    display:flex;
    justify-content: center;
} */

</style>
