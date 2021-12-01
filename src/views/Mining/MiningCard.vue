<template>
  <el-card class="dg-card">
    <div class="container-fluid">
      <div class="row row-grid align-items-center">
        <div class="col-lg-4 d-flex">
          <div style="display: flex; align-items: center">
            <img :src="'img/protection/price/' + data.coin + '.png'" style="width: 80px"/>
          </div>
          <div class="pl-3">
            <p class="d-f-1">hWAR Pool</p>
            <p class="d-f-2">By {{ data.coin }} - Helmet LPT</p>
          </div>

        </div>
        <div class="col-lg-1">
          <p class="d-f-2">Earned</p>
          <p class="d-f-2">hWAR</p>
        </div>
        <div class="col-lg-3 d-flex align-items-center">
          <div>
            <img src="img/mining/clock.png" style="width: 50px"/>
          </div>
          <div>
            <p class="d-f-4">09d/07h</p>
            <p class="d-f-2">Mining Countdown</p>
          </div>
        </div>
        <div class="col-lg-3">
          <p class="d-f-4">4200hWAR</p>
          <p class="d-f-2">Rewards Distribution</p>
        </div>
        <div class="col-lg-1">
          <base-button @click="showmore">More</base-button>
        </div>

      </div>
    </div>

    <div v-if="more">
      <hr style="margin: 20px"/>
      <div class="container-fluid">
        <div class="row row-grid">
          <div class="col-lg-6">
            <div class="d-flex justify-content-between">
              <p class="d-f-2">Available</p>
              <p class="d-f-2">{{ data.available }} LPT</p>
            </div>
            <el-input></el-input>
            <base-button style="width: 100%;">APPROVE</base-button>
            <div class="d-flex justify-content-between">
              <div>
                <p class="d-f-2">My Deposits</p>
                <p class="d-f-2">Total Deposited</p>
                <p class="d-f-2">My Pool Share:</p>
              </div>
              <div>
                <p class="d-f-2">{{ data.mydeposits }} LPT</p>
                <p class="d-f-2">{{ data.totaldeposited }} LPT</p>
                <p class="d-f-2">{{ data.mypoolshare }} LPT</p>
              </div>
            </div>
            <p class="d-f-4">From @ Get BNB1000-HELMET LPT</p>
            <p class="d-f-2">BNB1000 Contract Address:</p>
            <p class="d-f-4">{{ data.address1 }}</p>
            <p class="d-f-4">Add BNB1000 to Metamask</p>
          </div>
          <div class="col-lg-6">
            <div class="d-flex justify-content-between">
              <p class="d-f-2">Amount to Withdraw: </p>
              <p class="d-f-2">{{ data.withdraw }} LPT</p>
            </div>
            <base-input></base-input>
            <base-button style="width: 100%;">Confirm Withdraw & Claim Rewards</base-button>
            <div class="d-flex justify-content-between">
              <p class="d-f-2">hWAR Rewards: </p>
              <p class="d-f-2">{{ data.reward }} hWAR</p>
            </div>
            <base-button style="width: 100%;">Confirm Withdraw & Claim Rewards</base-button>
            <p class="d-f-2">hWAR Contract Address:</p>
            <p class="d-f-4">{{ data.address2 }}</p>
            <p class="d-f-4" style="vertical-align: bottom">Add hWAR to Metamask</p>
          </div>
        </div>
      </div>
    </div>

  </el-card>
</template>

<script>
import BaseButton from "@/components/BaseButton";

export default {
  name: "mining-card",
  components: {
    BaseButton,
  },
  props: ['data'],
  data() {
    return {
      more: false,
    };
  },
  methods: {
    showmore() {
      this.more = !this.more;
    }
  },
};
</script>
<style scoped>

</style>
