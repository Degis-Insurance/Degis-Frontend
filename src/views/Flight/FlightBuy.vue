<template>
  <base-header type="" class="pb-6 pb-8 pt-4">
    <h1 class="fw-7 d-g1 fs-34 mb-4">The Miserable Flight</h1>
    <stats-card>
      <div class="row align-items-center pb-2">
        <div class="col-xl-3">
          <p class="fw-7 d-p fs-18">Search by Flight</p>
          <div class="d-flex">
            <el-select v-model="flightno" filterable placeholder="Select Flight">
              <el-option v-for="item in flightoptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="col-xl-5">
          <p class="fw-7 d-p fs-18">Search by Route</p>
          <div class="d-flex align-items-center">
            <el-select v-model="origincity" filterable placeholder="Origin City">
              <el-option v-for="item in ocoptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
            <img
                src="img/function/flight-rarrow.png"
                style="width: 15px; margin: 0 15px"
            />
            <el-select v-model="destinationcity" filterable placeholder="Destination City">
              <el-option v-for="item in dcoptions" :key="item.value" :label="item.label" :value="item.value">
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
            <base-button style="padding: 13px 46px;" @click="NewPolicyEvent">SEARCH</base-button>
          </div>
        </div>
      </div>
    </stats-card>

    <el-card class="dg-card">
      <el-table :data="flightData" class="dg-cardtable" header-cell-style="text-align: center; height: 70px" cell-style="text-align: center; height: 70px">
        <el-table-column prop="airline" label="AIRLINE" sortable/>
        <el-table-column prop="flightno" label="FLIGHT NO." sortable/>
        <el-table-column prop="route" label="ROUTE" sortable/>
        <el-table-column prop="departtime" label="DEPART TIME" sortable/>
        <el-table-column prop="arrivetime" label="ARRIVE TIME" sortable/>
        <el-table-column prop="premium" label="PREMIUM" sortable/>
        <el-table-column prop="action" label="ACTION">
          <template #default="scope">
            <base-button @click="actionbuy(scope.row)">Buy</base-button>
          </template>
        </el-table-column>
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
    </el-card>


    <order-confirm v-model:show="BuyProduction">
      <template v-slot:footer>
        <base-button style="width: 100%; margin-top: 16%" @click="BuyProduction = false">CONFIRM</base-button>
      </template>
    </order-confirm>

  </base-header>
</template>

<script>

import OrderConfirm from "./OrderConfirm";
import {ref} from 'vue';
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
      BuyProduction: false,
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
    actionbuy(val) {
      console.log(val);
      this.BuyProduction = true;

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

    async NewPolicy(premium, payoff, flight_number, timestamp1) {
      const PolicyFlow = await getPolicyFlow();
      const MockUSD = await getMockUSD();
      const InsurancePool = await getInsurancePool();
      const account = this.$store.state.selectedAccount;

      var timestamp2 = timestamp1 + 300; // 飞行时间5min

      console.log(flight_number, timestamp1);

      const tx1 = await MockUSD.methods
        .approve(InsurancePool.options.address, window.WEB3.utils.toBN(premium))
        .send({ from: account });

      console.log("Tx Hash:", tx1.transactionHash);

      const tx2 = await PolicyFlow.methods
        .newApplication(
          account,
          0,
          flight_number,
          window.WEB3.utils.toBN(premium),
          window.WEB3.utils.toBN(payoff),
          timestamp1,
          timestamp2
        )
        .send({ from: account });
      console.log("Tx Hash:", tx2.transactionHash);
      console.log(tx2);
      console.log("policy Id:", tx2.logs[0].args[0]);
    },

    async ShowUserPolicyEvent() {
      const policyinfo = await this.ShowUserPolicy();
      
      console.log("======================");
      console.log(policyinfo);
    },

    async NewPolicyEvent() {
      const premium = 1111;
      const payoff = 111;
      const flight_number = "WN186";
      const timestamp1 = 1636189973;

      await this.NewPolicy(premium, payoff, flight_number, timestamp1);
    },
  },
};

</script>

<style scoped>

</style>
