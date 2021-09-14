<template>
  <card class="card-stats" :show-footer-line="true">

    <div class="d-flex justify-content-between">
      <span>Total Assets:</span>
      <span>example assets</span>
    </div>

    <div class="mt-3 d-flex justify-content-between">
      <span>Time:</span>
      <span>example time</span>
    </div>

    <div class="mt-3 d-flex justify-content-between">
      <span>Premium Income:</span>
      <span>example income value</span>
    </div>

    <div class="mt-3 d-flex justify-content-between">
      <span>Token Reward:</span>
      <span>example reward number</span>
    </div>

    <base-button block class="mt-4" type="primary"> Harvest Reward </base-button>

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
  name: "degis-reward",
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
