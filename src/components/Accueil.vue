<template>
  <div class="mainPage">
    <div class="bannerBack"></div>
    <div class="bannerFront"></div>
    <img class="dressingImg" :src="dressing" alt="dressing-smc" />
    <div class="mainImg">
      <img class="logoImg" :src="logo" alt="logo-smc" />
    </div>
    <div class="mainBtn">
      <a href="#etapeUn" class="mainBtnTitle">CONCEPT</a>
    </div>
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
    gsap.to(logoImg, { y: -200, duration: 1, ease: "power4.out" });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/font/font-family.css";
.mainPage {
  height: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.bannerBack {
  background-color: black;
  height: 100px;
  width: 100%;
}
.bannerFront {
  background-color: black;
  width: 100%;
  height: 40px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.dressingImg {
  width: 100%;
  height: 400px;
  position: relative;
  object-fit: cover;
  margin-bottom: 20px;
}
.mainImg {
  width: 100%;
}

.logoImg {
  width: 60%;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, 50%);
}
.mainBtn {
  font-family: "SignPainter";
  padding: 6px 22px;
  border: 2px solid rgb(152, 50, 48);
  cursor: pointer;
  border-radius: 2px;
}
.mainBtnTitle {
  color: rgb(202, 99, 68);
  font-size: 2.1em;
}
</style>
