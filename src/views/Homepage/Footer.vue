<template>
  <div class="dg-container">
    <div class="row" style="text-align: center">
      <div class="col-md-2"></div>
      <div class="col-md-2"><a href="/#/protection" class="f-text-1">Protection</a></div>
      <div class="col-md-2"><a href="/#/mining" class="f-text-1">Mining</a></div>
      <div class="col-md-2"><a href="/#/luckybox" class="f-text-1">LuckyBox</a></div>
      <div class="col-md-2"><a href="/#/metamarket" class="f-text-1">Bazaar</a></div>
      <div class="col-md-2"></div>
    </div>
    <div class="row pt-5">
      <div class="col-lg-4"></div>
      <div class="col-lg-4 d-flex justify-content-between" align="center">
        <!--        <a href="https://github.com/">-->
        <!--          <img src="img/homepage/github.png" style="width: 50%" />-->
        <!--        </a>-->
        <a href="http://twitter.com/ProjectDegis" target="_blank">
          <img src="img/homepage/twitter.png" style="width: 40px"/>
        </a>
        <a href="https://discord.com/invite/4C484BQVtp" target="_blank">
          <img src="img/homepage/discord.png" style="width: 40px"/>
        </a>
        <a href="http://degis.medium.com" target="_blank">
          <img src="img/homepage/medium.png" style="width: 40px"/>
        </a>
        <a href="http://t.me/ProjectDegis" target="_blank">
          <img src="img/homepage/telegram.png" style="width: 40px"/>
        </a>
      </div>
      <div class="col-lg-4"></div>
    </div>
    <div class="row pt-5 pb-5">
      <div class="col-lg-4"></div>
      <div class="col-lg-4">
        <div class="f-text-2">
          <p>Copyright © Degis {{ year }}. All right reserved.</p>
        </div>
      </div>
      <div class="col-lg-4"></div>
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
  color: #4d535c;
}

.f-text-2 {
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.03em;
  color: #2C2D2F;
}
</style>
