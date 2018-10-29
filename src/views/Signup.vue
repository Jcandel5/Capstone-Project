<template>
 <div class="SignUp">
   <form
 id="app"
 @submit="checkForm"
 action="https://vuejs.org/"
 method="post"
>

 <p>
   <label for="Firstname">First Name</label>
   <input
     id="Firstname"
     v-model="Firstname"
     type="text"
     name="Firstname"
   >
 </p>
 <p>
   <label for="Lastname">Last Name</label>
   <input
     id="Lastname"
     v-model="Lastname"
     type="text"
     name="Lastname"
   >
 </p>
 <p>
   <label for="Bio">Bio</label>
   <input
     id="Bio"
     v-model="Bio"
     type="text"
     name="Bio"
   >
 </p>

 <p>
   <label for="age">Age</label>
   <input
     id="age"
     v-model="age"
     type="number"
     name="age"
     min="0">
 </p>

 <p>
   <label for="state">State</label>
   <select
     id="state"
     v-model="state"
     name="state"
   >
     <option>AL</option>
     <option>AK</option>
     <option>AZ</option>
     <option>AR</option>
     <option>CA</option>
     <option>CO</option>
     <option>CT</option>
     <option>DE</option>
     <option>FL</option>
     <option>GA</option>
     <option>HI</option>
     <option>ID</option>
     <option>IL</option>
     <option>IN</option>
     <option>IA</option>
     <option>KS</option>
     <option>KY</option>
     <option>LA</option>
     <option>ME</option>
     <option>MD</option>
     <option>MA</option>
     <option>MI</option>
     <option>MN</option>
     <option>MS</option>
     <option>MO</option>
     <option>MT</option>
     <option>NE</option>
     <option>NV</option>
     <option>NH</option>
     <option>NJ</option>
     <option>NM</option>
     <option>NY</option>
     <option>NC</option>
     <option>ND</option>
     <option>OH</option>
     <option>OK</option>
     <option>OR</option>
     <option>PA</option>
     <option>RI</option>
     <option>SC</option>
     <option>SD</option>
     <option>TN</option>
     <option>TX</option>
     <option>UT</option>
     <option>VT</option>
     <option>VA</option>
     <option>WV</option>
     <option>WI</option>
     <option>WY</option>
   </select>
 </p>
 <p>
   <label for="Address">Address</label>
   <input
     id="Address"
     v-model="Address"
     type="text"
     name="Address"
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


