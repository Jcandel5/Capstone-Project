<template>
<div>
    <button id='job'><router-link :to="{ path: 'JobForm' }">Jobs</router-link></button>
    <button id='job'><router-link :to="{ path: 'PayForm' }">Pay</router-link></button>
    <button id='job'><router-link :to="{ path: 'AreaForm' }">Area</router-link></button>
</div>
</template>
<script>
export default {
    name: 'EmployeeSearchPage'
}
</script>
<style scoped>
#job{
    margin-top: 50px;
}

</style>
