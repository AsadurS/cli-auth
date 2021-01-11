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
import  axios from "axios"
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
     async login()
     {
        await axios.post("http://127.0.0.1:8000/api/login", this.form)
        .then(res=>{
            console.log(res)
        });
     }
 }
}
</script>
