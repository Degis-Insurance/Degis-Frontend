<template>
  <section class="section section-lg">
    <div class="container">
      <div class="row row-grid align-items-center">
        <h1 class="mp-title">
          Bazaar
        </h1>
      </div>
            <div class="row row-grid align-items-center">
        <h1 class="mp-subtitle">
          Degis.Bazaar, a bizarre place where any kind of insurance would appear. Trade what you want.
        </h1>
      </div>
      <div class="row row-grid align-items-center">
        <div class="col-md-12">
          <img src="img/homepage/market-place.png" class="img-fluid floating" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "marketplace",
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

.mp-title {
      /*font-family: Montserrat;*/
  /*font-style: normal;*/
  font-weight: 900;
  font-size: 48px;
  line-height: 54px;
  margin: auto;
  /*text-align: center;*/
  color: #6415ff;
}

.mp-subtitle {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #4D535C;
  margin: auto;
  margin-top: -30px;
    padding-left: 100px;
  padding-right: 100px;
}
</style>
