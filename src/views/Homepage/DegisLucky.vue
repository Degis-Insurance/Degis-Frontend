<template>
  <section class="section-sm"/>
  <div style="background-size: cover;  background-image: url('img/homepage/degis-lucky-box.png');">
    <div class="dg-container">
      <div class="row row-grid align-items-center">
        <h1 class="hp-title2 pt-7" style="text-align: center">Lucky Box</h1>
      </div>
      <div class="row row-grid align-items-center">
        <p class="hp-desc" style="text-align: center; padding: 0 10%">Specially Designed for DEGIS Token Holders.</p>
        <p class="hp-desc" style="text-align: center; padding: 0 10%">Play to earn the biggest prizes!</p>
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
        <a href="/#/luckybox" style="margin: 3% auto">
          <base-button>Buy Tickets</base-button>
        </a>
      </div>
      <div class="pb-9"></div>
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
