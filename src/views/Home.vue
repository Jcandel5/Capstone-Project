<template>
 <div class="Home">
   <b-img center thumbnail fluid src="https://snag.gy/DfP4yg.jpg" alt="Thumbnail" height="200" width="200" />
 </div>
</template>


<script>
// @ is an alias to /src
import Home from '@/views/Home.vue'
import BootstrapVue from 'bootstrap-vue'

export default {
 name: 'Home',
 components: {
   Home
 }
}
</script>
<style scoped>
img{
  background-color: black;
  padding-top: 15px;
  padding-bottom: 15px;
}

</style>
