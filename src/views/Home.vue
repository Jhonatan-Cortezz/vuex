<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- forma de acceder a los datos de store/index.js -->
    <!-- esta es una vista donde puedo pintar la data -->
    <!-- <h1>Mi contador: {{ $store.state.contador}}</h1> -->
    <!-- forma mas optima de pintar la data usando mapState -->
    <h1 :style="colorContador">
      {{titulo}} {{ contador }}
    </h1>

    <button @click="accionIncrementar">Aumentar</button> | 

    <BtnDisminuir />
  </div>
</template>

<script>
// @ is an alias to /src
// importo el modulo de vuex para mapear los state
// si fuera a mapear mutation deberia usar eso
import BtnDisminuir from '../components/BtnDisminuir'
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  name: 'Home',
  components: {
    BtnDisminuir
  },
  data() {
    return {
      titulo: 'Mi contador(mapState): '
    }
  },
  computed:{
    ...mapState(['contador']),/* ... is a operator of spread javascript */
    colorContador(){
      return [this.contador > 20 ? {'color': 'blue'} : {'color': 'red'}]
    }
  },
  // por regla las mutaciones se mapean en los methods
  methods: {
    // ...mapMutations(['incrementar']),
    // aqui mapeo tambien las actions
    ...mapActions(['accionIncrementar'])

  }
}
</script>
