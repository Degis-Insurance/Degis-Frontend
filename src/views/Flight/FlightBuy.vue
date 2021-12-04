<template>
  <base-header type="" class="pt-4">
    <h1 class="d-f-1 mb-4">The Miserable Flight</h1>
    <stats-card>
      <div class="row align-items-center pb-2 d-flex justify-content-around">
        <div>
          <p class="d-f-4">Search by Flight</p>
          <div class="d-flex">
            <el-select v-model="flightno" filterable placeholder="Select Flight">
              <el-option v-for="item in flightoptions" :key="item.value" :value="item.value"></el-option>
            </el-select>
          </div>
        </div>
        <div>
          <!-- <p class="d-f-4">Search by Route</p>
          <div class="d-flex align-items-center">
            <el-select v-model="origincity" filterable placeholder="Origin City">
              <el-option v-for="item in cityoptions" :key="item" :value="item"></el-option>
            </el-select>
            <img src="img/function/flight-rarrow.png" style="width: 15px; margin: 0 8px"/>
            <el-select v-model="destinationcity" filterable placeholder="Destination City">
              <el-option v-for="item in cityoptions" :key="item" :value="item"></el-option>
            </el-select>
          </div> -->
        </div>

        <div>
          <p class="d-f-4">Date</p>
          <el-date-picker v-model="datevalue" format="YYYY-MM-DD" value-format="YYYY-MM-DD" placeholder="Pick a day"  @change="flightByNo()"></el-date-picker>
        </div>
        <div>
          <p class="d-f-4" style="color: white">Search</p>
          <div>
            <base-button @click="flightByNo()">SEARCH</base-button>
          </div>
        </div>
      </div>
    </stats-card>

    <el-card class="dg-card">
      <el-table :data="flightData" class="dg-cardtable" :header-cell-class-name="'d-f-3'" :header-cell-style="{ 'text-align': 'center', height: '70px' }"
                :cell-style="{ 'text-align': 'center', height: '70px' }">
        <el-table-column prop="airline" label="AIRLINE" sortable/>
        <el-table-column prop="flight_no" label="FLIGHT NO." sortable/>
        <el-table-column prop="route" label="ROUTE" sortable/>
        <el-table-column prop="depart_time" label="DEPART TIME" sortable>
          <template #default="scope">
            {{ scope.row.depart_time.split(' ')[1] }}
          </template>
        </el-table-column>
        <el-table-column prop="arrive_time" label="ARRIVE TIME" sortable>
          <template #default="scope">
            {{ scope.row.arrive_time.split(' ')[1] }} {{ scope.row.arrive_time.split(' ')[1] > scope.row.depart_time.split(' ')[1] ? '' : "(+1)" }}
          </template>
        </el-table-column>
        <el-table-column prop="premium" label="PREMIUM" sortable>
          <template #default="scope">
            {{ scope.row.premium.toString().substr(0, 4) }}
          </template>
        </el-table-column>
        <el-table-column prop="action" label="ACTION">
          <template #default="scope">
            <base-button @click="actionbuy(scope.row)">Buy</base-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="demo-pagination-block pt-4 pb-2" align="right">
        <!--        <el-pagination :currentPage="12" :page-size="1" layout="prev, pager, next, jumper" :total="12" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>-->
        <el-pagination :currentPage="1" :page-size="1" layout="prev, pager, next, jumper" :total="1"/>
      </div>
    </el-card>

    <order-confirm v-model:show="BuyProduction" :buyData="buyData"/>
  </base-header>
</template>

<script>
import {getFlight, getCity, getFlightByRoute, getFlightByNo} from "@/api/functions";
import OrderConfirm from "./OrderConfirm";
import dayjs from "dayjs";
import {ref} from "vue";
import {
  getMockUSD,
  getPolicyFlow,
  getInsurancePool,
} from "../../utils/contractInstance";

export default {
  name: "flight-buy",
  components: {
    OrderConfirm,
  },
  data() {
    return {
      flightData: "",
      BuyProduction: false,
      datevalue: "",
      flightoptions: ref([
        {value: "AQ1299", label: "AQ1299"},
        {value: "FlightNo2", label: "FlightNo2"},
        {value: "FlightNo3", label: "FlightNo3"},
      ]),
      flightno: ref(""),
      cityoptions: "",
      origincity: ref(""),
      destinationcity: ref(""),
      buyData: {},
    };
  },

  mounted() {
    this.City();
    this.defaultFlight();
  },

  methods: {
    City() {
      getCity().then((response) => {
        this.cityoptions = response.data.city_list;
      });
    },

    defaultFlight() {
      getFlight().then((response) => {
        this.flightData = response.data.data;
      });
    },

    flightByRoute() {
      let data = {
        origin: this.origincity,
        dest: this.destinationcity,
        depart_date: dayjs(this.datevalue).format('YYYYMMDD'),
      };
      getFlightByRoute(data).then((response) => {
        this.flightData = response.data.data;
      });
    },

    flightByNo() {
      let data = {
        flight_no: this.flightno,
        depart_date: dayjs(this.datevalue).format('YYYYMMDD'),
      };
      if(data["depart_date"] === "Invalid Date")
      {
        alert("Input Depart Date")
      }
      else
      {
        getFlightByNo(data).then((response) => {
          this.flightData = response.data.data;
        });
      }
    },

    actionbuy(val) {
      console.log(val);
      this.buyData = val;
      this.BuyProduction = true;
    },

    search() {
      // getFlightByRoute().then((response) => {
      //   console.log(response);
      // });
    },

    async ShowUserPolicy() {
      const PolicyFlow = await getPolicyFlow();
      const account = this.$store.state.selectedAccount;

      const policycount = await PolicyFlow.methods.getUserPolicyCount(account).call();

      const userpolicy = await PolicyFlow.methods.viewPolicy(account).call();

      return {policycount: policycount, userpolicy: userpolicy};
    },

    async ShowUserPolicyEvent() {
      const policyinfo = await this.ShowUserPolicy();

      console.log("======================");
      console.log(policyinfo);
    },
  },
};
</script>

<style scoped></style>
