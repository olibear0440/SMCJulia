<template>
  <div class="secondPage" id="etapeUn">
    <div class="firStep">
      <h2>Etape 1</h2>
      <p class="mainTxt">
        Je me deplace chez vous et je collecte les vetements que vous souhaitez
        vendre.
      </p>
    </div>
    <div class="secStep">
      <h2>Etape 2</h2>
      <p class="mainTxt">Je stocke vos articles et je m'occupe de tout !</p>
      <p class="secTxt">(estimations, photos, annonces, colis...)</p>
    </div>
    <div class="thiStep">
      <h2>Etape 3</h2>
      <p class="mainTxt">
        Recevez simplement votre chèque issu de la vente de vos vetements !
      </p>
      <p class="secTxt">La règle est simple, c'est moitié-moitié !</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Concept-page",
  data: () => {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.secondPage {
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
  margin: 50px 0px;
  margin-left: 2.5%;
  margin-right: 2.5%;
}
.firStep,
.secStep,
.thiStep {
  width: 90%;
  height: 210px;
  margin-bottom: 10px;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgb(255, 255, 255, 0.8);
}
.firStep {
  margin-top: 5px;
}
h2 {
  font-family: "TheLastDay";
  color: rgb(202, 99, 68);
  font-size: 40px;
  font-weight: lighter;
  margin-bottom: 15px;
  width: auto;
  height: auto;
}
.mainTxt {
  color: rgb(152, 50, 48);
  font-size: 25px;
  font-family: "SignPaint";
  font-weight: lighter;
  margin-bottom: 10px;
}
.secTxt {
  color: rgb(152, 50, 48, 0.7);
  font-size: 25px;
  font-family: "SignPaint";
  font-weight: lighter;
  text-align: end;
}

@media screen and (min-width: 700px) {
  .secondPage {
    height: 60vh;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 180px;
  }
  .firStep,
  .secStep,
  .thiStep {
    width: 32%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: rgb(255, 255, 255, 0.8);
    margin-top: 200px;
  }
  h2 {
    font-size: 4em;
    margin-bottom: 30px;
  }
  .mainTxt {
    font-size: 1.7em;
    margin-bottom: 20px;
  }
  .secTxt {
    font-size: 1.7em;
    width: 80%;
  }
}
@media screen and (min-width: 1300px) {
  .secondPage {
    margin-bottom: 300px;
  }
  .firStep,
  .secStep,
  .thiStep {
    height: 600px;
    margin-top: 250px;
  }
  .firStep {
    margin-top: 0;
    margin-top: 250px;
  }
  h2 {
    font-size: 6em;
    margin-bottom: 60px;
  }
  .mainTxt {
    font-size: 3.7em;
    margin-bottom: 40px;
  }
  .secTxt {
    font-size: 3.7em;
    width: 80%;
  }
}
</style>
