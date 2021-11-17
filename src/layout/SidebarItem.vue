<template>
  <span :to="link.path" :target="link.target" :href="'#' + link.path">
    <div>
      <img :src="link.src" style="width: 26px; margin-right: 0.7rem;"/>
      <span class="fw-4 fs-16">{{ link.name }}</span>
    </div>
  </span>
</template>
<script>
export default {
  name: "sidebar-item",
  props: ['link'],
};
</script>
<style scoped>

</style>
