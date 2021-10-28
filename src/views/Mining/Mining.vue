<template>
  <base-header type="" class="pb-6 pb-8 pt-4">
    <h1 class="fw-7 d-g1 fs-34 mb-4">Mining by DEGIS</h1>
    <stats-card>
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-xl-6 order-md-1">
            <h2 class="fw-7 d-g1 fs-28" style="padding: 3% 0">
              The Miserable Flight Pool
            </h2>
            <div class="row justify-content-between" style="padding: 2% 0">
              <div class="col-6">
                <img
                  src="img/function/mining-circle.png"
                  class="img-fluid"
                  style="width: 80%"
                />
              </div>
              <div class="col-6">
                <h5 class="text-l">Total Value Locker: <bold> XXXX</bold></h5>
                <h5 class="text-l">Available Capacity: <bold> XXXX</bold></h5>
                <h5 class="text-l">Current Policies: <bold> XXXX</bold></h5>
                <h5 class="text-l">Locked Ratio: <bold> XXXX</bold></h5>
                <h5 class="text-l">APR: <bold> XX%</bold></h5>
              </div>
            </div>
            <h5 class="text-l">
              Pool Address: <bold> XXXXXXXXXXXXXXXXXX</bold>
            </h5>
          </div>
          <div class="col-xl-6 order-md-2">
            <h5 class="text-r">Your Asset: <bold> XXXX (+XX%)</bold></h5>
            <input
              class="degis-input"
              style="width: 100%; margin: 4% 0"
              placeholder="0"
            />
            <div
              class="d-flex justify-content-between"
              style="padding-bottom: 11%"
            >
              <base-button style="width: 45%" @click="depositUSD">
                DEPOSIT
              </base-button>
              <base-button style="width: 45%"> WITHDRAW </base-button>
            </div>
            <h5 class="text-r">Your Premium Income: <bold> XXXX</bold></h5>
            <h5 class="text-r">Your DEGIS Token Income: <bold> XXXX</bold></h5>
            <base-button style="width: 100%; margin-bottom: 2%"
              >HARVEST REWARD</base-button
            >
          </div>
        </div>
      </div>
    </stats-card>
    <stats-card>
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-xl-6 order-md-1">
            <h2 class="fw-7 d-g1 fs-28" style="padding: 3% 0">
              The Naughty Price Pool
            </h2>
            <div class="row justify-content-between" style="padding: 2% 0">
              <div class="col-6">
                <img
                  src="img/function/mining-circle-2.png"
                  class="img-fluid"
                  style="width: 80%"
                />
              </div>
              <div class="col-6">
                <h5 class="text-l">Total Value Locker: <bold> XXXX</bold></h5>
                <h5 class="text-l">Available Capacity: <bold> XXXX</bold></h5>
                <h5 class="text-l">Current Policies: <bold> XXXX</bold></h5>
                <h5 class="text-l">Locked Ratio: <bold> XXXX</bold></h5>
                <h5 class="text-l">APR: <bold> XX%</bold></h5>
              </div>
            </div>
            <h5 class="text-l">
              Pool Address: <bold> XXXXXXXXXXXXXXXXXX</bold>
            </h5>
          </div>
          <div class="col-xl-6 order-md-2">
            <h5 class="text-r">Your Asset: <bold> XXXX (+XX%)</bold></h5>
            <input
              class="degis-input"
              style="width: 100%; margin: 4% 0"
              placeholder="0"
            />
            <div
              class="d-flex justify-content-between"
              style="padding-bottom: 11%"
            >
              <base-button style="width: 45%">DEPOSIT</base-button>
              <base-button style="width: 45%"> WITHDRAW </base-button>
            </div>
            <h5 class="text-r">Your Premium Income: <bold> XXXX</bold></h5>
            <h5 class="text-r">Your DEGIS Token Income: <bold> XXXX</bold></h5>
            <base-button style="width: 100%; margin-bottom: 2%"
              >HARVEST REWARD</base-button
            >
          </div>
        </div>
      </div>
    </stats-card>
  </base-header>
</template>

<script>
import BaseButton from "@/components/BaseButton";
import Web3 from "web3";
import { getMockUSD, getInsurancePool } from "../../utils/contractInstance";
export default {
  name: "mining",
  components: {
    BaseButton,
  },
  methods: {
    async depositUSD() {
      // const degis = await getDegis();
      // const account = this.$store.state.selectedAccount;
      // const balance = await degis.methods.balanceOf(account).call();
      // this.degisBalance = balance / 1e18;

      const MockUSD = await getMockUSD();
      const InsurancePool = await getInsurancePool();
      const account = this.$store.state.selectedAccount;

      const deposit_amount = 10;
      let f_amount = window.WEB3.utils.toWei(String(deposit_amount), "ether");

      const tx1 = await MockUSD.methods
        .approve(
          InsurancePool.options.address,
          window.WEB3.utils.toBN(f_amount)
        )
        .send({ from: account });
      console.log("Tx Hash:", tx1.transactionHash);

      const tx2 = await InsurancePool.methods
        .stake(account, window.WEB3.utils.toBN(f_amount))
        .send({ from: account });
      console.log("Tx Hash:", tx2.transactionHash);
    },
  },
};
</script>
<style scoped>
.text-l {
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #86898c;
  padding: 4% 0;
}

.text-r {
  font-weight: normal;
  font-size: 16px;
  color: #86898c;
  padding-bottom: 2%;
}

bold {
  padding-left: 5px;
  font-weight: bold;
}
</style>
