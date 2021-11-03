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
          <a href="/#/products">
            <span class="nav-font"> Products </span>
          </a>
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
