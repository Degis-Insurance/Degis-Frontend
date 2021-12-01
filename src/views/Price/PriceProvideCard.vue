<template>
  <el-card class="dg-card">
    <div class="container">
      <div class="row row-grid align-items-center">
        <div class="col-lg-5 order-md-1">
          <img
            :src="'img/protection/price/' + data.coin + '.png'"
            class="img-fluid"
            style="width: 64px"
          />
          <span class="fw-7 d-g1 fs-34 pl-3" style="vertical-align: middle">{{
            data.name.replace(/_/g, "")
          }}</span>
          <p class="fw-7 d-g1 fs-18 mb-0">
            Current Price:
            <span class="fw-7 d-p fs-18"> {{ data.currentPrice }}</span>
          </p>
          <p class="fw-7 d-g1 fs-18 mb-0">
            {{ data.coin }} Price:
            <span class="fw-7 d-p fs-18"> {{ data.coinPrice }}</span>
          </p>
          <p class="fw-7 d-g1 fs-18 mb-0">
            Type: <span class="fw-7 d-p fs-18"> {{ data.type }}</span>
          </p>
          <p class="fw-7 d-g1 fs-18 mb-0">
            Strike: <span class="fw-7 d-p fs-18"> {{ data.strike }}</span>
          </p>
          <p class="fw-7 d-g1 fs-18 mb-0">
            Expiry: <span class="fw-7 d-p fs-18"> {{ data.expiry }}</span>
          </p>
        </div>
        <div class="col-lg-7 order-md-2">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <!--              <p class="fw-7 d-g1 fs-18 mb-0">Cover 30% off insurance <span class="d-p fs-12">(Price &lt; {{ data.price * 0.7 }})</span></p>-->
              <!-- <p class="fw-7 d-g1 fs-18 mb-0">{{ data.insurancetype }}</p> -->
              <p class="fw-7 d-g1 fs-18">
                TVL: <span class="d-p">{{ data.tvl }}</span>
              </p>
              <p class="fw-7 d-g1 fs-18">
                24h Trading Volume:
                <span class="d-p">{{ data.tradingVolume }}</span>
              </p>
              <p class="fw-7 d-g1 fs-18">
                24h Change: <span class="d-p">{{ data.change }}</span>
              </p>
              <p class="fw-7 d-g1 fs-18">
                Pool Liquidity Token: <span class="d-p">{{ (data.poolLiquidityToken/1e18).toFixed(2) }}</span>
              </p>
              <p class="fw-7 d-g1 fs-18">
                User Liquidity Token: <span class="d-p">{{ (data.userLiquidityToken/1e18).toFixed(2) }}</span>
              </p>
            </div>
            <div>
              <div>
                <base-button @click="provide(data)">provide</base-button>
                <base-button @click="remove(data)">remove</base-button>
              </div>
            </div>
          </div>
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
        coin1: "USDT",
        coin2: this.data.coin,
        name1: "USDT",
        name2: this.data.name,
        currentPrice : this.data.currentPrice,
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
      this.modalData.type = "provide",
      this.modals = true;
      console.log(this.data);
    },
    remove() {
      this.modalData.type = "remove",
      this.modals = true;
      console.log(this.data);
    },
  },
};
</script>

<style scoped></style>
