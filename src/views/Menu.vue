<template>
  <div class="container">
    <header>
      <img src="@/assets/graphics/graphics-header.svg" class="header-img" />
      <nav id="nav">
        <h4>Hamburger Menu</h4>
        <div class="cart" @click="openCart">
          <img src="@/assets/graphics/bag.svg" class="cart-btn" />
        </div>
      </nav>
    </header>
    <main>
      <div class="title">
        <h1>Meny</h1>
      </div>
      <div class="menu-container">
        <article v-for="menu in getMenu" :key="menu.id">
          <div class="add">
            <img src="@/assets/graphics/add.svg" />
          </div>
          <div class="coffe-info">
            <div class="title-and-price">
              <h1>{{menu.title}}....</h1>
              <h1>{{menu.price}} kr</h1>
            </div>
            <p>{{ menu.desc }}</p>
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
export default {
  computed: {
    getMenu() {
      return this.$store.state.menu;
    }
  },
  methods: {
    openCart() {
      this.$router.push("/cart");
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

  header {
    .header-img {
      width: 100%;
    }
    #nav {
      padding: 1rem;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      .cart {
        width: 3rem;
        height: 3rem;
        background: rgb(25, 25, 25);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }
  }

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
    height: 73px;
    .footer-img {
      width: 100%;
    }
  }
}
</style>