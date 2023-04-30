<script setup>
  import Navbar from "./components/Navbar.vue";
  import Inicio from "./components/Inicio.vue";
</script> 

<template>

    <div id="app">
      <header class="customNav pt-3">
        <Navbar />
      </header>
      <main class="customComponent">
        <router-view></router-view>
      </main>      
    </div>
      
    

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Kalam:wght@700&display=swap');

html {
  padding-top:0px!important;
}


.customNav {
  height: 80px; 

}

.customComponent {
  height: calc(100vh - 80px);
  padding: 30px 0;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

@media (max-width: 992px) {
  .customComponent {
    
  }
}



</style>
