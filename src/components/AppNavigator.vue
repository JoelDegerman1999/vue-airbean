<template>
  <div>
    <Slide :width="computeScreenWidth" closeOnNavigation noOverlay>
      <article class="bm-item-list">
        <router-link to="/menu">Meny</router-link>
      </article>
      <article class="bm-item-list">
        <router-link to="/about">Vårt kaffe</router-link>
      </article>
      <article class="bm-item-list">
        <router-link :to="`/profile/${currentUser}`">Min profil</router-link>
      </article>
      <article class="bm-item-list">
        <router-link to="/status">Orderstatus</router-link>
      </article>
    </Slide>
  </div>
</template>
<script>
import { Slide } from "vue-burger-menu"; // import the CSS transitions you wish to use, in this case we are using `Slide`
import { mapState } from "vuex";
export default {
  components: {
    Slide, // Register your component
  },
  computed: {
    computeScreenWidth: function() {
      return screen.width.toString();
    },
    ...mapState({
      currentUser: "currentUserId",
    }),
  },
  methods: {
    handleOpenMenu() {
      console.log("Menu is opened");
      // console.log(this.$parent.)
      // console.log(computeScreenWidth);
      // this.$refs.sideNav.style.width = '100%';
    },
    handleCloseMenu() {
      console.log("Menu is closed");
      //  this.$attrs.width='0';
    },
  },
};
</script>
<style lang="scss">
.bm-burger-button {
  position: fixed;
  margin: 0;
  padding: 0;
  width: 1.6rem;
  height: 1.6rem;
  left: 1rem;
  top: 1.1rem;
  background-color: white;
  border-radius: 50%;
  border-color: white;
  border-width: 0.5rem;
  border-style: solid;
  cursor: pointer;
  .bm-burger-bars {
    display: flex;
    align-items: center;
    background-color: black;
    .line-style {
      position: absolute;
      height: 0.1rem;
      left: 0;
      right: 0;
    }
  }
}

.bm-menu {
  background-color: black;
}
.bm-item-list {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0;
}

.bm-item-list > * {
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.5rem;
  padding: 0.7em;
  color: white;
}
</style>
