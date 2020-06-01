<template>
  <div class="container">
    <p class="order-number">Ordernummer <strong>{{ orderNumber }}</strong></p>

    <img src="@/assets/graphics/drone.svg" />
    <div class = "eta">
      <h1>Din beställning är på väg</h1>

      <p><strong>{{ eta }}</strong> minuter</p>
    </div>

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
  padding: 2rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  background: rgb(229, 103, 79);
  img {
    flex: 1;
  }
  p {
    flex: 1;
    margin-top: 5vh;
    color: rgba(255, 255, 255, 0.7);
  }
  .eta h1 {
    flex: 4;
    color: white;
    margin-top: 3rem;
    margin-bottom: 1rem;
  }
  .eta p {
    color: white;
  }

  .eta {
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
  }

  .accept {
    flex: 3;
    .accept-btn {
      height: 3.5rem;
      width: 85%;
      outline: none;
      border: none;
      border-radius: 40px;
      background-color: white;
      h1 {
        color: #2F2926;
        font-weight: 600;
        letter-spacing: 0.2rem;
      }
    }
  }
}
</style>
