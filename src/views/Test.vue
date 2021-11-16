<template>
  <base-header type="" class="pb-6 pb-8 pt-4">
    <h1 class="fw-7 d-g1 fs-34 mb-4">The Miserable Flight</h1>
    <stats-card>
      <div class="row align-items-center pb-2">
        <div class="col-xl-3">
          <p class="fw-7 d-p fs-18">Search by Flight</p>
          <div class="d-flex">
            <el-select v-model="flightno" filterable placeholder="Select Flight">
              <el-option v-for="item in tableData" :key="item.flightno" :label="item.flightno" :value="item.flightno"/>
            </el-select>
          </div>
        </div>
        <div class="col-xl-5">
          <p class="fw-7 d-p fs-18">Search by Route</p>
          <div class="d-flex align-items-center">
            <el-select v-model="origincity" filterable placeholder="Origin City">
              <el-option v-for="item in tableData" :key="item.route" :label="item.route" :value="item.route"/>
            </el-select>
            <img src="img/function/flight-rarrow.png" style="width: 15px; margin: 0 15px"/>
            <el-select v-model="destinationcity" filterable placeholder="Destination City">
              <el-option v-for="item in dcoptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>

        <div class="col-xl-2">
          <p class="fw-7 d-p fs-18">Date</p>
          <el-date-picker v-model="datevalue" style="width: 100%" type="date" placeholder="Pick a day"></el-date-picker>
        </div>

        <div class="col-xl-2">
          <p class="fw-7 d-p fs-18" style="color: white">Search</p>
          <div align="right">
            <base-button style="padding: 13px 0; width: 100%">SEARCH</base-button>
          </div>
        </div>
      </div>
    </stats-card>
    <el-table :data="tableData" class="dg-table" header-cell-style="text-align: center; height: 70px" cell-style="text-align: center; height: 70px">
      <el-table-column prop="airline" label="AIRLINE" sortable/>
      <el-table-column prop="flightno" label="FLIGHT NO." sortable/>
      <el-table-column prop="route" label="ROUTE" sortable/>
      <el-table-column prop="departtime" label="DEPART TIME" sortable/>
      <el-table-column prop="arrivetime" label="ARRIVE TIME" sortable/>
      <el-table-column prop="premium" label="PREMIUM" sortable/>
    </el-table>
    <div class="demo-pagination-block pt-4 pb-2" align="right">
      <el-pagination
          :currentPage="12"
          :page-size="1"
          layout="prev, pager, next, jumper"
          :total="12"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </base-header>
</template>

<script>
import {ref} from 'vue';

export default {
  name: "test",
  components: {},
  data() {
    return {
      tableData: [
        {
          airline: 'SouthWest',
          flightno: '1111',
          route: 'STL-AWL',
          departtime: '2021-09-09 12:12',
          arrivetime: '2021-09-10 01:00',
          premium: '4',
        },
        {
          airline: 'SouthEast',
          flightno: '1119',
          route: 'STL-AWL',
          departtime: '2021-09-09 12:12',
          arrivetime: '2021-09-10 01:00',
          premium: '7',
        },
        {
          airline: 'NorthWest',
          flightno: '0003',
          route: 'AWL-STL',
          departtime: '2021-09-09 12:12',
          arrivetime: '2021-09-10 01:00',
          premium: '2',
        },
        {
          airline: 'NorthEast',
          flightno: '2222',
          route: 'STL-AWL',
          departtime: '2021-09-09 12:12',
          arrivetime: '2021-09-10 01:00',
          premium: '3',
        },
      ],
      datevalue: '',
      flightoptions: ref([{value: 'FlightNo1', label: 'FlightNo1',}, {value: 'FlightNo2', label: 'FlightNo2',}, {value: 'FlightNo3', label: 'FlightNo3',},]),
      flightno: ref(''),
      ocoptions: ref([{value: 'City1', label: 'City1',}, {value: 'City2', label: 'City2',}, {value: 'City3', label: 'City3',}]),
      origincity: ref(''),
      dcoptions: ref([{value: 'City1', label: 'City1',}, {value: 'City2', label: 'City2',}, {value: 'City3', label: 'City3',}]),
      destinationcity: ref(''),
    }
  },
  methods: {
    formatter(row, column, cellValue, index) {
      return cellValue
    },
    rowclass(row, rowIndex) {
      return rowIndex
    }
  }
};
</script>

<style scoped>

</style>
