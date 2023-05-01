<template>
  <div class="container">
    <div class="row">
      <div class="contenedor col-12 col-lg-4">
        <img class="img-fluid imagen-perfil" src="../assets/photo1.jpeg " alt="image" />

      </div>
      <div class="col-12 col-lg-8 contenedor">
        <div class="row">

          <h1 class="col-12 col-md-9 col-lg-7 text-center text-md-start">Milton Galindo</h1> 
          <div class="social col-12 col-md-3 col-lg-5 justify-content-center justify-content-md-start">
            <div class="col-3">
              <a href="https://www.linkedin.com/in/miltongalindo/" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
            
            <div class="col-3">
              <a href="https://github.com/MiltonMG" target="_blank">
                <i class="fab fa-github"></i>
              </a>
            </div>

            <div class="col-3">
              <a href="https://www.instagram.com/miltonmg.sv/" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
            
          </div>

        </div>

        <hr class="col-10"/>

        <div class="col-10">
          <p class="text-justify">

            ¡Hola👋! Soy un desarrollador web con experiencia en la creación de sitios web y aplicaciones en línea. Me apasiona la tecnología y la innovación, y disfruto aprendiendo nuevas habilidades para mejorar mi trabajo.
            
             <!-- <br/><br/> Me especializo en lenguajes y tecnologías como: <span class="html">HTML</span>, <span class="css">CSS</span>, <span class="js">JavaScript</span>, <span class="node">Node JS</span>, <span class="react">React JS</span>, <span class="vue">Vue JS</span>, <span class="firebase">Firebase</span>, <span class="mongo">Mongo</span>. Como desarrollador web me encanta crear experiencias en línea emocionantes y atractivas para los usuarios, estoy comprometido a crear productos de alta calidad<br/><br/> -->
             <br><br>
             Si necesitas ayuda con tus proyectos estaré encantado de escucharte y trabajar contigo. 😊
          </p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kalam:wght@700&family=Sigmar&display=swap");



h1 {
  font-family: "Sigmar", sans-serif;

  /* font-family: 'Montserrat', sans-serif; */
  color: whitesmoke;
}

img {
  /* max-width: 350px!important; */
  /* margin: auto; */
  object-fit: cover !important;
  border-radius: 5%;
}


.imagen-perfil {
  width: 65vh;
  height:600px;
  overflow: hidden;
  box-shadow: 0px 1px 14px 12px rgba(0, 0, 0, 0.24);
  -webkit-box-shadow: 0px 1px 14px 12px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0px 1px 14px 12px rgba(0, 0, 0, 0.24);
  /* Estado inicial */
  transition: box-shadow 0.9s ease-in-out;
  /* Transición */
  transition: transform 0.9s ease-in-out;
  /* Transición */
  transform: translateZ(0);
  filter: saturate(150%);

  transition: box-shadow 0.3s ease-in-out;
}

/*XXL: Cambios para pantallas mayores a 1400px */
@media (min-width: 1400px) {

}

/*XL: Cambios para pantallas mayores a 1200px */
@media (min-width: 1200px) {

}

/*LG: Cambios para pantallas menores a 992px */
@media (max-width: 992px) {
  .contenedor {
    /* display: flex; */
    display: flex;
    flex-direction: column;
    align-items: center;

  }
  .imagen-perfil {
    width: 65vh;
    height:300px;
    margin-bottom: 30px;
  }
}

/*MD: Cambios para pantallas menores a 768PX */
@media (max-width: 768px) {
  
}

/*SM Cambios para pantallas mayores a 576px */
@media (min-width: 576px) {
  
}

/* Para pantallas menores */
@media (max-width: 576px) {
  .imagen-perfil {
   margin: 1rem;
  }
}

.imagen-perfil:hover {
  box-shadow: 0px 1px 14px 12px rgba(0, 0, 0, 0.38);
  -webkit-box-shadow: 0px 1px 14px 12px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 1px 14px 12px rgba(0, 0, 0, 0.38);
  /* Estado final */
}

/* Iconos */
a {
  color: currentColor;
  cursor: pointer;
  text-decoration: none;
}

.social a {
  transform-origin: center;
  transition-duration: 100ms;

}

.social {
  display: flex;
  margin-top: 0.5rem;
}

.social div {
  height: 2rem;
  margin-right: 0.5rem;
  text-align: center;
  width: 2rem;
}

.social a {
  align-items: center;
  display: flex;
  font-size: 1.8rem;
  height: 2rem;
  justify-content: center;
  opacity: 0.5;
  transition-property: opacity, transform;
  width: 2rem;
  will-change: opacity, transform;
}

.social a:hover {
  opacity: 1;
  transform: scale(1.25);
  color: whitesmoke !important;
}

.social a:active {
  opacity: 1;
  transform: scale(1.1);

}

.social div {
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0, 0.5, 0, 1);
  animation-fill-mode: both;
}

.social div {
  animation-duration: 500ms;
  animation-name: slideUp;
  animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1.5);
}

/* Boton CV */

button {
  /* margin: 20px; */
}
.custom-btn {
  max-width: 50px!important;
  min-width: 50px!important;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  /* padding: 10px 25px; */
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  /* display: inline-block; */
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
}

.btn-11 {
  border: none;
  background: var(--primary);
    background: linear-gradient(0deg, var(--primary) 0%, var(--bgDark) 100%);
    color: #fff;
    overflow: hidden;
}
.btn-11:hover {
    text-decoration: none;
    color: #fff;
}
.btn-11:before {
    position: absolute;
    content: '';
    display: inline-block;
    top: -180px;
    left: 0;
    width: 30px;
    height: 100%;
    background-color: #fff;
    animation: shiny-btn1 3s ease-in-out infinite;
}
.btn-11:hover{
  opacity: .7;
}
.btn-11:active{
  box-shadow:  4px 4px 6px 0 rgba(255,255,255,.3),
              -4px -4px 6px 0 rgba(116, 125, 136, .2), 
    inset -4px -4px 6px 0 rgba(255,255,255,.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, .2);
}

@-webkit-keyframes shiny-btn1 {
    0% { -webkit-transform: scale(0) rotate(45deg); opacity: 0; }
    80% { -webkit-transform: scale(0) rotate(45deg); opacity: 0.5; }
    81% { -webkit-transform: scale(4) rotate(45deg); opacity: 1; }
    100% { -webkit-transform: scale(50) rotate(45deg); opacity: 0; }
}



</style>