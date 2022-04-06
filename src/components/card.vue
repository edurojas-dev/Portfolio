<template>
  <div :class="estilos" style="background: white">
    <div class="card-text">
      <div class="cardImg">
        <h2>{{ titulo }}</h2>
        <img :src="dadotratado" alt="img" style="width: 60px" />
      </div>

      <p>
        {{ descricao }}
      </p>
    </div>
    <div class="areabtn">
      <a :href="linkeSite" :style="bg" target="_blank" v-if="linkeSite != '' && linkeSite != undefined">WebSite</a>
      <a :href="linke" :style="bg" target="_blank">Ver projeto</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "card",
  data() {
    return {
      dadotratado: null,
      urlImg: null,
      estilos: null,
      bg: null,
    };
  },
  props: {
    titulo: String,
    descricao: String,
    linkeSite: String,
    linke: String,
    linguagem: String,
  },
  methods: {
    upStyles(bgBtn, classes, lingImg) {
      this.bg = bgBtn;
      this.estilos = classes;
      this.dadotratado = require(`../assets/${lingImg}.png`);
    },
  },
  mounted() {
    switch (this.linguagem) {
      case "HTML":
        this.upStyles(
          "background-color: #FF856C;",
          "box bodyclass red",
          "html"
        );
        break;

      case "JavaScript":
        this.upStyles(
          "background-color: #eeaf4b;",
          "box bodyclass js",
          this.linguagem.toLowerCase()
        );
        break;

      case "Vue":
        this.upStyles(
          "background-color: #01a3a4;",
          "box bodyclass vue",
          this.linguagem.toLowerCase()
        );
        break;

      case "CSS":
        this.upStyles(
          "background-color: #2e86de;",
          "box bodyclass css",
          this.linguagem.toLowerCase()
        );
        break;

      default:
        this.upStyles(
          "background-color: gray;",
          "box bodyclass defaultColor",
          "linkexternal"
        );
    }
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
:root {
  --red: #ff856c;
  --cyan: hsl(180, 62%, 55%);
  --orange: hsl(34, 97%, 64%);
  --blue: hsl(212, 86%, 64%);
  --varyDarkBlue: #4c4e61;
  --grayishBlue: hsl(229, 6%, 66%);
  --veryLightGray: hsl(0, 0%, 98%);
  --weight1: 200;
  --weight2: 400;
  --weight3: 600;
}

.bodyclass {
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  background-color: var(--veryLightGray);
}

.attribution {
  font-size: 11px;
  text-align: center;
}
.attribution a {
  color: hsl(228, 45%, 44%);
}

.card-text,
.cardImg {
  text-align: left;
}
.card-text {
  height: 80%;
}

.areabtn {
  height: 20%;
  float: right;
}

.areabtn a {
  background-color: #1e1842;
  color: white;
  padding: 10px;
  text-decoration: none;
  border-radius: 5px;
  width: 100px;
  border: none;
  font-size: 17px;
  margin: 0 4px;
}

.cardImg {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-text h2 {
  margin: 10px 0;
}

.card-text p {
  margin: 10px 0;
  font-size: 18px;
}

.box p {
  color: #717171;
}

.box {
  border-radius: 5px;
  box-shadow: 0px 30px 40px -20px #4c4e61;
  padding: 5px 20px;
  margin: 20px;
  width: 500px;
  height: 200px;
}

@media (max-width: 600px) {
  .box {
    height: 250px;
    width: 80% !important;
  }

  .card-text {
    height: 80%;
  }

  .areabtn {
    margin-top: 11px;
    height: 10%;
    float: right;
  }

  h1,
  h2 {
    font-size: 4vw !important;
  }
}

.css {
  border-top: 3px solid #2e86de;
}
.red {
  border-top: 3px solid #ff856c;
}
.vue {
  border-top: 3px solid #01a3a4;
}
.js {
  border-top: 3px solid #eeaf4b;
}
.defaultColor {
  border-top: 3px solid #4c4e61;
}

h2 {
  color: var(--varyDarkBlue);
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 32px;
}
</style>
