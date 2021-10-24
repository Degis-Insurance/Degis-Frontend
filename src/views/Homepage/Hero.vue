<template>
  <!--  <section class="section-hero section-shaped my-0">-->
  <!--    <div class="shape shape-style-1 shape-primary">-->
  <!--      <span class="span-150"></span>-->
  <!--      <span class="span-50"></span>-->
  <!--      <span class="span-50"></span>-->
  <!--      <span class="span-75"></span>-->
  <!--      <span class="span-100"></span>-->
  <!--      <span class="span-75"></span>-->
  <!--      <span class="span-50"></span>-->
  <!--      <span class="span-100"></span>-->
  <!--      <span class="span-50"></span>-->
  <!--      <span class="span-100"></span>-->
  <!--    </div>-->

  <section class="section section"></section>
  <section class="section section"></section>

  <div class="container d-flex align-items-center">
    <div class="row justify-content-center align-items-center">
      <!--          <div class="row row-grid align-items-center">-->
      <div class="col-md-5 order-md-2">
        <img src="img/homepage/img-1.png" class="img-fluid floating" />
      </div>
      <div class="col-md-7 order-md-1">
        <p class="fw-9 d-p fs-32">DEGIS</p>
        <p class="hp-title">The 1st Decentralized Protection Market</p>
        <h1 class="hp-title" style="color: #6415FF;">On Avalanche</h1>
        <div class="btn-wrapper d-flex pt-5">
          <a href="/#/protection"><base-button>Get started</base-button></a>
          <a href="https://docs.degis.io/" style="padding: 0 8%"><base-button class="tut-button" style="background-color: #f2f2f2; color: #4d535c">Tutorial</base-button></a>
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
