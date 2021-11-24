<template>
  <base-header type="" class="pb-6 pb-8 pt-4">
    <h1 class="fw-7 d-g1 fs-34 mb-4">Mining</h1>
    <mining-card v-for="data in cardData" :data="data" :key="data.coin"></mining-card>
  </base-header>
</template>

<script>
import MiningCard from "./MiningCard";

export default {
  name: "mining",
  components: {
    MiningCard,
  },
  data() {
    return{
      cardData: [
        {
          coin: "BTC",
          available: 10,
          mydeposits: 11,
          totaldeposited: 12,
          mypoolshare: 13,
          address1: "0x7aae192b83589784851a7df13c225fda2e3d87c5",
          withdraw: 20,
          reward: 21,
          address2: "0x7aae192b83589784851a7df13c225fda2e3d87c5"
        },
        {
          coin: "ETH",
          available: 10,
          mydeposits: 11,
          totaldeposited: 12,
          mypoolshare: 13,
          address1: "0x7aae192b83589784851a7df13c225fda2e3d87c5",
          withdraw: 20,
          reward: 21,
          address2: "0x7aae192b83589784851a7df13c225fda2e3d87c5"
        },
        {
          coin: "AVAX",
          available: 10,
          mydeposits: 11,
          totaldeposited: 12,
          mypoolshare: 13,
          address1: "0x7aae192b83589784851a7df13c225fda2e3d87c5",
          withdraw: 20,
          reward: 21,
          address2: "0x7aae192b83589784851a7df13c225fda2e3d87c5"
        },
      ]
    }
  }
};
</script>
<style scoped>

</style>
