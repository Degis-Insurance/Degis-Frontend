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
      <div class="modal-content" style="width: 70%; border-radius: 24px; margin: auto">

        <div class="modal-header pl-4 pt-4 pb-2">
          <h1 class="fw-7 d-g1 fs-24">Order Confirm</h1>
          <button class="close pr-4" @click="closeModal">
            <img src="img/luckybox/close-modal.png" style="width: 24px"/>
          </button>
        </div>

        <img src="img/luckybox/modal-split.png" style="height: 1px"/>

        <div class="row align-items-center pb-4">
          <div class="col-xl-5 pt-4" style="padding: 0 4%">
            <div class="d-flex pb-5">
              <img src="img/function/flight-comp.png" style="width: 88px; height: 88px"/>
              <div>
                <p class="fw-4 d-g1 fs-20 pl-3 pt-2">{{ buyData.airline }}</p>
                <p class="fw-4 d-g2 fs-14 pl-3">{{ buyData.flight_no }}</p>
              </div>
            </div>
            <img
                src="img/function/flight-info.png"
                class="pb-4"
                style="width: 100%"
            />
            <div class="d-flex justify-content-between">
              <p class="fw-4 d-p fs-32">{{ getFrom }}</p>
              <p class="fw-4 d-g2 fs-16 pt-3">--</p>
              <p class="fw-4 d-p fs-32">{{ getTo }}</p>
            </div>

            <div class="d-flex justify-content-between pt-3">
              <div>
                <p class="fw-4 d-g2 fs-16">Depart Time</p>
                <p class="fw-4 d-g2 fs-16">Arrive Time</p>
                <p class="fw-4 d-g2 fs-16">Premium</p>
              </div>
              <div>
                <p class="fw-4 d-g2 fs-16 ta-r">{{ buyData.depart_time }}</p>
                <p class="fw-4 d-g2 fs-16 ta-r">{{ buyData.arrive_time }}</p>
                <p class="fw-4 d-g2 fs-16 ta-r">{{ buyData.premium }}</p>
              </div>
              <!--              <p class="fw-4 d-g2 fs-14">Depart Time</p>-->
              <!--              <p class="fw-4 d-g2 fs-14">{{ buyData.departtime }}</p>-->
            </div>
          </div>

          <div class="col-xl-7 pt-4" style="padding: 0 4%">
            <!--                <img src="img/function/flight-map.png" style="width: 100%; margin: 3% 0"/>-->
            <div>
              <p class="fw-4 d-g1 fs-20">Payout Mechanism</p>
              <div class="d-flex justify-content-center">
                <img src="img/function/flight-pm.png" style="width: 80%"/>
              </div>
            </div>

            <div class="row d-flex justify-content-between pt-5">
              <div class="col-xl-6">
                <div class="d-flex justify-content-between">
                  <p class="fw-4 d-g2 fs-16">Protection Premium:</p>
                  <p class="fw-7 d-p fs-16">--</p>
                </div>
                <div class="d-flex justify-content-between">
                  <p class="fw-4 d-g2 fs-16">Maximum Payoff:</p>
                  <p class="fw-7 d-p fs-16">--</p>
                </div>
              </div>
              <div class="col-xl-6 pt-1" align="right">
                <base-button style="width: 70%" @click="NewPolicyEvent">CONFIRM</base-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getMockUSD,
  getPolicyFlow,
  getInsurancePool,
} from "../../utils/contractInstance";

export default {
  name: "order-confirm",
  components: {},
  computed: {
    getFrom() {
      if (this.buyData.route != null) {
        return this.buyData.route.split("-")[0];
      }
      return "";
    },
    getTo() {
      if (this.buyData.route != null) {
        return this.buyData.route.split("-")[1];
      }
      return "";
    },
  },
  props: {
    show: Boolean,
    buyData: {},
  },
  methods: {
    closeModal() {
      this.$emit("update:show", false);
      this.$emit("close");
    },

    async NewPolicy(productId, flight_number, premium, departure_timestamp, landing_timestamp, deadline, signature) {
      const account = this.$store.state.selectedAccount;
      const policyFlow = await getPolicyFlow();
      const usdt = await getMockUSD();
      const insurancePool = await getInsurancePool();

      console.log("===================1111")

      const allowance = await usdt.methods
        .allowance(account, insurancePool.options.address)
        .call();
      if (parseInt(allowance) < parseInt(window.WEB3.utils.toWei("100000000", "ether"))) {
        const tx1 = await usdt.methods
          .approve(
            insurancePool.options.address,
            window.WEB3.utils.toBN(
              "115792089237316195423570985008687907853269984665640564039457584007913129639935"
            )
          )
          .send({ from: account });
        console.log("Tx Hash:", tx1.transactionHash);
      }
      console.log("==============")
      console.log(premium)
      console.log("==============")
      
      const tx = await policyFlow.methods
        .newApplication(
          productId, 
          flight_number, 
          premium, 
          departure_timestamp, 
          landing_timestamp, 
          deadline, 
          signature
        )
        .send({from: account});
      console.log("Tx Hash:", tx2.transactionHash);
      console.log(tx2);
      console.log("policy Id:", tx2.logs[0].args[0]);
    },

    async NewPolicyEvent() {
      const productId = 0;
      const flight_number = this.buyData.flight_no;
      const departure_timestamp = new Date(this.buyData.depart_time) / 1000;
      const landing_timestamp = new Date(this.buyData.arrive_time) / 1000;
      const deadline = new Date().getTime() / 1000;
      const premium = this.buyData.premium;
      const signature = "50e90e2e44c1cbb7032a337ed33185a350e90e2e44c1cbb7032a337ed33185a3"

      const premium_wei = window.WEB3.utils.toWei(String(premium), "ether")
      const departure_timestamp_wei = window.WEB3.utils.toWei(String(departure_timestamp), "ether")
      const landing_timestamp_wei = window.WEB3.utils.toWei(String(landing_timestamp), "ether")
      const deadline_wei = window.WEB3.utils.toWei(String(deadline), "ether")
      const signature_byte = window.WEB3.utils.asciiToHex(signature)

      await this.NewPolicy(productId, flight_number, premium_wei, departure_timestamp_wei, landing_timestamp_wei, deadline_wei, signature_byte);
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
