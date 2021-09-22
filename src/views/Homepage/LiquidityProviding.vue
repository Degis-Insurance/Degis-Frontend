<template>
  <section class="section section-lg">
    <div class="container">
      <div class="row row-grid align-items-center">
        <h1 class="lp-title">
          Mining
        </h1>
      </div>
      <div class="row row-grid align-items-center">
        <h5 class="lp-subtitle">
          Degis.Mining is the place of high yield with token rewards.
        </h5>
      </div>
      <div class="row row-grid align-items-center justify-content-between">
        <div class="col-md-5 order-md-1">
          <img
            src="img/homepage/liquidity-providing.png"
            class="img-fluid floating"
          />
        </div>
        <div class="col-md-1 order-md-2">
          <img src="img/homepage/plus.png" class="img-fluid floating"/>
        </div>
        <div class="col-md-5 order-md-3">
          <img
            src="img/homepage/liquidity-providing.png"
            class="img-fluid floating"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "liquidityproviding",
};
</script>

<style scoped>
h3 {
  font-size: 28px;
  font-weight: 900;
}

h6 {
  font-size: 15px;
  color: #7c8ba1;
  font-weight: 500;
}

.lp-title {
          /*font-family: Montserrat;*/
  /*font-style: normal;*/
  font-weight: 900;
  font-size: 48px;
  line-height: 54px;
  margin: auto;
  /*text-align: center;*/
  color: #6415ff;
}

.lp-subtitle {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #4D535C;
  margin: auto;
  margin-top: -30px;
}
</style>
