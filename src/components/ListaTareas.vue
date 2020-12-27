<template>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Categorias</th>
      <th scope="col">Estado</th>
      <th scope="col">Numero</th>
      <th scope="col">Accion</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in tareas" :key="item.id">
      <th scope="row">{{item.id}}</th>
      <td>{{item.nombre}}</td>
      <!-- <td>{{item.categorias}}</td> -->
      <!-- <td> -->
        <!-- esta es una forma  -->
        <!-- <span v-for="(cat, i) in item.categorias" :key="i">
          {{
            item.categorias.length === (i + 1) ? cat : cat + ', '
          }}
        </span> -->

      <!-- </td> -->
      <!-- esta es otra mas optima -->
      <!-- <td>{{item.categorias.join(', ')}}</td> -->
      <td v-html="item.categorias"></td>
      <td>{{item.estado}}</td>
      <td>{{item.numero}}</td>
      <td>
        <button class="btn btn-danger btn-sm" @click="deleteTask(item.id)">Eliminar</button> | 
        <router-link class="btn btn-info btn-sm"
          :to="{
            name: 'Update',
            params: {
              id: item.id
            }
          }"
        >
          Editar
        </router-link>
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  computed: {
    ...mapState(['tareas'])
  },

  methods: {
    ...mapActions(['deleteTarea', 'deleteTask'])
  }
}
</script>