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
                <span class="d-f-1 pl-3" style="vertical-align: middle">{{
                  data.name1
                }}</span>
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
              <i v-else class="el-icon-back d-p" style="font-size: 80px" />
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
                  >{{ data.name2.replace(/_/g, "") }}</span
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
          <base-button
            v-if="data.type === 'buy'"
            style="width: 100%"
            @click="buyEvent"
            >Buy</base-button
          >
          <base-button v-else style="width: 100%" @click="sellEvent"
            >Sell</base-button
          >
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
  getPolicyToken,
  getNaughtyPair,
  getBuyerToken,
} from "../../utils/contractInstance";
export default {
  name: "buy-sell",
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

    async swap(
      usdtAmount,
      policyTokenAmount,
      buy_usdt_policy,
      exact_former_later,
      tokenName,
      slip
    ) {
      console.log(buy_usdt_policy, exact_former_later);
      const account = this.$store.state.selectedAccount;
      if (account == null) {
        alert("Please Connect Wallet");
        return;
      }
      if (usdtAmount == 0) {
        alert("Please Input Amount");
        return;
      }
      const usdt = await getMockUSD();
      const core = await getPolicyCore();
      const router = await getNaughtyRouter();
      const buyerToken = await getBuyerToken();

      // console.log("==============");
      // await buyerToken.methods.addMinter(router.options.address).send({from:account});
      // console.log("==============");

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

      console.log("user:", usdt_before / 1e18, policy_before / 1e18);

      usdtAmount = window.WEB3.utils.toWei(String(usdtAmount), "ether");

      policyTokenAmount = window.WEB3.utils.toWei(
        String(policyTokenAmount),
        "ether"
      );

      if (buy_usdt_policy == "policy2usdt") {
        const allowance = await policyToken.methods
          .allowance(account, router.options.address)
          .call();
        if (
          parseInt(allowance) <
          parseInt(window.WEB3.utils.toWei("100000000", "ether"))
        ) {
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

        let date = new Date().getTime();
        date = parseInt(date / 1000);

        //用最多policyTokenAmount个policy token 换usdtAmount个usdt出来
        if (exact_former_later == "former") {
          const tx = await router.methods
            .swapExactTokensforTokens(
              policyTokenAmount,
              window.WEB3.utils.toBN(usdtAmount * slip),
              policyTokenAddress,
              usdtAddress,
              account,
              date + 6000
            )
            .send({ from: account });
          console.log("Tx Hash:", tx.transactionHash);
          this.$store.commit("SET_LASTTRANSACTIONHASH", tx.transactionHash);
        }

        // 用最多policyTokenAmount个policy, 换usdtAmount个usdt token出来
        if (exact_former_later == "later") {
          const tx = await router.methods
            .swapTokensforExactTokens(
              window.WEB3.utils.toBN(policyTokenAmount / slip),
              usdtAmount,
              policyTokenAddress,
              usdtAddress,
              account,
              date + 6000
            )
            .send({ from: account });
          console.log("Tx Hash:", tx.transactionHash);
          this.$store.commit("SET_LASTTRANSACTIONHASH", tx.transactionHash);
        }
      }
      if (buy_usdt_policy == "usdt2policy") {
        const allowance = await usdt.methods
          .allowance(account, router.options.address)
          .call();
        if (
          parseInt(allowance) <
          parseInt(window.WEB3.utils.toWei("100000000", "ether"))
        ) {
          const tx2 = await usdt.methods
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

        // 用usdtAmount个usdt token, 换至少policyTokenAmount个policy出来
        if (exact_former_later == "former") {
          console.log(usdtAmount);
          console.log(policyTokenAmount * slip);
          const tx = await router.methods
            .swapExactTokensforTokens(
              usdtAmount,
              window.WEB3.utils.toBN(policyTokenAmount * slip),
              usdtAddress,
              policyTokenAddress,
              account,
              date + 6000
            )
            .send({ from: account });
          console.log("Tx Hash:", tx.transactionHash);
          this.$store.commit("SET_LASTTRANSACTIONHASH", tx.transactionHash);
        }

        // 用最多usdtAmount个usdt, 换policyTokenAmount个policy token出来
        if (exact_former_later == "later") {
          const tx = await router.methods
            .swapTokensforExactTokens(
              window.WEB3.utils.toBN(usdtAmount / slip),
              policyTokenAmount,
              usdtAddress,
              policyTokenAddress,
              account,
              date + 6000
            )
            .send({ from: account });
          console.log("Tx Hash:", tx.transactionHash);
          this.$store.commit("SET_LASTTRANSACTIONHASH", tx.transactionHash);
        }
      }

      const usdt_after = await usdt.methods.balanceOf(account).call({
        from: account,
      });
      const policy_after = await policyToken.methods.balanceOf(account).call({
        from: account,
      });

      console.log("user:", usdt_after / 1e18, policy_after / 1e18);
    },

    async buyEvent() {
      var usdtAmount = this.amount1;
      var policyTokenAmount = this.amount2;
      const tokenName = this.data.name2;
      await this.swap(
        usdtAmount,
        policyTokenAmount,
        "usdt2policy",
        "former",
        tokenName,
        0.8
      );
    },

    async sellEvent() {
      var usdtAmount = this.amount1;
      var policyTokenAmount = this.amount2;
      const tokenName = this.data.name2;
      await this.swap(
        usdtAmount,
        policyTokenAmount,
        "policy2usdt",
        "former",
        tokenName,
        0.8
      );
    },
  },
  computed: {
    calc_amount2() {
      this.amount2 = this.amount1 / this.data.currentPrice;
      return this.amount2;
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
};
</script>
<style>
.modal.show {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
