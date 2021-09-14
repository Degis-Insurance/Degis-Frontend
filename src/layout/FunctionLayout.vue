<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Degis"
      title="Degis"
    >
      <template v-slot:links>
        <sidebar-item
          :link="{
            name: 'Insurance',
            icon: 'ni ni-bullet-list-67 text-red',
            path: '/insurance',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Mining',
            icon: 'ni ni-key-25 text-info',
            path: '/mining',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Luckybox',
            icon: 'ni ni-tv-2 text-primary',
            path: '/luckybox',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Marketplace',
            icon: 'ni ni-planet text-blue',
            path: '/marketplace',
          }"
        />
      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <!-- your content here -->
        <router-view></router-view>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
import DashboardNavbar from "./FunctionNavbar.vue";
import ContentFooter from "./ContentFooter.vue";

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
  },
  data() {
    return {
      sidebarBackground: "vue", //vue|blue|orange|green|red|primary
    };
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
<style lang="scss"></style>
