<template>
  <div>
    <AppNavigator />
    <router-view />
  </div>
</template>


<script>
import AppNavigator from "../components/AppNavigator";

export default {
  components: {
    AppNavigator: AppNavigator
  },
  mounted() {
    this.$store.dispatch("getAccounts");
  }
};
</script>

<style lang="scss" scoped>
</style>