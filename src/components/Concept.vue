<template>
  <div class="secondPage" id="etapeUn">
    <div class="firStep">
      <div class="mainTit"><h4>Etape 1</h4></div>
      <div class="mainTxt">
        <p>
          {{ txtOne }}
        </p>
      </div>
      <div class="secTxt"></div>
    </div>
    <div class="secStep">
      <div class="mainTit"><h4>Etape 2</h4></div>
      <div class="mainTxt">
        <p>Je stocke vos articles et je m'occupe de tout !</p>
      </div>
      <div class="secTxt"><p>(estimations, photos, annonces, colis...)</p></div>
    </div>
    <div class="thiStep">
      <div class="mainTit"><h4>Etape 3</h4></div>
      <div class="mainTxt">
        <p>
          Recevez simplement votre chèque issu de la vente de vos vetements !
        </p>
      </div>
      <div class="secTxt">
        <p>La règle est simple, c'est moitié-moitié !</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Concept-page",
  data: () => {
    return {
      txtOne:
        "Je me deplace chez vous et je collecte les vetements que vous souhaitez vendre.",
    };
  },
  mounted() {
    const ratio = 0.1;
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: ratio,
    };
    const handleIntersect = function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
          entry.target.classList.add("firStep-visible");
          observer.unobserve(entry.target);
        }
      });
    };
    const handleIntersectSec = function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
          entry.target.classList.add("secStep-visible");
          observer.unobserve(entry.target);
        }
      });
    };
    const handleIntersectThi = function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
          entry.target.classList.add("thiStep-visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    const observerSec = new IntersectionObserver(handleIntersectSec, options);
    const observerThi = new IntersectionObserver(handleIntersectThi, options);
    observer.observe(document.querySelector(".firStep"));
    observerSec.observe(document.querySelector(".secStep"));
    observerThi.observe(document.querySelector(".thiStep"));
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
  padding-bottom: 30px;
}
.firStep,
.secStep,
.thiStep {
  width: 80%;
  height: 170px;
  margin-bottom: 10px;
  padding: 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgb(255, 255, 255, 0.8);
}

.firStep {
  margin-top: 10px;
}

.mainTit h4 {
  font-family: "TheLastDay";
  color: rgb(202, 99, 68);
  font-size: 35px;
  font-weight: lighter;
  margin-bottom: 15px;
  margin-top: 5px;
  width: 100%;
  height: auto;
  letter-spacing: 0.1rem;
  text-align: center;
}
.mainTxt p {
  color: rgb(152, 50, 48);
  font-size: 25px;
  font-family: "SignPaint";
  font-weight: lighter;
  margin-bottom: 10px;
  margin-top: 10px;
  width: 100%;
}
.secTxt p {
  color: rgb(152, 50, 48, 0.7);
  font-size: 20px;
  font-family: "SignPaint";
  font-weight: lighter;
  text-align: end;
  margin: 5px 0;
  width: 100%;
  height: 30px;
}
@media screen and (min-width: 1025px) {
  .secondPage {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 300px 50px 200px 50px;
  }
  .firStep,
  .secStep,
  .thiStep {
    width: 28%;
    height: 650px;
    padding-left: 25px;
    padding-right: 25px;
    /*opacity: 0;
    transform: translateY(100px);*/
  }
  .firStep {
    margin-top: 0px;
  }
  /*.firStep-visible {
    opacity: 1;
    transform: translateY(0);
    transition-duration: 1.1s;

    transition-timing-function: ease;
  }
  .secStep-visible {
    opacity: 1;
    transform: translateY(0);
    transition-duration: 1.1s;
    transition-delay: 0.5s;
    transition-timing-function: ease;
  }
  .thiStep-visible {
    opacity: 1;
    transform: translateY(0);
    transition-duration: 1.1s;
    transition-delay: 1s;
    transition-timing-function: ease;
  }
  */

  .mainTit h4 {
    margin-top: 35px;
    height: 30%;
    font-size: 100px;
    margin-bottom: 80px;
  }

  .mainTxt p {
    height: 30%;
    font-size: 45px;
    margin-bottom: 40px;
  }
  .secTxt p {
    height: 30%;
    font-size: 40px;
  }
}
</style>
