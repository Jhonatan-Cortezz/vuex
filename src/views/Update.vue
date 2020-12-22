<template>
  Editar {{$route.params.id}} - {{tarea}}
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  computed: {
    ...mapState(['tarea'])
  },
  methods: {
    ...mapActions(['setTask'])
  },
  created(){
    this.setTask(this.$route.params.id)
  }
}
</script>
