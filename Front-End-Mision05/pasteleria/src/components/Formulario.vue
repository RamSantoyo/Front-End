<template>
    <form name="form" class="form" v-on:submit.prevent="procesar();">
        <h1>Crea tu Pastel</h1>
        <ul>
            <li class="checks">
                <label>Elige tus sabores:</label>
                <div class="inputs">
                <input name="sabores" type="checkbox" v-model="contacto.sabores.chocolate"/>
                <label for="sabores">Chocolate</label>
                </div>
                <div class="inputs">
                <input name="sabores" type="checkbox" v-model="contacto.sabores.vainilla"/>
                <label for="sabores">Vainilla</label>
                </div>
                <div class="inputs">
                <input name="sabores" type="checkbox" v-model="contacto.sabores.fresa"/>
                <label for="sabores">Fresa</label>
                </div>
                <div class="inputs">
                <input name="sabores" type="checkbox" v-model="contacto.sabores.cafe"/>
                <label for="sabores">Cafe</label>
                </div>
            </li>
            <li class="checks">
                <label>Elige tus adornos:</label>
                <div class="inputs">                
                <input name="adornos" type="checkbox" v-model="contacto.adornos.velitas" />
                <label for="adornos">Velitas: $20</label>
                </div>
                <div class="inputs">
                <input name="adornos" type="checkbox" v-model="contacto.adornos.gorritos" />
                <label for="adornos">Gorritos: $33</label>
                </div>
                <div class="inputs">
                <input name="adornos" type="checkbox" v-model="contacto.adornos.cerbatanas" />
                <label for="adornos">Cerbatanas: $15</label>
                </div>
                <div class="inputs">
                <input name="adornos" type="checkbox" v-model="contacto.adornos.varitas" />
                <label for="adornos">Varitas: $25</label>
                </div>
            </li>
            <li class="radio">
                <label for="tamaño">Selecciona el tamaño:</label>
                <div class="inputs">
                <input class="input" type="radio" name="pastel" value="chico" v-model="contacto.tamaño" />
                <label for="pastel">Chico: $299</label>
                </div>
                <div class="inputs">
                <input class="input" type="radio" name="pastel" value="mediano" v-model="contacto.tamaño" />
                <label for="pastel">Mediano: $459</label>
                </div>
                <div class="inputs">
                <input class="input" type="radio" name="pastel" value="grande" v-model="contacto.tamaño" checked />
                <label for="pastel">Grande: $600</label>
                </div>
            </li>
        </ul>

        <h2>Datos de contacto</h2>
        <div class="datos-cnt contenedor">
            <label for="nombre">Nombre</label>
            <input
                type="text"
                placeholder="Nombre"
                name="nombre"
                id="nombre"
                v-model="contacto.nombre"
                
            />

            <label for="numero">Numero de celular</label>
            <input
                type="number"
                placeholder="Celular"
                name="numero"
                id="numero"
                v-model="contacto.numero"
                
            />

            <label for="correo">Correo</label>
            <input
                type="email"
                placeholder="Correo"
                name="correo"
                id="correo"
                v-model="contacto.correo"
                
            />

            <label for="direccion">Direccion</label>
            <textarea
                placeholder="Tu Direccion"
                name="direccion"
                id="direccion"
                v-model="contacto.direccion"
                
            ></textarea>

            <input type="submit" value="Enviar" class="seccion" id="boton-frm" @click="$store.commit('process')"/>            
        </div>        
  </form>
</template>

<style scoped>
    .imagen img {
  width: 100%;
  height: 50rem;
  object-fit: cover;
}

ul {
  font-size: 2rem;
}

ul input {
  width: 2.5rem;
  height: 2.5rem;
}

ul input:hover {
  cursor: pointer;
}

.checks {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 3rem;
  margin-top: 10rem;
  margin-bottom: 10rem;
}

.inputs {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.radio div {
  margin: 3rem 0;
}

.datos-cnt input, textarea{
    display: block;
    width: 100%;
    padding: 2rem;
    height: 1rem;
    margin: 1rem 0;
}

textarea{
    height: 20rem;
}

#boton-frm{
    background: var(--verde-oscuro);
    color: var(--blanco);
    border: none;
    display: block;
    height: 5rem;
    font-size: 2rem;
}

#boton-frm:hover{
    cursor: pointer;
    background: var(--fondo);
}

@media (max-width: 768px) {
    .checks {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 3rem;
        margin-top: 10rem;
        margin-bottom: 10rem;
    }
}
</style>

<script>

export default{
    name:'Formulario',
  data(){
      return{
          contacto: {
              sabores:{
                  chocolate: '',
                  vainilla: '',
                  fresa: '',
                  cafe: ''
              } ,
              adornos:{
                  velitas: '',
                  gorritos: '',
                  cerbatanas: '',
                  varitas: ''
              } ,
              tamaño: '',
              nombre: '',
              numero: '',
              correo: '',
              direccion: ''
          }
      }
  },
  methods:{
      procesar(){        
        localStorage.setItem("datos", JSON.stringify(this.contacto));
      }
      
  }
}
</script>