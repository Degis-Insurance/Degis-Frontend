<template>
  <base-header type="" class="pt-4">
    <h1 class="d-f-1 mb-4">Provide on Naughty Price Pool</h1>
    <!--    <el-card class="dg-card">-->
    <!--      <div class="container-fluid">-->
    <!--        <div class="row align-items-center">-->
    <!--          <div class="col-xl-6 order-md-1">-->
    <!--            <h2 class="fw-7 d-g1 fs-28" style="padding: 3% 0">The Naughty Price Pool</h2>-->
    <!--            <div class="row justify-content-between" style="padding: 2% 0">-->
    <!--              <div class="col-6">-->
    <!--                <img src="img/function/mining-circle-2.png" class="img-fluid" style="width: 80%"/>-->
    <!--              </div>-->
    <!--              <div class="col-6">-->
    <!--                <h5 class="text-l">Total Value Locker:-->
    <!--                  <bold> XXXX</bold>-->
    <!--                </h5>-->
    <!--                <h5 class="text-l">Available Capacity:-->
    <!--                  <bold> XXXX</bold>-->
    <!--                </h5>-->
    <!--                <h5 class="text-l">Current Policies:-->
    <!--                  <bold> XXXX</bold>-->
    <!--                </h5>-->
    <!--                <h5 class="text-l">Locked Ratio:-->
    <!--                  <bold> XXXX</bold>-->
    <!--                </h5>-->
    <!--                <h5 class="text-l">APR:-->
    <!--                  <bold> XX%</bold>-->
    <!--                </h5>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--            <h5 class="text-l">-->
    <!--              Pool Address:-->
    <!--              <bold> XXXXXXXXXXXXXXXXXX</bold>-->
    <!--            </h5>-->
    <!--          </div>-->
    <!--          <div class="col-xl-6 order-md-2">-->
    <!--            <h5 class="text-r">Your Asset:-->
    <!--              <bold> XXXX (+XX%)</bold>-->
    <!--            </h5>-->
    <!--            <input-->
    <!--                class="degis-input"-->
    <!--                style="width: 100%; margin: 4% 0"-->
    <!--                placeholder="0"-->
    <!--            />-->
    <!--            <div-->
    <!--                class="d-flex justify-content-between"-->
    <!--                style="padding-bottom: 11%"-->
    <!--            >-->
    <!--              <base-button style="width: 45%" @click="addLiquidityEvent"> DEPOSIT</base-button>-->
    <!--              <base-button style="width: 45%" @click="removeLiquidityEvent"> WITHDRAW</base-button>-->
    <!--            </div>-->
    <!--            <h5 class="text-r">Your Premium Income:-->
    <!--              <bold> XXXX</bold>-->
    <!--            </h5>-->
    <!--            <h5 class="text-r">Your DEGIS Token Income:-->
    <!--              <bold> XXXX</bold>-->
    <!--            </h5>-->
    <!--            <base-button style="width: 100%; margin-bottom: 2%" @click="showPoolEvent">HARVEST REWARD</base-button>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </el-card>-->
    <price-provide-card
      v-for="data in cardData"
      :data="data"
      :key="data.coin"
    ></price-provide-card>
  </base-header>
</template>

<script>
import BaseButton from "@/components/BaseButton";
import PriceProvideCard from "./PriceProvideCard";

import {
  getMockUSD,
  getNaughtyFactory,
  getPolicyCore,
  getPolicyToken,
  getNaughtyPair,
} from "../../utils/contractInstance";

export default {
  name: "price-provide",
  components: { BaseButton, PriceProvideCard },
  data() {
    return {
      cardData: [],
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
    async getTokensName() {
      const core = await getPolicyCore();
      const tokenInfos = await core.methods.getAllTokens().call();
      var tokenNames = [];
      for (var i = 0; i < tokenInfos.length; i++) {
        var tokenName = await core.methods
          .findNamebyAddress(tokenInfos[i]["policyTokenAddress"])
          .call();
        tokenNames.push(tokenName);
      }
      return tokenNames;
    },

    async showUserInfo(tokenName) {
      const account = this.$store.state.selectedAccount;
      if (account != null) {
        const usdt = await getMockUSD();
        const core = await getPolicyCore();
        const policyTokenAddress = await core.methods
          .findAddressbyName(tokenName)
          .call();
        const policyToken = await getPolicyToken(policyTokenAddress);
        const userQuota = await core.methods
          .checkUserQuota(account, policyToken.options.address)
          .call({ from: account });
        const usdtBalance = await usdt.methods.balanceOf(account).call();
        const policyTokenBalance = await policyToken.methods
          .balanceOf(account)
          .call();
        return {
          userQuota: userQuota,
          usdtBalance: usdtBalance,
          policyTokenBalance: policyTokenBalance,
        };
      }
      return { userQuota: 0, usdtBalance: 0, policyTokenBalance: 0 };
    },

    async showPoolInfo(tokenName) {
      const account = this.$store.state.selectedAccount;
      const usdt = await getMockUSD();
      const factory = await getNaughtyFactory();
      const core = await getPolicyCore();
      var policyInfo = await core.methods.getPolicyTokenInfo(tokenName).call();

      const policyTokenAddress = await core.methods
        .findAddressbyName(tokenName)
        .call();
      const pairAddress = await factory.methods
        .getPairAddress(policyTokenAddress, usdt.options.address)
        .call();

      const pair = await getNaughtyPair(pairAddress);
      const poolInfo = await pair.methods.getReserves().call();
      const poolLiquidityToken = await pair.methods.totalSupply().call();
      var userLiquidityToken = 0;
      if (account != null) {
        userLiquidityToken = await pair.methods.balanceOf(account).call();
      }
      return {
        policyInfo: policyInfo,
        poolInfo: {
          policyTokenAmmount: poolInfo[0],
          udstAmmount: poolInfo[1],
          poolLiquidityToken: poolLiquidityToken,
          userLiquidityToken: userLiquidityToken,
        },
      };
    },

    async showInfoEvent() {
      const tokenNames = await this.getTokensNameEvent();
      this.cardData = [];
      for (var i = 0; i < tokenNames.length; i++) {
        const tokenName = tokenNames[i];
        const info = await this.showPoolInfo(tokenName);
        const policyInfo = info["policyInfo"];
        const poolInfo = info["poolInfo"];

        const userInfo = await this.showUserInfo(tokenName);

        const types = { H: "Payout if Higher", L: "Pay out if Lower" };
        var date = new Date(parseInt(policyInfo["deadline"]) * 1000);
        var expiry =
          date.getDate() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getFullYear();

        var currentPrice = "--";
        if (poolInfo["policyTokenAmmount"] != 0) {
          currentPrice = (
            poolInfo["udstAmmount"] / poolInfo["policyTokenAmmount"]
          ).toFixed(4);
        }

        var policyTokeninfo = {
          coin: tokenName.split("_")[0],
          name: tokenName,
          currentPrice: currentPrice,
          coinPrice: "--",
          type: types[tokenName.split("_")[2]],
          strike: policyInfo["strikePrice"],
          expiry: expiry,
          tvl: "--",
          tradingVolume: "--",
          change: "--",
          minted: userInfo["userQuota"],
          balance: userInfo["policyTokenBalance"],
          poolLiquidityToken: poolInfo["poolLiquidityToken"],
          userLiquidityToken: poolInfo["userLiquidityToken"],
        };
        this.cardData.push(policyTokeninfo);
      }
    },

    async getTokensNameEvent() {
      return this.getTokensName();
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
