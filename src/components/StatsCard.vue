<template>
  <card class="card-stats product-card">
    <slot> </slot>
  </card>
</template>
<script>
import Card from "./Card.vue";

export default {
  name: "stats-card",
  components: {
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
<style>
.product-card {
  background: #ffffff;
  box-shadow: 0px 20px 40px rgba(21, 58, 255, 0.1);
  border-radius: 24px;
  margin-bottom: 50px;
}
</style>
