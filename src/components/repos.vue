<template>
  <div id="blog" style="max-width: 100%">
    <router-link to="/" id="logo">Eduardo Rojas</router-link>
    <!-- <img :src="require('../assets/01.gif')" alt="" id="bgGif" /> -->
    <section class="search">
      <div class="item">
        <h1>Projetos GitHub</h1>
      </div>
      <p class="descPortf">
        Portfólio integrado com API do GitHub por meio do Axios e desenvolvido
        com Vue.js. <br />
        Aqui encontra-se todos os projetos que realizo para fins de estudos e
        prática de programação Front-end, utilizando desde as tecnologias como
        HTML5, CSS3 e JavaScript, e o framework Vue.js.
      </p>
      <br />
      <p class="filtro">Filtrar por Tecnologia:</p>
      <div class="btns">
        <button v-on:click="listarPorlang('HTML')">HTML5</button>
        <button v-on:click="listarPorlang('CSS')">CSS3</button>
        <button v-on:click="listarPorlang('JavaScript')">JavaScript</button>
        <button v-on:click="listarPorlang('Vue')">Vue.js</button>
        <button v-on:click="listartodos">Todos</button>
      </div>
    </section>
    <section class="intro">
      <div class="projetos bg-gradient" style="max-width: 100%">
        <card
          v-for="(item, index) in dados"
          v-on:mouseover="addClase('card' + index)"
          :id="'card' + index"
          :key="item"
          :titulo="item.name"
          :descricao="item.description"
          :linke="item.html_url"
          :linguagem="item.language"
        />
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
import card from "./card.vue";
import "animate.css";
export default {
  components: {
    card,
  },
  name: "repos",
  data() {
    return {
      dados: "null",
      dadoss: null,
      search: "",
      langs: null,
    };
  },

  mounted() {
    axios.get("https://api.github.com/users/edurojas-dev/repos").then((r) => {
      this.dadoss = r.data;
      this.dados = r.data;
    });
  },

  methods: {
    listarPorlang(ling) {
      this.dados = this.dadoss;
      let listar = this.dados.filter((item) => {
        if (item != "all") {
          return item.language == ling;
        }
      });
      this.dados = listar;
    },

    addClase(elemento) {
      let elementoX = document.getElementById(elemento);
      elementoX.classList.add("animate__animated", "animate__pulse");

      elementoX.onmouseout = () => {
        elementoX.classList.remove("animate__animated", "animate__pulse");
      };
    },

    listartodos() {
      return (this.dados = this.dadoss);
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
#bgGif {
  position: absolute;
  right: 0;
  /* height: 50%; */
}

.nav div {
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  margin: auto auto;
}

.search {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 70px;
  padding-top: 50px;
  /* background-color: #1e1842; */
  background-image: url("../assets/bg3.png");
  background-attachment: fixed;
  /* background-position: cen; */
  background-size: 100%;
  height: 277px;
  font-family: "Nunito", sans-serif;
  color: white;
  font-size: 22px;
}

.search div button {
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  margin: 15px 10px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
}
.btns button {
  transition: 1s;
}
.btns button:nth-child(1) {
  background-color: #ff856c;
  color: white;
  box-shadow: 3px 3px 3px #ff856c;
}

.btns button:nth-child(2) {
  background-color: #2e86de;
  color: white;
  box-shadow: 3px 3px 3px #2e86de;
}

.btns button:nth-child(3) {
  background-color: #ff9f43;
  color: white;
  box-shadow: 3px 3px 3px #ff9f43;
}

.btns button:nth-child(4) {
  background-color: #01a3a4;
  color: white;
  box-shadow: 3px 3px 3px #01a3a4;
}

.btns button:nth-child(5):hover {
  color: #4c4e61;
  background-color: white;
}

.btns button:nth-child(1):hover {
  color: #ff856c;
  background-color: white;
}

.btns button:nth-child(2):hover {
  color: #2e86de;
  background-color: white;
}

.btns button:nth-child(3):hover {
  color: #ff9f43;
  background-color: white;
}

.btns button:nth-child(4):hover {
  background-color: #01a3a4;
  color: white;
}

.btns button:nth-child(5):hover {
  background-color: #4c4e61;
  color: white;
}

.btn {
  background-color: cornflowerblue;
  color: white;
  padding: 10px;
  text-decoration: none;
  border-radius: 5px;
}

input {
  width: 900px;
  margin: auto auto;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  border: none;
  height: 65px;
  padding: 5px 15px;
  color: white;
  font-size: 17px;
}

::placeholder {
  color: white;
  font-size: 17px;
}

:focus {
  border: none !important;
}

.projetos {
  padding: 0 200px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.intro {
  background-image: url("../assets/tagblog.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  height: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
}

.descPortf {
  width: 680px;
  font-size: 16px;
  margin-bottom: 20px;
  text-align: center;
}

#logo {
  position: absolute;
  top: 3%;
  left: 5%;
  font-size: 30px;
  font-weight: 800;
  color: white;
  font-family: "Nunito", sans-serif;
  text-decoration: none;
}

.filtro {
  text-align: left;
  width: 690px;
  font-size: 18px;
}

.bg-gradient {
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
}

@media (max-width: 1380px) {
  #bgGif {
    width: 23%;
    top: 25%;
  }

  .btns button {
    padding: 5px !important;
  }

  .projetos {
    padding: 0 70px !important;
  }
}

@media (max-width: 600px) {
  .search{
    background-color: #17203F;
    background-image: none;
  }
  .search div button {
    width: 100px;
    padding: 5px;
    border: none;
    border-radius: 10px;
    margin: 15px 10px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 400;
  }

  .filtro {
    text-align: center !important;
    font-size: 18px;
  }

  #logo {
    display: none;
  }
  .search {
    height: auto;
    padding-bottom: 10px;
    padding-top: 7px;
    /* display: block !important; */
  }
  input {
    width: 400px;
  }

  .projetos {
    display: block;
    padding: 0 !important;
  }

  #bgGif {
    display: none;
  }

  .descPortf {
    display: none;
  }

  h1 {
    margin-top: 20px;
  }

  .btns {
    max-width: 85%;
    text-align: center;
  }
}
</style>
