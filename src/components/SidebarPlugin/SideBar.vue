<template>
  <nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light nav-bg" id="sidenav-main">
    <div class="container-fluid">
      <router-link class="d-flex" to="/">
        <img src="img/function/func-logo.png" class="mx-2 mt-5 mb-4" style="width: 130px"/>
      </router-link>
      <div v-show="$sidebar.showSidebar" class="navbar-collapse collapse show" id="sidenav-collapse-main">
        <ul class="navbar-nav">
          <slot name="links"></slot>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>

export default {
  name: "sidebar",
  components: {},
  provide() {
    return {
      autoClose: this.autoClose,
    };
  },
};
</script>

<style>
.nav-bg {
  background-color: #F4F7FE;
}

</style>
