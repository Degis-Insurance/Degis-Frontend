<template>
  <section class="section-sm"></section>
  <section class="section-sm"></section>
  <div class="dg-container d-flex align-items-center">
    <div class="row justify-content-center align-items-center">
      <!--          <div class="row row-grid align-items-center">-->
      <div class="col-md-5 order-md-2 d-flex">
        <div class="row hidden-sm-and-down">
          <div class="col-11" style="padding: 0">
            <img src="img/homepage/img-1.png" class="img-fluid floating"/>
          </div>
          <div class="col-1" style="padding: 0; position: absolute; bottom: 0; right: 0">
            <a href="http://twitter.com/ProjectDegis" target="_blank">
              <img src="img/homepage/twitter-p.png" style="width: 40px"/>
            </a>
            <a href="http://degis.medium.com" target="_blank">
              <img src="img/homepage/medium-p.png" class="pt-3" style="width: 40px"/>
            </a>
            <a href="http://t.me/ProjectDegis" target="_blank">
              <img src="img/homepage/telegram-p.png" class="pt-3" style="width: 40px"/>
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-7 order-md-1">
        <p class="fw-9 d-p fs-32">DEGIS</p>
        <p class="hp-title">The 1st Decentralized Protection Market</p>
        <h1 class="hp-title" style="color: #6415FF;">On Avalanche</h1>
        <div class="btn-wrapper d-flex pt-5">
          <a href="/#/protection">
            <base-button>Get started</base-button>
          </a>
          <a href="https://docs.degis.io/" style="padding: 0 8%">
            <base-button class="tut-button" style="background-color: #f2f2f2; color: #4d535c">Tutorial</base-button>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!--  </section>-->
</template>

<script>
import BaseButton from "../../components/BaseButton";

export default {
  name: "hero",
  components: {
    BaseButton,
  },
  data() {
    return {
      modals: {
        modal1: false
      }
    }
  }
};
</script>
<style>

</style>
