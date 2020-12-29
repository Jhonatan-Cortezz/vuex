<template>  
  <div class="navbar navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand">
      Inicio
    </router-link>
    <router-link to="/login" v-if="!usuarioAutenticado" class="navbar-brand">
      Login
    </router-link>
    <router-link to="/registro" v-if="!usuarioAutenticado" class="navbar-brand">
      Registro
    </router-link>
    <router-link to="/about" v-if="usuarioAutenticado" class="navbar-brand">
      About
    </router-link>
    <router-link to="/formulario" v-if="usuarioAutenticado" class="navbar-brand">
      Formularios
    </router-link>

    <router-link to="/api-rest" v-if="usuarioAutenticado" class="navbar-brand">
      API REST
    </router-link>

    <div class="d-flex">
      <!-- <router-link v-if="usuarioAutenticado" class="btn btn-dark" to="/">
        Tareas
      </router-link> -->
      <button v-if="usuarioAutenticado" @click="cerrarSesion" class="btn btn-dark">
        Cerrar Sesion
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {

  // mapeo del getters
  computed: {
    ...mapGetters(['usuarioAutenticado'])
  },

  methods: {
    ...mapActions(['cerrarSesion'])
  }

}
</script>