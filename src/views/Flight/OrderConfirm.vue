<template>
  <div class="modal fade" @click.self="closeModal" :class="[{ 'show d-block': show }, { 'd-none': !show }]" v-show="show" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" style="max-width: 100%">
      <div class="modal-content" style="width: 50%; border-radius: 24px; margin: auto">

        <div class="modal-header pl-4 pt-4 pb-2">
          <h1 class="fw-7 d-g1 fs-24">Order Confirm</h1>
          <button class="close pr-4" @click="closeModal">
            <img src="img/luckybox/close-modal.png" style="width: 24px;">
          </button>
        </div>

        <img src="img/luckybox/modal-split.png" style="height: 1px">

        <div class="modal-body">
          <div class="py-3">
            <p class="fw-5 d-g4 fs-16 mb-2">YOUR ROUTE</p>
            <div class="row">
              <div class="col-xl-4">
                <p class="fw-5 d-g4 fs-14">Departure</p>
                <p class="fw-5 d-g1 fs-18" style="margin-top: -15px">Copenhagen, Denmark</p>
              </div>
              <div class="col-xl-4">
                <p class="fw-5 d-g4 fs-14">Destination</p>
                <p class="fw-5 d-g1 fs-18" style="margin-top: -15px">Oclo, Norway</p>
              </div>
              <div class="col-xl-4">
                <p class="fw-5 d-g4 fs-14">Date</p>
                <p class="fw-5 d-g1 fs-18" style="margin-top: -15px">Tue 05/12</p>
              </div>
            </div>

            <p class="fw-5 d-g4 fs-16 pt-4 mb-2">YOUR POLICY</p>
            <div class="row">
              <div class="col-xl-4">
                <p class="fw-5 d-g4 fs-14">Flight Number</p>
                <p class="fw-5 d-g1 fs-18" style="margin-top: -15px">CCA1835</p>
              </div>
              <div class="col-xl-4">
                <p class="fw-5 d-g4 fs-14">Landing Time</p>
                <p class="fw-5 d-g1 fs-18" style="margin-top: -15px">23:45, Thu 15 Oct</p>
              </div>
              <div class="col-xl-4">
                <p class="fw-5 d-g4 fs-14">Departure Time</p>
                <p class="fw-5 d-g1 fs-18" style="margin-top: -15px">4:30, Fri 16 Oct</p>
              </div>
            </div>

          </div>
        </div>

        <img src="img/luckybox/modal-split.png" class="mb-3" style="height: 1px;">

        <div class="modal-footer pt-4 pl-2 pb-5" style="display: block">
          <div class="row">
            <div class="col-xl-7" style="padding-right: 8%">
              <p class="fw-5 d-g4 fs-14">Payout Mechanism</p>
              <img src="img/function/flight-pm.png" style="width: 100%"/>
            </div>
            <div class="col-xl-5" style="padding: 0 3%">
              <div class="row">
                <div class="col-6">
                  <p class="fw-5 d-g4 fs-14">Premium</p>
                  <p class="fw-7 d-p fs-24">12.3467</p>
                </div>
                <div class="col-6">
                  <p class="fw-5 d-g4 fs-14">Maximum</p>
                  <p class="fw-7 d-p fs-24">19.2824</p>
                </div>
              </div>
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "order-confirm",
  components: {},
  props: {
    show: Boolean,
  },
  methods: {
    closeModal() {
      this.$emit("update:show", false);
      this.$emit("close");
    },
  },
  watch: {
    show(val) {
      let documentClasses = document.body.classList;
      if (val) {
        documentClasses.add("modal-open");
      } else {
        documentClasses.remove("modal-open");
      }
    },
  },
};
</script>
<style>
.modal.show {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
