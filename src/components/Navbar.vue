<template>
  <div class="nav-bar">
    <nav class="nav">
      <div class="nav-menu" :class="isShow ? 'show' : ''">
        <ul class="nav-list">
          <li class="nav-item"><a href="#" class="nav-link">Concept</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Histoire</a></li>
          <li class="nav-item">
            <a href="#" class="nav-link">Informations</a>
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
  //background-color: black;
  /*background-color: rgb(242, 233, 228);
  color: rgb(202, 99, 68);*/
}
.nav {
  max-width: 1024px;
  height: 3rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  margin-left: 0.6rem;
  margin-right: 0.6rem;
}
.nav-menu {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  border: 1px solid black;
  padding: 3rem 0 3rem;
  transition: 0.4s;
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
.nav-item{
  width: 100%;
  text-align: center;
  padding: 5px 0px;
  margin: 5px 0 5px 0;
}
.nav-link{
  width: 100%;
  padding: 5px;
  font-size: 50px;
  font-family: "TheLastDay";
  color: rgb(202, 99, 68)
}
.nav-close {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 1.4rem;
  //color:
}
.nav-toggle {
  font-size: 1.4rem;
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
