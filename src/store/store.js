import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    info: {},
  },
  getters: {
    getInfoDash(state){
      return state.info;
    }
  },
  mutations: {
    mutarInfoDash(state){
        axios.get('dashboard.json')
          .then((response) => {
          console.log(response.data);
          state.info = response;
          }).catch(error =>
            console.error(error));
    }
  },
  actions: {
    infoDash({commit}){
      commit ('mutarInfoDash');
    }
  },

})
