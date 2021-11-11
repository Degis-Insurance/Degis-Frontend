<template>
  <section class="section">
    <div class="dg-container">
      <div class="row row-grid align-items-center">
        <p class="hp-title2">Articles</p>
      </div>
      <div class="row row-grid">
        <div class="col-12">
          <el-carousel :interval="3000" type="card" height="440px">
            <el-carousel-item>
              <el-card class="box-card">
                <h1>Degis: Next Generation Insurance Protocol</h1>
                <img src="img/homepage/articles/degis.png" style="width: 100%; border-radius: 24px"/>
                <div align="right">
                  <a href="https://degis.medium.com/degis-the-1st-next-generation-insurance-protocol-built-on-avalanche-79963e5968b5" target="_blank">
                    <base-button class="mt-3 mr-3">READ MORE</base-button>
                  </a>
                </div>
              </el-card>
            </el-carousel-item>
            <el-carousel-item>
              <el-card class="box-card">
                <h1>Production Products on Degis</h1>
                <img src="img/homepage/articles/protection-products.png" style="width: 100%; border-radius: 24px"/>
                <div align="right">
                  <a href="https://degis.medium.com/production-products-on-degis-1532647233c1" target="_blank">
                    <base-button class="mt-3 mr-3">READ MORE</base-button>
                  </a>
                </div>
              </el-card>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "articles",
  components: {},
};
</script>

<style>
.el-carousel__item {
  width: 630px;
}

.el-card {
  border-radius: 24px;
}

</style>
