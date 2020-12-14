<template>
  <div>
      Index
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'Index',
    created() {
      this.getTask();
    },
    methods: {
      ...mapActions(['getTask'])
    },
}
</script>

<style>

</style>