<template>
  <div class="mainWrapper">
    <Navbar />
    <Accueil />
    <Concept />

  </div>
  <!--<img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  
</template>

<script>

import Accueil from './components/Accueil.vue'
import Navbar from './components/Navbar.vue'
import Concept from './components/Concept.vue'

export default {
  name: 'App',
  components: {
    Accueil,
    Navbar,
    Concept,
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.mainWrapper{
  background-color: rgb(238, 235, 235);
  height: auto;
  width: 100%;
}
ul{
  list-style: none;
}
a{
  text-decoration: none;
}

</style>
