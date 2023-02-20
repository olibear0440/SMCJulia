<template>
  <div class="mainPage">
    <div class="bannerBack"></div>
    <div class="bannerFront">
      <h2 class="pitch">
        {{ pitchAccueil }}
      </h2>
    </div>
    <h1>lolo</h1>
    <!--
      <img class="dressingImg" :src="dressing" alt="dressing-smc" />
    <img class="logoImg" :src="logo" alt="logo-smc" />
    <div class="mainBtn">
      <a href="#etapeUn" class="mainBtnTitle"> {{ btnAccueil }}</a>
    </div>
    -->
    
  </div>
</template>

<script>
import logoSmc from "../assets/img/LOGOSMC.webp";
import dressingSmc from "../assets/img/closet.webp";
export default {
  name: "Accueil-page",
  data: () => {
    return {
      logo: logoSmc,
      dressing: dressingSmc,
      pitchAccueil:
        "Confiez moi les vêtements que vous souhaitez vendre, je m'occupe de tout !",
      btnAccueil: "CONCEPT",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/font/font-family.css";

.mainPage {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}

.bannerBack {
  background-color: black;
  height: 8rem;
  width: 100%;
}
.bannerFront {
  background-color: black;
  width: 100%;
  height: 3.5rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.pitch {
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
  letter-spacing: 0.1rem;
  font-size: 0.8rem;
  padding: 12px 10px 5px 10px;
  width: auto;
  text-align: center;
}


/*
.dressingImg {
  width: 100%;
  height: 380px;
  margin-bottom: 10px;
}
.logoImg {
  width: 250px;
  height: 250px;
  position: absolute;
  top: 20px;
}
.mainBtn {
  width: 150px;
  height: 50px;
  font-family: "SignPaint";
  padding: 6px 22px;
  border: 2px solid rgb(152, 50, 48);
  cursor: pointer;
  border-radius: 0.2em;
  text-align: center;
  margin-bottom: 20px;
}
.mainBtnTitle {
  color: rgb(202, 99, 68);
  font-size: 2.1em;
  font-weight: lighter;
  width: 100%;
}
*/

@media screen and (min-width: 700px) {
  .mainPage {
    height: auto;
  }
  .bannerFront,
  .bannerBack {
    display: none;
  }
  /*
  .dressingImg {
    height: auto;
    margin-bottom: 15px;
  }
  .logoImg {
    margin: 0 auto;
    width: 400px;
    height: 400px;
  }

  .mainBtn {
    background-color: rgb(202, 99, 68);
    border: 2px solid rgb(202, 99, 68);
    border-radius: 0.3em;
    width: 220px;
    height: 55px;
    padding-top: 12px;
    position: absolute;
    z-index: 0;
    top: 55%;
  }
  .mainBtnTitle {
    font-weight: bold;
    color: white;
  }
  */
}
/*
@media screen and (min-width: 1300px) {
  .logoImg {
    top: -4%;
    width: 800px;
    height: 800px;
  }
  .mainBtn {
    width: 400px;
    height: 75px;
  }
  .mainBtnTitle {
    font-size: 3.1em;
    letter-spacing: 0.1rem;
  }
}
*/
</style>
