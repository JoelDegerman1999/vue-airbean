<template>
  <div>
    <AppNavigator />
    <router-view/>
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

</style>