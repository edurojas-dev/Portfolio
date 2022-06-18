<template>
  <div id="app">
    <router-view></router-view>
    <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5534991157227" id="contato">
      <img :src='require("./assets/whatsapp.png")' alt="zap">
    </a>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

/* width */
::-webkit-scrollbar {
  width: 11px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 1px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #17203F; 
  border-radius: 7px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #17203F; 
}

#contato{
  z-index: 9999;
  position: fixed;
  bottom: 2%;
  right: 1%;
  width: 50px;
  height: 50px;
  background-color: #51CD5E;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1s;
}

#contato:hover{
  padding: 5px;
  width: 60px;
  height: 60px;
}

#contato img{
  width: 60%
}

@media (max-width: 800px) {
  #app{
    max-width: 100% !important;
    overflow-x: hidden !important;
  }
  #contato{
    z-index: 9999;
    position: fixed;
    bottom: 10px !important;
    top: auto;
  }
}
</style>
