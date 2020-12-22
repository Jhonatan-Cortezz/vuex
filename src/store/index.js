// esto es vuex a esto se le llama tienda

import { createStore } from 'vuex'

export default createStore({
  state: {
    // creando primer accion
    // esto lo puedo pintar el cualquier vista
    contador: 30,

    tareas: [],
    tarea: {
      id: '',
      nombre: '',
      categorias: [],
      estado: '',
      numero: 0
    }

  },
  mutations: {
    incrementar(state, payload){
      state.contador = state.contador + payload
    },
    disminuir(state, payload){
      state.contador = state.contador - payload
    },

    // CRUD Mutattions
    // mutacion para modifical el estado de la tarea
    SET(state, payload){
      state.tareas.push(payload)
      console.log(state.tareas)
    }, 

    DELETE(state, payload){
      state.tareas = state.tareas.filter(item => item.id !== payload)
    }
  },
  actions: {
    // forma correcta de ejecutar la mutacion
    accionIncrementar({commit}){
      commit('incrementar', 10)
    },

    accionDisminuir({commit}, numero){
      commit('disminuir', numero)
    },

    accionBoton({commit}, objeto){
      if (objeto.estado) {
        commit('incrementar', objeto.numero)        
      } else {
        commit('disminuir', objeto.numero)
      }
    },

    // aciones para el crud
    setTarea({commit}, tarea) {
      commit('SET', tarea)
    },

    deleteTarea({commit}, id){
      commit('DELETE', id)
    }
  },
  modules: {
  }
})
