<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.$store.dispatch("fetchProducts");
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
}
</style>
