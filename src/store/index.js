// esto es vuex a esto se le llama tienda

import { createStore } from 'vuex'

export default createStore({
  state: {
    // creando primer accion
    // esto lo puedo pintar el cualquier vista
    contador: 100
  },
  mutations: {
    incrementar(state){
      state.contador = state.contador + 5
    }
  },
  actions: {
  },
  modules: {
  }
})
