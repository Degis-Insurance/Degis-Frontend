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

  <div class="container shape-container d-flex align-items-center">
    <div class="col px-0">
      <div class="row justify-content-center align-items-center">
        <!--          <div class="row row-grid align-items-center">-->
        <div class="col-md-5 order-md-2">
          <img src="img/homepage/img-1.png" class="img-fluid floating" />
        </div>
        <div class="col-md-7 order-md-1">
          <div class="pr-md-5">
            <h1 class="hero-title">
              Protect yourself against the miserable world
            </h1>
            <p class="hero-text">
              Degis is a real world cross blockchain protection platform.
              Via Degis, protect yourself against the miserable world.
            </p>
          </div>
          <div class="btn-wrapper d-flex pt-4">
            <a href="/#/protection"><base-button href="/protection">Get started</base-button></a>
            <base-button class="tut-button">tutorial</base-button>
          </div>
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
    // BaseInput,
    // ProjectsTable,
  },
};
</script>
<style>
.hero-title {
  font-size: 60px;
  font-width: 900;
  line-height: 64px;
  color: #6415ff;
}
.hero-text {
  font-size: 24px;
  font-weight: 400;
  line-height: 29.26px;
  color: #4d535c;
  opacity: 0.6;
}
.tut-button {
  margin-left: 80px;
  background: #F2F2F2;
  color: #4D535C;
}
</style>
