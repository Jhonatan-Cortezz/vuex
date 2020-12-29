<template>
  <form @submit.prevent="procesarFormulario">
    <h2 class="my-4">CRUD en LocalStorage</h2>
    <Input :tarea="tarea"/>
    <hr>
    <ListaTareas />
  </form>
  <hr>
  
</template>

<script>

import Input from '../components/Input'
import {mapActions} from 'vuex'
import ListaTareas from '../components/ListaTareas'

// importacion para generar los id
const shortid = require('shortid')

export default {
  components: {
    Input,
    ListaTareas
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
    // Importacion de la actions para el CRUD
    ...mapActions(['setTarea', 'saveLocalStorage']),

    procesarFormulario() {
      console.log(this.tarea)
      if (this.tarea.nombre.trim() === "") {
        console.log("Campo vacio")
        return
      }

      // generar id
      this.tarea.id = shortid.generate()
      console.log(this.tarea.id)

      // despues de procesar envio los datos
      this.setTarea(this.tarea)

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