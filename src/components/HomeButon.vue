<template>
    <div class="homeButton">
        <b-button class="HomeButton"><router-link :to="{ path: '/callback' }"><h5>Home</h5></router-link></b-button>
    </div>
</template>

<script>
export default {
    name: "HomeButton"
}
</script>

<style>
.HomeButton{
    background-color: #4db1f2;
    border: 1px solid white;
}
</style>
