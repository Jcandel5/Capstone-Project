<template>
 <div class="Home">
   <img src="https://snag.gy/DfP4yg.jpg">
 </div>
</template>


<script>
// @ is an alias to /src
import Home from '@/views/Home.vue'

export default {
 name: 'Home',
 components: {
   Home
 }
}
</script>
<style scoped>

img{
  height: 150px;
  width: 150px;
  margin-bottom: 15px;
}

</style>
