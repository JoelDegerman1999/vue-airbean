<template>
  <div class="container">
    <img src="@/assets/graphics/intro-graphic-left.svg" class="intro-left" />
    <router-link to="/menu" class="landing">
      <button>
        <img src="@/assets/graphics/airbean-landing.svg" />
      </button>
    </router-link>
    <img src="@/assets/graphics/intro-graphic-right.svg" class="intro-right" />
  </div>
</template>


<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  background: #0E927D;
  display: flex;
  justify-content: center;
  align-items: center;
  .intro-left {
    height: 100%;
    position: absolute;
    left: 0;
  }
  .intro-right {
    height: 100%;
    position: absolute;
    right: 0;
  }
  .landing {
    z-index: 1;
    button {
      background: none;
      border: none;
    }
  }
}
</style>