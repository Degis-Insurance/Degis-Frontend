<template>
  <base-header type="" class="pt-4">
    <h1 class="d-f-1 mb-4">The Naughty Price</h1>
    <el-card class="dg-card">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-lg-5 order-md-1 d-flex justify-content-between">
            <img src="img/protection/price.png" class="img-fluid" style="width: 300px"/>
          </div>
          <div class="col-lg-7 order-md-2">
            <div class="d-flex justify-content-between">
              <p class="d-f-1">Introduction</p>
            </div>
            <p class="d-f-3 pt-3">
              The world of Blockchain is beyond imagination. Token prices are very naughty, as they can drop to zero immediately. At Degis Naughty Price, protect your money by foreseeing the price change and purchase the right policy.
            </p>
          </div>
        </div>
      </div>
    </el-card>

    <el-card class="dg-card">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-lg-5 order-md-1 d-flex justify-content-between">
            <img src="img/protection/price/create.png" class="img-fluid" style="width: 300px"/>
          </div>
          <div class="col-lg-7 order-md-2">
            <div class="d-flex justify-content-between">
              <p class="d-f-1">Create</p>
              <a href="/#/price-create" style="line-height: 50px; width: 50%" align="right">
                <base-button style="padding: 0px; width: 50%">CREATE</base-button>
              </a>
            </div>
            <p class="d-f-3 pt-3">
              To get one insurance token, the creator should deposit $1 in the policy pool. If the certain event corresponding to the insurance token happens, the deposited money will be paid to the
              token holders. If it does not happen, creators can redeem the money. After creating, creators can hold, sell, and provide liquidity.
            </p>
          </div>
        </div>
      </div>
    </el-card>
    <el-card class="dg-card">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-lg-5 order-md-1 d-flex justify-content-between">
            <img src="img/protection/price/buy.png" class="img-fluid" style="width: 300px"/>
          </div>
          <div class="col-lg-7 order-md-2">
            <div class="d-flex justify-content-between">
              <p class="d-f-1">Buy</p>
              <a href="/#/price-buy-sell" style="line-height: 50px; width: 50%" align="right">
                <base-button style="padding: 0px; width: 50%">BUY</base-button>
              </a>
            </div>
            <p class="d-f-3 pt-3">
              An insurance token is a crypto coin and is also a piece of insurance. The holder can get a payout if the corresponding event happens, e.g. the price of a certain token falls below a
              certain price. You can buy and sell the tokens in our AMM pool just like Uniswap.
            </p>
          </div>
        </div>
      </div>
    </el-card>
    <el-card class="dg-card">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-lg-5 order-md-1 d-flex justify-content-between">
            <img src="img/protection/price/provide.png" class="img-fluid" style="width: 300px"/>
          </div>
          <div class="col-lg-7 order-md-2">
            <div class="d-flex justify-content-between">
              <p class="d-f-1">Provide</p>
              <a href="/#/price-provide" style="line-height: 50px; width: 50%" align="right">
                <base-button style="padding: 0px; width: 50%">PROVIDE</base-button>
              </a>
            </div>
            <p class="d-f-3 pt-3">
              LPs provide liquidity to the AMM pool, which means staking both USDC and insurance tokens in the AMM pool. The transaction fee of the AMM pool is 2% and only charges insurance token
              buyers. To avoid large impermanence loss caused by the possible huge volatility of prices near the expiry date, we will stop transactions three days before the expiry date.
            </p>
          </div>
        </div>
      </div>
    </el-card>
  </base-header>
</template>

<script>
export default {
  name: "price",
  components: {},
};
</script>

<style scoped>

</style>
