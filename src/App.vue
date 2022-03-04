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
  body {
    overflow-x: hidden;
    overflow-y: hidden;
  }
}
</style>
