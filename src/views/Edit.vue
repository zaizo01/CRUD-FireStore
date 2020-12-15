<template>
  <div>
      {{ task.id }} - {{ task.name }}
      <h1>Edit</h1>
      <form @submit.prevent="putTask(task)" class="row row-cols-lg-auto g-3 align-items-center">
          <div class="col-12">
              <div class="input-group">
                <input type="text" class="form-control" v-model="task.name">
                <button type="submit" class="btn btn-primary">Editar</button>
              </div>
          </div>
      </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: 'Edit',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    created() {
        this.getTaskId(this.id);
    },
    methods: {
        ...mapActions(['getTaskId', 'putTask'])
    },
    computed: {
        ...mapState(['task'])
    },
}
</script>

<style>

</style>