<template>
  <div>
    <Navbar />  
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import formularioVue from './views/formulario.vue';
import {mapActions} from 'vuex'
export default {
  components: {
    Navbar
  },
  
  methods: {
    // ...mapActions(['saveLocalStorage'])
    ...mapActions(['readDataBase'])
  },

  created(){
    // this.saveLocalStorage()
    this.readDataBase()
  }
}
</script>
