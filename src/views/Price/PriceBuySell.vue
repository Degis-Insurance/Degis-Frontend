<template>
  <base-header type="" class="pt-4">
    <h1 class="d-f-1 mb-4">The Naughty Price</h1>
    <price-buy-sell-card
      v-for="data in cardData"
      :data="data"
      :key="data.coin"
    ></price-buy-sell-card>
  </base-header>
</template>

<script>
import PriceBuySellCard from "./PriceBuySellCard";
const CoinGecko = require("coingecko-api");
import {
  getMockUSD,
  getNaughtyFactory,
  getNaughtyRouter,
  getPolicyCore,
  getNPPolicyToken,
  getNaughtyPair,
} from "../../utils/contractInstance";
import { getTokenPrice, getTokenPriceFromCoinMarket } from "@/api/functions";
export default {
  name: "price-buy-sell",
  components: { PriceBuySellCard },
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
    this.showFrame();
    this.showInfoEvent();
  },
  methods: {
    // async getTokensName() {
    //   const core = await getPolicyCore();
    //   const tokenInfos = await core.methods.getAllTokens().call();
    //   var tokenNames = [];
    //   for (var i = 0; i < tokenInfos.length; i++) {
    //     var tokenName = await core.methods
    //       .findNamebyAddress(tokenInfos[i]["policyTokenAddress"])
    //       .call();
    //     tokenNames.push(tokenName);
    //   }
    //   return tokenNames;
    // },
    async getTokensName() {
      let tokenNames = [
        "BTC_24000_L_2112",
        "BTC_71000_H_2112",
        "ETH_2000_L_2112",
        "ETH_5900_H_2112",
        "AVAX_60_L_2112",
        "AVAX_100_H_2112",
        "BTC_25000_L_21122",
        "BTC_75000_H_21122",
        "ETH_2000_L_21122",
        "ETH_6000_H_21122",
        "AVAX_65_L_21122",
        "AVAX_106_H_21122",
        "BTC_23000_L_21124",
        "BTC_69000_H_21124",
        "ETH_1900_L_21124",
        "ETH_5700_H_21124",
        "AVAX_75_L_21124",
        "AVAX_125_H_21124",
      ];
      return tokenNames;
    },

    async showFrame() {
      const tokenNames = await this.getTokensNameEvent();
      this.cardData = [];
      const types = { H: "Payout if Higher", L: "Pay out if Lower" };
      // const coinMap = {"BTC":"bitcoin", "ETH":"ethereum" , "AVAX":"avalanche-2"}
      // const CoinGeckoClient = new CoinGecko();
      for (var i = tokenNames.length - 1; i >= 0; i--) {
        const tokenName = tokenNames[i];
        var coin = tokenName.split("_")[0];
        // let priceInfo = await CoinGeckoClient.coins.fetch(coinMap[coin], {});
        // let coinPrice = priceInfo["data"]["market_data"]["current_price"]["usd"];
        var policyTokeninfo = {
          coin: coin,
          name: tokenName,
          currentPrice: 0,
          coinPrice: 0,
          type: types[tokenName.split("_")[2]],
          strike: "--",
          expiry: "--",
          tvl: "--",
          tradingVolume: "--",
          change: "--",
          minted: 0,
          policyTokenBalance: 0,
          usdBalance: 0,
          poolUsdAmount: 0,
          poolPolicyTokenAmount: 0,
        };
        this.cardData.push(policyTokeninfo);
      }
    },

    async showUserInfo(tokenName) {
      const account = this.$store.state.selectedAccount;
      if (account != null) {
        const usd = await getMockUSD();
        const core = await getPolicyCore();
        const policyTokenAddress = await core.methods
          .findAddressbyName(tokenName)
          .call();
        const policyToken = await getNPPolicyToken(policyTokenAddress);
        const userQuota = await core.methods
          .checkUserQuota(account, policyToken.options.address)
          .call({ from: account });
        const usdBalance = await usd.methods.balanceOf(account).call();
        const policyTokenBalance = await policyToken.methods
          .balanceOf(account)
          .call();
        return {
          userQuota: userQuota,
          usdBalance: usdBalance,
          policyTokenBalance: policyTokenBalance,
        };
      }
      return {
        userQuota: 0,
        usdBalance: 0,
        policyTokenBalance: 0,
      };
    },

    async showPoolInfo(tokenName) {
      const usd = await getMockUSD();
      const factory = await getNaughtyFactory();
      const core = await getPolicyCore();
      var policyInfo = await core.methods.getPolicyTokenInfo(tokenName).call();

      const policyTokenAddress = await core.methods
        .findAddressbyName(tokenName)
        .call();
      const pairAddress = await factory.methods
        .getPairAddress(policyTokenAddress, usd.options.address)
        .call();

      const pair = await getNaughtyPair(pairAddress);
      const poolInfo = await pair.methods.getReserves().call();

      return {
        policyInfo: policyInfo,
        poolInfo: { usdAmount: poolInfo[1], policyTokenAmount: poolInfo[0] },
      };
    },

    async showOneInfo(tokenName) {
      const info = await this.showPoolInfo(tokenName);
      const policyInfo = info["policyInfo"];
      const poolInfo = info["poolInfo"];

      const userInfo = await this.showUserInfo(tokenName);

      const types = { H: "Payout if Higher", L: "Pay out if Lower" };
      var date = new Date(parseInt(policyInfo["deadline"]) * 1000);
      var expiry =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

      var currentPrice = "--";
      if (poolInfo["policyTokenAmount"] != 0) {
        currentPrice = (
          poolInfo["usdAmount"] / poolInfo["policyTokenAmount"]
        ).toFixed(4);
        var poolUsdAmount = poolInfo["usdAmount"];
        var poolPolicyTokenAmount = poolInfo["policyTokenAmount"];
      }

      var coin = tokenName.split("_")[0];
      let coinMap = { BTC: "bitcoin", ETH: "ethereum", AVAX: "avalanche-2" };
      const CoinGeckoClient = new CoinGecko();
      let priceInfo = await CoinGeckoClient.coins.fetch(coinMap[coin], {});
      let coinPrice = priceInfo["data"]["market_data"]["current_price"]["usd"];

      var policyTokeninfo = {
        coin: coin,
        name: tokenName,
        currentPrice: currentPrice,
        coinPrice: coinPrice,
        type: types[tokenName.split("_")[2]],
        strike: policyInfo["strikePrice"],
        expiry: expiry,
        tvl: "--",
        tradingVolume: "--",
        change: "--",
        minted: userInfo["userQuota"] / 1e18,
        policyTokenBalance: (userInfo["policyTokenBalance"] / 1e18).toFixed(2),
        usdBalance: (userInfo["usdBalance"] / 1e18).toFixed(2),
        poolUsdAmount: poolUsdAmount,
        poolPolicyTokenAmount: poolPolicyTokenAmount,
      };
      return policyTokeninfo;
    },
    async showInfoEvent() {
      const tokenNames = await this.getTokensNameEvent();
      var threads = [];
      for (var i = tokenNames.length - 1; i >= 0; i--) {
        const tokenName = tokenNames[i];
        threads.push(this.showOneInfo(tokenName));
      }
      this.cardData = [];
      this.cardData = await Promise.all(threads);
    },
    async getTokensNameEvent() {
      return this.getTokensName();
    },
  },
};
</script>

<style scoped></style>
