import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router'


import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'

//Componentes
import bootstrap from 'bootstrap/dist/js/bootstrap'
import Inicio from "./components/Inicio.vue"
import Portafolio from "./components/Portafolio.vue"
import Contacto from "./components/Contacto.vue"


//Rutas
const routes = [
    { path: '/', component: Inicio },
    { path: '/portafolio', component: Portafolio },
    { path: '/Contacto', component: Contacto },
  ]

//Objeto VueRouter
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

const app = createApp(App);
app.use(bootstrap)
app.use(router)
app.mount('#app')
