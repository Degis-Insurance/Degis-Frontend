<template>
  <div class="modal fade" @click.self="closeModal" :class="[{ 'show d-block': show }, { 'd-none': !show }]" v-show="show" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" style="max-width: 100%">
      <div class="modal-content" style="width: 40%; border-radius: 24px; margin: auto">

        <div class="modal-header pl-4 pt-4 pb-2">
          <h1 class="fw-7 d-g1 fs-24">Winning Rules</h1>
          <button class="close pr-4" @click="closeModal">
            <img src="img/luckybox/close-modal.png" style="width: 24px;">
          </button>
        </div>

        <el-tabs v-model="activeName" style="padding: 0 3%">
          <el-tab-pane label="Winning Criteria" name="WinningCriteria">
            <p class="fw-5 d-g2 fs-16 pt-4 pb-1">The digits on your ticket must match the lucky draw result number in the correct order to win prizes. The order is from the last digit to the first
              digit.</p>
            <p class="fw-4 d-g2 fs-14" style="line-height: 22px">Here’s an example of the lottery draw. Suppose that there're two tickets, A and B.<br/>
              Ticket A: The last 2 digits match but the first 2 digits are wrong, so this ticket wins the “Match Last 2” prize.<br/>
              Ticket B: Even though the first 3 digits match, the last digit is wrong. So this ticket doesn’t win any prize.<br/>
              All tickets who win the “Match Last 2” prize will share the corresponding prize pool based on their weights. If a ticket has been staked for x terms, then the weight will be
              1+ln(x).<br/>
              Notes: Ticket A only wins the "Match Last 2" prize, but does not win the "Match Last 1" prize.
            </p>

            <div class="row pt-3">
              <div class="col-xl-3"></div>
              <div class="col-xl-6 d-flex justify-content-between">
                <img src="img/luckybox/num-7.png" style="max-width: 65px; max-height: 66px; margin-top: 11px">
                <img src="img/luckybox/num-6.png" style="max-width: 65px; max-height: 66px; margin-top: 11px">
                <img src="img/luckybox/num-5.png" style="max-width: 65px; max-height: 66px; margin-top: 11px">
                <img src="img/luckybox/num-9.png" style="max-width: 65px; max-height: 66px; margin-top: 11px">
              </div>
              <div class="col-xl-3"></div>
            </div>
            <div class="row pt-3">
              <div class="col-xl-3">
                <p class="fw-7 d-p fs-36" align="center">A</p>
              </div>
              <div class="col-xl-6 d-flex justify-content-between" style="padding: 0 4%">
                <p class="fw-7 d-g5 fs-36">6</p>
                <p class="fw-7 d-g5 fs-36">2</p>
                <p class="fw-7 d-g1 fs-36">5</p>
                <p class="fw-7 d-g1 fs-36">9</p>
              </div>
              <div class="col-xl-3"></div>
            </div>
            <div class="row pt-0 pb-4">
              <div class="col-xl-3">
                <p class="fw-7 d-p fs-36" align="center">B</p>
              </div>
              <div class="col-xl-6 d-flex justify-content-between" style="padding: 0 4%">
                <p class="fw-7 d-g5 fs-36">7</p>
                <p class="fw-7 d-g5 fs-36">6</p>
                <p class="fw-7 d-g5 fs-36">5</p>
                <p class="fw-7 d-g5 fs-36">0</p>
              </div>
              <div class="col-xl-3"></div>
            </div>


          </el-tab-pane>
          <el-tab-pane label="Prize Funds" name="PrizeFunds">
            <p class="fw-4 d-g2 fs-14">Part of the platform revenue will be put into the lucky box. Currently, 40% of the flight delay income, and 1% of the insurance token minted value will be put in
              the lucky box. Degis launches a one-million-dollar giving back plan. In the next 2 years, Degis will ensure that there is at least $10,000 in the lucky box every week. If the amount is
              not enough, Degis will make up the insufficient part.</p>
            <!--            <p class="fw-4 d-g2 fs-14">The prizes for each lottery round come from three sources:</p>-->
            <!--            <p class="fw-5 d-g2 fs-16">Premium Income Shares</p>-->
            <!--            <p class="fw-4 d-g2 fs-14">10% of the premium paid by people buying insurances will go into the prize pools.</p>-->
            <!--            <p class="fw-5 d-g2 fs-16">Rollover Prizes</p>-->
            <!--            <p class="fw-4 d-g2 fs-14">After every round, if nobody wins in one of the prize brackets, the unclaimed prize for that bracket rolls over into the next round and are redistributed among the prize pools.</p>-->
            <!--            <p class="fw-5 d-g2 fs-16">Fund Injections</p>-->
            <!--            <p class="fw-4 d-g2 fs-14">There will be a reserved fund for Degis platform coming from 10% of all the premium incomes and after community decisions it may inject funds into this lottery pool.</p>-->


            <div class="row pt-4 pb-5">
              <img src="img/luckybox/prizefunds.png" style="margin: auto; width: 80%"/>
<!--              <div class="col-xl-5">-->
<!--                <img src="img/luckybox/circle.png" style="width: 70%" align="right"/>-->
<!--              </div>-->

<!--              <div class="col-xl-7" style="padding: 0 5%">-->
<!--                <div class="d-flex justify-content-between">-->
<!--                  <div>-->
<!--                    <p class="fw-5 d-g4 fs-14">DIGITS MATCHED</p>-->
<!--                    <p class="fw-4 d-g3 fs-14" style="color: #8547FF">Matches First 1</p>-->
<!--                    <p class="fw-4 d-g3 fs-14" style="color: #FFA347">Matches First 2</p>-->
<!--                    <p class="fw-4 d-g3 fs-14" style="color: #4785FF">Matches First 3</p>-->
<!--                    <p class="fw-4 d-g3 fs-14" style="color: #12E5C2">Matches First 4</p>-->
<!--                  </div>-->
<!--                  <div style="text-align: right">-->
<!--                    <p class="fw-5 d-g4 fs-14">Prize Pool Allocation</p>-->
<!--                    <p class="fw-7 d-g3 fs-14">5%</p>-->
<!--                    <p class="fw-7 d-g3 fs-14">15%</p>-->
<!--                    <p class="fw-7 d-g3 fs-14">20%</p>-->
<!--                    <p class="fw-7 d-g3 fs-14">60%</p>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->

            </div>
          </el-tab-pane>
        </el-tabs>

      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "winning-rules",
  components: {},
  props: {
    show: Boolean,
  },
  data() {
    return {
      activeName: 'WinningCriteria',
    }
  },
  methods: {
    closeModal() {
      this.$emit("update:show", false);
      this.$emit("close");
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
