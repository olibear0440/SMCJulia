<template>
  <div class="nav-bar">
    <nav class="nav">
      <div class="navLogo">
        <h2>Julia PAPILLON</h2>
        <p>PERSONAL SELLER</p>
      </div>
      <a
        href="https://instagram.com/smc_shopmycloset?igshid=YmMyMTA2M2Y="
        class="smcInsta"
        ><span class="fa fa-instagram fa-2x" aria-hidden="true"></span
      ></a>
      <!--<a href="#" class="smcMail"
        ><span class="fa fa-envelope-o fa-2x" aria-hidden="true"></span
      ></a>-->
      <div class="nav-menu" :class="isShow ? 'show' : ''">
        <ul class="nav-list">
          <li class="nav-item">
            <a href="#etapeUn" class="nav-link">Concept</a>
          </li>
          <li class="nav-item">
            <a href="#histoire" class="nav-link">Histoire</a>
          </li>
          <li class="nav-item">
            <a href="#informations" class="nav-link">Informations</a>
          </li>
        </ul>
        <span
          class="fa fa-times fa-2x nav-close"
          @click="isShow = !isShow"
          aria-hidden="true"
        ></span>
      </div>
      <div class="nav-toggle" @click="isShow = !isShow">
        <span class="fa fa-bars fa-2x" aria-hidden="true"></span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav-bar",
  data: () => {
    return {
      isShow: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/font/font-family.css";
.nav-bar {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-color: black;
  color: rgb(202, 99, 68);
}
.nav {
  max-width: 1024px;
  height: 3.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 1.2rem;
  margin-right: 1.5rem;
}
.navLogo {
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: baseline;
}
h2 {
  color: white;
  font-family: "SignPaint";
  font-weight: lighter;
  font-size: 20px;
  padding: 0 5px;
  width: 150px;
}
p {
  color: white;
  width: 150px;
  padding: 0 5px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.7rem;
  letter-spacing: 0.1rem;
}
.smcInsta {
  color: rgb(202, 99, 68);
  font-size: 1rem;
  cursor: pointer;
  margin-right: 50px;
}
.nav-menu {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 4rem 0 3rem;
  transition: 0.4s;
  background-color: rgba(255, 255, 255, 0.8);
}

.nav-menu.show {
  bottom: 0;
}

.nav-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.nav-item {
  width: 100%;
  text-align: center;
  padding: 5px 0px;
  margin: 5px 0 5px 0;
}
.nav-link {
  width: 100%;
  padding: 5px;
  font-size: 50px;
  font-family: "TheLastDay";
  color: rgb(202, 99, 68);
}
.nav-close {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 1.4rem;
}
.fa-bars {
  color: rgb(202, 99, 68);
}
.nav-toggle {
  font-size: 1rem;
}

@media screen and (max-width: 768px) {
  .nav-menu {
    position: fixed;
    width: 100%;
    bottom: -100%;
    left: 0;
    border-radius: 0.8rem 0.8rem 0 0;
    padding: 3rem 0 3rem;
    transition: 0.4s;
  }
}
@media screen and (min-width: 769px) {
  .nav-bar {
    top: 0;
    bottom: initial;
  }
  .nav {
    margin-inline: auto;
    height: 100px;
  }
  .nav-menu {
    top: 0;
    height: 170px;
  }
  .nav-list {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .nav-toggle,
  .nav-icon,
  .nav-close {
    display: none;
  }
}
</style>
