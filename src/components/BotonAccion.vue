<template>
  <button @click="accionBoton({estado: estado, numero: 20})">{{textoBoton}}</button>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  props:{
    estado: Boolean
  },
  computed: {
    textoBoton(){
      return this.estado ? 'Aumentar' : 'Disminuir'
    }
  },

  // mapeo la accion boton
  methods:{
    ...mapActions(['accionBoton'])
  }
}
</script>