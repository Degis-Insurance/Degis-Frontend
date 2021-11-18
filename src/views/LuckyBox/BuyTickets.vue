<template>
  <div class="modal fade" @click.self="closeModal" :class="[{ 'show d-block': show }, { 'd-none': !show }]" v-show="show" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" style="max-width: 100%">
      <div class="modal-content" style="width: 70%; border-radius: 24px; margin: auto">

        <div class="modal-header pl-4 pt-4 pb-2">
          <h1 class="fw-7 d-g1 fs-24">Buy Tickets</h1>
          <button class="close pr-4" @click="closeModal">
            <img src="img/luckybox/close-modal.png" style="width: 24px;">
          </button>
        </div>
        <p class="fw-7 d-g2 fs-16 pl-4">Round # 124 <span class="fw-4 d-g4"> | Ends in </span> 20:00, 15/10/2021</p>

        <img src="img/luckybox/modal-split.png" style="height: 1px">

        <div class="modal-body">
          <div class="py-3">
            <p class="fw-5 d-g2 fs-16">SELECT YOUR NUMBERS</p>
            <ball-select :getBall="getBall"/>
          </div>
          <div class="py-3">
            <p class="fw-5 d-g2 fs-16">AMOUNT</p>
            <input class="fw-4 d-g4 fs-32 ta-c" value="0" style="background-color: #F2F2F2; border-radius: 12px; height: 88px; width: 100%; border-width: 0px; opacity: 0.6"/>
          </div>
        </div>

        <img src="img/luckybox/modal-split.png" style="height: 1px">

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
            <div class="col-sm-4 ma" align="center">
              <base-button style="width: 100%; height: 100%" @click="buyTickets">Buy Tickets</base-button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BallSelect from "./BallSelect";

export default {
  name: "buy-tickets",
  components: {
    BallSelect,
  },
  data() {
    return {
      buyNum: [],
    }
  },
  props: {
    show: Boolean,
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
