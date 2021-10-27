<template>
  <base-header type="" class="pb-6 pb-8 pt-4">
    <h1 class="big-head mt-2 mb-4">Mining by DEGIS</h1>
    <stats-card>
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-xl-6 order-md-1">
            <h2 class="sub-head">The Miserable Flight Pool</h2>
            <div class="row justify-content-between" style="padding: 2% 0">
              <div class="col-6">
                <img
                  src="img/function/mining-circle.png"
                  class="img-fluid"
                  style="width: 80%"
                />
              </div>
              <div class="col-6">
                <h5 class="text-l">Total Value Locker: <bold> XXXX</bold></h5>
                <h5 class="text-l">Available Capacity: <bold> XXXX</bold></h5>
                <h5 class="text-l">Current Policies: <bold> XXXX</bold></h5>
                <h5 class="text-l">Locked Ratio: <bold> XXXX</bold></h5>
                <h5 class="text-l">APR: <bold> XX%</bold></h5>
              </div>
            </div>
            <h5 class="text-l">
              Pool Address: <bold> XXXXXXXXXXXXXXXXXX</bold>
            </h5>
          </div>
          <div class="col-xl-6 order-md-2">
            <h5 class="text-r">Your Asset: <bold> XXXX (+XX%)</bold></h5>
            <input
              class="degis-input"
              style="width: 100%; margin: 4% 0"
              placeholder="0"
            />
            <div
              class="d-flex justify-content-between"
              style="padding-bottom: 11%"
            >
              <base-button style="width: 45%"> DEPOSIT </base-button>
              <base-button style="width: 45%"> WITHDRAW </base-button>
            </div>
            <h5 class="text-r">Your Premium Income: <bold> XXXX</bold></h5>
            <h5 class="text-r">Your DEGIS Token Income: <bold> XXXX</bold></h5>
            <base-button style="width: 100%; margin-bottom: 2%">HARVEST REWARD</base-button>
          </div>
        </div>
      </div>
    </stats-card>
    <stats-card>
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-xl-6 order-md-1">
            <h2 class="sub-head">The Naught Price Pool</h2>
            <div class="row justify-content-between" style="padding: 2% 0">
              <div class="col-6">
                <img
                  src="img/function/mining-circle-2.png"
                  class="img-fluid"
                  style="width: 80%"
                />
              </div>
              <div class="col-6">
                <h5 class="text-l">Total Value Locker: <bold> XXXX</bold></h5>
                <h5 class="text-l">Available Capacity: <bold> XXXX</bold></h5>
                <h5 class="text-l">Current Policies: <bold> XXXX</bold></h5>
                <h5 class="text-l">Locked Ratio: <bold> XXXX</bold></h5>
                <h5 class="text-l">APR: <bold> XX%</bold></h5>
              </div>
            </div>
            <h5 class="text-l">
              Pool Address: <bold> XXXXXXXXXXXXXXXXXX</bold>
            </h5>
          </div>
          <div class="col-xl-6 order-md-2">
            <h5 class="text-r">Your Asset: <bold> XXXX (+XX%)</bold></h5>
            <input
              class="degis-input"
              style="width: 100%; margin: 4% 0"
              placeholder="0"
            />
            <div
              class="d-flex justify-content-between"
              style="padding-bottom: 11%"
            >
              <deposit style="width: 45%"> DEPOSIT </deposit>
              <base-button style="width: 45%"> WITHDRAW </base-button>
            </div>
            <h5 class="text-r">Your Premium Income: <bold> XXXX</bold></h5>
            <h5 class="text-r">Your DEGIS Token Income: <bold> XXXX</bold></h5>
            <base-button style="width: 100%; margin-bottom: 2%">HARVEST REWARD</base-button>
          </div>
        </div>
      </div>
    </stats-card>
  </base-header>
</template>

<script>
import BaseButton from "../components/BaseButton";
import Deposit from "../components/Deposit";

export default {
  name: "mining",
  components: {
    BaseButton,
    Deposit,
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
  font-weight: bold;
  font-size: 28px;
  color: #2c2d2f;
  padding: 3% 0;
}

.text-l {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #86898c;

  padding: 4% 0;
}

.text-r {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #86898c;
  padding-bottom: 2%;
}

bold {
  padding-left: 5px;
  font-weight: bold;
}
</style>
