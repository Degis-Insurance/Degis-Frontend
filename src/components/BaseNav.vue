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
      <div>
        <h6 class="fw-7 d-g3 fs-24">Welcome to DEGIS!</h6>
      </div>
      <div>
        <span>{{ degisBalance }}</span>
        <base-button @click="getDegisBalance">check degis balance </base-button>
      </div>
      <div>
        <span id="userInfo">{{ selectedAccount }}</span>
        <base-button v-if="!isConnected" @click="connectWallet">{{
          walletstatus
        }}</base-button>
        <base-button v-if="isConnected" @click="disconnectWallet">{{
          walletstatus
        }}</base-button>
      </div>
    </div>
  </nav>
</template>
<script>
import BaseButton from "./BaseButton";
import { getWeb3 } from "../utils/getWeb3";
import Web3 from "web3";
import { getDegis } from "../utils/contractInstance";

export default {
  name: "base-nav",
  components: {
    BaseButton,
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
    return {
      walletstatus: "CONNECT WALLET",
      isConnected: false,
      degisBalance: 0,
    };
  },
  computed: {
    selectedAccount() {
      return this.$store.state.selectedAccount;
    },
  },
  methods: {
    async connectWallet() {
      const web3 = await getWeb3();
      console.log(web3);
      this.walletstatus = "DISCONNECT";

      window.WEB3 = web3;

      this.$store.commit("SET_WEB3", web3);
      const accounts = await web3.eth.getAccounts();
      this.$store.commit("SET_ACCOUNT", accounts[0]);

      this.setConnected(true);
    },
    async disconnectWallet() {
      console.log(window.WEB3.version);

      this.$store.state.web3Provider = null;

      this.$store.commit("SET_ACCOUNT", null);
      this.walletstatus = "CONNECT WALLET";

      this.setConnected(false);
    },

    async getDegisBalance() {
      const degis = await getDegis();
      const account = this.$store.state.selectedAccount;
      const balance = await degis.methods.balanceOf(account).call();
      this.degisBalance = balance / 1e18;
    },

    setConnected(status) {
      this.isConnected = status;
    },
  },
};
</script>
<style scoped>
#userInfo {
  margin-right: 15px;
}
</style>
