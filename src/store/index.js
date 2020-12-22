// esto es vuex a esto se le llama tienda

import { createStore } from 'vuex'

// importo el route para enviar de los datos de la vista update al formulario
import router from '../router'

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
    // para guardar en localstorage
    CARGAR_LOCALSTO(state, payload){
      state.tareas = payload
    },

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
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
    }, 

    DELETE(state, payload){
      state.tareas = state.tareas.filter(item => item.id !== payload)
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },

    TAREA(state, payload){
      // validacion para que el usuario no se pase de P$#%# en la url
      if(!state.tareas.find(item => item.id === payload)){
        router.push('/formulario')
        return
      }
      state.tarea = state.tareas.find(item => item.id === payload)
    },

    UPDATE_TAREA(state, payload){
      state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item)/* map es una funcion de js que permite devolver un array pero yo le digo la condicion */

      // aca envio al usuario de nuevo al formulario
      router.push('/formulario')

      localStorage.setItem('tareas', JSON.stringify(state.tareas))
    }
  },
  actions: {
    // cargar localStorage
    saveLocalStorage({commit}){
      if (localStorage.getItem('tareas')) {
        const tareas = JSON.parse(localStorage.getItem('tareas'))
        commit('CARGAR_LOCALSTO', tareas)
        return
      }

      localStorage.setItem('tareas', JSON.stringify([]))
    },

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
    },

    setTask({commit}, id){
      commit('TAREA', id)
    },

    updateTare({commit}, tarea){
      commit('UPDATE_TAREA', tarea)
    }
  },
  modules: {
  }
})
