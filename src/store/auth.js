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
  getters:{
    authenticated(state)
    {
    if( state.token && state.user)
    {
       return true
    }
    },
    user(state){
      return state.user
    }
  },
  actions: {
    async signIn({dispatch},credentials)
    {
       await axios.post("api/login",credentials)
       .then(res=>{
         return dispatch('attempt', res.data.token)
       });
    },
    async attempt({commit, state}, token){
      if(token)
      {
        await commit('SET_TOKEN', token)
      }
      if(!state.token)
      {
        return ;
      }
    
      try{
        await axios.get("api/me").
        then(res=>{
            commit("SET_USER", res.data)
        }) 
        
      }catch(e)
      {
        commit('SET_TOKEN', null)
        commit("SET_USER", null)
      }
    },
    signout({commit}){
         return axios.post("api/signout").then(()=>{
          commit('SET_TOKEN', null)
          commit("SET_USER", null)
         });
    }
  },
}
