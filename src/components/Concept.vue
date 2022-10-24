<template>
  <div class="secondPage">
    <div class="firStep" id="etapeUn">Etape 1</div>
    <div class="secStep">Etape 2</div>
    <div class="thiStep">Etape 3</div>
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
  justify-content: space-between;
  align-items: center;
}
.firStep, .secStep, .thiStep{
    width: 90%;
    height: 30%;
    border: 1px solid blue;
}
</style>
