<template>
  <form @submit.prevent="procesarFormulario">
    <Input :tarea="tarea"/>
  </form>
  <hr>
  <p>{{tarea}}</p>
</template>

<script>

import Input from '../components/Input'

export default {
  components: {
    Input
  },

  data() {
    return {
      tarea: {
        id: '',
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0
      }
    }
  },
  
  methods: {
    procesarFormulario() {
      console.log(this.tarea)
      if (this.tarea.nombre.trim() === "") {
        console.log("Campo vacio")
        return
      }

      // despues de procesar los datos

      // limpio los campos
      this.tarea = {
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0
      }
    }
  },
}
</script>

<style>

</style>