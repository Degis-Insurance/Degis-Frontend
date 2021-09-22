<template>
  <base-header type="" class="pb-6 pb-8 pt-5 pt-md-8">
    <h1 class="big-head mt-2 mb-4">The Miserable Flight</h1>
    <stats-card>
      <div class="container-fluid">
        <div class="row">
          <div class="col-5">
          </div>
          <div class="col-5">

          </div>
          <div class="col-2">

          </div>
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
// import BaseButton from "../components/BaseButton";
// import BaseInput from "../components/BaseInput";

export default {
  name: "flight",
  components: {
    // BaseButton,
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
