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
            <img src="img/luckybox/close-modal.png" style="width: 24px" />
          </button>
        </div>
        <p class="fw-7 d-g2 fs-16 pl-4">
          Round # {{ roundData }} <span class="fw-4 d-g4"> | Ends in </span>
          {{ drawTime }}
        </p>

        <img src="img/luckybox/modal-split.png" style="height: 1px" />

        <div class="modal-body">
          <div class="py-3">
            <p class="fw-5 d-g2 fs-16">SELECT YOUR NUMBERS</p>
            <ball-select :getBall="getBall" />
          </div>
          <div class="py-3">
            <p class="fw-5 d-g2 fs-16">AMOUNT</p>
            <input
              class="fw-4 d-g4 fs-32 ta-c"
              v-model="ticketAmount"
              style="
                background-color: #f2f2f2;
                border-radius: 12px;
                height: 88px;
                width: 100%;
                border-width: 0px;
                opacity: 0.6;
              "
              :placeholder="[[changeAmount]]"
              @focus="hideHolder"
              @input="changeAmout"
              id="ticket-amount"
            />
          </div>
        </div>

        <img src="img/luckybox/modal-split.png" style="height: 1px" />

        <div class="modal-footer pt-4 pl-4" style="display: block">
          <div class="row">
            <!-- <div class="col-sm-4">
              <h4 class="fw-5 d-g4 fs-14">Ticket Price</h4>
              <h4 class="fw-7 d-p fs-24">10 DEG</h4>
            </div> -->
            <div class="col-sm-3">
              <h4 class="fw-5 d-g4 fs-14">You Will Pay</h4>
              <h4 class="fw-7 d-p fs-24">{{ actualPayment }} DEG</h4>
            </div>
            <div class="col-sm-3">
              <h4 class="fw-5 d-g4 fs-14">Your Degis Balance</h4>
              <h4 class="fw-7 d-p fs-24">{{ (userDegisBalance / 1e18).toFixed(2) }} DEG</h4>
            </div>           
            <div class="col-sm- ma" align="center">
              <base-button
                style="width: 100%; height: 100%"
                @click="BuyRandomTicketEvent"
                >Buy Random Tickets</base-button
              >
            </div> 
            <div class="col-sm- ma" align="center">
              <base-button
                style="width: 100%; height: 100%"
                @click="BuyTicketEvent"
                >Buy Tickets</base-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BallSelect from "./BallSelect";
import Web3 from "web3";
import { getDegis, getDegisLottery } from "../../utils/contractInstance";
export default {
  name: "buy-tickets",
  components: {
    BallSelect,
  },
  data() {
    return {
      ticketAmount: 0,
      actualPayment: 0,
      buyNum: [],
    };
  },
  props: {
    show: Boolean,
    roundData: Number,
    userDegisBalance: Number,
    drawTime: String,
  },
  methods: {
    closeModal() {
      this.$emit("update:show", false);
      this.$emit("close");
    },
    buyTickets() {
      this.closeModal();
      console.log("点击buy tickets买票，号码是", this.buyNum);
    },
    getBall(ballNum) {
      this.buyNum = ballNum;
    },
    changeAmout() {
      this.actualPayment = this.ticketAmount * 10;
    },
    hideHolder() {
      this.ticketAmount = "";
    },
    randomNumber() {
      this.buyNum = [
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
      let newTickets = new Array();
      for (var i = 0; i < tickets.length; i++) {
        var lotteryNumber = tickets[i];
        if (parseInt(lotteryNumber) < 10000 && parseInt(lotteryNumber) >= 0) {
          newTickets.push(parseInt(lotteryNumber) + 10000);
        } else {
          alert("Please enter 4 digits");
          return;
        }
      }

      console.log(newTickets);
      let cost = newTickets.length * 10;
      const allowance = await Degis.methods
        .allowance(account, DegisLottery.options.address)
        .call();
      if (
        parseInt(allowance) <
        parseInt(window.WEB3.utils.toWei("100000000", "ether"))
      ) {
        var tx1 = await Degis.methods
          .approve(
            DegisLottery.options.address,
            window.WEB3.utils.toBN(
              "115792089237316195423570985008687907853269984665640564039457584007913129639935"
            )
          )
          .send({ from: account });
        console.log("Tx Hash:", tx1.transactionHash);
      }
      var tx = await DegisLottery.methods
        .buyTickets(newTickets)
        .send({ from: account });
      this.$store.commit("SET_LASTTRANSACTIONHASH", tx.transactionHash);
      console.log("Tx Hash:", tx.transactionHash);
      console.log(this.$store.lastTransactionHash);
    },
    async BuyRandomTicketEvent() {
      const amount = this.ticketAmount;
      if (amount <= 0) {
        alert("Please input amount!");
        return;
      }
      var tickets = new Array();
      for (let i = 0; i < amount; i++) {
        tickets.push(Math.floor(Math.random() * 10000));
      }
      console.log(tickets)
      await this.BuyTicket(tickets);
    },
    async BuyTicketEvent() {
      if (this.buyNum.length == 0) {
        alert("please select ticket number");
        return;
      }

      const luckNumber =
        this.buyNum[0] * 1000 +
        this.buyNum[1] * 100 +
        this.buyNum[2] * 10 +
        this.buyNum[3] * 1;

      console.log("your lucky number:", luckNumber);
      const amount = this.ticketAmount;

      if (amount <= 0) {
        alert("Please input amount!");
        return;
      }

      console.log(amount);
      let tickets = new Array();
      for (let i = 0; i < amount; i++) {
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
