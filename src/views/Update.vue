<template>
  <!-- Editar {{$route.params.id}} - {{tarea}} -->
  <form @submit.prevent="updateTare(tarea)">
    <Input :tarea="tarea"/>
  </form>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Input from '../components/Input'
export default {
  components: {
    Input
  },
  computed: {
    ...mapState(['tarea'])
  },
  methods: {
    ...mapActions(['setTask', 'updateTare'])
  },
  created(){
    this.setTask(this.$route.params.id)
  }
}
</script>
