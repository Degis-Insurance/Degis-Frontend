<template>
  <section class="section section-lg">
    <div class="container">
      <div class="row row-grid align-items-center">
        <h1 class="pc-title" style="margin: auto; font-size: 50px">
          Protection Cover
        </h1>
      </div>
      <div class="row row-grid align-items-center">
        <h5 class="pc-subtitle">
          There are many dangers lying in this miserable world. Degis.Protection
          is the shield to protect yourself.
        </h5>
        <base-button style="margin: auto; margin-top: 30px">Read More</base-button>
      </div>
      <div class="row row-grid align-items-center">
        <div class="col-md-12">
          <img src="img/homepage/3.png" class="img-fluid floating"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import BaseButton from "../../components/BaseButton";
export default {
  name: "protectioncover",
  // components: {BaseButton},
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

.pc-title {
  /*font-family: Montserrat;*/
  /*font-style: normal;*/
  font-weight: 900;
  font-size: 48px;
  line-height: 54px;
  margin: auto;
  /*text-align: center;*/
  color: #6415ff;
}

.pc-subtitle {
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
