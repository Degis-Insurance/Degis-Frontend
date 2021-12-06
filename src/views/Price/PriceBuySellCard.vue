<template>
  <el-card class="dg-card">
    <div class="container-fluid">
      <div class="row row-grid align-items-center">
        <div class="col-lg-4">
          <img
            :src="'img/protection/price/' + data.coin + '.png'"
            class="img-fluid"
            style="width: 64px"
          />
          <span
            class="fw-7 d-g1 fs-28 pl-3"
            style="vertical-align: middle; word-break: break-all"
            >{{ data.name.replace(/_/g, "") }}</span
          >
          <p class="d-f-2">
            Current Price:<span class="d-f-4"> {{ data.currentPrice }}</span>
          </p>
          <p class="d-f-2">
            {{ data.coin }} Price:<span class="d-f-4">
              {{ data.coinPrice }}</span
            >
          </p>
        </div>
        <div class="col-lg-3">
          <p class="d-f-2 mb-0">
            Type: <span class="d-f-4"> {{ data.type }}</span>
          </p>
          <p class="d-f-2 mb-0">
            Strike: <span class="d-f-4"> {{ data.strike }}</span>
          </p>
          <p class="d-f-2 mb-0">
            Expiry: <span class="d-f-4"> {{ data.expiry }}</span>
          </p>
          <p class="d-f-2">
            TVL: <span class="d-p">{{ data.tvl }}</span>
          </p>
        </div>
        <div class="col-lg-3">
          <p class="d-f-2">
            24h Trading Volume:<span class="d-p">{{ data.tradingVolume }}</span>
          </p>
          <p class="d-f-2">
            24h Change: <span class="d-p">{{ data.change }}</span>
          </p>
          <p class="d-f-2">
            USDC Balance: <span class="d-p">{{ data.usdBalance }}</span>
          </p>
          <p class="d-f-2">
            Policy Token Balance:
            <span class="d-p">{{ data.policyTokenBalance }}</span>
          </p>
        </div>
        <div class="col-lg-2">
          <base-button @click="buy(data)">Buy</base-button>
          <br />
          <br />
          <base-button @click="sell(data)">Sell</base-button>
        </div>
      </div>
    </div>
  </el-card>
  <template v-if="modals">
    <buy-sell v-model:show="modals" :data="modalData"></buy-sell>
  </template>
</template>

<script>
import BuySell from "./BuySell";

export default {
  name: "price-buy-sell-card",
  data() {
    return {
      modals: false,
      modalData: {
        coin1: "USDC",
        coin2: this.data.coin,
        name1: "USDC",
        name2: this.data.name,
        currentPrice: this.data.currentPrice,
        poolUsdAmount: this.data.poolUsdAmount,
        poolPolicyTokenAmount: this.data.poolPolicyTokenAmount,
        type: "",
      },
    };
  },
  components: {
    BuySell,
  },
  props: ["data"],
  methods: {
    buy() {
      this.modalData.type = "buy";
      this.modals = true;
      console.log(this.data);
    },
    sell() {
      this.modalData.type = "sell";
      this.modals = true;
      console.log(this.data);
    },
  },
};
</script>

<style scoped></style>
