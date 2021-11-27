<template>
  <div style="background-color: #ffffff">
    <header class="dg-container">
      <homepage-nav class="navbar-main" transparent type="" effect="light" expand style="margin-left: -30px; margin-right: -0px">
        <template v-slot:brand>
          <router-link class="navbar-brand mr-lg-4" to="/">
            <img src="img/degis/degislogo.png" alt="logo" style="width: 109px; height: 48px"/>
          </router-link>
        </template>

        <template v-slot:content-header>
          <div class="row">
            <div class="col-6 collapse-brand">
              <a href="/">
                <img src="img/degis/degislogo.png" alt="logo" style="width: 109px; height: 48px"/>
              </a>
            </div>
            <div class="col-6 collapse-close">
              <close-button @click="closeMenu"></close-button>
            </div>
          </div>
        </template>

<!--        <ul class="navbar-nav navbar-nav-hover align-items-lg-center">-->
<!--          <a href="/#/protection">-->
<!--            <span class="nav-font"> Protection </span>-->
<!--          </a>-->
<!--          <a href="/#/mining">-->
<!--            <span class="nav-font"> Mining </span>-->
<!--          </a>-->
<!--          <a href="/#/luckybox">-->
<!--            <span class="nav-font">LuckyBox</span>-->
<!--          </a>-->
<!--          <a href="/#/bazaar">-->
<!--            <span class="nav-font">Bazaar</span>-->
<!--          </a>-->
<!--        </ul>-->
<!--        <ul class="navbar-nav align-items-lg-center ml-lg-auto">-->
<!--          <base-button>CONNECT WALLET</base-button>-->
<!--        </ul>-->
      </homepage-nav>
    </header>

    <main>
      <hero></hero>
      <DeFi></DeFi>
      <ProtectionCover></ProtectionCover>
      <LiquidityMining></LiquidityMining>
      <DegisLucky></DegisLucky>
      <Bazaar></Bazaar>
      <Tokenomics></Tokenomics>
      <Roadmap></Roadmap>
      <Articles></Articles>
<!--      <Investors></Investors>-->
      <Footer></Footer>
    </main>
  </div>
</template>
<script>
import Hero from "./Hero";
import Articles from "./Articles";
import DegisLucky from "./DegisLucky";
import DeFi from "./DeFi";
import Investors from "./Investors";
import LiquidityMining from "./LiquidityMining";
import Bazaar from "./Bazaar";
import ProtectionCover from "./ProtectionCover";
import Tokenomics from "./Tokenomics";
import Roadmap from "./Roadmap";
import CloseButton from "@/components/CloseButton";
import Footer from "./Footer";

export default {
  name: "homepage",
  components: {
    Bazaar,
    Footer,
    Articles,
    DegisLucky,
    Investors,
    LiquidityMining,
    ProtectionCover,
    Tokenomics,
    Roadmap,
    // TokenOfferingPhase,
    CloseButton,
    // Token,
    DeFi,
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
  margin: 0px 18px;
}

</style>
