<template>
  <div class="fifthPage" id="contact">
    <hr />
    <h2>CONTACT</h2>
    <div class="blocContact">
      <p class="contact">
        <a href="mailto:julia@shopmycloset.fr"
          ><span class="fa fa-envelope-o" aria-hidden="true"></span>
          {{ mail }}</a
        >
      </p>
      <p class="instag">
        <a href="https://instagram.com/smc_shopmycloset?igshid=YmMyMTA2M2Y="
          ><span class="fa fa-instagram" aria-hidden="true"></span>
          {{ lienInsta }}</a
        >
      </p>
      <p class="num">{{ numTel }}</p>
      <p class="web">
        <a href="#"> {{ lienSiteInternet }}</a>
      </p>
    </div>
    <div class="blocCopyR">
      <p class="copyR">
        <span class="fa fa-copyright" aria-hidden="true"></span> {{ copyright }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact-page",
  data: () => {
    return {
      mail: "julia@shopmycloset.fr",
      lienInsta: "SMC_ShopMyCloset",
      numTel: "06.72.24.54.29",
      lienSiteInternet: "www.shopmycloset.fr",
      copyright: "2022 Shop My Closet - Tous droits reserves.",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fifthPage {
  width: 100%;
  height: auto;
  background-color: black;
  padding-bottom: 30px;
}
hr {
  margin: 0 auto 30px;
  width: 50%;
  border-top: 2px solid rgba(253, 253, 253, 0.645);
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
.blocContact {
  color: rgba(253, 253, 253, 0.645);
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 120px;
  margin-top: 30px;
}
.contact,
.num,
.instag {
  margin-bottom: 10px;
  font-size: 25px;
  padding: 5px;
}
.num {
  font-family: "SignPaint";
  font-size: 2em;
  padding: 5px;
  letter-spacing: 0.1rem;
}
.fa-instagram {
  font-size: 1.6rem;
}
.web {
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0.1rem;
  font-size: 25px;
}
span {
  margin-right: 10px;
}
a {
  color: rgba(253, 253, 253, 0.645);
  text-decoration: none;
}
.blocCopyR {
  color: rgba(253, 253, 253, 0.645);
  padding: 0 10px 30px 10px;
  font-size: 11px;
}
@media screen and (min-width: 1025px) {
  .fifthPage {
    padding-bottom: 70px;
  }
  h2 {
    font-size: 100px;
    margin: 0 0 20px;
    padding: 100px 0 5px;
  }
  .blocContact {
    margin-bottom: 170px;
    margin-top: 30px;
  }
  .contact,
  .num,
  .instag {
    margin-bottom: 30px;
    font-size: 50px;
  }
  .num {
    font-size: 4em;
  }
  .fa-instagram {
    font-size: 3rem;
  }
  .web {
    font-size: 50px;
  }

  .blocCopyR {
    font-size: 16px;
  }
}
</style>
