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
                <span class="d-f-1 pl-3" style="vertical-align: middle">{{ data.name1 }}</span>
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
                <span class="d-f-1 pl-3" style="vertical-align: middle; word-break: break-all">{{ data.name2.replace(/_/g, "") }}
                </span>
              </div>
              <input class="fw-4 d-g2 fs-32 mt-3 ta-c" style=" background-color: #f2f2f2; border-radius: 12px; height: 58px; width: 100%; border-width: 0px;" v-model="calc_amount2" disabled/>
            </div>
          </div>
        </div>

        <div class="modal-footer pt-1" style="display: block">
          <base-button
            v-if="data.type === 'create'"
            style="width: 100%"
            @click="createEvent()"
            >Create</base-button
          >
          <base-button v-else style="width: 100%" @click="redeemEvent()"
            >Redeem</base-button
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
} from "../../utils/contractInstance";
export default {
  name: "create-redeem",
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

    async create(depositAmount, tokenName) {
      const account = this.$store.state.selectedAccount;
      if (account == null) {
        alert("Please Connect Wallet");
        return;
      }
      if (depositAmount == 0) {
        alert("Please Input Amount");
        return;
      }
      const usd = await getMockUSD();
      const core = await getPolicyCore();
      var amount = window.WEB3.utils.toWei(String(depositAmount), "ether");
      console.log("core", core.options.address);
      console.log("usd", usd.options.address);

      const allowance = await usd.methods
        .allowance(account, core.options.address)
        .call();
      if (
        parseInt(allowance) <
        parseInt(window.WEB3.utils.toWei("100000000", "ether"))
      ) {
        const tx1 = await usd.methods
          .approve(
            core.options.address,
            window.WEB3.utils.toBN(
              "115792089237316195423570985008687907853269984665640564039457584007913129639935"
            )
          )
          .send({ from: account });
        console.log("Tx Hash:", tx1.transactionHash);
      }
      const tx2 = await core.methods
        .deposit(tokenName, usd.options.address, amount)
        .send({ from: account });
      console.log(tx2.transactionHash);
      this.$store.commit("SET_LASTTRANSACTIONHASH", tx2.transactionHash);
    },

    async redeem(redeemAmount, tokenName) {
      const account = this.$store.state.selectedAccount;
      if (account == null) {
        alert("Please Connect Wallet");
        return;
      }
      if (redeemAmount == 0) {
        alert("Please Input Amount");
        return;
      }
      const usd = await getMockUSD();
      const core = await getPolicyCore();

      var amount = window.WEB3.utils.toWei(String(redeemAmount), "ether");
      const tx1 = await core.methods
        .redeem(tokenName, usd.options.address, window.WEB3.utils.toBN(amount))
        .send({ from: account });

      console.log(tx1.transactionHash);
      this.$store.commit("SET_LASTTRANSACTIONHASH", tx1.transactionHash);
    },

    async createEvent() {
      const createAmount = this.amount1;
      const tokenName = this.data.name2;
      console.log(createAmount, tokenName);
      await this.create(createAmount, tokenName);
      this.closeModal();
    },

    async redeemEvent() {
      const redeemAmount = this.amount2;
      const tokenName = this.data.name2;
      console.log(redeemAmount, tokenName);
      await this.redeem(redeemAmount, tokenName);
      this.closeModal();
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
      return 1 * this.amount1;
    },
  },
};
</script>
<style>
.modal.show {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
