<template>
  <section class="section">
    <div class="container">
      <div class="row row-grid align-items-center">
        <p class="hp-title2">Articles</p>
      </div>
      <div class="row row-grid">
        <div class="col-12">
          <el-carousel :interval="3000" type="card" height="360px">
            <el-carousel-item v-for="item in 5" :key="item">
              <img src="img/homepage/article.png" class="img-fluid"/>
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
};
</script>

<style scoped>

</style>
