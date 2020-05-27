<template>
  <div class="container">
    <header>
      <img src="@/assets/graphics/graphics-header.svg" class="header-img" />
      <nav id="nav">
        <h4>Hamburger Menu</h4>
        <div class="cart" @click="openMenu">
          <img src="@/assets/graphics/bag.svg" class="cart-btn" />
        </div>
      </nav>
    </header>
    <main>
      <article class="your-order">
        <h1>Din beställning</h1>
        <div class="order-container">
          <div v-for="item in cartItems" :key="item.id">
            <div class="order-menu">
              <div class="order">
                <h2>{{item.title}}</h2>
                <p>{{item.price}} kr</p>
              </div>
              <div class="order-quantity">
                <img src="@/assets/graphics/arrow-up.svg" @click="increaseCount(item)" />
                <h4>{{item.quantity}}</h4>
                <img src="@/assets/graphics/arrow-down.svg" @click="decreseCount(item)" />
              </div>
            </div>
          </div>
        </div>
        <div class="total">
          <div class="total-inner">
            <h1>Total</h1>
            <h1>{{getTotal}} kr</h1>
          </div>
          <p>inkl moms + drönarleverans</p>
        </div>
        <div class="buy">
          <button class="buy-btn" @click="submitOrder()">
            <h1>Take my money!</h1>
          </button>
        </div>
      </article>
    </main>
    <footer>
      <img src="@/assets/graphics/graphics-footer.svg" class="footer-img" />
    </footer>
  </div>
</template>


<script>
export default {
  data() {
    return {
      cartItems: this.$store.state.cartItems
    };
  },
  methods: {
    openMenu() {
      this.$router.push("/menu");
    },
    increaseCount(item) {
      this.$store.commit("increaseItemQuantity", item);
    },
    decreseCount(item) {
      if (item.quantity == 1) {
        this.$store.commit("remoteItemFromCart", item);
      }
      this.$store.commit("decreaseItemQuantity", item);
    },
    submitOrder() {
      let order = {
        products: this.cartItems
      };
      this.$store.commit("addOrder", order);
      this.$store.commit("clearCartItems");
      this.cartItems = [];
    }
  },
  computed: {
    getTotal() {
      let total = 0;
      this.cartItems.forEach(element => {
        if (element.quantity > 1) {
          for (let i = 0; i < element.quantity; i++) {
            total += element.price;
          }
        } else {
          total += element.price;
        }
      });
      return total;
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  font-family: "Montserrat", sans-serif;
}
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
      z-index: 2;
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
    height: 100%;

    .your-order {
      padding: 1rem;
      box-sizing: border-box;
      border-radius: 5px;
      z-index: 1;
      position: relative;
      bottom: 13.5%;
      height: 120%;
      background-color: white;
      display: grid;
      grid-template-rows: 5% 70% 15% 10%;

      .order-menu {
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .order {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .order-quantity {
          display: flex;
          flex-direction: column;
          h4 {
            margin: 0.2rem 0;
          }
        }
      }
      .total {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .total-inner {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
      .buy {
        .buy-btn {
          height: 3.5rem;
          width: 18rem;
          outline: none;
          border: none;
          border-radius: 40px;
          background-color: rgb(66, 55, 55);
          h1 {
            color: white;
            font-weight: 600;
            letter-spacing: 0.2rem;
          }
        }
      }
    }
  }

  footer {
    img {
      height: 100%;
      width: 100%;
      margin-bottom: -4px;
    }
  }
}
</style>