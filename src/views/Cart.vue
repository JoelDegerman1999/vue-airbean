<template>
  <div class="container">
    <AppNavigator />
    <Header showCart @cartClicked="openMenu" />
    <main>
      <article class="your-order">
        <h1>Din beställning</h1>
        <div class="order-container">
          <div v-for="item in cartItems" :key="item.id">
            <div class="order-menu">
              <div class="order">
                <h3>{{item.title}}</h3>
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
import Header from "../components/Header";
import AppNavigator from "../components/AppNavigator";

export default {
  components: {
    Header,
    AppNavigator
  },
  data() {
    return {
      cartItems: this.$store.state.cartItems,
      quantity: 1
    };
  },
  methods: {
    openMenu() {
      this.$router.push("/menu");
    },
    increaseCount(item) {
      item.quantity++;
    },
    decreseCount(item) {
      if (item.quantity <= 1) {
        this.cartItems = this.cartItems.filter(i => i.id != item.id);
        this.$store.commit("remoteItemFromCart", item);
      } else {
        item.quantity--;
      }
    },
    submitOrder() {
      let order = {
        products: this.cartItems,
        totalPrice: this.getTotal
      };
      this.$store.dispatch("addOrder", order);
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
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background: beige;

  main {
    margin: auto 0;
    padding: 1rem;

    .your-order {
      padding: 1rem;
      box-sizing: border-box;
      border-radius: 5px;
      z-index: 1;
      height: 80%;
      position: absolute;
      top: 10%;
      background-color: white;
      display: grid;
      grid-template-rows: 5% 70% 15% 10%;

      .order-container {
        overflow: auto;
        padding-bottom: 2rem;
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