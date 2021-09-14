<template>
  <card class="card-stats" :show-footer-line="true">

    <div class="d-flex justify-content-between">
      <span>Available Capacity:</span>
      <span>example number</span>
    </div>

    <base-input class="mt-4" placeholder="input deposit number"></base-input>

    <base-button block type="primary"> Deposit</base-button>

    <div class="mt-3 d-flex justify-content-between">
      <span>Total Value Locked:</span>
      <span>example value</span>
    </div>
    <div class="mt-3 d-flex justify-content-between">
      <span>Total Policies:</span>
      <span>example policies</span>
    </div>
    <div class="mt-3 d-flex justify-content-between">
      <span>Locked Ratio:</span>
      <span>example ratio</span>
    </div>

    <base-input class="mt-4" placeholder="input withdraw value"></base-input>

    <base-button block type="primary"> Withdraw</base-button>

    <p class="mt-4 mb-0 text-sm">
      <slot name="footer">
        <span>Pool Address: </span>
        <span>example address</span>
      </slot>
    </p>


  </card>
</template>

<script>
import Card from "./Card.vue";
import BaseButton from "./BaseButton";

export default {
  name: "degis-deposit",
  components: {
    BaseButton,
    Card,
  },
  props: {
    type: {
      type: String,
      default: "primary",
    },
    icon: String,
    title: String,
    subTitle: String,
    iconClasses: [String, Array],
  },
};
</script>

<style scoped></style>
