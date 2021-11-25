<template>
  <el-container>
    <el-aside width="280px">
      <div class="container-fluid">
        <router-link to="/">
          <img src="img/function/func-logo.png" class="ml-4 mt-5 mb-4" style="width: 130px"/>
        </router-link>

        <el-menu>
          <el-submenu index="2">
            <template #title>
              <sidebar-item :link="{ name: 'Protection', src: 'img/function/icon/protection.png', path: '/protection', }"/>
            </template>
            <el-submenu index="2-1">
              <template #title>
                <sidebar-item :link="{ name: 'Miserable Flight', src: 'img/function/icon/flight.png', path: '/flight', }"/>
              </template>
              <el-menu-item index="2-1-1"><sidebar-item :link="{ name: 'Buy', src: 'img/function/icon/flight.png', path: '/flight-buy', }"/></el-menu-item>
              <el-menu-item index="2-1-2"><sidebar-item :link="{ name: 'Provide', src: 'img/function/icon/flight.png', path: '/flight-provide', }"/></el-menu-item>
            </el-submenu>
            <el-submenu index="2-2">
              <template #title><sidebar-item :link="{ name: 'Naughty Price', src: 'img/function/icon/price.png', path: '/price', }"/></template>
              <el-menu-item index="2-2-1"><sidebar-item :link="{ name: 'Create', src: 'img/function/icon/price.png', path: '/price-create', }"/></el-menu-item>
              <el-menu-item index="2-2-2"><sidebar-item :link="{ name: 'Buy/Sell', src: 'img/function/icon/price.png', path: '/price-buy-sell', }"/></el-menu-item>
              <el-menu-item index="2-2-3"><sidebar-item :link="{ name: 'Provide', src: 'img/function/icon/price.png', path: '/price-provide', }"/></el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3"><sidebar-item :link="{ name: 'Mining', src: 'img/function/icon/mining.png', path: '/mining', }"/></el-menu-item>
          <el-menu-item index="4"><sidebar-item :link="{ name: 'Lucky Box', src: 'img/function/icon/luckybox.png', path: '/luckybox', }"/></el-menu-item>
          <el-menu-item index="5"><sidebar-item :link="{ name: 'Meta Market', src: 'img/function/icon/metamarket.png', path: '/metamarket', }"/></el-menu-item>
        </el-menu>
        <img class="ml-4" style="width: 230px; padding-top: 10%;" src="img/function/sidebar-bottom.png"/>

      </div>
    </el-aside>

    <el-container>
      <el-header>
        <dashboard-navbar></dashboard-navbar>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import DashboardNavbar from "./FunctionNavbar.vue";
// import ContentFooter from "./ContentFooter.vue";
import SidebarItem from "./SidebarItem";

export default {
  components: {
    DashboardNavbar,
    SidebarItem,
    // ContentFooter,
  },
  data() {
    return {
    };
  },
};
</script>
<style lang="scss">

.el-menu {
  border-right: none;
  background-color: #F4F7FE;
}

.el-submenu__title {
  color: #86888C;
}

.el-menu-item {
  border-radius: 5px;
  color: #86888C;
}

//.el-menu-item.is-active {
//  background-color: #6415FF;
//  color: white;
//}
</style>
