<template>
  <section class="section-sm"/>
  <div style=" width: 100%; background-size: 100% 100%; background-repeat: no-repeat; background-image: url('img/homepage/degis-lucky-box.png');">
    <div class="dg-container" style="height: 800px">
      <div class="row row-grid align-items-center">
        <h1 class="hp-title2 pt-7">Degis Lucky Box</h1>
      </div>
      <div class="row row-grid align-items-center">
        <p class="hp-desc" style="text-align: center; padding: 0 10%">
          Specially Designed for DEGIS Token Holders Play to earn the biggest prizes!
        </p>
      </div>
      <div class="row align-items-center">
        <p class="fw-9 d-p pt-5" style="font-size: 72px; line-height: 64px; margin: auto">
          $272,786
        </p>
      </div>
      <div class="row align-items-center">
        <p class="fw-9 d-g2 ma pt-4 fs-24">IN PRIZES!</p>
      </div>
      <div class="row row-grid align-items-center">
        <base-button style="margin: 3% auto">Buy Tickets</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../../components/BaseButton";

export default {
  name: "degislucky",
  components: {BaseButton},
};
</script>

<style scoped>

</style>
