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
        style="width: 70%; border-radius: 24px; margin: auto"
      >
        <div class="modal-header pl-4 pt-4 pb-2">
          <h1 class="fw-7 d-g1 fs-24">Buy Tickets</h1>
          <button class="close pr-4" @click="closeModal">
            <img src="img/luckybox/close-modal.png" style="width: 24px" >
          </button>
        </div>
        <p class="fw-7 d-g2 fs-16 pl-4">
          Round # 124 <span class="fw-4 d-g4"> | Ends in </span> 20:00,
          15/10/2021
        </p>

        <img src="img/luckybox/modal-split.png" style="height: 1px" />

        <div class="modal-body">
          <div class="py-3">
            <p class="fw-5 d-g2 fs-16">CHOOSE YOUR NUMBERS</p>
            <div
              style="
                background-color: #f2f2f2;
                border-radius: 12px;
                height: 88px;
              "
            >
              <div class="row">
                <div class="col-xl-3"></div>
                <div class="col-xl-6 d-flex justify-content-between">
                  <img
                    :src="'img/luckybox/num-' + num[0] + '.png'"
                    style="max-width: 65px; max-height: 66px; margin-top: 11px"
                  />
                  <img
                    :src="'img/luckybox/num-' + num[1] + '.png'"
                    style="max-width: 65px; max-height: 66px; margin-top: 11px"
                  />
                  <img
                    :src="'img/luckybox/num-' + num[2] + '.png'"
                    style="max-width: 65px; max-height: 66px; margin-top: 11px"
                  />
                  <img
                    :src="'img/luckybox/num-' + num[3] + '.png'"
                    style="max-width: 65px; max-height: 66px; margin-top: 11px"
                  />
                </div>
                <div class="col-xl-3">
                  <p
                    class="fw-7 d-p fs-18"
                    style="
                      line-height: 88px;
                      text-align: center;
                      cursor: pointer;
                    "
                    @click="randomNumber"
                  >
                    RANDOM
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="py-3">
            <p class="fw-5 d-g2 fs-16">AMOUNT</p>
            <input
              class="fw-4 d-g4 fs-32 ta-c"
              value="0"
              style="
                background-color: #f2f2f2;
                border-radius: 12px;
                height: 88px;
                width: 100%;
                border-width: 0px;
                opacity: 0.6;
              "
              id="ticket-amount"
            />
          </div>
        </div>

        <img src="img/luckybox/modal-split.png" style="height: 1px" />

        <div class="modal-footer pt-4 pl-4" style="display: block">
          <div class="row">
            <div class="col-sm-4">
              <h4 class="fw-5 d-g4 fs-14">Ticket Price</h4>
              <h4 class="fw-7 d-g2 fs-24">12.3467</h4>
            </div>
            <div class="col-sm-4">
              <h4 class="fw-5 d-g4 fs-14">You Will Pay</h4>
              <h4 class="fw-7 d-p fs-24">12.3467</h4>
            </div>
            <div class="col-sm-4 ma" align="center" @click="BuyTicketEvent">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Web3 from "web3";
import { getDegis, getDegisLottery } from "../../utils/contractInstance";
export default {
  name: "buy-tickets",
  components: {},
  data() {
    return {
      num: [3, 4, 6, 7],
    };
  },
  props: {
    show: Boolean,
  },
  methods: {
    closeModal() {
      this.$emit("update:show", false);
      this.$emit("close");
    },
    randomNumber() {
      this.num = [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
      ];
    },

    async BuyTicket(tickets) {
      const DegisLottery = await getDegisLottery();
      const Degis = await getDegis();
      const account = this.$store.state.selectedAccount;
      if (tickets.length > 10) {
        alert("amount must smaller than 10");
        return;
      }

      console.log(tickets);
      let newTickets = new Array();
      for (var i = 0; i < tickets.length; i++) {
        var lotteryNumber = tickets;
        if (parseInt(lotteryNumber) < 10000 && parseInt(lotteryNumber) >= 0) {
          newTickets.push(parseInt(lotteryNumber) + 10000);
        } else {
          alert("Please enter 4 digits");
          return;
        }
      }
      console.log(newTickets);
      let cost = newTickets.length * 10;
      await Degis.methods
        .approve(
          DegisLottery.options.address,
          window.WEB3.utils.toWei(cost.toString(), "ether")
        )
        .send({ from: account });

      var tx = await DegisLottery.methods.buyTickets(newTickets).send({ from: account });
      console.log("Tx Hash:", tx.transactionHash);
    },

    async BuyTicketEvent() {
      const luckNumber =
        this.num[0] * 1000 +
        this.num[1] * 100 +
        this.num[2] * 10 +
        this.num[3] * 1;

      const amount = document.getElementById("ticket-amount").value;
      let tickets = new Array();
      for (var i = 0; i < amount; i++) {
        tickets.push(luckNumber);
      }

      await this.BuyTicket(tickets);
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
