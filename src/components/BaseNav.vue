<template>
  <nav
    class="navbar"
    :class="[
      { 'navbar-expand-md': expand },
      { 'navbar-transparent': transparent },
      { [`bg-${type}`]: type },
    ]"
  >
    <div class="container-fluid">
      <div class="">
        <h6 class="fw-7 d-g3 fs-14">Hi dude,</h6>
        <h6 class="fw-7 d-g3 fs-24">Welcome to DEGIS!</h6>
      </div>
      <div>
        <base-button>CONNECT WALLET</base-button>
      </div>
    </div>
  </nav>
</template>
<script>
import BaseButton from "./BaseButton";

export default {
  name: "base-nav",
  components: {
    BaseButton
  },
  props: {
    type: {
      type: String,
      default: "",
      description: "Navbar type (e.g default, primary etc)",
    },
    transparent: {
      type: Boolean,
      default: false,
      description: "Whether navbar is transparent",
    },
    expand: {
      type: Boolean,
      default: false,
      description: "Whether navbar should contain `navbar-expand-lg` class",
    },
  },
  data() {
    return {};
  },
};
</script>
<style>
</style>
