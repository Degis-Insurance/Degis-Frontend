<template>
  <section class="section section"></section>

  <div class="container shape-container d-flex align-items-center">
    <div class="col px-0">
      <div class="row justify-content-center align-items-center">
        <!--          <div class="row row-grid align-items-center">-->
        <div class="col-md-6 order-md-2">
          <img src="img/homepage/protection-cover.png" class="img-fluid floating"/>
        </div>
        <div class="col-md-6 order-md-1">
          <h3 class="title-2 pb-4">Protection Products</h3>
          <p class="text-1">
            Blockchain is miserable, where risk and reward are widely extended. DEGIS is the shield to protect you.
          </p>
          <div class="btn-wrapper d-flex pt-4">
            <base-button>Read More</base-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import BaseButton from "../../components/BaseButton";
export default {
  name: "protectioncover",
  // components: {BaseButton},
};
</script>

<style scoped>
.pc-subtitle {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #4d535c;
  margin: auto;
  margin-top: -30px;
  padding-left: 100px;
  padding-right: 100px;
}
</style>
