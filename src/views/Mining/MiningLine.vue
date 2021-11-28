<template>
  <div class="container-fluid">
    <div class="row row-grid align-items-center">
      <div class="col-lg-3 d-flex align-items-center">
        <img :src="'img/mining/' + data.pic + '.png'" style="width: 50px" />
        <span class="fw-7 d-g1 fs-18 pl-3">{{ data.name }}</span>
      </div>
      <div class="col-lg-2 d-flex align-items-center">
        <span class="fw-7 d-g1 fs-18 pr-2">Earned</span>
        <img :src="'img/mining/token.png'" style="width: 50px" />
      </div>
      <div class="col-lg-3 d-flex align-items-center">
        <div>
          <img src="img/mining/clock.png" style="width: 50px" />
        </div>
        <div>
          <p class="fw-7 d-p fs-18">{{ data.status }}</p>
          <p class="fw-7 d-g1 fs-18">Mining Countdown</p>
        </div>
      </div>
      <div class="col-lg-2">
        <p class="fw-7 d-g1 fs-18">{{ data.apr }} APR</p>
      </div>
      <div class="col-lg-2 d-flex justify-content-center">
        <base-button v-if="!more" @click="showmore"
          >More <span class="el-icon-arrow-down"></span
        ></base-button>
        <base-button v-else @click="showmore"
          >More <span class="el-icon-arrow-up"></span
        ></base-button>
      </div>
    </div>
  </div>

  <hr style="margin: 20px" />

  <div v-if="more">
    <div class="container-fluid">
      <div class="row row-grid">
        <div class="col-lg-6">
          <div class="d-flex justify-content-between">
            <p class="fw-7 d-g1 fs-18">Available</p>
            <p class="fw-7 d-g1 fs-18">{{ data.available }} LPT</p>
          </div>
          <base-input></base-input>
          <base-button style="width: 100%">DEPOSIT</base-button>
          <div class="d-flex justify-content-between">
            <div>
              <p class="fw-7 d-g1 fs-18">My Deposits</p>
              <p class="fw-7 d-g1 fs-18">Total Deposited</p>
              <p class="fw-7 d-g1 fs-18">My Pool Share:</p>
            </div>
            <div>
              <p class="fw-7 d-g1 fs-18">{{ data.mydeposits }} LPT</p>
              <p class="fw-7 d-g1 fs-18">{{ data.totaldeposited }} LPT</p>
              <p class="fw-7 d-g1 fs-18">{{ data.mypoolshare }} LPT</p>
            </div>
          </div>
          <p class="fw-7 d-p fs-18">From @ Get BNB1000-HELMET LPT</p>
          <p class="fw-7 d-g1 fs-18">BNB1000 Contract Address:</p>
          <p class="fw-7 d-p fs-18">{{ data.address1 }}</p>
          <p class="fw-7 d-p fs-18">Add BNB1000 to Metamask</p>
        </div>
        <div class="col-lg-6">
          <div class="d-flex justify-content-between">
            <p class="fw-7 d-g1 fs-18">Amount to Withdraw:</p>
            <p class="fw-7 d-g1 fs-18">{{ data.withdraw }} LPT</p>
          </div>
          <base-input></base-input>
          <base-button style="width: 100%">Confirm Withdraw</base-button>
          <div class="d-flex justify-content-between">
            <p class="fw-7 d-g1 fs-18">hWAR Rewards:</p>
            <p class="fw-7 d-g1 fs-18">{{ data.reward }} hWAR</p>
          </div>
          <base-button style="width: 100%">Claim Rewards</base-button>
          <p class="fw-7 d-g1 fs-18">hWAR Contract Address:</p>
          <p class="fw-7 d-p fs-18">{{ data.address2 }}</p>
          <p class="fw-7 d-p fs-18" style="vertical-align: bottom">
            Add hWAR to Metamask
          </p>
        </div>
      </div>
    </div>
    <hr style="margin: 20px" />
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton";

export default {
  name: "mining-line",
  components: {
    BaseButton,
  },
  props: ["data"],
  data() {
    return {
      more: false,
    };
  },
  methods: {
    showmore() {
      this.more = !this.more;
    },
  },
};
</script>
<style scoped></style>
