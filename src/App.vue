<template>
  <div id="app">
    <router-view></router-view>
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

@media (max-width: 800px) {
  #app{
    max-width: 100% !important;
    overflow-x: hidden !important;
  }

}
</style>
