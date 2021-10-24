<template>
  <div style="background-color: #ffffff">
    <header class="header-global">
      <homepage-nav
        class="navbar-main"
        transparent
        type=""
        effect="light"
        expand
      >
        <template v-slot:brand>
          <router-link class="navbar-brand mr-lg-5" to="/">
            <img
              src="img/degis/degislogo.png"
              alt="logo"
              style="width: 109px; height: 48px"
            />
          </router-link>
        </template>

        <template v-slot:content-header>
          <div class="row">
            <div class="col-6 collapse-brand">
              <a href="/">
                <img
                  src="img/degis/degislogo.png"
                  alt="logo"
                  style="width: 109px; height: 48px"
                />
              </a>
            </div>
            <div class="col-6 collapse-close">
              <close-button @click="closeMenu"></close-button>
            </div>
          </div>
        </template>

        <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
          <homepage-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
            <template v-slot:title>
              <!--              <span class="nav-link" data-toggle="dropdown" role="button">-->
              <!--                <i class="ni ni-ui-04 d-lg-none"></i>-->
              <span class="nav-font">Products</span>
              <!--              </span>-->
            </template>
            <div class="dropdown-menu-inner">
              <router-link
                to="/protection"
                class="media d-flex align-items-center"
              >
                <div
                  class="icon icon-shape bg-gradient-primary rounded-circle text-white"
                >
                  <i class="ni ni-spaceship"></i>
                </div>
                <div class="media-body ml-3">
                  <h6 class="heading text-primary mb-md-1">Flight Insurance</h6>
                  <p class="description d-none d-md-inline-block mb-0">
                    Our introduction of our flight insurance product
                  </p>
                </div>
              </router-link>
              <router-link
                to="/protection"
                class="media d-flex align-items-center"
              >
                <div
                  class="icon icon-shape bg-gradient-warning rounded-circle text-white"
                >
                  <i class="ni ni-ui-04"></i>
                </div>
                <div class="media-body ml-3">
                  <h5 class="heading text-warning mb-md-1">Another product</h5>
                  <p class="description d-none d-md-inline-block mb-0">
                    Information of another product
                  </p>
                </div>
              </router-link>
            </div>
          </homepage-dropdown>
          <!--          <homepage-dropdown tag="li" class="nav-item">-->
          <!--            <template v-slot:title>-->
          <!--              <span class="nav-link" data-toggle="dropdown" role="button">-->
          <!--                <i class="ni ni-collection d-lg-none"></i>-->
          <!--                <span class="nav-link-inner&#45;&#45;text">Mining</span>-->
          <!--              </span>-->
          <!--            </template>-->
          <!--            <router-link to="/mining" class="dropdown-item"-->
          <!--              >Degis Mining</router-link-->
          <!--            >-->
          <!--            <router-link to="/mining" class="dropdown-item"-->
          <!--              >Another Mining</router-link-->
          <!--            >-->
          <!--          </homepage-dropdown>-->
          <a href="/#/mining">
            <span class="nav-font"> Mining </span>
          </a>
          <a href="/#/luckybox">
            <span class="nav-font">Lucky Box</span>
          </a>
          <a href="/#/marketplace">
            <span class="nav-font">Market Place</span>
          </a>
        </ul>
        <ul class="navbar-nav align-items-lg-center ml-lg-auto">
          <base-button>CONNECT WALLET</base-button>
        </ul>
      </homepage-nav>
    </header>

    <main>
      <fade-transition origin="center" mode="out-in" :duration="250">
        <div>
          <hero></hero>
          <GameFi></GameFi>
          <ProtectionCover></ProtectionCover>
          <LiquidityProviding></LiquidityProviding>
          <DegisLucky></DegisLucky>
          <MarketPlace></MarketPlace>
          <Tokenomics></Tokenomics>
          <Roadmap></Roadmap>
          <Articles></Articles>
          <Investors></Investors>
          <Footer></Footer>
        </div>
      </fade-transition>
    </main>
  </div>
</template>
<script>
import Hero from "./Hero";
import Articles from "./Articles";
import DegisLucky from "./DegisLucky";
import GameFi from "./GameFi";
import Investors from "./Investors";
import LiquidityProviding from "./LiquidityProviding";
import MarketPlace from "./MarketPlace";
import ProtectionCover from "./ProtectionCover";
import Tokenomics from "./Tokenomics";
import Roadmap from "./Roadmap";
import CloseButton from "@/components/CloseButton";
import Footer from "./Footer";

export default {
  name: "homepage",
  components: {
    Footer,
    Articles,
    DegisLucky,
    Investors,
    LiquidityProviding,
    MarketPlace,
    ProtectionCover,
    Tokenomics,
    Roadmap,
    // TokenOfferingPhase,
    CloseButton,
    // Token,
    GameFi,
    Hero,
  },
};
</script>

<style>
.nav-font {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #4d535c;
  margin: 0px 20px;
}

</style>
