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
        "Après 5 ans à travailler en Asie pour l'un des plus grands fournisseurs de chaussures du fast-fashion, une prise de conscience se forge en moi. Je ne voulais plus travailler pour une industrie si peu scrupuleuse et autant polluante.",
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
  margin-top: 0;
}
.storyTxt {
  height: auto;
  color: rgb(152, 50, 48);
  font-size: 16px;
  padding: 0 10px 0 10px;
  font-family: "Lato", sans-serif;
  font-weight: lighter;
}
.pOfText {
  margin-top: 10px;
}

@media screen and (min-width: 1025px) {
  .thirdPage {
    height: auto;
    margin-bottom: 0;
    
  }
  h2 {
    padding-top: 100px;
    font-size: 100px;
    margin-top: 0;
  }
  .picBloc {
    width: 600px;
    height: 600px;
    padding-right: 50px;
  }
  .pic {
    width: 100%;
    height: auto;
  }
  .picTxt {
    top: 550px;
    font-size: 2.3em;
    width: auto;
    letter-spacing: 0.1rem;
  }
  .storyTxt{
    padding-left: 50px;
    padding-right: 50px;
    font-size: 2.2em;
    line-height: 60px;
    font-weight: 700;
  }
}

</style>
