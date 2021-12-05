<template>
  <base-header type="" class="pb-6 pb-8 pt-4">
    <h1 class="d-f-1 mb-4">Mining</h1>
    <el-card class="dg-card">
      <h1 class="d-f-1 mb-4 pl-3">LP Mining</h1>
      <mining-line v-for="(data, index) in miningData" :data="data" :key="index"></mining-line>
    </el-card>
    <el-card class="dg-card">
      <h1 class="d-f-1 mb-4 pl-3">Buyer Incentive</h1>
      <mining-line :data="buyerData"></mining-line>
    </el-card>
    <el-card class="dg-card">
      <h1 class="d-f-1 mb-4 pl-3">Staking</h1>
      <mining-line v-for="(data, index) in stakingData" :data="data" :key="index"></mining-line>
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
    },
    "$store.state.lastTransactionHash": function (newVal) {
      this.showFarmingPoolInfoEvent();
    },
  },

  mounted() {
    // this.addMiningPool();
    // this.mintDegis();
    this.showFarmingPoolInfoEvent();
  },

  data() {
    return {
      miningData: [
        {
          pic: "flight",
          name: "The Miserable Flight Pool",
          status: "Ongoing",
          apr: "47.63%",
          available: 10,
          mydeposits: 11,
          totaldeposited: 12,
          mypoolshare: 13,
          address1: "0x7aae192b83589784851a7df13c225fda2e3d87c5",
          withdraw: 20,
          reward: 21,
          address2: "0x7aae192b83589784851a7df13c225fda2e3d87c5",
        },
        {
          pic: "AVAX",
          name: "The naughty Price---AVAXL",
          status: "Ongoing",
          apr: "47.63%",
          available: 10,
          mydeposits: 11,
          totaldeposited: 12,
          mypoolshare: 13,
          address1: "0x7aae192b83589784851a7df13c225fda2e3d87c5",
          withdraw: 20,
          reward: 21,
          address2: "0x7aae192b83589784851a7df13c225fda2e3d87c5",
        },
        {
          pic: "AVAX",
          name: "The naughty Price---AVAXH",
          status: "Ongoing",
          apr: "47.63%",
          available: 10,
          mydeposits: 11,
          totaldeposited: 12,
          mypoolshare: 13,
          address1: "0x7aae192b83589784851a7df13c225fda2e3d87c5",
          withdraw: 20,
          reward: 21,
          address2: "0x7aae192b83589784851a7df13c225fda2e3d87c5",
        },
        {
          pic: "BTC",
          name: "The naughty Price---BTCL",
          status: "Ongoing",
          apr: "47.63%",
          available: 10,
          mydeposits: 11,
          totaldeposited: 12,
          mypoolshare: 13,
          address1: "0x7aae192b83589784851a7df13c225fda2e3d87c5",
          withdraw: 20,
          reward: 21,
          address2: "0x7aae192b83589784851a7df13c225fda2e3d87c5",
        },
        {
          pic: "BTC",
          name: "The naughty Price---BTCH",
          status: "Ongoing",
          apr: "47.63%",
          available: 10,
          mydeposits: 11,
          totaldeposited: 12,
          mypoolshare: 13,
          address1: "0x7aae192b83589784851a7df13c225fda2e3d87c5",
          withdraw: 20,
          reward: 21,
          address2: "0x7aae192b83589784851a7df13c225fda2e3d87c5",
        },
        {
          pic: "ETH",
          name: "The naughty Price---ETHL",
          status: "Ongoing",
          apr: "47.63%",
          available: 10,
          mydeposits: 11,
          totaldeposited: 12,
          mypoolshare: 13,
          address1: "0x7aae192b83589784851a7df13c225fda2e3d87c5",
          withdraw: 20,
          reward: 21,
          address2: "0x7aae192b83589784851a7df13c225fda2e3d87c5",
        },
        {
          pic: "ETH",
          name: "The naughty Price---ETHH",
          status: "Ongoing",
          apr: "47.63%",
          available: 10,
          mydeposits: 11,
          totaldeposited: 12,
          mypoolshare: 13,
          address1: "0x7aae192b83589784851a7df13c225fda2e3d87c5",
          withdraw: 20,
          reward: 21,
          address2: "0x7aae192b83589784851a7df13c225fda2e3d87c5",
        },
      ],
      buyerData: {
        pic: "buyer",
        name: "Buyer Pool",
        status: "Ongoing",
        apr: "47.63%",
        available: 10,
        mydeposits: 11,
        totaldeposited: 12,
        mypoolshare: 13,
        address1: "0x7aae192b83589784851a7df13c225fda2e3d87c5",
        withdraw: 20,
        reward: 21,
        address2: "0x7aae192b83589784851a7df13c225fda2e3d87c5",
      },
      stakingData: [
        {
          pic: "token",
          name: "DEG X DEG Pool",
          status: "Ongoing",
          apr: "47.63%",
          available: 10,
          mydeposits: 11,
          totaldeposited: 12,
          mypoolshare: 13,
          address1: "0x7aae192b83589784851a7df13c225fda2e3d87c5",
          withdraw: 20,
          reward: 21,
          address2: "0x7aae192b83589784851a7df13c225fda2e3d87c5",
        },
        {
          pic: "token",
          name: "DEG Pool",
          status: "Ongoing",
          apr: "47.63%",
          available: 10,
          mydeposits: 11,
          totaldeposited: 12,
          mypoolshare: 13,
          address1: "0x7aae192b83589784851a7df13c225fda2e3d87c5",
          withdraw: 20,
          reward: 21,
          address2: "0x7aae192b83589784851a7df13c225fda2e3d87c5",
        },
      ],

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
        const farmPoolNames = [[1, "flight", "The Miserable Flight Pool"]];
        return farmPoolNames;
      },

      async showFarmingPoolInfo() {
        const account = this.$store.state.selectedAccount;
        const farmPoolNames = await this.getFarmingPoolName();
        const farm = await getFarmingPool();
        const xxx = await farm.methods.getPoolList().call();
        console.log(xxx);
        this.miningData = [];
        for (var i = 0; i < farmPoolNames.length; i++) {
          const poolId = farmPoolNames[i][0];
          const poolPic = farmPoolNames[i][1];
          const poolName = farmPoolNames[i][2];
          const poolInfo = await farm.methods.poolList(poolId).call();
          const poolstatus = await farm.methods.isFarming(poolId).call();
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
          const totalRewards = poolInfo["degisPerBlock"] * 10000;
          const totalDeposited = await lpToken.methods
            .balanceOf(farm.options.address)
            .call();
          var myPoolShare = 0;
          if (availableToWithdraw != 0) {
            myPoolShare = (
              (availableToWithdraw / totalDeposited) *
              totalRewards
            ).toFixed(2);
          }
          // const degRewards = 0;
          const degRewards = await farm.methods
            .pendingDegis(poolId, account)
            .call({ from: account });
          poolInfo = {};

          if (poolstatus) {
            poolInfo["pic"] = poolPic;
            poolInfo["name"] = poolName;
            poolInfo["status"] = "Ongoing";
            poolInfo["apr"] = "--";
            poolInfo["depositLimit"] = depositLimit;
            poolInfo["availableToWithdraw"] = availableToWithdraw;
            poolInfo["totalRewards"] = totalRewards;
            poolInfo["totalDeposited"] = totalDeposited;
            poolInfo["myPoolShare"] = myPoolShare;
            poolInfo["degRewards"] = degRewards;
            poolInfo["poolType"] = "lpMining";
            poolInfo["poolId"] = poolId;
            this.miningData.push(poolInfo);
          }
        }
      },

      async showFarmingPoolInfoEvent() {
        await this.showFarmingPoolInfo();
      },
    };
  },
};
</script>
<style scoped></style>
