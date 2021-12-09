<template>
  <base-header type="" class="pb-6 pb-8 pt-4">
    <h1 class="d-f-1 mb-4">Mining</h1>
    <el-card class="dg-card">
      <h1 class="d-f-1 mb-4 pl-3">LP Mining</h1>
      <mining-line
        v-for="(data, index) in miningData"
        :data="data"
        :key="index"
      ></mining-line>
    </el-card>
    <el-card class="dg-card">
      <h1 class="d-f-1 mb-4 pl-3">Buyer Incentive</h1>
      <!-- <mining-line :data="buyerData"></mining-line> -->
      <mining-line
        v-for="(data, index) in buyerData"
        :data="data"
        :key="index"
      ></mining-line>
    </el-card>
    <el-card class="dg-card">
      <h1 class="d-f-1 mb-4 pl-3">Staking</h1>
      <mining-line
        v-for="(data, index) in stakingData"
        :data="data"
        :key="index"
      ></mining-line>
    </el-card>
  </base-header>
</template>

<script>
import MiningLine from "./MiningLine";
import {
  getFarmingPool,
  getNPPolicyToken,
  getInsurancePool,
  getDegis,
  getPurchaseIncentiveVault,
  getBuyerToken,
} from "../../utils/contractInstance";

export default {
  name: "mining",
  components: {
    MiningLine,
  },

  computed: {
    currentAccount() {
      return this.$store.state.selectedAccount;
    },
  },

  watch: {
    "$store.state.selectedAccount": function (newVal) {
      this.showFarmingPoolInfoEvent();
      this.showBuyerIncentiveEvent();
    },
    "$store.state.lastTransactionHash": function (newVal) {
      this.showFarmingPoolInfoEvent();
      this.showBuyerIncentiveEvent();
    },
  },

  mounted() {
    // this.addMiningPool();
    // this.mintDegis();
    this.showBuyerIncentiveEvent();
    this.showFarmingPoolInfoEvent();
  },

  data() {
    return {
      miningData: [],
      buyerData: [],
      stakingData: [],

      async mintUsdt() {
        const account = this.$store.state.selectedAccount;
        var amount = window.WEB3.utils.toWei(String(9999), "ether");
        const usdt = await getMockUSD();
        await usdt.methods.mint(account, amount).send({ from: account });
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

      async addMiningPool() {
        const account = this.$store.state.selectedAccount;
        const insurancePool = await getInsurancePool();
        const farm = await getFarmingPool();
        const degisPerBlock = window.WEB3.utils.toWei(String(100), "ether");

        const t1 = await farm.methods
          .add(insurancePool.options.address, degisPerBlock, false)
          .send({ from: account });
        // const t1 = await farm.methods.setDegisReward(
        //   window.WEB3.utils.toBN(String(1), "ether"),
        //   window.WEB3.utils.toWei(String(100), "ether"),
        //   true,
        // ).send({ from: account });

        const degis = await getDegis();
        await degis.methods
          .addMinter(farm.options.address)
          .send({ from: account });
      },

      async getFarmingPoolName() {
        const farmPoolNames = [
          [1, "flight", "The Miserable Flight Pool"],
          [5, "BTC", "BTC24000L2112 Pool"],
          [6, "BTC", "BTC71000H2112 Pool"],
          [7, "ETH", "ETH2000L2112 Pool"],
          [8, "ETH", "ETH5900H2112 Pool"],
          [9, "AVAX", "AVAX60L2112 Pool"],
          [10, "AVAX", "AVAX100H2112 Pool"],
          ];
        return farmPoolNames;
      },

      async showOneFarmingPoolInfo(farmPoolNames,i) {
        const account = this.$store.state.selectedAccount;
        const farm = await getFarmingPool();
        const poolId = farmPoolNames[i][0];
        const poolPic = farmPoolNames[i][1];
        const poolName = farmPoolNames[i][2];
        const poolInfo = await farm.methods.poolList(poolId).call();
        // const poolstatus = await farm.methods.isFarming(poolId).call();
        const lpTokenAddress = poolInfo["lpToken"];

        const lpToken = await getNPPolicyToken(lpTokenAddress);
        var depositLimit = 0;
        var availableToWithdraw = 0;
        if (account != null) {
          depositLimit = await lpToken.methods.balanceOf(account).call();
          availableToWithdraw = await farm.methods
            .getUserBalance(poolId, account)
            .call();
        }
        const totalRewards = (poolInfo["degisPerBlock"] * 24 * 60 * 60) / 2;
        const totalDeposited = await lpToken.methods
          .balanceOf(farm.options.address)
          .call();
        var myTotalRewards = 0;
        if (totalDeposited != 0) {
          myTotalRewards = (
            (availableToWithdraw / totalDeposited) *
            totalRewards
          ).toFixed(2);
        }
        var degRewards = 0;
        if (account != null) {
          degRewards = await farm.methods
            .pendingDegis(poolId, account)
            .call({ from: account });
        }

        var apr = 0;
        if (totalDeposited != 0) {
          apr = (totalRewards / totalDeposited) * 365;
        }

        var poolInfos = {};
        // if (poolstatus) {
        poolInfos["pic"] = poolPic;
        poolInfos["name"] = poolName;
        poolInfos["status"] = "Ongoing";
        poolInfos["apr"] = apr;
        poolInfos["depositLimit"] = depositLimit;
        poolInfos["availableToWithdraw"] = availableToWithdraw;
        poolInfos["totalRewards"] = totalRewards;
        poolInfos["totalDeposited"] = totalDeposited;
        poolInfos["myTotalRewards"] = myTotalRewards;
        poolInfos["degRewards"] = degRewards;
        poolInfos["poolType"] = "lpMining";
        poolInfos["poolId"] = poolId;
        return poolInfos;
        // }
      },

      async showFarmingPoolInfo() {
        const farmPoolNames = await this.getFarmingPoolName();
        const farm = await getFarmingPool();
        const poolList = await farm.methods.getPoolList().call();
        let miningInfo = [];
        var threads = [];
        for (var i = 0; i < farmPoolNames.length; i++) {
          const poolId = farmPoolNames[i][0];
          if(poolList.length <= poolId)
            continue
          const poolstatus = await farm.methods.isFarming(poolId).call();
          if(!poolstatus)
            continue
          threads.push(this.showOneFarmingPoolInfo(farmPoolNames,i))
        }
        // miningInfo.push(poolInfo);
        this.miningData = await Promise.all(threads);
      },

      async showBuyerIncentive() {
        const account = this.$store.state.selectedAccount;

        const incentivePool = await getPurchaseIncentiveVault();
        const buyerToken = await getBuyerToken();

        const degisPerRound = await incentivePool.methods
          .degisPerRound()
          .call();
        const distributionInterval = await incentivePool.methods
          .distributionInterval()
          .call();

        var depositLimit = 0;
        var availableToWithdraw = 0;
        var degRewards = 0;
        if (account != null) {
          depositLimit = await buyerToken.methods.balanceOf(account).call();
          availableToWithdraw = await incentivePool.methods
            .getUserShares(account)
            .call();
          degRewards = await incentivePool.methods
            .pendingReward(account)
            .call();
        }

        const totalRewards =
          (degisPerRound * 24 * 60 * 60) / 2 / distributionInterval;
        const totalDeposited = await buyerToken.methods
          .balanceOf(incentivePool.options.address)
          .call();
        var myTotalRewards = 0;
        if (totalDeposited != 0) {
          myTotalRewards = (
            (availableToWithdraw / totalDeposited) *
            totalRewards
          ).toFixed(2);
        }
        var apr = 0;
        if (totalDeposited != 0) {
          apr = (totalRewards / totalDeposited) * 365;
        }
        else
        {
          apr = totalRewards * 365 / 1e18;
        }
        var poolInfo = {};
        poolInfo["pic"] = "buyer";
        poolInfo["name"] = "Buyer Pool";
        poolInfo["status"] = "Ongoing";
        poolInfo["apr"] = apr;
        poolInfo["depositLimit"] = depositLimit;
        poolInfo["availableToWithdraw"] = availableToWithdraw;
        poolInfo["totalRewards"] = totalRewards;
        poolInfo["totalDeposited"] = totalDeposited;
        poolInfo["myTotalRewards"] = myTotalRewards;
        poolInfo["degRewards"] = degRewards;
        poolInfo["poolType"] = "buyerIncentive";

        this.buyerData = [poolInfo];
      },

      async showBuyerIncentiveEvent() {
        await this.showBuyerIncentive();
      },

      async showFarmingPoolInfoEvent() {
        await this.showFarmingPoolInfo();
      },
    };
  },
};
</script>
<style scoped></style>
