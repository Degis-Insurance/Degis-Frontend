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
          <p class="d-f-2 mb-0">
            Current Price:<span class="d-f-4"> {{ data.currentPrice }}</span>
          </p>
          <p class="d-f-2 mb-0">
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
            Pool Liquidity Token:
            <span class="d-p">{{
              (data.poolLiquidityToken / 1e18).toFixed(2)
            }}</span>
          </p>
          <p class="d-f-2">
            User Liquidity Token:
            <span class="d-p">{{
              (data.userLiquidityToken / 1e18).toFixed(2)
            }}</span>
          </p>
        </div>
        <div class="col-lg-2">
          <base-button @click="provide(data)">provide</base-button>
          <br />
          <br />
          <base-button @click="remove(data)">remove</base-button>
        </div>
      </div>
    </div>
  </el-card>
  <template v-if="modals">
    <provide v-model:show="modals" :data="modalData"></provide>
  </template>
</template>

<script>
import Provide from "./Provide";

export default {
  name: "price-provide-card",
  data() {
    return {
      modals: false,
      modalData: {
        coin1: "USDC",
        coin2: this.data.coin,
        name1: "USDC",
        name2: this.data.name,
        currentPrice: this.data.currentPrice,
        poolLiquidityToken: this.data.poolLiquidityToken,
        userLiquidityToken: this.data.userLiquidityToken,
        type: "",
      },
    };
  },
  components: {
    Provide,
  },
  props: ["data"],
  methods: {
    provide() {
      (this.modalData.type = "provide"), (this.modals = true);
      console.log(this.data);
    },
    remove() {
      (this.modalData.type = "remove"), (this.modals = true);
      console.log(this.data);
    },
  },
};
</script>

<style scoped></style>
