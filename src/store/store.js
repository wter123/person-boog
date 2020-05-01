 //store.js中
 import Vue from 'vue'
 import Vuex from 'vuex'

 Vue.use(Vuex)

 export default new Vuex.Store({
     state: {
         //是否登录判断
         islogin: 'flase',
     },
     mutations: {
         login: (state, n) => {
             //传入登录状态islogin
             let islogin = JSON.parse(n);
             localStorage.setItem('islogin', JSON.stringify(islogin));
             console.log(islogin);
             state.islogin = islogin;
         },


     },
     actions: {
         login: ({ commit, state }, n) => {
             // console.log(state.number, number)
             return commit('login', n)
         }
     }


 })