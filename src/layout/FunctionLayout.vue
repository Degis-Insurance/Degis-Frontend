<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar>
      <template v-slot:links>
        <sidebar-item :link="{ name: 'Account', src: 'img/function/icon/account.png', path: '/account', }"/>
        <sidebar-item :link="{ name: 'Protection', src: 'img/function/icon/protection.png', path: '/protection', }"/>
        <sidebar-item :link="{ name: 'Miserable Flight', src: 'img/function/icon/flight.png', path: '/flight', }"/>
        <sidebar-item :link="{ name: 'Buy', src: 'img/function/icon/flight.png', path: '/flight-buy', }"/>
        <sidebar-item :link="{ name: 'Provide', src: 'img/function/icon/flight.png', path: '/flight-provide', }"/>
        <sidebar-item :link="{ name: 'Naughty Price', src: 'img/function/icon/price.png', path: '/price', }"/>
        <sidebar-item :link="{ name: 'Mining', src: 'img/function/icon/mining.png', path: '/mining', }"/>
        <sidebar-item :link="{ name: 'Lucky Box', src: 'img/function/icon/luckybox.png', path: '/luckybox', }"/>
        <sidebar-item :link="{ name: 'Bazaar', src: 'img/function/icon/bazaar.png', path: '/bazaar', }"/>
        <!--        <img class="ml-4" style="width: 230px; padding-top: 30%;" src="img/function/sidebar-bottom.png"/>-->
        <div class="mt--2" style="width: 260px; height: 280px; overflow: hidden; border: 0px">
          <div style="margin:-900px -1000px -200px -0px;">
            <iframe src="https://my.spline.design/degisrobotface-4f39d285ce75fbea5a7cdf6cfaaff5fd/" width="1360" height="1650" scrolling="no"></iframe>
          </div>
        </div>
      </template>
    </side-bar>
    <div class="main-content">
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
