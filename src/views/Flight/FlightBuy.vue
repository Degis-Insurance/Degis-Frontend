<template>
  <base-header type="" class="pt-4">
    <h1 class="fw-7 d-g1 fs-34 mb-4">The Miserable Flight</h1>
    <stats-card>
      <div class="row align-items-center pb-2 d-flex justify-content-around">
        <div>
          <p class="fw-7 d-p fs-18">Search by Flight</p>
          <div class="d-flex">
            <el-select
              v-model="flightno"
              filterable
              placeholder="Select Flight"
            >
              <el-option
                v-for="item in flightoptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div>
          <p class="fw-7 d-p fs-18">Search by Route</p>
          <div class="d-flex align-items-center">
            <el-select
              v-model="origincity"
              filterable
              placeholder="Origin City"
            >
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
              style="width: 15px; margin: 0 8px"
            />
            <el-select
              v-model="destinationcity"
              filterable
              placeholder="Destination City"
            >
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

        <div>
          <p class="fw-7 d-p fs-18">Date</p>
          <el-date-picker
            v-model="datevalue"
            type="date"
            placeholder="Pick a day"
          ></el-date-picker>
        </div>
        <div>
          <p class="fw-7 d-p fs-18" style="color: white">Search</p>
          <div>
            <base-button @click="search">SEARCH</base-button>
          </div>
        </div>
      </div>
    </stats-card>

    <el-card class="dg-card">
      <el-table
        :data="flightData"
        class="dg-cardtable"
        :header-cell-style="{ 'text-align': 'center', height: '70px' }"
        :cell-style="{ 'text-align': 'center', height: '70px' }"
      >
        <el-table-column prop="airline" label="AIRLINE" sortable />
        <el-table-column prop="flightno" label="FLIGHT NO." sortable />
        <el-table-column prop="route" label="ROUTE" sortable />
        <el-table-column prop="departtime" label="DEPART TIME" sortable />
        <el-table-column prop="arrivetime" label="ARRIVE TIME" sortable />
        <el-table-column prop="premium" label="PREMIUM" sortable />
        <el-table-column prop="action" label="ACTION">
          <template #default="scope">
            <base-button @click="actionbuy(scope.row)">Buy</base-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="demo-pagination-block pt-4 pb-2" align="right">
        <!--        <el-pagination :currentPage="12" :page-size="1" layout="prev, pager, next, jumper" :total="12" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>-->
        <el-pagination
          :currentPage="1"
          :page-size="1"
          layout="prev, pager, next, jumper"
          :total="1"
        />
      </div>
    </el-card>

    <order-confirm v-model:show="BuyProduction" :buyData="buyData" />
  </base-header>
</template>

<script>
import { getFlightByRoute } from "@/api/functions";
import OrderConfirm from "./OrderConfirm";
import { ref } from "vue";
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
      flightData: [
        {
          airline: "AQ",
          flightno: "AQ1299",
          route: "Guangzhou-Shanghai",
          departtime: "2021-11-22T19:35:00",
          arrivetime: "2021-11-22T21:50:00",
          premium: "4",
        },
        {
          airline: "AQ",
          flightno: "AQ1299",
          route: "Guangzhou-Shanghai",
          departtime: "2021-11-24T19:35:00",
          arrivetime: "2021-11-24T21:50:00",
          premium: "4",
        },
        {
          airline: "WN",
          flightno: "WN186",
          route: "Lihue-Honolulu",
          departtime: "2021-11-22T08:45:00",
          arrivetime: "2021-11-22T09:20:00",
          premium: "4",
        },
        {
          airline: "WN",
          flightno: "WN186",
          route: "Lihue-Honolulu",
          departtime: "2021-11-24T08:45:00",
          arrivetime: "2021-11-24T09:20:00",
          premium: "4",
        },
      ],
      BuyProduction: false,
      datevalue: "",
      flightoptions: ref([
        { value: "FlightNo1", label: "FlightNo1" },
        { value: "FlightNo2", label: "FlightNo2" },
        { value: "FlightNo3", label: "FlightNo3" },
      ]),
      flightno: ref(""),
      ocoptions: ref([
        { value: "City1", label: "City1" },
        { value: "City2", label: "City2" },
        { value: "City3", label: "City3" },
      ]),
      origincity: ref(""),
      dcoptions: ref([
        { value: "City1", label: "City1" },
        { value: "City2", label: "City2" },
        { value: "City3", label: "City3" },
      ]),
      destinationcity: ref(""),
      buyData: {},
    };
  },
  methods: {
    actionbuy(val) {
      console.log(val);
      this.buyData = val;
      this.BuyProduction = true;
    },

    search() {
      getFlightByRoute().then((response) => {
        console.log(response);
      });
    },

    async ShowUserPolicy() {
      const PolicyFlow = await getPolicyFlow();
      const account = this.$store.state.selectedAccount;

      const policycount = await PolicyFlow.methods
        .getUserPolicyCount(account)
        .call();

      // findPolicyBuyerById

      const userpolicy = await PolicyFlow.methods.viewPolicy(account).call();

      return { policycount: policycount, userpolicy: userpolicy };
    },

    // async mainFlight() {
    //   var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
    //   var url = "http://39.101.132.228:8000/live/AQ1299/date=20211120"

    //   // httpRequest.withCredentials=true;
    //   httpRequest.open('GET', url, true);
    //   httpRequest.send();
    //   httpRequest.onreadystatechange = function () {
    //       if (httpRequest.readyState == 4 && httpRequest.status == 200) {
    //           var json = httpRequest.responseText;//获取到json字符串，还需解析
    //           console.log(json);
    //       }
    //   };
    // },

    async ShowUserPolicyEvent() {
      const policyinfo = await this.ShowUserPolicy();

      console.log("======================");
      console.log(policyinfo);
    },
  },
};
</script>

<style scoped></style>
