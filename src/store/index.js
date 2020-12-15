import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase'
import router from '../router'
Vue.use(Vuex)
Vue.use(router);

export default new Vuex.Store({
  state: {
    tasks: [],
    task: { name: '', id: ''}
  },
  mutations: {
    setTask(state, payload){
      state.tasks = payload;
    },
    setTaskId(state, payload){
      state.task = payload;
    },
    setDeleteTask(state, payload){
      const taskFiltered = state.tasks.filter(task => task.id !== payload);
      state.tasks = taskFiltered;
    }
  },
  actions: {
    getTask({commit}){
      const tasks = [];
      db.collection('crud').get()
        .then(resp => {
          resp.forEach(docs => {
            let task = docs.data();
            task.id = docs.id;
            tasks.push(task);
          });
          commit('setTask', tasks);
        })
    },
    getTaskId({commit}, idTask){
      db.collection('crud').doc(idTask).get()
        .then(resp => {
          let task = resp.data();
          task.id = resp.id;
          commit('setTaskId', task)
        })
    },
    putTask({commit}, task){
      db.collection('crud').doc(task.id).update({
        name: task.name
      }).then(() => {
        console.log('Tarea Editada');
        router.push('/');
      })
    },
    postTask({commit}, taskName){
      db.collection('crud').add({
        name: taskName
      })
      .then(doc => {
        console.log(doc.id);
        router.push('/');
      })
    },
    deleteTask({commit}, idTask){
      db.collection('crud').doc(idTask).delete()
        .then(() => {
          console.log('delete');
          commit('setDeleteTask', idTask);
        })
    }
  },
  modules: {
  }
})
