import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    getTask({commit}){
      db.collection('crud').get()
        .then(resp => {
          resp.forEach(docs => {
            console.log(docs.id);
            console.log(docs.data());
          });
        })
    }
  },
  modules: {
  }
})
