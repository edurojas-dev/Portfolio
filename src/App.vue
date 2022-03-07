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

@media (max-width: 800px) {
  #app{
    max-width: 100% !important;
    overflow-x: hidden !important;
  }

}
</style>
