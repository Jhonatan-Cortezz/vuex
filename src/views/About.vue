<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>Mi contador segunda vista: {{ $store.state.contador}}</h1>

    <input type="text" name="" id="" v-model="texto"> <!-- v-model me permite comunicar el input con componentes -->
    <h1>{{texto}}</h1>

  </div>
</template>
<script>
export default {
  data() {
    return {
      texto: ''
    }
  },
}
</script>