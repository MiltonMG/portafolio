<template>
  <!-- As a heading (onvertir modo telefono a pantallas con 600pxs) -->
  <ul class="nav justify-content-center mb-2 py-2">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-6 col-sm-3 col-md-4 col-lg-5 col-xl-7">
          <img
            alt="Logo"
            class="logo img-fluid"
            src="../assets/WING.png"
          />
        </div>

        <ul
          class="options row col-6 col-sm-9 col-md-8 col-lg-7 col-xl-5 text-end"
        >
          <li class="col" style="padding: 0 0"><router-link to="/">Inicio</router-link></li>
          <li class="col" style="padding: 0 0"><router-link to="/Portafolio">Portafolio</router-link></li>
          <li class="col" style="padding: 0 0"><router-link to="/Contacto">Contacto</router-link></li>
        </ul>

        <div class="navbar col-6 col-sm-9 col-md-8 justify-content-end pe-3 ">
          <button class="navbar-toggler" @click="toggleMenu">&#9776;</button>
          <div class="overlay" v-if="showMenu" @click="toggleMenu"></div>
          <div class="menu" :class="{ show: showMenu }">
            <button class="navbar-close" v-if="showMenu" @click="toggleMenu">
              &times;
            </button>
            <ul>
              <li><router-link @click="toggleMenu" to="/">Inicio</router-link></li>
              <li><router-link @click="toggleMenu" to="/Portafolio">Portafolio</router-link></li>
              <li><router-link @click="toggleMenu" to="/Contacto">Contacto</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style scoped>
body {
  overflow: hidden;
}

.logo {
  width: 50px;
  height: 30px;
}

@media (min-width: 768px) {
  .navbar-toggler {
    display: none;
  }
}

.navbar-toggler {
  border: none;
  background: none;
  font-size: 1.7rem;
  color: rgb(87, 86, 86);
  cursor: pointer;
  padding: 0;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  backdrop-filter: blur(5px); 
}

.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(50, 49, 49, 0.465);
  color: white;
  text-align: center;
  z-index: 2;
  transform: translateX(-100%);
  transition: transform 0.5s ease-in-out;
  opacity: 0;
}

.show {
  transform: translateX(0%);
  opacity: 0.8;
}

.menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.menu li {
  margin-bottom: 1rem;
}

.menu a {
  text-decoration: none;
  color: white!important;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  transition: color 0.3s ease-in-out;
}

.menu a:hover {
  color: #f1c40f;
}

.navbar-close {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 3.5rem;
  color: var(--bgLight2);
  cursor: pointer;
  padding: 0;
  background: none;
  border: none;
}

@media (min-width: 768px) {
  .menu {
    display: none;
  }
}

/* Inicio mi css */
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

img {
  height: 80px;
  width: 100px;
}

h1 {
  font-family: "Bebas Neue" !important;
  color: black;
}

/* Aqui */

a {
  letter-spacing: 0.15em;
  display: inline-block;
  padding-bottom: 15px;
  position: relative;
}

a:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: var(--primary);
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
a:hover:after {
  width: 100%;
  left: 0;
}

/* Toggle Button */
@media only screen and (max-width: 768px) {
  .options {
    display: none;
  }
}

@media only screen and (min-width: 768px) {
}
</style>