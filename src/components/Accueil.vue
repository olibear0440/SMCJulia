<template>
  <div class="mainPage">
    <div class="bannerBack"></div>
    <div class="bannerFront">
      <h2 class="pitch">
        {{ pitchAccueil }}
      </h2>
    </div>
    <div class="backgroundImg">
      <img class="dressingImg" :src="dressing" alt="dressing-smc" />
      <div class="blocLogo">
        <div class="blocImg">
          <img class="logoImg" :src="logo" alt="logo-smc" />
        </div>
        <RouterLink to="/step" class="mainBtn">
          <p class="mainBtnTitle">{{ btnAccueil }}</p>
        </RouterLink>
      </div>
    </div>
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
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding-bottom: 55px;
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
  padding: 5px 10px 5px 10px;
  width: auto;
  text-align: center;
}

.backgroundImg {
  width: 100%;
  height: auto;
}
.dressingImg {
  width: 100%;
  height: 385px;
  object-fit: cover;
}
.blocLogo {
  width: 60%;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 20px;
  left: 20%;
}
.blocImg,
.logoImg {
  width: 100%;
}
.blocImg {
  margin-bottom: 100px;
  opacity: 1;
}

.mainBtn {
  background-color: rgb(202, 99, 68);
  padding: 10px 25px 10px 25px;
  width: 40%;
  text-align: center;
  font-family: "SignPaint";
  cursor: pointer;
  border-radius: 0.4em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  box-shadow: 0 0 10px rgb(202, 99, 68);
  opacity: 1;
}

.mainBtnTitle {
  font-size: 1.5em;
  color: white;
  margin: 0;
  font-weight: 700;
}

@media screen and (min-width: 1025px) {
  .mainPage {
    height: auto;
    padding-bottom: 0;
  }
  .bannerFront,
  .bannerBack {
    display: none;
  }
  .pitch {
    padding: 12px 10px 5px 10px;
  }
  .backgroundImg {
    width: 100%;
    height: 100vh;
    position: relative;
  }
  .dressingImg {
    width: 100%;
    height: 100vh;
  }
  .blocLogo {
    top: -20px;
    left: 30%;
    width: 40%;
    height: auto;
  }
  .blocImg {
    opacity: 0;
    animation: scaleImg 1.3s ease forwards;
  }
  @keyframes scaleImg {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  .mainBtn {
    width: 25%;
    padding: 15px 25px 10px 25px;
    opacity: 0;
    animation: scaleImg 1.3s 0.6s ease forwards;
  }
  .mainBtnTitle {
    text-decoration: none;
    color: white;
    font-size: 2.1em;
    width: 100%;
    font-weight: bold;
    letter-spacing: 0.1rem;
    margin: 0;
  }
}
</style>
