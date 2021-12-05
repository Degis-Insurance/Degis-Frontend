<template>
  <base-header type="" class="pt-4">
    <h1 class="d-f-1 mb-4">Provide on Miserable Flight Pool</h1>
    <el-card class="dg-card">
      <h1 class="d-f-1">Miserable Flight Pool</h1>
      <div class="container" style="padding: 1% 0">
        <div class="row align-items-center">
          <div class="col-xl-6 order-md-1">
            <!--            <h2 class="d-f-1" style="padding: 1% 0">The Miserable Flight Pool</h2>-->
            <div class="d-flex justify-content-center">
              <!--              <div class="col-5">-->
              <img
                src="img/function/mining-circle.png"
                class="img-fluid mr-5"
                style="width: 170px; height: 170px"
              />
              <!--              </div>-->
              <div class="">
                <h5 class="d-f-3">
                  Total Staking Balance:
                  <span class="d-f-2"> {{ totalStakingBalance.toFixed(2) }}</span>
                </h5>
                <h5 class="d-f-3">
                  Active Premiums:
                  <span class="d-f-2"> {{ activePremiums }}</span>
                </h5>
                <h5 class="d-f-3">
                  Locked Ratio:
                  <span class="d-f-2">
                    {{ (lockedRatio * 100).toFixed(2) }}%
                  </span>
                </h5>
                <h5 class="d-f-3">
                  LP Value: <span class="d-f-2"> {{ LPValue }}</span>
                </h5>
                <h5 class="d-f-3">
                  APR: <span class="d-f-2"> {{ APR }}%</span>
                </h5>
              </div>
            </div>
            <!-- <h5 class="text-l">
              Pool Address: <bold> {{ poolAddress }}</bold>
            </h5> -->
          </div>
          <div class="col-xl-6 order-md-2">
            <div class="d-flex justify-content-between">
              <p class="d-f-3">Deposit Available:</p>
              <p class="d-f-2">{{ depositAvailable }}</p>
            </div>
            <div class="d-flex justify-content-between">
              <p class="d-f-3">Withdraw Available:</p>
              <p class="d-f-2">{{ withdrawAvailable }}</p>
            </div>
            <input
              class="degis-input"
              style="width: 100%; margin: 2% 0"
              placeholder="0"
              v-model="amount"
            />
            <div class="d-flex justify-content-between">
              <base-button style="width: 45%" @click="depositUSDEvent"
                >DEPOSIT</base-button
              >
              <base-button style="width: 45%" @click="withdrawUSDEvent"
                >WITHDRAW</base-button
              >
            </div>
            <!-- <h5 class="text-r">Your Premium Income: <bold> {{ userPendingDegis }}</bold></h5> -->
            <!-- <h5 class="text-r">Your DEGIS Token Income: <bold> {{ userPendingDegis }}</bold></h5> -->
            <!-- <base-button style="width: 100%; margin-bottom: 2%">HARVEST REWARD</base-button> -->
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
      depositAvailable: "--",
      withdrawAvailable: "--",
      amount: 0,
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
    "$store.state.lastTransactionHash": function (newVal) {
      this.showInfoEvent();
    },
  },

  mounted() {
    this.showInfoEvent();
  },

  methods: {
    async depositUSD(depositAmount) {
      const account = this.$store.state.selectedAccount;
      if (account == null) {
        alert("Please Connect Wallet");
        return;
      }
      if (depositAmount == 0) {
        alert("Please Input Amount");
        return;
      }
      const usdt = await getMockUSD();
      const insurancePool = await getInsurancePool();

      const amount = window.WEB3.utils.toWei(String(depositAmount), "ether");

      const allowance = await usdt.methods
        .allowance(account, insurancePool.options.address)
        .call();
      if (
        parseInt(allowance) <
        parseInt(window.WEB3.utils.toWei("100000000", "ether"))
      ) {
        const tx1 = await usdt.methods
          .approve(
            insurancePool.options.address,
            window.WEB3.utils.toBN(
              "115792089237316195423570985008687907853269984665640564039457584007913129639935"
            )
          )
          .send({ from: account });
        console.log("Tx Hash:", tx1.transactionHash);
      }

      const tx2 = await insurancePool.methods
        .stake(account, window.WEB3.utils.toBN(amount))
        .send({ from: account });

      console.log("Tx Hash:", tx2.transactionHash);
      this.$store.commit("SET_LASTTRANSACTIONHASH", tx2.transactionHash);
    },

    async withdrawUSD(withdrawAmount) {
      const insurancePool = await getInsurancePool();
      const account = this.$store.state.selectedAccount;
      if (account == null) {
        alert("Please Connect Wallet");
        return;
      }
      if (withdrawAmount == 0) {
        alert("Please Input Amount");
        return;
      }
      const lpTokenTotalSupply = await insurancePool.methods
        .totalSupply()
        .call();
      const usdtTotalStakingBalance = await insurancePool.methods
        .totalStakingBalance()
        .call();

      var amount =
        (withdrawAmount / usdtTotalStakingBalance) * lpTokenTotalSupply;
      amount = window.WEB3.utils.toWei(String(amount), "ether");

      const tx = await insurancePool.methods
        .unstake(window.WEB3.utils.toBN(amount))
        .send({
          from: account,
        });
      console.log("Tx Hash:", tx.transactionHash);
      this.$store.commit("SET_LASTTRANSACTIONHASH", tx.transactionHash);
    },

    async showInfo() {
      const account = this.$store.state.selectedAccount;
      const insurancePool = await getInsurancePool();
      const usdt = await getMockUSD();
      const LPValue = await insurancePool.methods.LPValue().call();

      const totalStakingBalance = await insurancePool.methods
        .totalStakingBalance()
        .call();
      const lockedRatio = await insurancePool.methods.lockedRatio().call();
      const availableCapacity = await insurancePool.methods
        .availableCapacity()
        .call();
      const activePremiums = await insurancePool.methods
        .activePremiums()
        .call();
      const lockedBalance = await insurancePool.methods.lockedBalance().call();

      var userBalance = 0;
      var depositAvailable = 0;
      if (account != null) {
        userBalance = await insurancePool.methods
          .getUserBalance(account)
          .call();
        depositAvailable = await usdt.methods.balanceOf(account).call();
      }
      const totalSupply = await insurancePool.methods.totalSupply().call();
      var withdrawAvailable = 0;
      if (parseInt(totalSupply) != 0) {
        withdrawAvailable = (userBalance / totalSupply) * totalStakingBalance;
      }
      return {
        totalStakingBalance: totalStakingBalance,
        activePremiums: activePremiums,
        lockedRatio: lockedRatio,
        LPValue: LPValue,
        APR: "--",
        lockedBalance: lockedBalance,
        availableCapacity: availableCapacity,
        userBalance: userBalance,
        depositAvailable: depositAvailable,
        withdrawAvailable: withdrawAvailable,
      };
    },

    async depositUSDEvent() {
      const depositAmount = this.amount;
      console.log(depositAmount);
      await this.depositUSD(depositAmount);
    },

    async withdrawUSDEvent() {
      const withdrawAmount = this.amount;
      console.log(withdrawAmount);
      await this.withdrawUSD(withdrawAmount);
    },

    async showInfoEvent() {
      const res = await this.showInfo();
      this.totalStakingBalance = res["totalStakingBalance"] / 1e18;
      this.activePremiums = res["activePremiums"] / 1e18;
      this.lockedRatio = res["lockedRatio"] / 1e18;
      this.LPValue = (res["LPValue"] / 1e18).toFixed(2);
      this.APR = res["APR"];
      this.userAsset = (res["userBalance"] / 1e18).toFixed(2);
      this.depositAvailable = (res["depositAvailable"] / 1e18).toFixed(2);
      this.withdrawAvailable = (res["withdrawAvailable"] / 1e18).toFixed(2);
      console.log(res);
    },
  },
};
</script>

<style scoped></style>
