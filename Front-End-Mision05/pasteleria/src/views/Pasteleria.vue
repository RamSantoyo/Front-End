<template>
  <portada/>
  <direccion/>
  <formulario/>  
</template>

<script>

import Portada from "../components/Portada.vue"
import Formulario from "../components/Formulario.vue"
import Direccion from "../components/Direccion.vue"

export default {
  name: "Pasteleria",
  components:{
    Portada,
    Formulario,
    Direccion,
  }
};
</script>
