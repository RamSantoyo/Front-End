<template>
    <h2>Pedidos</h2>
<table class="li-propiedades seccion">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Celular</th>                    
                    <th>Correo</th>
                    <th>Direccion</th>
                    <th>Resumen Pedido</th>
                    <th>Estado</th>                    
                </tr>
            </thead>
        
            <tbody>                
                <tr>            
                    <td>1</td>
                    <td>{{ $store.state.nombre }}</td>
                    <td>{{ $store.state.numero }}</td>                    
                    <td>{{ $store.state.correo }}</td>
                    <td>{{ $store.state.direccion }}</td>
                    <td>Pastel:
                        {{ $store.state.chocolate }},{{ $store.state.vainilla }},
                        {{ $store.state.fresa }},{{ $store.state.cafe }}
                        Adornos:
                        {{ $store.state.cerbatanas }},{{ $store.state.gorritos }},
                        {{ $store.state.varitas }},{{ $store.state.velitas }}
                        Tamaño:{{ $store.state.tamaño }}</td>
                    <td>
                    <div class="botones-tabla">                        
                        <input type="submit" class="boton-tabla amarillo" value="CANCELADO">           
                        <input type="submit" class="boton-tabla verde" value="ENTREGADO">
                    </div>                                         
                    </td>                           
                </tr> 
            </tbody>
        
        </table>     
</template>
<style scoped>
    tbody{
        text-align: center;
    }
    .li-propiedades tbody tr td{
        padding: 2rem;
    }
    .boton-tabla{
    padding: .5rem;
    color: var(--blanco);
    border: none;
    margin-top: 1rem;
    margin-right: .5rem;
    background: var(--fondo);
    }
    .boton-tabla:hover{
        cursor:pointer;
    }
    table{
        margin: 0 auto;
    }
    @media (max-width: 768px) {
        table{
          display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem;                  
        }
        tr{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 3rem;
        }
        .li-propiedades tbody tr td{
            padding: 0%;
        }
    }
</style>
<script>

export default{
    name: 'Pedidos',
}
</script>
