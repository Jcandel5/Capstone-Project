<template>
 <div class="Home">
   <img src="https://snag.gy/DVQC4g.jpg">
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
.Home{
  display: flex;
  justify-content: center;
}

</style>
