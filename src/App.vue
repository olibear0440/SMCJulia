<template>
  <div class="mainWrapper">
    <Navbar />
    <Accueil />
    <Concept />
    <Histoire />
    <Informations />
    <Contact />
  </div>
  <!--<img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
</template>

<script>
import Accueil from "./components/Accueil.vue";
import Navbar from "./components/Navbar.vue";
import Concept from "./components/Concept.vue";
import Histoire from "./components/Histoire.vue";
import Informations from "./components/Informations.vue";
import Contact from "./components/Contact.vue";

export default {
  name: "App",
  components: {
    Accueil,
    Navbar,
    Concept,
    Histoire,
    Informations,
    Contact,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.mainWrapper {
  background-color: rgb(238, 235, 235);
  height: auto;
  width: 100%;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
</style>
