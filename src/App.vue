<template>
  <div id="app">
    <router-view/>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet">
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
