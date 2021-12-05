<template>
  <div
    class="modal fade"
    @click.self="closeModal"
    :class="[{ 'show d-block': show }, { 'd-none': !show }]"
    v-show="show"
    tabindex="-1"
    role="dialog"
  >
    <div class="modal-dialog modal-dialog-centered" style="max-width: 100%">
      <div
        class="modal-content"
        style="width: 80%; border-radius: 24px; margin: auto"
      >
        <div class="modal-body">
          <div class="row d-flex align-items-center">
            <div class="col-5">
              <div class="d-flex align-items-center">
                <img
                  :src="'img/protection/price/' + data.coin1 + '.png'"
                  class="img-fluid"
                  style="width: 64px"
                />
                <span
                  class="d-f-1 pl-3"
                  style="vertical-align: middle"
                  >{{ data.name1 }}</span
                >
              </div>
              <input
                class="fw-4 d-g2 fs-32 mt-3 ta-c"
                style="
                  background-color: #f2f2f2;
                  border-radius: 12px;
                  height: 58px;
                  width: 100%;
                  border-width: 0px;
                "
                v-model="amount1"
              />
            </div>
            <div class="col-2 d-flex justify-content-center">
              <i
                v-if="data.type === 'create'"
                class="el-icon-right d-p"
                style="font-size: 80px"
              />
              <i v-else class="el-icon-plus d-p" style="font-size: 80px" />
            </div>
            <div class="col-5">
              <div class="d-flex align-items-center">
                <img
                  :src="'img/protection/price/' + data.coin2 + '.png'"
                  class="img-fluid"
                  style="width: 64px"
                />
                <span
                  class="d-f-1 pl-3"
                  style="vertical-align: middle; word-break: break-all"
                  >{{ data.name2.replace(/_/g,'') }}</span
                >
              </div>
              <input
                class="fw-4 d-g2 fs-32 mt-3 ta-c"
                style="
                  background-color: #f2f2f2;
                  border-radius: 12px;
                  height: 58px;
                  width: 100%;
                  border-width: 0px;
                "
                v-model="calc_amount2"
                disabled
              />
            </div>
          </div>
        </div>

        <div class="modal-footer pt-1" style="display: block">
          <base-button v-if="data.type === 'provide'" style="width: 100%" @click="addLiquidityEvent()">Provide</base-button>
          <base-button v-else style="width: 100%" @click="removeLiquidityEvent">Remove</base-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getMockUSD,
  getNaughtyFactory,
  getPolicyCore,
  getNaughtyRouter,
  getNPPolicyToken,
  getNaughtyPair,
} from "../../utils/contractInstance";
export default {
  name: "provide",
  components: {},
  data() {
    return {
      amount1: 0,
      amount2: 0,
    };
  },
  props: {
    show: Boolean,
    data: Object,
  },
  methods: {
    closeModal() {
      this.$emit("update:show", false);
      this.$emit("close");
    },

    async addLiquidity(amountUSD, amountPolicyToken, tokenName) {
      const account = this.$store.state.selectedAccount;
      if(account == null)
      {
        alert("Please Connect Wallet")
        return
      } 
      if(amountUSD == 0 || amountPolicyToken == 0)
      {
        alert("Please Input Amount")
        return
      } 
      const usd = await getMockUSD();
      const factory = await getNaughtyFactory();
      const core = await getPolicyCore();
      const router = await getNaughtyRouter();

      const tokenAddress = await core.methods
          .findAddressbyName(tokenName)
          .call();
      const pairAddress = await factory.methods
          .getPairAddress(tokenAddress, usd.options.address)
          .call();
      console.log("tokenAddress:", tokenAddress)
      console.log("pairAddress:", pairAddress)
      console.log("factory address", factory.options.address);
      console.log("core address", core.options.address);
      console.log("router address", router.options.address);

      const policyToken = await getNPPolicyToken(tokenAddress);
      const amountUSDEther = window.WEB3.utils.toWei(String(amountUSD), "ether");
      const amountPolicyTokenEther = window.WEB3.utils.toWei(String(amountPolicyToken), "ether");
      const amountUSDEtherMin = window.WEB3.utils.toWei(String(amountUSD / 4), "ether");
      const amountPolicyTokenEtherMin = window.WEB3.utils.toWei(String(amountPolicyToken / 4), "ether");

      console.log(amountUSDEther, amountPolicyTokenEther, amountUSDEtherMin, amountPolicyTokenEtherMin)

      var allowance = await policyToken.methods
        .allowance(account, router.options.address)
        .call();
      if (parseInt(allowance) < parseInt(window.WEB3.utils.toWei("100000000", "ether"))) {
        const tx1 = await policyToken.methods
          .approve(
            router.options.address,
            window.WEB3.utils.toBN(
              "115792089237316195423570985008687907853269984665640564039457584007913129639935"
            )
          )
          .send({ from: account });
        console.log("Tx Hash:", tx1.transactionHash);
      }

      allowance = await usd.methods
        .allowance(account, router.options.address)
        .call();
      if (parseInt(allowance) < parseInt(window.WEB3.utils.toWei("100000000", "ether"))) {
        const tx2 = await usd.methods
          .approve(
            router.options.address,
            window.WEB3.utils.toBN(
              "115792089237316195423570985008687907853269984665640564039457584007913129639935"
            )
          )
          .send({ from: account });
        console.log("Tx Hash:", tx2.transactionHash);
      }

      let date = new Date().getTime();
      date = parseInt(date / 1000);
      console.log("now:", date);

      const tx = await router.methods
          .addLiquidity(
              tokenAddress,
              usd.options.address,
              window.WEB3.utils.toBN(amountPolicyTokenEther),
              window.WEB3.utils.toBN(amountUSDEther),
              window.WEB3.utils.toBN(amountPolicyTokenEtherMin),
              window.WEB3.utils.toBN(amountUSDEtherMin),
              account,
              date + 6000
          )
          .send({from: account});
      console.log(tx.transactionHash)
      this.$store.commit("SET_LASTTRANSACTIONHASH", tx.transactionHash);
    },
    
    async removeLiquidity(amountUSD, amountPolicyToken, tokenName) {
      
      const account = this.$store.state.selectedAccount;
      if(account == null)
      {
        alert("Please Connect Wallet")
        return
      } 
      if(amountUSD == 0 || amountPolicyToken == 0)
      {
        alert("Please Input Amount")
        return
      } 
      const usd = await getMockUSD();
      const factory = await getNaughtyFactory();
      const core = await getPolicyCore();
      const router = await getNaughtyRouter();

      const tokenAddress = await core.methods
          .findAddressbyName(tokenName)
          .call();

      const pairAddress = await factory.methods
          .getPairAddress(tokenAddress, usd.options.address)
          .call();

      const pair = await getNaughtyPair(pairAddress);
      console.log(tokenAddress, pairAddress)

      const liquidityToken = await pair.methods.balanceOf(account).call();

      const allowance = await pair.methods
        .allowance(account, router.options.address)
        .call();
      if (parseInt(allowance) < parseInt(window.WEB3.utils.toWei("100000000", "ether"))) {
        const tx1 = await pair.methods
          .approve(
            router.options.address,
            window.WEB3.utils.toBN(
              "115792089237316195423570985008687907853269984665640564039457584007913129639935"
            )
          )
          .send({ from: account });
        console.log("Tx Hash:", tx1.transactionHash);
      }

      const liquidityTokenAll = await pair.methods.totalSupply().call();
      const pair_amount = await pair.methods.getReserves().call();

      amountUSD = window.WEB3.utils.toWei(String(amountUSD), "ether");
      amountPolicyToken = window.WEB3.utils.toWei(String(amountPolicyToken), "ether");

      var percentage = amountPolicyToken / pair_amount[0] * liquidityTokenAll / liquidityToken;
      percentage = Math.max(percentage, amountUSD / pair_amount[1] * liquidityTokenAll / liquidityToken);
      percentage = Math.min(percentage, 1);
      
      const amountPolicyTokenMin = percentage * liquidityToken / liquidityTokenAll * pair_amount[0] * 0.8;
      const amountUSDMin = percentage * liquidityToken / liquidityTokenAll * pair_amount[1] * 0.8;

      console.log("liquidity:", liquidityToken, liquidityTokenAll, amountPolicyTokenMin, amountUSDMin)
      let date = new Date().getTime();
      date = parseInt(date / 1000);
      console.log("now:", date);

      const tx = await router.methods
          .removeLiquidity(
              tokenAddress,  //
              usd.options.address, //
              window.WEB3.utils.toBN(liquidityToken * percentage),
              window.WEB3.utils.toBN(amountPolicyTokenMin),
              window.WEB3.utils.toBN(amountUSDMin),
              account,
              date + 6000
          )
          .send({from: account});
      console.log("Tx Hash:", tx.transactionHash);
      this.$store.commit("SET_LASTTRANSACTIONHASH", tx.transactionHash);
    },

    async addLiquidityEvent() {
      console.log(this.amount1, this.amount2, this.data.name2)
      await this.addLiquidity(this.amount1, this.amount2, this.data.name2);
    },

    async removeLiquidityEvent() {
      await this.removeLiquidity(this.amount1, this.amount2, this.data.name2);
    },
  },
  watch: {
    show(val) {
      let documentClasses = document.body.classList;
      if (val) {
        documentClasses.add("modal-open");
      } else {
        documentClasses.remove("modal-open");
      }
    },
  },
  computed: {
    calc_amount2() {
      if(this.data.currentPrice == "--") {
        this.amount2 = this.amount1 
      }
      else{
        this.amount2 = this.amount1 / this.data.currentPrice
      }
      return this.amount2;
    }
  }
};
</script>
<style>
.modal.show {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
