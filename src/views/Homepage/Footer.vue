<template>
  <div class="container">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-2"><a href="/#/" class="f-text-1">Home</a></div>
      <div class="col-2">
        <a href="/#/products" class="f-text-1">Products</a>
      </div>
      <div class="col-2"><a href="/#/mining" class="f-text-1">Mining</a></div>
      <div class="col-2">
        <a href="/#/luckybox" class="f-text-1">Lucky Box</a>
      </div>
      <div class="col-2">
        <a href="/#/marketplace" class="f-text-1">Market Place</a>
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row pt-5">
      <div class="col-4"></div>
      <div class="col-4 d-flex justify-content-between">
        <a href="https://github.com/">
          <img src="img/homepage/github.png" style="width: 50%" />
        </a>
        <a href="https://twitter.com/">
          <img src="img/homepage/twitter.png" style="width: 50%" />
        </a>
        <a href="https://medium.com/">
          <img src="img/homepage/medium.png" style="width: 50%" />
        </a>
        <a href="https://telegram.org/">
          <img src="img/homepage/telegram.png" style="width: 50%" />
        </a>
      </div>
      <div class="col-4"></div>
    </div>
    <div class="row pt-5 pb-5">
      <div class="col-4"></div>
      <div class="col-4">
        <div class="f-text-2">
          Copyright © Degis {{ year }}. All right reserved.
        </div>
      </div>
      <div class="col-4"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style>
.f-text-1 {
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #4d535c;
}

.f-text-2 {
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: left;
  letter-spacing: 0.03em;
  color: #2C2D2F;
}
</style>
