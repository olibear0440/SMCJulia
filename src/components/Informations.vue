<template>
  <div class="fourthPage" id="informations">
    <h2>CONDITIONS ET INFORMATIONS</h2>
    <ul>
      <li>
        {{ infoUn }}
      </li>
      <li>
        {{ infoDeux }}
      </li>
      <li>
        {{ infoTrois }}
      </li>
      <li>
        {{ infoQuatre }}
      </li>
      <li>
        {{ infoCinq }}
      </li>
      <li>
        {{ infoSix }}
      </li>
      <li>
        {{ infoSept }}
      </li>
      <li>
        {{ infoHuit }}
      </li>
      <li>
        {{ infoNeuf }}
      </li>
      <li>
        {{ infoDix }}
      </li>
      <li>
        {{ infoOnze }}
      </li>
      <li>
        {{ infoDouze }}
      </li>
      <li>
        {{ infoTreize }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Informations-page",
  data: () => {
    return {
      infoUn:
        "Je me déplace à domicile dans toute l'Ile-de-France, sur rendez-vous (frais de déplacement: 29€).",
      infoDeux:
        "Je peux vous aider dans votre tri, suivant la methode Konmari de Marie Kondo (à préciser lors de la prise de rendez-vous). Une matinée ou une après midi: 59€.",
      infoTrois:
        "Les articles pris en charge par Shop My Closet sont uniquement les vêtements et les accessoires (chaussures, sacs, petite maroquinerie, bijoux et foulards).",
      infoQuatre:
        "Le nombre d'articles pris en charge est de minimum 20 et maximum 50.",
      infoCinq:
        "Shop My Closet stocke vos articles pour 6 mois (durée de la prestation).",
      infoSix:
        "Les articles estimés à moins de 25€ ne sont pas pris en charge. De même que pour les articles défectueux (trous ou taches indélébiles). Ceux-ci vous seront restitués, soit déposés en centre de recyclage (au choix).",
      infoSept:
        "Si articles décousus ou légerement tachés, un passage chez la couturière, le cordonnier ou le pressing sera necessaire à la vente. Dans ce cas, vous serez informé(e) du montant de la remise en état et les frais vous seront déduits. Si refus, Shop My Closet se réserve le droit de ne pas prendre en charge la vente de l'article en question.",
      infoHuit:
        "L'estimation est basée sur les prix du marché actuel, la rareté, la demande et l'état de l'article. Si celle ci ne convient pas, Shop My Closet se réserve le droit de ne pas prendre en charge la vente de l'article en question.",
      infoNeuf:
        "Une marge de négociation reste nécessaire à une vente rapide et efficace, celle-ci est de 40% maximum.",
      infoDix:
        "La commission de Shop My Closet sur les ventes s'élève à 50% par article.",
      infoOnze:
        "Une commission de 30% seulement s'applique aux articles de luxe (vendu à plus de 100€).",
      infoDouze:
        "Votre virement sera effectué à le fin de la prestation (6 mois), accompagné d'un fichier-bilan.",
      infoTreize:
        "Les articles invendus seront au choix: remis à un point de collecte associatif/recyclage ou restitués (dans ce dernier cas, l'envoi se fait par colis, à votre charge).",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fourthPage {
  width: 100%;
  height: auto;
  background-color: black;
}
h2 {
  font-family: "SignPaint";
  width: 100%;
  text-align: center;
  color: rgb(202, 99, 68);
  font-size: 25px;
  padding: 30px 0px 10px 0px;
  margin-bottom: 20px;
  margin-top: 0;
}
ul {
  height: 1170px;
  color: rgb(172, 121, 120);
  font-size: 16px;
  padding: 0 10px 30px 10px;
  list-style-position: inside;
  margin-bottom: 0;
}
li {
  margin-bottom: 15px;
  list-style-type: disc;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
}
@media screen and (min-width: 1025px) {
  h2 {
    font-size: 100px;
    padding: 120px 0px 5px;
    margin: 0px 0px 20px;
  }
  ul {
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 100px;
    height: auto;
    margin-bottom: 0;
  }
  li {
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 30px;
  }
}
</style>
