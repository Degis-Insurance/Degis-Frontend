<template>
  <base-header type="" class="pt-4">
    <h1 class="fw-7 d-g1 fs-34 mb-4">The Naughty Price</h1>
    <price-buy-sell-card v-for="data in cardData" :data="data" :key="data.coin"></price-buy-sell-card>
  </base-header>
</template>

<script>
import PriceBuySellCard from "./PriceBuySellCard";
import {
  getMockUSD,
  getNaughtyFactory,
  getNaughtyRouter,
  getPolicyCore,
  getPolicyToken,
  getNaughtyPair,
} from "../../utils/contractInstance";

export default {
  name: "price-buy-sell",
  components: {PriceBuySellCard},
  data() {
    return {
      cardData: [
        {
          coin: "BTC",
          name: "this is a name",
          insurancetype: "this is insurance type",
          price: 1000,
          mybalance: 11,
        },
        {
          coin: "BTC",
          name: "this is a name",
          insurancetype: "this is insurance type",
          price: 1000,
          mybalance: 11,
        },
        {
          coin: "ETH",
          name: "this is a name",
          insurancetype: "this is insurance type",
          price: 100,
          mybalance: 11,
        },
        {
          coin: "AVAX",
          name: "this is a name",
          insurancetype: "this is insurance type",
          price: 10,
          mybalance: 11,
        },
      ],
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
  },

  mounted() {
    this.showInfoEvent()
  },
  methods: {
    async swap(usdtAmount, policyTokenAmount, buy_usdt_policy, exact_former_later, tokenName) {
      console.log(buy_usdt_policy,exact_former_later);
      const account = this.$store.state.selectedAccount;
      const usdt = await getMockUSD();
      const core = await getPolicyCore();
      const router = await getNaughtyRouter();
      const policyTokenAddress = await core.methods
        .findAddressbyName(tokenName)
        .call();
      const usdtAddress = usdt.options.address;

      const policyToken = await getPolicyToken(policyTokenAddress);

      const usdt_before = await usdt.methods.balanceOf(account).call({
        from: account,
      });
      const policy_before = await policyToken.methods.balanceOf(account).call({
        from: account,
      });
      
      console.log("user:", usdt_before/1e18, policy_before/1e18)


      usdtAmount = window.WEB3.utils.toWei(String(usdtAmount), "ether");

      policyTokenAmount = window.WEB3.utils.toWei(
        String(policyTokenAmount),
        "ether"
      );

      const tx1 = await policyToken.methods
        .approve(router.options.address, policyTokenAmount)
        .send({ from: account });
      console.log(tx1.transactionHash);

      const tx2 = await usdt.methods
        .approve(router.options.address, usdtAmount)
        .send({ from: account });
      console.log(tx2.transactionHash);

      let date = new Date().getTime();
      date = parseInt(date / 1000);
      //用最多policyTokenAmount个policy token 换usdtAmount个usdt出来
      
      if (buy_usdt_policy == "policy2usdt" &&  exact_former_later == "former") {
          console.log("11111");
          const tx = await router.methods
            .swapExactTokensforTokens(
              policyTokenAmount,
              usdtAmount,
              policyTokenAddress,
              usdtAddress,
              account,
              date + 6000
            )
            .send({ from: account });
      }
      
      // 用最多policyTokenAmount个policy, 换usdtAmount个usdt token出来
      if (buy_usdt_policy == "usdt2policy" &&  exact_former_later == "former") {
        console.log("22222");
        const tx = await router.methods
          .swapExactTokensforTokens(
            usdtAmount,
            policyTokenAmount,
            usdtAddress,
            policyTokenAddress,
            account,
            date + 6000
          )
          .send({ from: account });
      }

      // 用最多policyTokenAmount个policy, 换usdtAmount个usdt token出来
      if (buy_usdt_policy == "policy2usdt" &&  exact_former_later == "later") {
        console.log("33333");
        const tx = await router.methods
          .swapTokensforExactTokens(
            policyTokenAmount,
            usdtAmount,
            policyTokenAddress,
            usdtAddress,
            account,
            date + 6000
          )
          .send({ from: account });
      }
      
      // 用最多usdtAmount个usdt, 换policyTokenAmount个policy token出来
      if (buy_usdt_policy == "usdt2policy" &&  exact_former_later == "later") {
        console.log("44444");
        const tx = await router.methods
          .swapTokensforExactTokens(
            usdtAmount,
            policyTokenAmount,
            usdtAddress,
            policyTokenAddress,
            account,
            date + 6000
          )
          .send({ from: account });
      }

      const usdt_after = await usdt.methods.balanceOf(account).call({
        from: account,
      });
      const policy_after = await policyToken.methods.balanceOf(account).call({
        from: account,
      });

      console.log("user:", usdt_after/1e18, policy_after/1e18)

    },

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
      tokenNames = ["BTC_30000_L_202101","BTC_30000_L_202101"]
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

      return {"policyInfo": policyInfo ,"poolInfo": {"udstAmmount":poolInfo[0], "policyTokenAmmount":poolInfo[1]}}
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
          "strike" : policyInfo["strikePrice"] / 1e18,
          "expiry" : expiry,
          "tvl": "--",
          "tradingVolume": "--",
          "change": "--",
          "minted": userInfo["userQuota"] / 1e18, 
          "balance": userInfo["policyTokenBalance"] / 1e18
        };
        this.cardData.push(policyTokeninfo)
      }
    },
    
    async swapEvent() {
      var usdtAmount = 10;
      var policyTokenAmount = 1;
      const tokenName = "BTC100L202101_9";
      await this.showPoolEvent(tokenName);
      await this.swap(usdtAmount, policyTokenAmount, "usdt2policy", "later", tokenName);
      await this.showPoolEvent(tokenName);
    },

    async getTokensNameEvent()
    {
      return this.getTokensName()
    },
  },
};
</script>

<style scoped>

</style>
