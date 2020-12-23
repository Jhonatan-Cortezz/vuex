<template>
  <!-- Editar {{$route.params.id}} - {{tarea}} -->
  <form @submit.prevent="updateDataBase(tarea)">
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
    ...mapActions(['setTask', 'updateTare', 'updateDataBase'])
  },
  created(){
    this.setTask(this.$route.params.id)
  }
}
</script>
