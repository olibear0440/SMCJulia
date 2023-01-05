<template>
  <div class="fifthPage" id="contact">
    <hr />
    <h2>CONTACT</h2>
    <div class="blocContact">
      <p class="contact"><a href="mailto:julia@shopmycloset.fr"><span class="fa fa-envelope-o" aria-hidden="true"></span>
        julia@shopmycloset.fr</a>
        
      </p>
      <p class="instag"><a href="https://instagram.com/smc_shopmycloset?igshid=YmMyMTA2M2Y="><span class="fa fa-instagram" aria-hidden="true"></span>
        SMC_ShopMyCloset</a>
        
      </p>
      <p class="num"> 06.72.24.54.29</p>
      <p class="web"><a href="#"> www.shopmycloset.fr</a></p>
    </div>
    <div class="blocCopyR">
      <p class="copyR">
        <span class="fa fa-copyright" aria-hidden="true"></span> 2022 Shop My
        Closet - Tous droits reserves.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact-page",
  data: () => {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fifthPage {
  width: 100%;
  height: 500px;
  background-color: black;
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
  padding: 5px;
  margin-bottom: 60px;
}
.contact, .num, 
.instag {
  margin-bottom: 10px;
  font-size: 20px;
  padding: 5px;
}
.num{
    font-family: "SignPaint";
    font-size: 2em;
  }
.fa-instagram{
  font-size: 1.5rem;
}
.web {
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0.1rem;
  font-size: 20px;
}
span {
  margin-right: 10px;
}
a{
  color: rgba(253, 253, 253, 0.645);
  text-decoration: none;

}
.blocCopyR{
  color: rgba(253, 253, 253, 0.645);
  padding: 0 10px 0 10px;
}

@media screen and (min-width: 700px){
  h2 {
    font-size: 3.5em;
    margin-bottom: 40px;
  }
  .contact, .instag {
    font-size: 25px;
    line-height: 35px;
  }
  
  .web {
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0.1rem;
  font-size: 25px;
}
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
  h2{
    font-size: 6em;
  }
  .blocContact{
    line-height: 50px;
    font-size: 2em;
  }
  .fa-instagram,
.fa-copyright {
  font-size: 1.1em;
}
.num{
    font-size: 1.3em;
  }
.blocCopyR{
  margin-right: 4%;
  margin-left: 4%;
}
 
}
</style>
