<template>
  <base-header type="" class="pt-4">
    <h1 class="fw-7 d-g1 fs-34 mb-4">Provide on Miserable Flight</h1>
    <el-card class="dg-card">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-6 order-md-1">
            <h2 class="fw-7 d-g1 fs-28" style="padding: 3% 0">The Miserable Flight Pool</h2>
            <div class="row justify-content-between" style="padding: 2% 0">
              <div class="col-6">
                <img src="img/function/mining-circle.png" class="img-fluid" style="width: 80%"/>
              </div>
              <div class="col-6">
                <h5 class="text-l">Total Staking Balance: <bold> {{ totalStakingBalance }}</bold></h5>
                <h5 class="text-l">Active Premiums: <bold> {{ activePremiums }}</bold></h5>
                <h5 class="text-l">Locked Ratio: <bold> {{ lockedRatio }}</bold></h5>
                <h5 class="text-l">LP Value: <bold> {{ LPValue }}</bold></h5>
                <h5 class="text-l">APR: <bold> {{ APR }}%</bold></h5>
              </div>
            </div>
            <h5 class="text-l">
              Pool Address: <bold> {{ poolAddress }}</bold>
            </h5>
          </div>
          <div class="col-xl-6 order-md-2">
            <h5 class="text-r">Your Asset: <bold> {{ userAsset }} </bold></h5>
            <input
              class="degis-input"
              style="width: 100%; margin: 4% 0"
              placeholder="0"
              v-model="amount"
            />
            <div
              class="d-flex justify-content-between"
              style="padding-bottom: 11%"
            >
              <base-button style="width: 45%" @click="depositUSDEvent"> DEPOSIT </base-button>
              <base-button style="width: 45%" @click="withdrawUSDEvent"> WITHDRAW </base-button>
            </div>
            <!-- <h5 class="text-r">Your Premium Income: <bold> {{ userPendingDegis }}</bold></h5> -->
            <!-- <h5 class="text-r">Your DEGIS Token Income: <bold> {{ userPendingDegis }}</bold></h5> -->
            <base-button style="width: 100%; margin-bottom: 2%">HARVEST REWARD</base-button>
          </div>
        </div>
      </div>
    </el-card>
  </base-header>
</template>

<script>
import BaseButton from "@/components/BaseButton";
import Web3 from "web3";
import {
  getMockUSD,
  getInsurancePool,
  getLPToken,
  getDegis,
} from "../../utils/contractInstance";

export default {
  name: "flight-provide",
  components: {
    BaseButton,
  },
  data() {
    return {
      userAsset: "--",
      totalStakingBalance: "--",
      activePremiums: "--",
      lockedRatio: "--",
      LPValue: "--",
      APR: "--",
      amount: 0
    };
  },

  computed: {
    currentAccount() {
      return this.$store.state.selectedAccount;
    },
  },

  watch: {
    "$store.state.selectedAccount": function (newVal) {
      this.showInfoEvent();
    },
  },

  mounted() {
    this.showInfoEvent();
  },

  methods: {
    async depositUSD(depositAmount) {
      const account = this.$store.state.selectedAccount;
      const usdt = await getMockUSD();
      const insurancePool = await getInsurancePool();
      
      const amount = window.WEB3.utils.toWei(String(depositAmount), "ether");
      const tx1 = await usdt.methods
        .approve(insurancePool.options.address, window.WEB3.utils.toBN(amount))
        .send({ from: account });

      console.log("Tx Hash:", tx1.transactionHash);
      
      const tx2 = await insurancePool.methods
        .stake(account, window.WEB3.utils.toBN(amount))
        .send({ from: account });

      console.log("Tx Hash:", tx2.transactionHash);
    },

    async withdrawUSD(withdrawAmount) {
      const insurancePool = await getInsurancePool();
      const lpToken = await getLPToken() 
      const account = this.$store.state.selectedAccount;
      
      const amount = window.WEB3.utils.toWei(String(withdrawAmount), "ether");
      const tx1 = await lpToken.methods
        .approve(insurancePool.options.address, window.WEB3.utils.toBN(amount))
        .send({ from: account });

      console.log("Tx Hash:", tx1.transactionHash);

      const tx = await insurancePool.methods
        .unstake(account, window.WEB3.utils.toBN(amount))
        .send({
          from: account,
        });
      console.log("Tx Hash:", tx.transactionHash);
    },


    async mintDegis() {
      const account = this.$store.state.selectedAccount;
      const degis = await getDegis();
      const amount = window.WEB3.utils.toWei("10000", "ether");

      const tx = await degis.methods.mintByOwner(account, amount).send({
        from: account,
      });
      console.log("Tx Hash:", tx.transactionHash);
    },

    async showInfo() {
      const account = this.$store.state.selectedAccount;
      const InsurancePool = await getInsurancePool();
      const LPValue = await InsurancePool.methods.LPValue().call();
      
      const totalStakingBalance = await InsurancePool.methods.totalStakingBalance().call();
      const lockedRatio = await InsurancePool.methods.lockedRatio().call();
      const availableCapacity = await InsurancePool.methods.availableCapacity().call();
      const activePremiums = await InsurancePool.methods.activePremiums().call();
      const lockedBalance = await InsurancePool.methods.lockedBalance().call();
      const userBalance = await InsurancePool.methods.getUserBalance(account).call();

      return {
        totalStakingBalance: totalStakingBalance,
        activePremiums: activePremiums,
        lockedRatio:lockedRatio,
        LPValue:LPValue,
        APR: "--",
        lockedBalance: lockedBalance,
        availableCapacity: availableCapacity,
        userBalance: userBalance,
       };
    },

    async depositUSDEvent() {
      const depositAmount = this.amount;
      console.log(depositAmount)
      await this.depositUSD(depositAmount);
      await this.showInfoEvent();
    },

    async withdrawUSDEvent() {
      const withdrawAmount = this.amount;
      console.log(withdrawAmount)
      await this.withdrawUSD(withdrawAmount);
      await this.showInfoEvent();
    },

    async showInfoEvent() {
      const res = await this.showInfo();
      this.totalStakingBalance = res["totalStakingBalance"] / 1e18;
      this.activePremiums = res["activePremiums"] / 1e18;
      this.lockedRatio = res["lockedRatio"] / 1e18;
      this.LPValue = (res["LPValue"] / 1e18).toFixed(2);
      this.APR = res["APR"];
      this.userAsset = (res["userBalance"] / 1e18).toFixed(2);
      console.log(res);
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
