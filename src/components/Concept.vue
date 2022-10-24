<template>
  <div class="secondPage">
    <div class="firStep" id="etapeUn">
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
      <p class="mainTxt">Recevez simplement votre chèque issu de la vente de vos vetements !</p>
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
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.firStep,
.secStep,
.thiStep {
  width: 90%;
  height: 25%;
  margin-bottom: 10px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgb(255, 255, 255, 0.8);
  
}
.firStep {
  margin-top: 5px;
}
h2{
    font-family: "TheLastDay";
    color: rgb(202, 99, 68);
    font-size: 40px;
    font-weight: lighter;
    margin-bottom: 15px;
}
.mainTxt{
    color: rgb(152, 50, 48);
    font-size: 25px;
    font-family: "SignPaint";
    font-weight: lighter;
    margin-bottom: 5px;
}
.secTxt{
    color: rgb(152, 50, 48, 0.7);
    font-size: 25px;
    font-family: "SignPaint";
    font-weight: lighter;
    text-align: end;
}
</style>
