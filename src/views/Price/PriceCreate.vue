<template>
  <base-header type="" class="pb-6 pb-8 pt-4">
    <h1 class="fw-7 d-g1 fs-34 mb-4">The Naughty Price</h1>
    <price-create-card v-for="data in cardData" :data="data" :key="data.coin"></price-create-card>
  </base-header>
</template>

<script>
import PriceCreateCard from "./PriceCreateCard";

export default {
  name: "price-create",
  components: {PriceCreateCard},
  data() {
    return {
      cardData: [
        {
          coin: "BTC",
          price: 10,
          balance1: 11,
          balance2: 12,
        },
        {
          coin: "ETH",
          price: 100,
          balance1: 11,
          balance2: 12,
        },
        {
          coin: "AVAX",
          price: 1000,
          balance1: 11,
          balance2: 12,
        },
      ]
    }
  }
};
</script>

<style scoped>

</style>
