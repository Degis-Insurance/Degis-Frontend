<template>
  <base-header type="" class="pt-4">
    <h1 class="fw-7 d-g1 fs-34 mb-4">Provide on Naughty Price Pool</h1>
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
    <price-provide-card v-for="data in cardData" :data="data" :key="data.coin"></price-provide-card>
  </base-header>
</template>

<script>
import BaseButton from "@/components/BaseButton";
import PriceProvideCard from "./PriceProvideCard";

import {
  getMockUSD,
  getNaughtyFactory,
  getNaughtyRouter,
  getPolicyCore,
  getPolicyToken,
  getNaughtyPair,
} from "../../utils/contractInstance";

export default {
  name: "price-provide",
  components: {BaseButton, PriceProvideCard},
  data() {
    return {
      cardData: [
        {
          coin: "BTC",
          name: "this is a nameeeeeeeeeeeeeeeeeeeeeeeeeeee",
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
      this.showInfoEvent();
    },
  },

  mounted() {
    this.showInfoEvent();
  },
  methods: {
    async getTokensName() {
      const core = await getPolicyCore();
      var tonenNames = await core.methods.getAllTokens().call();
      tonenNames = ["BTC_30000_L_202101", "BTC_30000_L_202101"]
      return tonenNames;
    },

    async showUserInfo(tokenName) {
      const account = this.$store.state.selectedAccount;
      const usdt = await getMockUSD();
      const core = await getPolicyCore();
      const policyTokenAddress = await core.methods.findAddressbyName(tokenName).call();
      const policyToken = await getPolicyToken(policyTokenAddress);
      const userQuota = await core.methods.checkUserQuota(account, policyToken.options.address).call({from: account})
      const usdtBalance = await usdt.methods.balanceOf(account).call();
      const policyTokenBalance = await policyToken.methods.balanceOf(account).call();
      return {"userQuota": userQuota, "usdtBalance": usdtBalance, "policyTokenBalance": policyTokenBalance};
    },

    async showPoolInfo(tokenName) {
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

      return {"policyInfo": policyInfo, "poolInfo": {"udstAmmount": poolInfo[0], "policyTokenAmmount": poolInfo[1]}}
    },

    async addLiquidity(amountUSDT, amountPolicyToken, tokenName) {
      const account = this.$store.state.selectedAccount;
      const usdt = await getMockUSD();
      const factory = await getNaughtyFactory();
      const core = await getPolicyCore();
      const router = await getNaughtyRouter();

      const tokenAddress = await core.methods
          .findAddressbyName(tokenName)
          .call();
      const pairAddress = await factory.methods
          .getPairAddress(tokenAddress, usdt.options.address)
          .call();
      console.log("tokenAddress:", tokenAddress)
      console.log("pairAddress:", pairAddress)
      console.log("factory address", factory.options.address);
      console.log("core address", core.options.address);
      console.log("router address", router.options.address);

      const policyToken = await getPolicyToken(tokenAddress);
      const amountUSDTEther = window.WEB3.utils.toWei(String(amountUSDT), "ether");
      const amountPolicyTokenEther = window.WEB3.utils.toWei(String(amountPolicyToken), "ether");
      const amountUSDTEtherMin = window.WEB3.utils.toWei(String(amountUSDT / 4), "ether");
      const amountPolicyTokenEtherMin = window.WEB3.utils.toWei(String(amountPolicyToken / 4), "ether");

      console.log(amountUSDTEther, amountPolicyTokenEther, amountUSDTEtherMin, amountPolicyTokenEtherMin)

      const tx1 = await policyToken.methods
          .approve(router.options.address, window.WEB3.utils.toBN(amountPolicyTokenEther))
          .send({from: account});
      console.log(tx1.transactionHash)

      const tx2 = await usdt.methods
          .approve(router.options.address, window.WEB3.utils.toBN(amountUSDTEther))
          .send({from: account});
      console.log(tx2.transactionHash)

      let date = new Date().getTime();
      date = parseInt(date / 1000);
      console.log("now:", date);

      const tx = await router.methods
          .addLiquidity(
              tokenAddress,
              usdt.options.address,
              window.WEB3.utils.toBN(amountPolicyTokenEther),
              window.WEB3.utils.toBN(amountUSDTEther),
              window.WEB3.utils.toBN(amountPolicyTokenEtherMin),
              window.WEB3.utils.toBN(amountUSDTEtherMin),
              account,
              date + 6000
          )
          .send({from: account});
      console.log(tx.transactionHash)
    },

    async removeLiquidity(percentage, tokenName) {
      const account = this.$store.state.selectedAccount;
      const usdt = await getMockUSD();
      const factory = await getNaughtyFactory();
      const core = await getPolicyCore();
      const router = await getNaughtyRouter();

      const tokenAddress = await core.methods
          .findAddressbyName(tokenName)
          .call();
      const pairAddress = await factory.methods
          .getPairAddress(tokenAddress, usdt.options.address)
          .call();
      const pair = await getNaughtyPair(pairAddress);
      console.log(tokenAddress, pairAddress)
      const policyToken = await getPolicyToken(tokenAddress);

      const liquidityToken = await pair.methods.balanceOf(account).call();

      const tx1 = await pair.methods
          .approve(router.options.address, window.WEB3.utils.toBN(liquidityToken))
          .send({from: account});
      console.log(tx1.transactionHash)

      const liquidityTokenAll = await pair.methods.totalSupply().call();
      const pair_amount = await pair.methods.getReserves().call();

      const amountPolicyToken = percentage * liquidityToken / liquidityTokenAll * pair_amount[0] * 0.8;
      const amountUSDT = percentage * liquidityToken / liquidityTokenAll * pair_amount[1] * 0.8;
      // console.log("====",amountUSDT, amountPolicyToken)

      // liquidity = Math.max(liquidity, amountPolicyTokenEther / pair_amount[0]);
      // liquidity = Math.max(liquidity, amountUSDTEther / pair_amount[1]);

      console.log("liquidity:", liquidityToken, liquidityTokenAll, amountPolicyToken, amountUSDT)
      let date = new Date().getTime();
      date = parseInt(date / 1000);
      console.log("now:", date);

      const tx = await router.methods
          .removeLiquidity(
              tokenAddress,  //
              usdt.options.address, //
              window.WEB3.utils.toBN(liquidityToken * percentage),
              window.WEB3.utils.toBN(amountPolicyToken),
              window.WEB3.utils.toBN(amountUSDT),
              account,
              date + 6000
          )
          .send({from: account});
      // console.log(tx.transactionHash)
    },

    async addLiquidityEvent() {
      var amountUSDT = 50;
      var amountPolicyToken = 50;
      const tokenName = "BTC_30000_L_202101";
      await this.showInfoEvent(tokenName)
      await this.addLiquidity(amountUSDT, amountPolicyToken, tokenName);
      await this.showInfoEvent(tokenName)
    },

    async removeLiquidityEvent() {
      var percentage = 0.5
      const tokenName = "BTC_30000_L_202101";
      await this.showInfoEvent(tokenName)
      await this.removeLiquidity(percentage, tokenName);
      await this.showInfoEvent(tokenName)
    },

    async showInfoEvent() {
      const tokenNames = await this.getTokensNameEvent();
      for (var i = 0; i < tokenNames.length; i++) {
        const tokenName = tokenNames[i];
        const info = await this.showPoolInfo(tokenName);
        const policyInfo = info["policyInfo"];
        const poolInfo = info["poolInfo"]
        const userInfo = await this.showUserInfo(tokenName);
        console.log(policyInfo, poolInfo, userInfo)
      }
    },

    async getTokensNameEvent() {
      return this.getTokensName()
    }
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
