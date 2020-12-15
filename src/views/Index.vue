<template>
  <div>
     <h1>List of Task</h1>
      <router-link to="/Add">
      <div class="d-grid gap-2">
        <button class="btn btn-success btn-block">Add</button>
      </div>
      </router-link>
      <ul class="list-group mt-5">
      <li class="list-group-item" 
      v-for="task in tasks" :key="task.id">
        {{ task.name}} - {{ task.id }}
        <div class="float-end">
            <router-link :to="{name: 'Edit', params: { id: task.id }}" class="mr-2">
            <button class="btn btn-warning btn-sm mr-2">Edit</button>
            </router-link>
            <button @click="deleteTask(task.id)" class="btn btn-danger btn-sm">Delete</button>
        </div>
       
      </li>
       </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: 'Index',
    created() {
      this.getTask();
    },
    methods: {
      ...mapActions(['getTask','deleteTask'])
    },
    computed: {
      ...mapState(['tasks'])
    },
}
</script>

<style>

</style>