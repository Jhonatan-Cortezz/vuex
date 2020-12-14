<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- forma de acceder a los datos de store/index.js -->
    <!-- esta es una vista donde puedo pintar la data -->
    <h1>Mi contador: {{ $store.state.contador}}</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
