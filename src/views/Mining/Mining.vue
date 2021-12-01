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
      <mining-line :data="buyerData"></mining-line>
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

export default {
  name: "mining",
  components: {
    MiningLine,
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
    };
  },
};
</script>

<style scoped></style>
