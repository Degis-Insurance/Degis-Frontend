<template>
  <el-card class="dg-card">
    <div class="container-fluid">
      <div class="row row-grid align-items-center">
        <div class="col-lg-4">
          <img :src="'img/protection/price/' + data.coin + '.png'" class="img-fluid" style="width: 64px"/>
          <span class="fw-7 d-g1 fs-28 pl-3" style="vertical-align: middle">{{ data.name.replace(/_/g, '') }}</span>
          <p class="d-f-2 mb-0">Current Price: <span class="d-f-4"> {{ data.currentPrice }}</span></p>
          <p class="d-f-2 mb-0">{{ data.coin }} Price: <span class="d-f-4"> {{ data.coinPrice }}</span></p>
        </div>
        <div class="col-lg-3">
          <p class="d-f-2 mb-0">Type: <span class="d-f-4"> {{ data.type }}</span></p>
          <p class="d-f-2 mb-0">Strike: <span class="d-f-4"> {{ data.strike }}</span></p>
          <p class="d-f-2 mb-0">Expiry: <span class="d-f-4"> {{ data.expiry }}</span></p>
          <p class="d-f-2">TVL: <span class="d-p">{{ data.tvl }}</span></p>
        </div>
        <div class="col-lg-3">
          <p class="d-f-2">24h Trading Volume: <span class="d-p">{{ data.tradingVolume }}</span></p>
          <p class="d-f-2">24h Change: <span class="d-p">{{ data.change }}</span></p>
          <p class="d-f-2">Minted: <span class="d-p">{{ (data.minted / 1e18).toFixed(2) }}</span></p>
          <p class="d-f-2">Avaliable: <span class="d-p">{{ (data.balance / 1e18).toFixed(2) }}</span></p>
        </div>
        <div class="col-lg-2">
          <base-button @click="create(data)">Create</base-button>
          <br/>
          <br/>
          <base-button @click="redeem(data)">Redeem</base-button>
        </div>
      </div>
    </div>
  </el-card>
  <template v-if="modals">
    <create-redeem v-model:show="modals" :data="modalData"></create-redeem>
  </template>
</template>

<script>
import CreateRedeem from "./CreateRedeem";

export default {
  name: "price-create-card",
  components: {CreateRedeem},
  props: ['data'],
  data() {
    return {
      modals: false,
      modalData: {
        coin1: 'USDT',
        coin2: this.data.coin,
        name1: 'USDT',
        name2: this.data.name,
        type: "",
      }
    }
  },

  methods: {
    create() {
      this.modalData.type = "create",
          this.modals = true
      console.log(this.data)
    },
    redeem() {
      this.modalData.type = "redeem",
          this.modals = true
      console.log(this.data)
    },
  }
};
</script>

<style scoped>

</style>
