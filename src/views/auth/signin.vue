<template>
  <div >
      <form @submit.prevent="login()">
     <input type="text" v-model="form.email" />
     <input type="password" v-model="form.password" />
     <input type="submit" value="submit" />
     </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
 data(){
     return {
         form:{
             email:"asadur@gmail.com",
             password:"123"
         }
     }
 },
 methods:{
     ...mapActions({
         signIn:'auth/signIn'
     }),
      login()
     {
       this.signIn(this.form)
       .then(()=>{
           this.$router.replace({
               name:'Dashboard'
           })
       })
     }
 }
}
</script>
