<template>
  <div id="intro">
    <div class="bg-gradient">
      <div style="text-align: center">
        <img
          src="https://avatars.githubusercontent.com/u/61126545?v=4"
          alt="ER"
          class="imgedu"
          width="200"
          height="200"
        />
        <h1>Eduardo Rojas</h1>
        <h4>Frontend Developer</h4>
        <br />
        <!-- <router-link to="/" class="btn">Quem é Edu?</router-link> -->
        <router-link to="/repositorio" class="btn">
          Projetos
          <i class="fas fa-code"></i>
        </router-link>
        <div v-for="link in links" :key="link">
          <a :href="link.desc" target="_blank" class="btn">
            {{ link.nome }}
            <i :class="link.icon"></i>
          </a>
        </div>
      </div>
      <span id="logo" @click="onClick">Portfólio</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "intro",
  data() {
    return {
      links: [
        {
          desc: "https://www.linkedin.com/in/edurojas-developer/",
          icon: "fab fa-linkedin",
          nome: "Linkedin",
        },
        {
          desc: "https://github.com/edurojas-dev",
          icon: "fab fa-github",
          nome: "Github",
        },
        {
          desc: "https://www.instagram.com/tagbloog/",
          icon: "fab fa-instagram",
          nome: "TagBloog",
        },
      ],
    };
  },
  methods: {
    onClick() {
      this.$gtm.trackEvent({
        event: null, // Event type [default = 'interaction'] (Optional)
        category: "Calculator",
        action: "click",
        label: "Home page SIP calculator",
        value: 5000,
        noninteraction: false, // Optional
      });
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
#intro {
  background-image: url("../assets/tagblog.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  font-family: "Nunito", sans-serif;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg-gradient {
  background-color: rgba(0, 0, 0, 0.4);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
}

.btn {
  background-color: #5462a1;
  color: white;
  padding: 10px;
  text-decoration: none;
  border-radius: 5px;
  margin: 10px auto;
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
}

.btn:hover {
  background-color: #101733;
  color: white;
  width: 170px;
}

.btn i {
  margin: 0 5px;
  font-size: 18px;
}

h1,
#logo,
h4 {
  color: white;
}

#logo {
  position: absolute;
  top: 3%;
  left: 5%;
  font-size: 30px;
  font-weight: 800;
}

.imgedu {
  border-radius: 50%;
  box-shadow: 5px 5px 5px #ffff;
  margin-bottom: 10px;
}

@media (max-width: 660px) {
  #logo {
    display: none;
  }
  #intro {
    background-image: url("../assets/bgMobile.png");
  }
}

@media (max-width: 1380px) {
  .btn {
    padding: 5px;
  }
}
</style>
