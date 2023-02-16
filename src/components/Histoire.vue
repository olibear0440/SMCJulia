<template>
  <div class="thirdPage" id="histoire">
    <hr />
    <h2>{{ titreHistoire }}</h2>
    <div class="picBloc">
      <img
        src="../assets/img/JuliaPic.webp"
        class="pic"
        alt="photo de la creatrice"
      />
      <p class="picTxt">Je suis Julia, <br />votre personal seller</p>
    </div>

    <div class="storyTxt">
      <p>{{ txtPartieUn }}</p>
      <p class="pOfText">
        {{ txtPartieDeux }}
      </p>
      <p class="pOfText">
        Depuis 2019, je m'occupe de la revente des pièces que mes clientes me
        confient. <br />Aujourd'hui je suis heureuse d'offrir une seconde vie à
        tous ces vêtements et de lutter activement contre le fast-fashion en
        boostant le pouvoir d'achat de mes clientes.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Histoire-page",
  data: () => {
    return {
      titreHistoire: "L'HISTOIRE DE SHOP MY CLOSET",
      txtPartieUn:
        "Après 5 ans à travailler en Asie pour l'un des plus grands fournisseurs de chaussures du fast-fashion, une prise de conscience se forge en moi. Je ne voulais plus travailler pour une industrie qui implique l'exploitation et la surproduction.",
      txtPartieDeux:
        "Je décide donc de quitter le monde du fast-fashion pour celui de la seconde main et du recyclage. Avec la démocratisation de sites comme Vestiaire Collective et Vinted, c'est tout naturellement que me vient l'idée de devenir Personnal Seller. C'est de cette façon qu'est né Shop My Closet.",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.thirdPage {
  width: 100%;
  height: auto;
  margin-bottom: 50px;
}
hr {
  margin: 0 auto 20px;
  width: 50%;
  border-top: 2px solid grey;
}
.picBloc {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  float: right;
  position: relative;
  margin-right: 10px;
}
h2 {
  font-family: "SignPaint";
  width: 100%;
  text-align: center;
  color: rgb(202, 99, 68);
  font-size: 25px;
  padding: 5px 0px 5px 0px;
  margin-bottom: 20px;
}

.pic {
  float: right;
  width: 200px;
  position: absolute;
  height: 200px;
  border-radius: 50%;
  shape-outside: circle();
  object-fit: cover;
}
.picTxt {
  float: right;
  height: 50px;
  width: 130px;
  text-align: center;
  position: absolute;
  top: 150px;
  color: white;
  font-family: "SignPaint";
  font-size: 17px;
}
.storyTxt {
  height: auto;
  color: rgb(152, 50, 48);
  font-size: 16px;
  padding: 0 10px 0 10px;
  font-family: "Lato";
  font-weight: lighter;
}
.pOfText {
  margin-top: 10px;
}

@media screen and (min-width: 700px) {
  .thirdPage {
    height: auto;
  }
  hr {
    width: 30%;
    border-top: 6px solid grey;
    margin-bottom: 150px;
  }
  h2 {
    font-size: 3.5em;
    margin-bottom: 40px;
  }
  .picBloc {
    width: 300px;
    height: 300px;
    margin-right: 4%;
  }
  .pic {
    width: 300px;
    height: 300px;
  }
  .picTxt {
    height: 100px;
    width: 300px;
    top: 210px;
    font-size: 1.7em;
  }
  .storyTxt {
    font-size: 16px;
    margin-left: 4%;
    line-height: 30px;
    margin-right: 4%;
    padding: 0;
    margin-bottom: 80px;
  }
}
@media screen and (min-width: 1300px) {
  hr {
    border: none;
    margin-bottom: 150px;
  }
  h2 {
    font-size: 6em;
  }
  .picBloc {
    width: 500px;
    height: 500px;
  }
  .pic {
    width: 500px;
    height: 500px;
  }
  .picTxt {
    top: 380px;
    font-size: 2.3em;
  }
  .storyTxt {
    font-size: 25px;
    line-height: 60px;
    font-weight: bold;
    margin-bottom: 100px;
  }
}

/*@media screen and (min-width: 769px) {
  .thirdPage {
    height: auto;
  }
  hr {
    width: 30%;
    border-top: 6px solid grey;
    margin-bottom: 150px;
  }
  h2 {
    font-size: 6em;
    margin-bottom: 40px;
  }
  .picBloc {
    width: 700px;
    height: 700px;
    margin-right: 4%;
  }
  .pic {
    width: 700px;
    height: 700px;
  }
  .picTxt {
    height: 100px;
    width: 500px;
    top: 550px;
    font-size: 2.7em;
  }
  .storyTxt {
    font-size: 25px;
    margin-left: 4%;
    line-height: 70px;
    margin-right: 4%;
    padding: 0;
    font-weight: bold;
    margin-bottom: 100px;
  }
}*/
</style>
