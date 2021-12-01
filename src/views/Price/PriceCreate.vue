<template>
  <base-header type="" class="pt-4">
    <h1 class="d-f-1 mb-4">The Naughty Price</h1>
    <price-create-card
      v-for="data in cardData"
      :data="data"
      :key="data.coin"
    ></price-create-card>
  </base-header>
</template>

<script>
import PriceCreateCard from "./PriceCreateCard";
import {
  getMockUSD,
  getNaughtyFactory,
  getPolicyCore,
  getPolicyToken,
  getNaughtyPair,
} from "../../utils/contractInstance";

export default {
  name: "price-create",
  components: { PriceCreateCard },
  data() {
    return {
      cardData: [
        {
          coin: "BTC",
          name: "this is a name",
          currentPrice: "--",
          coinPrice: "--",
          type: "--",
          strike: "--",
          expiry: "--",
          tvl: "--",
          tradingVolume: "--",
          change: "--",
          minted: "--",
          balance: "--",
        },
        {
          coin: "ETH",
          name: "this is a name",
          currentPrice: "--",
          coinPrice: "--",
          type: "--",
          strike: "--",
          expiry: "--",
          tvl: "--",
          tradingVolume: "--",
          change: "--",
          minted: "--",
          balance: "--",
        },
        {
          coin: "ETH",
          name: "this is a name",
          currentPrice: "--",
          coinPrice: "--",
          type: "--",
          strike: "--",
          expiry: "--",
          tvl: "--",
          tradingVolume: "--",
          change: "--",
          minted: "--",
          balance: "--",
        },
        {
          coin: "AVAX",
          name: "this is a name",
          currentPrice: "--",
          coinPrice: "--",
          type: "--",
          strike: "--",
          expiry: "--",
          tvl: "--",
          tradingVolume: "--",
          change: "--",
          minted: "--",
          balance: "--",
        },
      ]
    }
  },
  computed: {
    currentAccount() {
      return this.$store.state.selectedAccount;
    },
  },

  watch: {
    "$store.state.selectedAccount": function (newVal) {
      this.showInfoEvent()
    },
    "$store.state.lastTransactionHash": function (newVal) {
      this.showInfoEvent();
    },
  },

  mounted() {
    this.showInfoEvent()
  },

  methods: {
    // async mint()
    // {
    //   const account = this.$store.state.selectedAccount;
    //   var amount = window.WEB3.utils.toWei(String(9999), "ether");
    //   const usdt = await getMockUSD();
    //   await usdt.methods.mint(account,amount).send({from:account}); 
    // },

    async getTokensName()
    {
      const core = await getPolicyCore();
      const tokenInfos = await core.methods.getAllTokens().call();
      var tokenNames = []
      for(var i=0;i<tokenInfos.length;i++)
      {
        var tokenName = await core.methods.findNamebyAddress(tokenInfos[i]["policyTokenAddress"]).call();
        tokenNames.push(tokenName);
      }
      return tokenNames;
    },

    async showUserInfo(tokenName)
    {
      const account = this.$store.state.selectedAccount;
      const usdt = await getMockUSD();
      const core = await getPolicyCore();
      const policyTokenAddress = await core.methods.findAddressbyName(tokenName).call(); 
      const policyToken = await getPolicyToken(policyTokenAddress);
      const userQuota = await core.methods.checkUserQuota(account, policyToken.options.address).call({ from : account})
      const usdtBalance = await usdt.methods.balanceOf(account).call();
      const policyTokenBalance = await policyToken.methods.balanceOf(account).call();
      return {"userQuota": userQuota, "usdtBalance": usdtBalance, "policyTokenBalance":policyTokenBalance};
    },

    async showPoolInfo(tokenName)
    {
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

      return {"policyInfo": policyInfo ,"poolInfo": {"udstAmmount":poolInfo[1], "policyTokenAmmount":poolInfo[0]}}
    },

    async showInfoEvent()
    {
      const tokenNames = await this.getTokensNameEvent();
      this.cardData = []
      for(var i=0; i<tokenNames.length; i++)
      {
        const tokenName  = tokenNames[i];
        const info = await this.showPoolInfo(tokenName);
        const policyInfo = info["policyInfo"];
        const poolInfo = info["poolInfo"];

        const userInfo = await this.showUserInfo(tokenName);
        
        const types = {"H" : "Payout if Higher", "L": "Pay out if Lower"}
        var date = new Date(parseInt(policyInfo["deadline"]) * 1000)
        var expiry = date.getDate()+
          "/"+(date.getMonth()+1)+
          "/"+date.getFullYear()
        
        var currentPrice = "--";
        if(poolInfo["policyTokenAmmount"] != 0)
        {
          currentPrice = (poolInfo["udstAmmount"] / poolInfo["policyTokenAmmount"]).toFixed(4);
        }

        var policyTokeninfo = {
          "coin": tokenName.split("_")[0],
          "name": tokenName,
          "currentPrice": currentPrice,
          "coinPrice": "--",
          "type" : types[tokenName.split("_")[2]],
          "strike" : policyInfo["strikePrice"],
          "expiry" : expiry,
          "tvl": "--",
          "tradingVolume": "--",
          "change": "--",
          "minted": userInfo["userQuota"], 
          "balance": userInfo["policyTokenBalance"]
        };
        this.cardData.push(policyTokeninfo)
      }
    },
    async getTokensNameEvent()
    {
      return this.getTokensName()
    }
  }
};
</script>

<style scoped></style>
