<template>
  <div id="intro">
    <div class="bg-gradient">
      <div style="text-align: center">
        <img
          src="https://avatars.githubusercontent.com/u/61126545?v=4"
          alt="ER"
          class="imgedu"
        />
        <h1>Eduardo Rojas</h1>
        <h4>Developer Front-end</h4>
        <br />
        <router-link to="/" class="btn">Quem é Edu?</router-link>
        <router-link to="/repositorio" class="btn">Projetos</router-link>
        <!-- <router-link to="/" class="btn">Certificados</router-link> -->
        <!-- <router-link to="https://www.linkedin.com/in/edurojas-developer/" class="btn">Linkedin</router-link> -->
        <a href="https://www.linkedin.com/in/edurojas-developer/" target="_blank" class="btn">Linkedin</a>
      </div>
      <span id="logo">Portfólio</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "intro",
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
  width: 160px !important;
  display: block;
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
  max-width: 60%;
}

@media (max-width: 660px) {
  #logo {
    display: none;
  }
}

@media (max-width: 1380px) {
  .imgedu{
    max-width: 44%;
  }
  
  .btn {
    padding: 5px;
  }
}
</style>
