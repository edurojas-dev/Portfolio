<template>
  <div id="intro">
    <div class="bg-gradient">
      <div style="text-align: center">
       <div class="container bg-info">
         <div class="lead text-white">TESTE</div>
       </div>
      </div>
      <span id="logo">Portfólio</span>
    </div>
  </div>
</template>
<script>
// import "bootstrap/dist/css/bootstrap.min.css"
export default {
  name: "certificados",
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

</style>
