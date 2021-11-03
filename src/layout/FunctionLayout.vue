<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar>
      <template v-slot:links>
        <sidebar-item
          :link="{
            name: 'Products',
            src: 'img/function/icon/protection.png',
            path: '/products',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Miserable Flight',
            src: 'img/function/icon/flight.png',
            path: '/flight',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Naughty Price',
            src: 'img/function/icon/price.png',
            path: '/price',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Mining',
            src: 'img/function/icon/mining.png',
            path: '/mining',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Luckybox',
            src: 'img/function/icon/luckybox.png',
            path: '/luckybox',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Bazaar',
            src: 'img/function/icon/bazaar.png',
            path: '/marketplace',
          }"
        />
        <img class="ml-4" style="width: 200px; padding-top: 50%" src="img/function/sidebar-bottom.png"/>
      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <!-- your content here -->
        <router-view></router-view>
<!--        <content-footer v-if="!$route.meta.hideFooter"></content-footer>-->
      </div>
    </div>
  </div>
</template>
<script>
import DashboardNavbar from "./FunctionNavbar.vue";
// import ContentFooter from "./ContentFooter.vue";

export default {
  components: {
    DashboardNavbar,
    // ContentFooter,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss"></style>
