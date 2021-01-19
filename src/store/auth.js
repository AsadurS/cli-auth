import axios from 'axios';
export default {
    namespaced:true,
  state: {
      token:null,
      user:null,
  },
  mutations: {
    SET_TOKEN(state,token){
        state.token = token;
    },
    SET_USER(state, user)
    {
      state.user = user
    }

  },
  actions: {
    async signIn({dispatch},credentials)
    {
        console.log(dispatch)
       await axios.post("api/login",credentials)
       .then(res=>{
          dispatch('attempt', res.data.token)
       });
    },
    async attempt({commit}, token){
     await commit('SET_TOKEN', token)
      try{
        await axios.get("api/me",{
         headers:{
          "Authorization": `Bearer  ${token}`
         } 
        }).
        then(res=>{
            commit("SET_USER", res.data)
        }) 
        
      }catch(e)
      {
        commit('SET_TOKEN', null)
        commit("SET_USER", null)
      }
    }
  },
}
