<template>
  <section class="section"></section>

  <div class="dg-container shape-container d-flex align-items-center">
    <div class="col px-0">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-5 order-md-1 hidden-sm-and-down">
          <img src="img/homepage/liquidity-mining.png" class="img-fluid floating"/>
        </div>
        <div class="col-lg-1 order-md-2 hidden-sm-and-down"></div>
        <div class="col-lg-6 order-md-3">
          <h3 class="hp-title2 pb-4">Liquidity Mining</h3>
          <p class="hp-desc">To solve the no-buyer situation in Blockchain insurance, Degis provide liquidity mining reward to both buyer and providers. Buyers can gain DEG tokens directly when purchased insurances and didn't get payoffs; Providers receive LP token from insurance pools and can get DEG tokens by staking LP tokens.</p>
          <div class="btn-wrapper d-flex pt-4 justify-content-between" style="padding-right: 15%">
<!--            <a href="/#/mining">-->
              <base-button>launch mining</base-button>
<!--            </a>-->
            <a href="https://docs.degis.io/">
              <base-button>Read More</base-button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import BaseButton from "../../components/BaseButton";
export default {
  name: "liquiditymining",
  // components: {BaseButton},
};
</script>

<style scoped>

</style>
