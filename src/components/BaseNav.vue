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
        <h6 class="func-sub">Hi dude,</h6>
        <h1 class="func-nor">Welcome to DEGIS!</h1>
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
.func-sub {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #86898c;
}

.func-nor {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 25px;
  letter-spacing: -0.02em;
  color: #86898c;
}
</style>
