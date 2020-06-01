<template>
  <div class="container">
    <h4 class="order-number">Ordernummer {{ orderNumber }}</h4>

    <img src="@/assets/graphics/drone.svg" />
    <h2>Din beställning är på väg</h2>

    <h4>{{ eta }}</h4>

    <div class="accept">
      <router-link to="/menu">
        <button class="accept-btn">
          <h1>Ok, cool!</h1>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["eta", "orderNumber"]),
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  padding: 1rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  background: rgb(229, 103, 79);
  img {
    flex: 1;
  }
  h4 {
    flex: 1;
    margin-top: 5vh;
  }
  h2 {
    flex: 4;
  }

  .accept {
    flex: 3;
    .accept-btn {
      height: 3.5rem;
      width: 18rem;
      outline: none;
      border: none;
      border-radius: 40px;
      background-color: white;
      h1 {
        color: black;
        font-weight: 600;
        letter-spacing: 0.2rem;
      }
    }
  }
}
</style>
