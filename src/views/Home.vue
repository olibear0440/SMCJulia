<template>
  <Accueil />
  <div class="mobileContent">
    <Step />
    <Story />
    <Conditions />
    <Contact />
  </div>

  <!--<nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>-->
</template>
<script>
import Accueil from "../components/Accueil.vue";
import Step from "../views/Step.vue";
import Story from "../views/Story.vue";
import Conditions from "../views/Conditions.vue";
import Contact from "../views/Contact.vue";
export default {
  name: "home-vue",
  components: {
    Accueil,
    Step,
    Story,
    Conditions,
    Contact,
  },
};
</script>

<style scoped>

.mobileContent{
  display: none;
}</style>
