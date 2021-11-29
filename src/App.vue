<template>
  <div id="app">
    <router-view />
    <modal v-model:show="modals.modal1">
      <template v-slot:header></template>
      <div class="py-3 text-center">
        <i class="ni ni-bell-55 ni-3x"></i>
        <h4 class="heading mt-4" style="padding-left: 10%; padding-right: 10%">
          We only provide services to users who are
          <span style="color: red">not</span> in mainland China.
        </h4>
      </div>
      <template v-slot:footer>
        <base-button type="white" @click="modals.modal1 = false">Confirm!</base-button>
        <base-button
          type="link"
          text-color="white"
          class="ml-auto"
          @click="modals.modal1 = false"
          >Close</base-button
        >
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from "./components/Modal";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      modals: {
        modal1: false,
      },
    };
  },
};
</script>

<style>
body {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
}
</style>
