<template>
    <h2>Inventario</h2>

    <table class="contenedor seccion">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Cantidad disponible</th>                    
                </tr>
            </thead>
        
            <tbody>                
                <tr>            
                    <td>1</td>
                    <td>Chocolate</td>
                    <td>{{ $store.state.inv_chocolate }}</td>                                             
                </tr>
                <tr>            
                    <td>2</td>
                    <td>Vainilla</td>
                    <td>{{ $store.state.inv_vainilla }}</td>                                              
                </tr>
                <tr>            
                    <td>3</td>
                    <td>Fresa</td>
                    <td>{{ $store.state.inv_fresa }}</td>                                              
                </tr>
                <tr>            
                    <td>4</td>
                    <td>Cafe</td>
                    <td>{{ $store.state.inv_cafe }}</td>                                              
                </tr> 
            </tbody>
        
        </table>
</template>
<style scoped>
    table{
        text-align: center;
    }
</style>
<script>

export default{
    name: 'Cantidades',
}
</script>
