<template>
  <div class="navbar navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand">
      Inicio
    </router-link>
    <router-link to="/about" class="navbar-brand">
      About
    </router-link>
    <router-link to="/formulario" class="navbar-brand">
      Formularios
    </router-link>

    <router-link to="/api-rest" class="navbar-brand">
      API REST
    </router-link>

    <div class="d-flex">
      <router-link class="btn btn-dark" to="/">
        Tareas
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>