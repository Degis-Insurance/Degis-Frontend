<template>
  <base-header type="" class="pt-4">
    <h1 class="d-f-1 mb-4">Protection products built by DEGIS</h1>
    <el-card class="dg-card">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-lg-5 order-md-1">
            <img src="img/protection/flight.png" class="img-fluid" style="width: 300px"/>
          </div>
          <div class="col-lg-7 order-md-2">
            <p class="d-f-1">Miserable Flight</p>
            <p class="d-f-3 pt-2">
              In this crazy world, especially during the pandemic, flights tend
              to be miserable. Few is on time, most are delayed, and some are
              even cancelled. At Degis Miserable Flight, protect yourself by
              predicting whether flights are delayed and get paid accordingly.
            </p>
            <div class="d-flex justify-content-around pt-4">
              <a href="/#/flight">
                <base-button> BUY </base-button>
              </a>
              <a href="/#/flight">
                <base-button>Provide</base-button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </el-card>
    <el-card class="dg-card">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-lg-5 order-md-1">
            <img src="img/protection/price.png" class="img-fluid" style="width: 300px"/>
          </div>
          <div class="col-lg-7 order-md-2">
            <p class="d-f-1">Naughty Price</p>
            <p class="d-f-3 pt-2">
              The world of Blockchain is beyond imagination. Token prices are very naughty, as they can drop to zero immediately. At Degis Naughty Price, protect your money by foreseeing the price
              change and purchase the right policy.
            </p>
            <div class="d-flex justify-content-between pt-4">
                <a href="/#/price">
                  <base-button @click="window.href.location('/#/price')">CREATE</base-button>
                </a>
              <a href="/#/price">
                <base-button>BUY/SELL</base-button>
              </a>
              <a href="/#/price">
                <base-button>PROVIDE</base-button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </base-header>
</template>

<script>
// import ProjectsTable from "./Insurance/InsurancesTable";
import BaseButton from "@/components/BaseButton";
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

</style>
