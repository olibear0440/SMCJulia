<template>
  <div class="fifthPage">
    <hr />
    <div class="piedPage">
      <p class="copyR">
        <span class="fa fa-copyright" aria-hidden="true"></span> 2022 Shop My
        Closet - Tous droits reserves.
      </p>
      <p class="contact">
        <span class="fa fa-envelope-o" aria-hidden="true"></span>
        julia@shopmycloset.fr
      </p>
      <p class="instag">
        <span class="fa fa-instagram" aria-hidden="true"></span>
        SMC_ShopMyCloset
      </p>
      <p class="web">www.shopmycloset.fr</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer-page",
  data: () => {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fifthPage {
  width: 100%;
  height: 250px;
  background-color: black;
}
hr {
  margin: 0 auto 30px;
  width: 50%;
  border-top: 2px solid rgba(253, 253, 253, 0.645);
}
.piedPage {
  color: rgba(253, 253, 253, 0.645);
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
}
.copyR,
.contact,
.instag {
  margin-bottom: 10px;
}
.fa-instagram,
.fa-copyright {
  font-size: 1.1rem;
}
.web {
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0.1rem;
}

span {
  margin-right: 10px;
}


@media screen and (min-width: 1300px){
  .fifthPage{
    height: 600px;
  }
  hr {
    width: 30%;
    border-top: 6px solid grey;
    margin-bottom: 100px;
  }
  .piedPage{
    line-height: 50px;
    font-size: 2em;
  }
  .fa-instagram,
.fa-copyright {
  font-size: 1.1em;
}
 
}
</style>
