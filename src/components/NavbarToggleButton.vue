<template>
<!--  <button-->
<!--    class="navbar-toggler"-->
<!--    type="button"-->
<!--    data-toggle="collapse"-->
<!--    :data-target="target"-->
<!--    :aria-controls="target"-->
<!--    :aria-expanded="toggled"-->
<!--    aria-label="Toggle navigation"-->
<!--  >-->
    <slot>
<!--      <span class="navbar-toggler-icon"></span>-->
    </slot>
<!--  </button>-->
</template>
<script>
export default {
  props: {
    target: {
      type: [String, Number],
      description: "Button target element",
    },
    toggled: {
      type: Boolean,
      default: false,
      description: "Whether button is toggled",
    },
  },
};
</script>
<style></style>
