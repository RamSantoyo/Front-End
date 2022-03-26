<template>
  <nav>
    <div  class="nav contenedor">
      <img src="./assets/logo.png" alt="logo">
      <div class="rutas">
        <router-link to="/pasteleria">Pasteleria</router-link>
        <router-link to="/admin">Admin</router-link>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<style>

nav{
  background-color: var(--fondo);
}

.nav img{
  width: 6%;
}

.nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
}

.rutas{
  display: flex;
  gap: 2rem;
}

nav a{
  color: var(--blanco);
}

nav a.router-link-exact-active {
  color: var(--cursor);
}
</style>
