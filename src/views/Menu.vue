<template>
  <div class="container">
    <Header @cartClicked="openCart" />
    <main>
      <div class="title">
        <h1>Meny</h1>
      </div>
      <div class="menu-container">
        <article v-for="coffee in getMenu" :key="coffee.id">
          <div class="add">
            <img src="@/assets/graphics/add.svg" @click="addCoffeToCart(coffee)" />
          </div>
          <div class="coffe-info">
            <div class="title-and-price">
              <h1>{{coffee.title}}....</h1>
              <h1>{{coffee.price}} kr</h1>
            </div>
            <p>{{ coffee.desc }}</p>
          </div>
        </article>
      </div>
    </main>
    <footer>
      <img src="@/assets/graphics/graphics-footer.svg" class="footer-img" />
    </footer>
  </div>
</template>


<script>
import Header from "../components/Header";
export default {
  components: {
    Header
  },
  computed: {
    getMenu() {
      return this.$store.state.menu;
    }
  },
  methods: {
    openCart() {
      console.log("open cart");
      this.$router.push("/cart");
    },
    addCoffeToCart(coffee) {
      this.$store.commit("addItemtoCart", coffee);
    },
    test() {
      console.log("hej");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: beige;

  main {
    margin: auto 0;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      h1 {
        margin-bottom: 2rem;
      }
    }

    .menu-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    article {
      display: flex;
      align-items: center;
      width: 100%;
      margin-bottom: 2rem;
      .add {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 2.2rem;
        min-width: 2.2rem;
        background: black;
        border-radius: 50%;
        img {
          width: 1.2rem;
        }
      }

      .coffe-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 1rem;
        width: 100%;

        .title-and-price {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
  footer {
    .footer-img {
      height: 100%;
      width: 100%;
      margin-bottom: -4px;
    }
  }
  background: beige;
}
</style>