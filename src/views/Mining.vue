<template>
  <div>
    <base-header type="gradient-primary" class="pb-6 pb-8 pt-5 pt-md-8">
      <div class="row">

        <div class="col-6">
          <degis-deposit></degis-deposit>
        </div>

        <div class="col-6">
          <degis-reward></degis-reward>
        </div>
      </div>
    </base-header>

  </div>
</template>

<script>

import DegisDeposit from "../components/Deposit";
export default {
  name: "mining",
  components: {
    DegisDeposit
  },
};
</script>

<style scoped></style>
