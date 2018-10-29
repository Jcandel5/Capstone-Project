<template>
 <div class="Signin">
   <form
 id="app"
 @submit="checkForm"
 action="https://vuejs.org/"
 method="post"
>

 <p>
   <label for="Email">Email</label>
   <input
     id="Email"
     v-model="Email"
     type="text"
     name="Email"
   >
 </p>
 <p>
   <label for="Password">Password</label>
   <input
     id="Password"
     v-model="Password"
     type="text"
     name="Password"
   >
 </p>

 <p>
   <input
     type="submit"
     value="Submit"
   >
 </p>

</form>
 </div>
</template>


