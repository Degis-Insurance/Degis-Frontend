<template>
  <base-header type="" class="pb-6 pb-8 pt-5 pt-md-8">
    <h1 class="big-head mt-2 mb-4">Protection products built by DEGIS</h1>
    <stats-card>
      <div class="container-fluid">
        <div class="row">
          <div class="col-5">
            <img src="img/function/product-flight.png" style="width: 100%" />
          </div>
          <div class="col-6" style="padding-top: 5%">
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
                <img src="img/function/product-prog.png" style="width: 70%">
              </div>
              <base-button class="px-7">BUY</base-button>
            </div>
          </div>
          <div class="col-1"></div>
        </div>
      </div>
    </stats-card>
        <stats-card>
      <div class="container-fluid">
        <div class="row">
          <div class="col-5">
            <img src="img/function/product-price.png" style="height: 100%;" />
          </div>
          <div class="col-6" style="padding-top: 5%">
            <h1 class="big-head">The Naught Price</h1>
            <h5 class="product-desc pt-4">
              In this crazy world, especially during the pandemic, flights tend
              to be miserable. Few is on time, most are delayed, and some are
              even cancelled. At Degis Miserable Flight, protect yourself by
              predicting whether flights are delayed and get paid accordingly.
            </h5>
            <div class="d-flex justify-content-between" style="padding-top: 12%">
              <div class="display-4" style="line-height: 25px">
                <span>Designed</span>
                <img src="img/function/product-prog.png" style="width: 70%">
              </div>
              <base-button class="px-7">BUY</base-button>
            </div>
          </div>
          <div class="col-1"></div>
        </div>
      </div>
    </stats-card>
  </base-header>

<!--  <div class="container-fluid">-->
<!--    <div class="row">-->
<!--      <div class="col">-->
<!--        <projects-table title="Light Table"></projects-table>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
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
