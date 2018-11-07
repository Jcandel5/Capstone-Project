<template>
<div>
    <div class="title">
    <h1>Profile Page</h1>
    </div>
  <div class="row">
    <div class="profilePhoto">
      <h4>Profile Photo</h4>
      <img src="https://api.valuewins.com/profilePicture/undefined" height="250px" width="250px">
    </div>
    <div class="bio">
     <span><input class="userBio" placeholder="My wife and i just moved in to a house in Highlands Ranch,Colorado and want to help egear youth earn money!"></span>
    </div>
    <div class="location">
      <div class="City">
        <input class="city" placeholder="Highlands Ranch">
      </div>
      <div class="State">
        <input class="state" placeholder="Colorado">
      </div>
      <div class="Address">
        <input class="address" placeholder="1234 S That Street">
      </div>
    </div>
    <div>

    </div>
    </div>
  </div>
</template>

<script>
import BootstrapVue from 'bootstrap-vue'
export default {
    name: 'EmployerProfilePage'
}
</script>

<style>
p{
  display:flex;
  align-items: center;
  justify-content: center;
  margin-top:15px;
}
label{
  margin-right: 15px;
}
div.SignUp{
  display:flex;
  align-content: center;
  justify-content: center;
}
.firstName{
  color:white;
}
button.update{
  display:flex;
  align-content: center;
  align-items: center;
  align-self: center;
  justify-content: center;
  justify-items: center;
}
.profilePhoto{
  color:white;
}
.userBio{
  height: 250px;
  width: 250px;
  margin-top: 36px;
  margin-left: 50px;
}
.location{
  margin-top: 80px;
  margin-left: 50px;
}
.city{
  margin-bottom: 30px;
}
.state{
  margin-bottom: 30px;
}
</style>
