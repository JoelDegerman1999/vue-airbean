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
      <h1>This is a cart page</h1>
    </main>
    <footer>
      <img src="@/assets/graphics/graphics-footer.svg" class="footer-img" />
    </footer>
  </div>
</template>


<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
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
    margin: auto;
  }
}
</style>