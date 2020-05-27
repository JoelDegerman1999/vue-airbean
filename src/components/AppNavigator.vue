<template>
  <div>
    <Slide :closeOnNavigation="true" noOverlay width='420'>
      <article class="bm-item-list">
       <router-link to="/menu">Meny</router-link>
      </article>
      <article class="bm-item-list">
       <router-link to="/about">Vårt kaffe</router-link>
      </article>
      <article class="bm-item-list">
       <router-link to="/profile">Min profil</router-link>
      </article>
      <article class="bm-item-list">
       <router-link to="/status">Orderstatus</router-link>
      </article>
    </Slide>
  </div>
</template>
<script>
import { Slide } from 'vue-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`

export default {
    components: {
        Slide // Register your component
    }
}

</script>
<style lang="scss">
.bm-menu {
    background-color: black;
    
    
}
.bm-item-list{
     display: flex;
      align-items: center;
      flex-direction: column;
      margin: 0;
}

     .bm-item-list > * {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 0.7em;
      color:white;
    }

</style>


