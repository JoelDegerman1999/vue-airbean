<template>
  <div class="container" v-if="currentUserId != -1">
    <img src="../assets/graphics/profile.svg" alt="profil bild" />
    <h2 class="name">{{ getCurrentUser(currentUserId).name }}</h2>
    <p class="email">{{ getCurrentUser(currentUserId).email }}</p>
    <div class="orderContainer">
      <div class="orderListLabelContainer">
        <h2 class="orderListLabel">Order historik</h2>
      </div>
      <div v-if="getUserOrderHistory">
        <section
          class="orderList"
          v-for="(order, index) in getUserOrderHistory"
          v-bind:key="index"
        >
          <section class="order">
            <p class="orderId">{{ order.orderNumber }}</p>
            <p class="orderDate">{{ order.date }}</p>
            <p class="orderSumText">total ordersumma</p>
            <p class="orderTotalSum">{{ order.totalSum }} kr</p>
            <hr />
          </section>
        </section>

        <hr />
        <section class="totalSpentContainer">
          <p class="spentText">Totalt spenderat</p>
          <p class="totalSpent">{{ getTotalAmount }} kr</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    //this.$store.state.currentUserId
    ...mapState(["currentUserId"]),
    ...mapGetters(["getCurrentUser"]),
    getTotalAmount() {
      let sum = 0;
      let user = this.getCurrentUser(this.currentUserId);
      for (const order of user.orderHistory) {
        sum += order.totalSum;
      }
      return sum;
    },
    getUserOrderHistory() {
      let user = this.getCurrentUser(this.currentUserId);
      if (user.orderHistory.length > 0) {
        return user.orderHistory;
      }
      return null;
    },
  },
  methods: {},
  beforeMount() {
    if (this.currentUserId == -1) {
      this.$router.push("/profile");
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2f2926;
  min-height: 100vh;
  background-image: url("../assets/graphics/graphics-header.svg");
  background-repeat: no-repeat;
  padding-top: 7rem;
}

img {
  width: 6rem;
}

.name {
  color: white;
}

.email {
  color: rgba(255, 255, 255, 0.8);
}

.orderContainer {
  padding-top: 4rem;
  min-width: 90%;
}
.orderListLabelContainer {
  display: flex;
  justify-content: flex-start;
}
.orderList {
  margin-bottom: 2rem;
}
.orderListLabel {
  color: white;
  padding-top: 3rem;
  padding-bottom: 1.5rem;
}
.order {
  background-color: #2f2926;
  display: grid;
  grid-template-areas:
    "oi od"
    "ost ots";

  max-height: 6rem;
}
.order .orderId {
  color: rgba(255, 255, 255, 0.7);
  grid-area: oi;
  display: flex;
  font-weight: bold;
}
.order .orderDate {
  color: rgba(255, 255, 255, 0.7);
  grid-area: od;
  display: flex;
  justify-content: flex-end;
}
.order .orderSumText {
  color: rgba(255, 255, 255, 0.7);
  grid-area: ost;
  display: flex;
}
.order .orderTotalSum {
  color: rgba(255, 255, 255, 0.7);
  grid-area: ots;
  display: flex;
  justify-content: flex-end;
}
.order hr {
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.totalSpentContainer {
  display: grid;
  grid-template-areas: "p p";
  margin: 1rem 0 3rem 0;
}
.spentText {
  color: rgba(255, 255, 255, 0.7);
  display: flex;
}
.totalSpent {
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: flex-end;
}
</style>
