<template>
  <section class="section section-lg">
    <div
      style="
        /*min-height: 910px;*/
        /*min-width: 1920px;*/
        width: 100%;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-image: url('img/homepage/degis-lucky-box.png');
      "
    >
      <div class="container" style="height: 800px">
        <div class="row row-grid align-items-center">
          <h1 class="title-2 pt-7">Degis Lucky Box</h1>
        </div>
        <div class="row row-grid align-items-center">
          <p class="text-1" style="text-align: center; padding: 0 10%">
            Specially Designed for DEGIS Token Holders Play to earn the biggest prizes!
          </p>
        </div>
        <div class="row align-items-center">
          <h1 class="title-1 pt-4" style="margin: auto; text-align: center">
            $272,786
          </h1>
        </div>
        <div class="row align-items-center">
          <h5 class="text-ip pt-2">IN PRIZES!</h5>
        </div>
        <div class="row row-grid align-items-center">
          <base-button style="margin: 3% auto">Buy Tickets</base-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from "../../components/BaseButton";
export default {
  name: "degislucky",
  components: { BaseButton },
};
</script>

<style scoped>
.text-ip {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;

  margin: auto;
  text-align: center;
  text-transform: uppercase;
  color: #4d535c;
}
</style>
