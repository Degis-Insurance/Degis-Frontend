<template>
  <el-card class="dg-card">
    <div class="container">
      <div class="row row-grid align-items-center">
        <div class="col-lg-5 order-md-1">
          <img :src="'img/protection/price/' + data.coin + '.png'" class="img-fluid" style="width: 64px"/>
          <span class="fw-7 d-g1 fs-34 pl-3" style="vertical-align: middle">{{ data.coin }}</span>
          <p class="fw-7 d-g1 fs-18 pt-3 mb-0">Current Token Price: <span class="fw-7 d-p fs-24"> {{ data.price }}</span></p>
        </div>

        <div class="col-lg-7 order-md-2">
          <div class="d-flex justify-content-between">
            <div>
              <p class="fw-7 d-g1 fs-18 mb-0">Cover 30% off insurance <span class="d-p fs-12">(Price &lt; {{ data.price * 0.7 }})</span></p>
              <p class="fw-7 d-g1 fs-18">My Balance: <span class="d-p">{{ data.balance1 }}</span></p>
            </div>
            <div>
              <base-button>Create</base-button>
              <base-button>Redeem</base-button>
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <div>
              <p class="fw-7 d-g1 fs-18 mb-0">Cover miss out <span class="d-p fs-12">(Price &gt; {{ data.price * 1.3 }})</span></p>
              <p class="fw-7 d-g1 fs-18 mb-0">My Balance: <span class="d-p">{{ data.balance2 }}</span></p>
            </div>
            <div>
              <base-button>Create</base-button>
              <base-button>Redeem</base-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "price-create-card",
  components: {},
  props: ['data'],
};
</script>

<style scoped>

</style>
