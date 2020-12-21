<template>
  <form @submit.prevent="procesarFormulario">
    <input type="text" 
      name="" 
      id="" 
      class="form-control my-2" 
      placeholder="Ingrese el nombre"
      v-model.trim="tarea.nombre"><!-- trim limpia los espacios -->

    <div class="form-check form-check-inline">
      <input type="checkbox" class="form-check-input" v-model="tarea.categorias" id="check-1" value="Javascript">
      <label for="check-1" class="form-check-label">Javascript</label>
    </div>

    <div class="form-check form-check-inline">
      <input type="checkbox" class="form-check-input" id="check-2" v-model="tarea.categorias" value="Node.js">
      <label for="check-2" class="form-check-label">Node.js</label>
    </div>

    <div class="mt-2">
      <div class="form-check form-check-inline">
        <input type="radio" class="form-check-input" id="rd-1" v-model="tarea.estado" value="Urgente">
        <label for="rd-1" class="form-check-label">Urgente</label>
      </div>

      <div class="form-check form-check-inline">
        <input type="radio" class="form-check-input" id="rd-2" v-model="tarea.estado" value="Relax">
        <label for="rd-2" class="form-check-label">Relax</label>
      </div>
    </div>

    <!-- Para los input tipo numbre -->
    <div class="mt-2">
      <div class="">
        <input type="number" id="" v-model.number="tarea.numero"><!-- here a diferent -->
      </div>
    </div>

    <button class="btn btn-dark mt-2 btn-block" type="submit" :disabled="bloquear">
      Procesar
    </button>
  </form>
  <hr>
  <p>{{tarea}}</p>
</template>

<script>
export default {
  data() {
    return {
      tarea: {
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0
      }
    }
  },
  
  methods: {
    procesarFormulario() {
      console.log(this.tarea)
      if (this.tarea.nombre.trim() === "") {
        console.log("Campo vacio")
        return
      }
    }
  },

  computed: {
    bloquear() {
      return this.tarea.nombre.trim() === "" ? true : false
    }
  },
}
</script>

<style>

</style>