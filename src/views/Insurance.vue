<template>
  <div>
    <base-header type="gradient-primary" class="pb-6 pb-8 pt-5 pt-md-8">
      <div class="row">
        <div class="col-12">
          <stats-card>
            <div class="row" style="margin-bottom: -2rem">
              <div class="col-2">
                <span>Flight number:</span>
                <base-input class="mt-2"></base-input>
              </div>
              <div class="col-2">
                <span>Product:</span>
                <base-input class="mt-2"></base-input>
              </div>
              <div class="col-2">
                <span>Departure date:</span>
                <base-input class="mt-2"></base-input>
              </div>
              <div class="col-2">
                <span>Premium:</span>
                <base-input class="mt-2"></base-input>
              </div>
              <div class="col-2">
                <span>Maximum payoff:</span>
                <base-input class="mt-2"></base-input>
              </div>
              <div class="col-2 mt-1">
                <base-button block type="primary" style="height: 78%">Search</base-button>
              </div>
            </div>
          </stats-card>
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col">
          <projects-table title="Light Table"></projects-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectsTable from "./Insurance/InsurancesTable";
import BaseInput from "../components/BaseInput";

export default {
  name: "insurance",
  components: {
    BaseInput,
    ProjectsTable,
  },
};
</script>

<style scoped></style>
