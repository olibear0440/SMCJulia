<template>
  <div class="mainPage">
    <!--<div class="mainImg">
      <img class="dressingImg" :src="dressing" alt="dressing-smc" />
      <img class="logoImg" :src="logo" alt="logo-smc" />
    </div>-->
    
    
  </div>
</template>

<script>
import gsap from "gsap";
import logoSmc from "../assets/img/LOGOSMC.png";
import dressingSmc from "../assets/img/closet.jpg";
export default {
  name: "Accueil-page",
  data: () => {
    return {
      logo: logoSmc,
      dressing: dressingSmc,
    };
  },
  mounted() {
    const logoImg = document.querySelector(".logoImg");
    gsap.to(logoImg, { y: -40, duration: 2 });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mainPage {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.mainImg {
  width: 100%;
  height: 90%;
}
.dressingImg {
  width: 100%;
  height: 100%;
  position: relative;
  object-fit: cover;
}
.logoImg {
  width: 35%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


</style>
