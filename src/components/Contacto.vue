<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-5">
        <h1 class="text-center">Contacto</h1>
        <h5 class="text-center pt-3">
          Si necesitas ayuda con tus proyectos estaré encantado de escucharte y
          trabajar contigo.
        </h5>
      </div>

      <div class="col-12 col-lg-6 px-lg-5">
        <h5 class="text-center">Dejame un mensaje</h5>
        <hr />

        <form action="https://formsubmit.co/0dc49904c9210bf208a53c10cb963bfc" method="POST">
          <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input
              type="text"
              v-model="name"
              class="form-control"
              id="name"
              placeholder="Nombre"
              style="background-color: var(--bgLight2)"
              name="name"
            />
          </div>

          <div class="mb-3">
            <label for="correo" class="form-label">Correo Electronico</label>
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="correo"
              placeholder="nombre@ejemplo.com"
              style="background-color: var(--bgLight2)"
              name="email"
            />
          </div>

          <div class="mb-3">
            <label for="mensaje" class="form-label">Deja tu mensaje</label>
            <textarea
              v-model="mensaje"
              name="mensaje"
              class="form-control"
              id="mensaje"
              rows="3"
              style="background-color: var(--bgLight2)"
            ></textarea>
          </div>

          <button
            v-if="name && email && mensaje"
            class="btn btn-primary send-button mt-1 mb-5 mb-lg-0"
            id="submit"
            type="submit"
            value="SEND"
            v-on:click.self.prevent
          >
            <div class="alt-send-button">
              <i class="fa fa-paper-plane"></i
              ><span class="send-text">ENVIAR</span>
            </div>
          </button>
          <p class="text-center" style="color:var(--test-primary)" v-else>Por favor llena los campos para poder enviar.</p>

          <input type="hidden" name="_next" value="https://polite-quokka-765c77.netlify.app/#/Contacto">
          <input type="hidden" name="_captcha" value="false">
        </form>
      </div>

      <div class="col-12 col-lg-6 px-lg-5">
        <div>
          <h5 class="text-center">Otras opciones de contacto</h5>
          <hr />

          <!-- Iconos -->
          <div>
            <div>
              <p>
                <i
                  class="fa-solid fa-location-dot ms-2 me-3 my-2"
                  style="color: red"
                ></i>
                Atiquizaya, Ahuchapan, El Salvador
              </p>
            </div>
            <div>
              <p>
                <i
                  class="fa-solid fa-mobile ms-2 me-3 my-2"
                  style="color: whitesmoke"
                ></i>
                +503 70458617
              </p>
            </div>
            <div>
              <p>
                <i
                  class="fa-solid fa-envelope-open-text ms-2 me-3 my-2"
                  style="color: var(--test-primary)"
                ></i>
                milton.elsalvador26@gmail.com
              </p>
            </div>
          </div>

          <!-- Botones redes -->
          <div class="">
            <h5 class="text-center py-4">Redes</h5>
            <hr />
            <div class="d-flex justify-content-center">
              <ul class="wrapper">
                
                <li class="icon facebook me-3">
                  <span class="tooltip">Linkedin</span>
                  <a href="https://www.linkedin.com/in/miltongalindo/" target="_blank">
                    <span><i class="fab fa-linkedin"></i></span>
                  </a>
                </li>
                
                <li class="icon github me-3">
                  <span class="tooltip">Github</span>
                  <a href="https://github.com/MiltonMG" target="_blank">
                    <span><i class="fab fa-github"></i></span>
                  </a>
                </li>
                
                <li class="icon instagram me-3">
                  <span class="tooltip">Instagram</span>
                  <a href="https://www.instagram.com/miltonmg.sv/" target="_blank">
                    <span><i class="fab fa-instagram"></i></span>
                  </a>
                </li>
                
                <li class="icon whatsapp">
                  <span class="tooltip">Whatsapp</span>
                  <a href="https://api.whatsapp.com/send?phone=50370458617" target="_blank">
                    <span><i class="fab fa-whatsapp"></i></span>
                  </a>
                </li>
              </ul>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue';

export default {
  setup() {
    const name = ref('');
    const email = ref('');
    const mensaje = ref('');

    return {
      name,
      email,
      mensaje
    };
  },
  methods: {
    actualizar(e) {
      e.preventDefault()
    }
  },
};
</script>

<style scoped>
.centrar {
  height: calc(100vh - 200px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.texto {
  color: var(--primary);
}

.send-button {
  /* margin-top: 15px; */
  height: 34px;
  width: 100%;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  color: var(--primary);
  background-color: var(--test-secondary);
  border-color: var(--test-secondary);
}

.send-button:hover {
  color: var(--primary) !important;
  background-color: var(--test-secondary) !important;
  border-color: var(--test-secondary) !important;
}
.send-button:active {
  border-color: none;
}

.alt-send-button {
  width: auto;
  height: 34px;
  transition: all 0.2s ease-in-out;
}

.send-text {
  display: block;
  margin-top: 10px;
  font: 700 12px "Lato", sans-serif;
  letter-spacing: 2px;
}

.alt-send-button:hover {
  transform: translate3d(0px, -29px, 0px);
}

/*ICONOS */

.wrapper {
  display: inline-flex;
  list-style: none;
  margin-bottom: 0!important;
  padding-left: 0!important;
}

.wrapper .icon {
  position: relative;
  background: var(--bgDark);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 10px 10px rgb(0, 0, 0);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip {
  position: absolute;
  top: 0;
  font-size: 14px;
  background: #ffffff;
  color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip::before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  background: #ffffff;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover .tooltip {
  top: -45px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.wrapper .icon:hover span,
.wrapper .icon:hover .tooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.wrapper .facebook:hover,
.wrapper .facebook:hover .tooltip,
.wrapper .facebook:hover .tooltip::before {
  background: #1877f2;
  color: #ffffff;
}

.wrapper .twitter:hover,
.wrapper .twitter:hover .tooltip,
.wrapper .twitter:hover .tooltip::before {
  background: #1da1f2;
  color: #ffffff;
}

.wrapper .instagram:hover,
.wrapper .instagram:hover .tooltip,
.wrapper .instagram:hover .tooltip::before {
  background: #e4405f;
  color: #ffffff;
}

.wrapper .github:hover,
.wrapper .github:hover .tooltip,
.wrapper .github:hover .tooltip::before {
  background: #333333;
  color: #ffffff;
}

.wrapper .whatsapp:hover,
.wrapper .whatsapp:hover .tooltip,
.wrapper .whatsapp:hover .tooltip::before {
  background: #1fcd36;
  color: #ffffff;
}
</style>