<template>
  <base-header type="" class="pb-6 pb-8 pt-4">
    <h1 class="fw-7 d-g1 fs-34 mb-4">The Miserable Flight</h1>
    <el-card class="dg-card">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-lg-6 order-md-1 d-flex justify-content-between">
            <img src="img/protection/flight.png" class="img-fluid" style="width: 300px"/>
          </div>
          <div class="col-lg-6 order-md-2">
            <div class="d-flex justify-content-between">
              <p class="fw-7 d-g1 fs-34">Intruduction</p>
            </div>
            <p class="fw-4 d-g3 fs-16 pt-4">
              In this crazy world, especially during the pandemic, flights tend to be miserable. Few is on time, most are delayed, and some are even cancelled. At Degis Miserable Flight, protect
              yourself by predicting whether flights are delayed and get paid accordingly.
            </p>
          </div>
        </div>
      </div>
    </el-card>
    <el-card class="dg-card">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-lg-6 order-md-1 d-flex justify-content-between">
            <img src="img/protection/price/buy.png" class="img-fluid" style="width: 300px"/>
          </div>
          <div class="col-lg-6 order-md-2">
            <div class="d-flex justify-content-between">
              <p class="fw-7 d-g1 fs-34">Buy</p>
              <a href="/#/flight-buy" style="line-height: 50px; width: 50%" align="right">
                <base-button style="padding: 0px; width: 50%">BUY</base-button>
              </a>
            </div>
            <p class="fw-4 d-g3 fs-16 pt-4">
              In this crazy world, especially during the pandemic, flights tend to be miserable. Few is on time, most are delayed, and some are even cancelled. At Degis Miserable Flight, protect
              yourself by predicting whether flights are delayed and get paid accordingly.
            </p>
          </div>
        </div>
      </div>
    </el-card>
    <el-card class="dg-card">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-lg-6 order-md-1 d-flex justify-content-between">
            <img src="img/protection/price/provide.png" class="img-fluid" style="width: 300px"/>
          </div>
          <div class="col-lg-6 order-md-2">
            <div class="d-flex justify-content-between">
              <p class="fw-7 d-g1 fs-34">Provide</p>
              <a href="/#/flight-provide" style="line-height: 50px; width: 50%" align="right">
                <base-button style="padding: 0px; width: 50%">PROVIDE</base-button>
              </a>
            </div>
            <p class="fw-4 d-g3 fs-16 pt-4">
              In this crazy world, especially during the pandemic, flights tend to be miserable. Few is on time, most are delayed, and some are even cancelled. At Degis Miserable Flight, protect
              yourself by predicting whether flights are delayed and get paid accordingly.
            </p>
          </div>
        </div>
      </div>
    </el-card>
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
  name: "flight",
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
      console.log(policyinfo["policycount"]);
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
