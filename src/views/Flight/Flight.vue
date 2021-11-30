<template>
  <base-header type="" class="pt-4">
    <h1 class="fw-7 d-g1 fs-34 mb-4">The Miserable Flight</h1>
    <el-card class="dg-card">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-lg-5 order-md-1 d-flex justify-content-between">
            <img src="img/protection/flight.png" class="img-fluid" style="width: 300px"/>
          </div>
          <div class="col-lg-7 order-md-2">
            <div class="d-flex justify-content-between">
              <p class="fw-7 d-g1 fs-34">Introduction</p>
            </div>
            <p class="fw-4 d-g3 fs-16 pt-3">
              In this crazy world, especially during the pandemic, flights tend to be miserable. Some are on time, some are delayed, and some are even canceled. At Degis Miserable Flight, protect yourself from delayed flights and get paid accordingly.
            </p>
          </div>
        </div>
      </div>
    </el-card>
    <el-card class="dg-card">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-lg-5 order-md-1 d-flex justify-content-between">
            <img src="img/protection/price/buy.png" class="img-fluid" style="width: 300px"/>
          </div>
          <div class="col-lg-7 order-md-2">
            <div class="d-flex justify-content-between">
              <p class="fw-7 d-g1 fs-34">Buy</p>
              <a href="/#/flight-buy" style="line-height: 50px; width: 50%" align="right">
                <base-button style="padding: 0px; width: 50%">BUY</base-button>
              </a>
            </div>
            <p class="fw-4 d-g3 fs-16 pt-3">
              The payout grows more and more with the delay time and will be $120 when the flight delays over 4 hours. If the flight is delayed, then the corresponding payout will be given to the insurance holder automatically. The price of insurance may be different due to flight, buying time, and sales volume, which is calculated by our AI algorithm.
            </p>
          </div>
        </div>
      </div>
    </el-card>
    <el-card class="dg-card">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-lg-5 order-md-1 d-flex justify-content-between">
            <img src="img/protection/price/provide.png" class="img-fluid" style="width: 300px"/>
          </div>
          <div class="col-lg-7 order-md-2">
            <div class="d-flex justify-content-between">
              <p class="fw-7 d-g1 fs-34">Provide</p>
              <a href="/#/flight-provide" style="line-height: 50px; width: 50%" align="right">
                <base-button style="padding: 0px; width: 50%">PROVIDE</base-button>
              </a>
            </div>
            <p class="fw-4 d-g3 fs-16 pt-3">
              Liquidity providers who deposit their money in the pool to improve the payout ability can be regarded as insurance sellers. All insurance sales revenue will be put into the insurance pool. Liquidity providers can share 50% of the income as payback.
            </p>
          </div>
        </div>
      </div>
    </el-card>
  </base-header>
</template>

<script>
import OrderConfirm from "./OrderConfirm";
import {ref} from 'vue';

export default {
  name: "flight",
  components: {
    OrderConfirm,
  },
};

</script>

<style scoped>

</style>
