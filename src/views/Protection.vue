<template>
  <base-header type="" class="pb-6 pb-8 pt-4">
    <h1 class="big-head mt-2 mb-4">Protection products built by DEGIS</h1>
    <stats-card>
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-lg-6 order-md-1">
            <img src="img/function/product-flight.png" class="img-fluid" />
          </div>
          <div class="col-lg-6 order-md-2">
            <h1 class="big-head">The Miserable Flight</h1>
            <h5 class="product-desc pt-4">
              In this crazy world, especially during the pandemic, flights tend
              to be miserable. Few is on time, most are delayed, and some are
              even cancelled. At Degis Miserable Flight, protect yourself by
              predicting whether flights are delayed and get paid accordingly.
            </h5>
            <div class="d-flex justify-content-between" style="padding-top: 12%">
              <div class="display-4" style="line-height: 25px">
                <span>Finished</span>
                <img src="img/function/product-prog.png" style="width: 70%" />
              </div>
              <base-button style="padding: 0px 15%">BUY</base-button>
            </div>
          </div>
        </div>
      </div>
    </stats-card>
    <stats-card>
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-lg-6 order-md-1">
            <img src="img/function/product-price.png" class="img-fluid" />
          </div>
          <div class="col-lg-6 order-md-2">
            <h1 class="big-head">The Naught Price</h1>
            <h5 class="product-desc pt-4">
              The world of Blockchain is beyond imagination. Token prices are very naught, as they can drop to zero immediately. At Degis Naught Price, protect your money by foreseeing the price change and purchase the right policy.
            </h5>
            <div class="d-flex justify-content-between" style="padding-top: 12%">
              <div class="display-4" style="line-height: 25px">
                <span>Designed</span>
                <img src="img/function/product-prog.png" style="width: 70%" />
              </div>
              <base-button style="padding: 0px 15%">BUY</base-button>
            </div>
          </div>
        </div>
      </div>
    </stats-card>
  </base-header>
</template>

<script>
// import ProjectsTable from "./Insurance/InsurancesTable";
import BaseButton from "../components/BaseButton";
// import BaseInput from "../components/BaseInput";

export default {
  name: "protection",
  components: {
    BaseButton,
    // BaseInput,
    // ProjectsTable,
  },
};
</script>

<style scoped>
.big-head {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 900;
  font-size: 34px;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: #2c2d2f;
}

.product-desc {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: #86898c;
}
</style>
