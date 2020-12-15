<template>
 <div>
     <h1>Add</h1>
     <form @submit.prevent="postTask(name)" class="row row-cols-lg-auto g-3 align-items-center">
        <div class="col-12">
            <div class="input-group">
                <div class="input-group-text">Name</div>
                <input type="text" class="form-control" v-model="name">
                <button type="submit" class="btn btn-primary">Add</button>
            </div>
        </div>
     </form>
 </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            name: ''
        }
    },
    methods: {
        ...mapActions(['postTask'])
    },
}
</script>

<style>

</style>