<template>
  <base-header type="" class="pb-6 pb-8 pt-4">
    <h1 class="fw-7 d-g1 fs-34 mb-4">The Miserable Flight</h1>
    <stats-card>
      <div class="row align-items-center pb-3">
        <div class="col-xl-3">
          <p class="fw-7 d-p fs-18">Search by Flight</p>
          <div class="d-flex">
            <input class="degis-input" placeholder="Flight No." />
          </div>
        </div>
        <div class="col-xl-5">
          <p class="fw-7 d-p fs-18">Search by Route</p>
          <div class="d-flex align-items-center">
            <input class="degis-input" placeholder="Origin City" />
            <img
              src="img/function/flight-rarrow.png"
              style="width: 15px; margin-right: 10px"
            />
            <input class="degis-input" placeholder="Destination City" />
          </div>
        </div>
        <div class="col-xl-2">
          <p class="fw-7 d-p fs-18">Date</p>
          <div class="d-flex">
            <input class="degis-input" placeholder="Tue 05/12" />
          </div>
        </div>
        <div class="col-xl-2">
          <p class="fw-7 d-p fs-18" style="color: white">Search</p>
          <div align="right">
            <base-button style="padding: 13px 46px;">SEARCH</base-button>
          </div>
        </div>
      </div>
    </stats-card>
<!--    <stats-card>-->
        <flight-table></flight-table>
<!--    </stats-card>-->
  </base-header>
</template>

<script>
import FlightTable from "./FlightTable";
// import BaseButton from "../components/BaseButton";
// import BaseInput from "../components/BaseInput";

export default {
  name: "flight",
  components: {
    // BaseButton,
    // BaseInput,
    FlightTable,
  },
};
</script>

<style scoped>

</style>
