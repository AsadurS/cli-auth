<template>
  <div class="">
   <router-link to="/">Home</router-link> |
      <router-link :to="{
          name:'Dashboard'
          }"> Dashboard </router-link>
     | <router-link to="/sing-in"> Signin </router-link>
     | <a href="#"> Sign Out</a>
  </div>
</template>

<script>

export default {
  name: 'Navagitain',
 
}
</script>
