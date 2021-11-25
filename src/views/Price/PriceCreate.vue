<template>
  <base-header type="" class="pb-6 pb-8 pt-4">
    <h1 class="fw-7 d-g1 fs-34 mb-4">The Naughty Price</h1>
    <price-create-card
      v-for="data in cardData"
      :data="data"
      :key="data.coin"
    ></price-create-card>
  </base-header>
</template>

<script>
import PriceCreateCard from "./PriceCreateCard";

export default {
  name: "price-create",
  components: { PriceCreateCard },
  data() {
    return {
      cardData: [
        {
          coin: "BTC",
          name: "this is a name",
          insurancetype: "this is insurance type",
          price: 1000,
          mybalance: 11,
        },
        {
          coin: "ETH",
          name: "this is a name",
          insurancetype: "this is insurance type",
          price: 100,
          mybalance: 11,
        },
        {
          coin: "ETH",
          name: "this is a name",
          insurancetype: "this is insurance type",
          price: 100,
          mybalance: 11,
        },
        {
          coin: "AVAX",
          name: "this is a name",
          insurancetype: "this is insurance type",
          price: 10,
          mybalance: 11,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
