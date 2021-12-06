<template>
  <el-container>
    <el-aside class="hidden-md-and-down" width="280px">
      <div class="container-fluid" style="min-height: 700px;">

        <router-link to="/">
          <img src="img/function/func-logo.png" class="ml-4 mt-4 mb-4 pt-1" style="width: 130px"/>
        </router-link>

        <el-menu>
          <el-submenu index="1">
            <template #title>
              <sidebar-item :link="{ name: 'Protection', src: 'protection', path: '/protection', }"/>
            </template>
            <el-submenu index="1-1">
              <template #title>
                <sidebar-item :link="{ name: 'Miserable Flight', src: 'flight', path: '/flight', }"/>
              </template>
              <el-menu-item index="1-1-1">
                <sidebar-item :link="{ name: 'Buy', src: 'flight', path: '/flight-buy', }"/>
              </el-menu-item>
              <el-menu-item index="1-1-2">
                <sidebar-item :link="{ name: 'Provide', src: 'flight', path: '/flight-provide', }"/>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="1-2">
              <template #title>
                <sidebar-item :link="{ name: 'Naughty Price', src: 'price', path: '/price', }"/>
              </template>
              <el-menu-item index="1-2-1">
                <sidebar-item :link="{ name: 'Create', src: 'price', path: '/price-create', }"/>
              </el-menu-item>
              <el-menu-item index="1-2-2">
                <sidebar-item :link="{ name: 'Buy/Sell', src: 'price', path: '/price-buy-sell', }"/>
              </el-menu-item>
              <el-menu-item index="1-2-3">
                <sidebar-item :link="{ name: 'Provide', src: 'price', path: '/price-provide', }"/>
              </el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <sidebar-item :link="{ name: 'Mining', src: 'mining', path: '/mining', }"/>
          </el-menu-item>
          <el-menu-item index="3">
            <sidebar-item :link="{ name: 'Lucky Box', src: 'luckybox', path: '/luckybox', }"/>
          </el-menu-item>
          <el-menu-item index="4">
            <sidebar-item :link="{ name: 'Meta Market', src: 'metamarket', path: '/metamarket', }"/>
          </el-menu-item>
        </el-menu>
      </div>

      <img class="ml-4" style="width: 230px;" src="img/function/sidebar-bottom.png"/>

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
    return {};
  },
};
</script>
<style lang="scss">
.el-menu {
  border-right: none;
  background-color: #F4F7FE;
}
</style>
