<template>
  <div class="container">
    <AppNavigator/>
    <Header />
    <div class="about">
      <h1>Vårt kaffe</h1>
      <p>
        <strong>
          Acerbic extra sit mug affogato, robust redeye
          carajillo aromatic coffee.
          In con panna medium irish,
          extra viennese instant chicory grounds.'
        </strong>
      </p>
      <p>
        Saucer, steamed in so, coffee decaffeinated, robusta and skinny robusta
        aftertaste lungo aroma, mazagran coffee mazagran that, beans robust
        cinnamon white cinnamon latte grinder. Black spoon roast aged affogato
        sweet cortado, cup a medium blue mountain java bar viennese. Chicory
        brewed, decaffeinated bar to go, white rich, arabica carajillo, affogato,
        skinny, sugar white, viennese grinder cream lungo, café au lait steamed
        mocha frappuccino aged saucer strong. Qui, macchiato, aroma sugar single
        shot
      </p>
      <p>
        Aroma redeye shop flavour, white, half and half, extraction,
        mazagran qui, caramelization iced trifecta arabica single shot. Coffee
        cortado barista cappuccino ristretto, plunger pot extra affogato seasonal
        white viennese robust grounds. Brewed cream, sit and cappuccino single
        shot, cappuccino foam robusta ristretto, body, ut in grounds cortado extra
        grinder id whipped so caramelization. Et, in, plunger pot eu wings single
        shot cappuccino acerbic, id frappuccino, dark single origin roast eu
        redeye. Sweet, coffee cup cinnamon sugar, cinnamon affogato and,
        aftertaste, siphon viennese spoon roast aftertaste.
      </p>
    </div>
    <div class="ceo">
      <img src="@/assets/graphics/eva-cortado.jpg" />
      <h2>Eva Cortado</h2>
      <h6>VD & GRUNDARE</h6>
    </div>
    <footer>
      <img src="@/assets/graphics/graphics-footer.svg" class="footer-img" />
    </footer>
  </div>
</template>


<script>
import Header from "@/components/Header";
import AppNavigator from '../components/AppNavigator'

export default {
  components: {
    Header,
    AppNavigator
  }
};
</script>

<style lang="scss" scoped>
.container {
  background: beige;
  .about {
    padding: 2rem;
    text-align: left;
    h1 {
      margin-bottom: 1.5rem;
    }
    p {
      margin-bottom: 1rem;
    }
  }
  .ceo {
    img {
      border-radius: 50%;
    }
    h6 {
      font-weight: 500;
    }
    margin: 1rem 0 3rem 0;
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