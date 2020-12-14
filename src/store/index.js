// esto es vuex a esto se le llama tienda

import { createStore } from 'vuex'

export default createStore({
  state: {
    // creando primer accion
    // esto lo puedo pintar el cualquier vista
    contador: 30
  },
  mutations: {
    incrementar(state){
      state.contador = state.contador + 5
    },
    disminuir(state, payload){
      state.contador = state.contador - payload
    }
  },
  actions: {
    // forma correcta de ejecutar la mutacion
    accionIncrementar({commit}){
      commit('incrementar')
    },

    accionDisminuir({commit}, numero){
      commit('disminuir', numero)
    }
  },
  modules: {
  }
})
