<template>
  <base-header type="" class="pb-6 pb-8 pt-4">
    <h1 class="fw-7 d-g1 fs-34 mb-4">The Miserable Flight</h1>
    <stats-card>
      <div class="row align-items-center pb-2">
        <div class="col-xl-3">
          <p class="fw-7 d-p fs-18">Search by Flight</p>
          <div class="d-flex">
            <el-select v-model="flightno" filterable placeholder="Select Flight">
              <el-option
                v-for="item in flightoptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="col-xl-5">
          <p class="fw-7 d-p fs-18">Search by Route</p>
          <div class="d-flex align-items-center">
            <el-select v-model="origincity" filterable placeholder="Origin City">
              <el-option
                v-for="item in ocoptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <img
              src="img/function/flight-rarrow.png"
              style="width: 15px; margin: 0 15px"
            />
            <el-select v-model="destinationcity" filterable placeholder="Destination City">
              <el-option
                v-for="item in dcoptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </div>

        <div class="col-xl-2">
          <p class="fw-7 d-p fs-18">Date</p>
          <el-date-picker v-model="datevalue" type="date" placeholder="Pick a day"></el-date-picker>
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
import {ref} from 'vue';
// import BaseButton from "../components/BaseButton";
// import BaseInput from "../components/BaseInput";

export default {
  name: "flight",
  components: {
    // BaseButton,
    // BaseInput,
    FlightTable,
  },
  data() {
    return {
      datevalue: '',
      flightoptions: ref([{value: 'FlightNo1', label: 'FlightNo1',}, {value: 'FlightNo2', label: 'FlightNo2',}, {value: 'FlightNo3', label: 'FlightNo3',},]),
      flightno: ref(''),
      ocoptions: ref([{value: 'City1', label: 'City1',}, {value: 'City2', label: 'City2',}, {value: 'City3', label: 'City3',}]),
      origincity: ref(''),
      dcoptions: ref([{value: 'City1', label: 'City1',}, {value: 'City2', label: 'City2',}, {value: 'City3', label: 'City3',}]),
      destinationcity: ref(''),
    }
  }
};
</script>

<style scoped>

</style>
