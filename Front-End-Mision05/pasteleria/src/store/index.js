import { createStore } from 'vuex'

export default createStore({
  state: {
    inv_chocolate: 15,
    inv_vainilla: 11,
    inv_fresa: 20,
    inv_cafe: 14,
    tamaño: "",
    nombre: "",
    numero: "",
    correo: "",
    direccion: "",
    cerbatanas: "",
    gorritos: "",
    varitas: "",
    velitas: "",
    chocolate: "",
    vainilla: "",
    fresa: "",
    cafe: ""
  },
  getters: {
  },
  mutations: {
    process(state){
      const datos = JSON.parse(localStorage.getItem("datos"));
      state.nombre = datos.nombre;
      state.numero = datos.numero;
      state.correo = datos.correo;
      state.direccion = datos.direccion;
      state.tamaño = datos.tamaño;
      if(datos.adornos.cerbatanas == true){
        state.cerbatanas = "cerbatanas";
      }
      if(datos.adornos.gorritos == true){
        state.gorritos = "gorritos";
      }
      if(datos.adornos.varitas == true){
        state.varitas = "varitas";
      }
      if(datos.adornos.velitas == true){
        state.velitas = "velitas";
      }
      if(datos.sabores.chocolate == true){
        state.chocolate = "chocolate";
      }
      if(datos.sabores.vainilla == true){
        state.vainilla = "vainilla";
      }
      if(datos.sabores.fresa == true){
        state.fresa = "fresa";
      }
      if(datos.sabores.cafe == true){
        state.cafe = "cafe";
      }
    } 
  },
  actions: {
  },
  modules: {
  }
})
