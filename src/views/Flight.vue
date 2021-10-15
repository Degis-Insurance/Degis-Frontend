<template>
  <base-header type="" class="pb-6 pb-8 pt-4">
    <h1 class="big-head mt-2 mb-4">The Miserable Flight</h1>
    <stats-card>
      <div class="row align-items-center pb-3">
        <div class="col-xl-3">
          <h2 class="sub-head">Search by Flight</h2>
          <div class="d-flex">
            <input class="degis-input" placeholder="Flight No." />
          </div>
        </div>
        <div class="col-xl-5">
          <h2 class="sub-head">Search by Route</h2>
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
          <h2 class="sub-head">Date</h2>
          <div class="d-flex">
            <input class="degis-input" placeholder="Tue 05/12" />
          </div>
        </div>
        <div class="col-xl-2">
          <h2 class="sub-head" style="color: white">Search</h2>
          <div align="right">
            <base-button style="padding: 13px 46px;">SEARCH</base-button>
          </div>
        </div>
      </div>
    </stats-card>
<!--    <stats-card>-->
        <projects-table></projects-table>
<!--    </stats-card>-->
  </base-header>
</template>

<script>
import ProjectsTable from "./Insurance/InsurancesTable";
// import BaseButton from "../components/BaseButton";
// import BaseInput from "../components/BaseInput";

export default {
  name: "flight",
  components: {
    // BaseButton,
    // BaseInput,
    ProjectsTable,
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

.sub-head {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 50px;
  /*letter-spacing: -0.02em;*/
  color: #6415ff;
}


</style>
