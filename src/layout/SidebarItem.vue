<template>
  <router-link :to="link.path" @click="linkClick" :target="link.target" :href="'#' + link.path">
    <div v-if="$route.path === link.path">
      <img :src="link.src" style="width: 26px; margin-right: 0.7rem;"/>
      <span class="fw-4 fs-16 d-g3">{{ link.name }}</span>
    </div>
    <div v-else>
      <img :src="link.src" style="width: 26px; margin-right: 0.7rem;"/>
      <span class="fw-4 fs-16 d-g3">{{ link.name }}</span>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "sidebar-item",
  props: ['link'],
  methods: {
    linkClick() {
      if (
          this.autoClose &&
          this.$sidebar &&
          this.$sidebar.showSidebar === true
      ) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },

};
</script>
<style scoped>

</style>
