<template>
  <div>
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
              src="img/degis/degis-logo.png"
              alt="logo"
              style="width: 106px; height: 41px"
            />
          </router-link>
        </template>

        <template v-slot:content-header>
          <div class="row">
            <div class="col-6 collapse-brand">
              <a href="/">
                <img
                  src="img/degis/degis-logo.png"
                  alt="logo"
                  style="width: 106px; height: 41px"
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
              <span class="nav-link" data-toggle="dropdown" role="button">
                <i class="ni ni-ui-04 d-lg-none"></i>
                <span class="nav-link-inner--text">Products</span>
              </span>
            </template>
            <div class="dropdown-menu-inner">
              <router-link
                to="/insurance"
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
                to="/insurance"
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
            <span class="nav-link">Mining</span>
          </a>
          <a href="/#/luckybox">
            <span class="nav-link">Luckybox</span>
          </a>
          <a href="/#/marketplace">
            <span class="nav-link">Marketplace</span>
          </a>
        </ul>
        <ul class="navbar-nav align-items-lg-center ml-lg-auto">
          <li class="nav-item">
            <a
              class="nav-link nav-link-icon"
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener"
              data-toggle="tooltip"
              title="Like us on Facebook"
            >
              <i class="fa fa-facebook-square"></i>
              <span class="nav-link-inner--text d-lg-none">Facebook</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link nav-link-icon"
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener"
              data-toggle="tooltip"
              title="Follow us on Instagram"
            >
              <i class="fa fa-instagram"></i>
              <span class="nav-link-inner--text d-lg-none">Instagram</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link nav-link-icon"
              href="https://twitter.com"
              target="_blank"
              rel="noopener"
              data-toggle="tooltip"
              title="Follow us on Twitter"
            >
              <i class="fa fa-twitter-square"></i>
              <span class="nav-link-inner--text d-lg-none">Twitter</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link nav-link-icon"
              href="https://github.com"
              target="_blank"
              rel="noopener"
              data-toggle="tooltip"
              title="Star us on Github"
            >
              <i class="fa fa-github"></i>
              <span class="nav-link-inner--text d-lg-none">Github</span>
            </a>
          </li>
          <li class="nav-item d-none d-lg-block ml-lg-4">
            <a
              href="/#/"
              target="_blank"
              rel="noopener"
              class="btn btn-neutral btn-icon"
            >
              <span class="nav-link-inner--text">Connect Wallet</span>
            </a>
          </li>
        </ul>
      </homepage-nav>
    </header>
    <main>
      <fade-transition origin="center" mode="out-in" :duration="250">
        <div>
          <hero></hero>
          <protocol></protocol>
          <token></token>
        </div>
      </fade-transition>
    </main>
    <footer class="footer has-cards">
      <div class="container mt--100">
        <hr />
        <div class="row align-items-center justify-content-md-between">
          <div class="col-md-6">
            <div class="copyright">
              &copy; {{ year }}
              <a
                href="http://cryptofintechlabhk.net"
                target="_blank"
                rel="noopener"
                >CRYPTOFINTECH LABORATORY</a
              >
            </div>
          </div>
          <div class="col-md-6">
            <ul class="nav nav-footer justify-content-end">
              <li class="nav-item">
                <a href="#" class="nav-link" target="_blank" rel="noopener"
                  >Contact Us</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="https://www.github.com"
                  class="nav-link"
                  target="_blank"
                  rel="noopener"
                  >Github</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import Hero from "./Homepage/Hero";
import Protocol from "./Homepage/Protocol";
import Token from "./Homepage/Token";
import CloseButton from "@/components/CloseButton";

export default {
  name: "homepage",
  components: {
    CloseButton,
    Token,
    Protocol,
    Hero,
  },
};
</script>
