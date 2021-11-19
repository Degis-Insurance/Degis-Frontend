<template>
  <base-header type="" class="pb-6 pb-8 pt-4">

    <stats-card class="mt-5">
      <div class="row align-items-center pb-4">
        <div class="col-xl-5 pt-4" style="padding: 0 4%;">
          <div class="d-flex pb-5">
            <img src="img/function/flight-comp.png" style="width: 88px; height: 88px"/>
            <div>
              <p class="fw-4 d-g1 fs-20 pl-3 pt-2">{{ buyData.airline }}</p>
              <p class="fw-4 d-g3 fs-14 pl-3">{{ buyData.flightno }}</p>
            </div>
          </div>
          <img src="img/function/flight-info.png" class="pb-4" style="width: 100%;"/>
          <div class="d-flex justify-content-between">
            <p class="fw-4 d-p fs-32">ABC</p>
            <p class="fw-4 d-g3 fs-16 pt-3">5h 25m</p>
            <p class="fw-4 d-p fs-32">CBA</p>
          </div>

          <div class="d-flex justify-content-between">
            <p class="fw-4 d-g3 fs-14">Copenhagen, Denmark</p>
            <p class="fw-4 d-g3 fs-14">Oclo, Norway</p>
          </div>
          <div class="d-flex justify-content-between">
            <p class="fw-4 d-g3 fs-14">Thu 15 Oct</p>
            <p class="fw-4 d-g3 fs-14">Fri 16 Oct</p>
          </div>
          <div class="d-flex justify-content-between">
            <p class="fw-4 d-g3 fs-14">23:45</p>
            <p class="fw-4 d-g3 fs-14">04:30</p>
          </div>
          <div class="d-flex justify-content-between">
            <p class="fw-4 d-g3 fs-14">Terminal 1</p>
            <p class="fw-4 d-g3 fs-14">Terminal 1</p>
          </div>

          <img src="img/function/flight-info2.png" class="pt-4" style="width: 100%;"/>

        </div>

        <div class="col-xl-7 pt-4" style="padding: 0 4%">
          <img src="img/function/flight-map.png" style="width: 100%; margin: 3% 0"/>
          <div class="row d-flex justify-content-between pt-4">
            <div class="col-xl-6">
              <div class="d-flex justify-content-between">
                <p class="fw-4 d-g3 fs-16">Protection Premium:</p>
                <p class="fw-7 d-p fs-16">12.3467</p>
              </div>
              <div class="d-flex justify-content-between" style="margin-top: -20px">
                <p class="fw-4 d-g3 fs-16">Maximum Payoff:</p>
                <p class="fw-7 d-p fs-16">19.2824</p>
              </div>
            </div>
            <div class="col-xl-6 pt-1" align="right">
              <base-button @click="BuyProduction = true">BUY PROTECTION</base-button>
            </div>
          </div>
        </div>

      </div>
    </stats-card>
    <order-confirm v-model:show="BuyProduction">
      <template v-slot:footer>
      <base-button style="width: 100%; margin-top: 16%" @click="BuyProduction = false">CONFIRM</base-button>
    </template>
    </order-confirm>

  </base-header>
</template>

<script>
import OrderConfirm from "./OrderConfirm";
import {ref} from 'vue';

export default {
  name: "action-buy",
  components: {
    OrderConfirm,
  },
  props: {
    buyData: Object,
  },
  data() {
    return {
      BuyProduction: false,
    }
  }
};
</script>

<style scoped>

</style>
