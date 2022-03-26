<template>          
        <cantidades/>
        <pedidos/>        
</template>
<script>
import Cantidades from "../components/Cantidades.vue"
import Pedidos from "../components/Pedidos.vue"
export default {
   name: 'Admin',
components:{
    Cantidades,
    Pedidos,
  }
}
</script>
