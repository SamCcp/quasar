<template>
  <q-page class="q-pa-md">
    <!-- ver listado de elementos -->
    <q-list dense bordered padding class="rounded-borders">
      <q-item
        :key="p.productid"
        clickable
        v-for="p in $store.getters['Products/getProducts']"
        @click ="seleccionarProducto(p)"
      >
        {{p.name}}
      </q-item>
    </q-list>
    <!-- Editar el elemento -->
    <q-input
      v-model="productoSeleccionado.name"
      @keypress.enter="updateProducto"
      ref="input"
    >
    </q-input>
  </q-page>
</template>

<script>
let url = "/ConsultarDatos?query=select top 10 productid as id, productname as name from products order by newid()";

export default {
  name : "products",
  data(){
    return {
      productoSeleccionado : 
      {
        id : 0,
        name : ""
      }
    }
  },
  beforeCreate(){
    
  },
  activated(){ //cuando tiene foco
    console.log("activo")
    let url = "/ConsultarDatos?query=select top 10 productid as id, productname as name from products order by newid()";
    
    this.$axios.get(url).then(d => {
      this.$store.dispatch("Products/addProducts", d.data.Table)
    })
  },
  deactivated(){ //cuando pierde foco
    
    this.productoSeleccionado = {id: -1, name : ""};
  },
  methods : {
    seleccionarProducto(e){ //<-- e hace refecencia al objeto VUE que hice click, no es DOM
      this.productoSeleccionado = JSON.parse(JSON.stringify(e))
    },
    updateProducto(){
      let modificado = this.productoSeleccionado
      this.$store.dispatch("Products/updateProduct", modificado);
      this.productoSeleccionado = {id:-1, name : ""};
      this.$refs.value = "";
    }
  }
}
</script>

<style>

</style>