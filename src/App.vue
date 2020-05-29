<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchAccounts");
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
}
body {
  margin: 0;
  padding: 0;
  height: 100vh;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
}
</style>
