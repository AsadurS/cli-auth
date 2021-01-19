<template>
  <div class="">
  <h1 v-if="user">{{user.name}} {{user.email}}</h1>
   <router-link to="/">Home</router-link> |
      <router-link v-if="authenticated" :to="{
          name:'Dashboard'
          }"> Dashboard </router-link>
     | <router-link v-if="(authenticated===null|| authenticated===undefined)" to="/sing-in"> Signin </router-link>
     | <a v-if="authenticated" @click="signout" href="#"> Sign Out</a>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Navagitain',
 computed:{
   ...mapGetters({
     authenticated : 'auth/authenticated',
     user : 'auth/user',
   })
 },
 methods:{
   ...mapActions({
     signoutAction:"auth/signout"
   }),
signout(){
  this.signoutAction().then(()=>{
    this.$router.replace({
      name:"Signin"
    })
  });
}
 }
}
</script>
