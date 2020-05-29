<template>
  <div>
    <AppNavigator/>
    <h1>This is a landing page</h1>
  </div>
</template>


<script>
import AppNavigator from "../components/AppNavigator";
export default {
  components: {
    AppNavigator: AppNavigator
  }
};
</script>

<style lang="scss" scoped>
div {
  background: grey;
}
img {
  width: 200px;
}
</style>