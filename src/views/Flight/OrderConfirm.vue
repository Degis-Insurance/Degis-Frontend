<template>
  <div class="modal fade" @click.self="closeModal" :class="[{ 'show d-block': show }, { 'd-none': !show }]" v-show="show" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" style="max-width: 100%">
      <div class="modal-content" style="width: 70%; border-radius: 24px; margin: auto">

        <div class="modal-header pl-4 pt-4 pb-2">
          <h1 class="fw-7 d-g1 fs-24">Order Confirm</h1>
          <button class="close pr-4" @click="closeModal">
            <img src="img/luckybox/close-modal.png" style="width: 24px;">
          </button>
        </div>

        <img src="img/luckybox/modal-split.png" style="height: 1px">

        <div class="row align-items-center pb-4">
          <div class="col-xl-5 pt-4" style="padding: 0 4%;">
            <div class="d-flex pb-5">
              <img src="img/function/flight-comp.png" style="width: 88px; height: 88px"/>
              <div>
                <p class="fw-4 d-g1 fs-20 pl-3 pt-2">Norwegian</p>
                <p class="fw-4 d-g3 fs-14 pl-3">CCA1835</p>
              </div>
            </div>
            <img src="img/function/flight-info.png" class="pb-4" style="width: 100%;"/>
            <div class="d-flex justify-content-between">
              <p class="fw-4 d-p fs-32">ABC</p>
              <p class="fw-4 d-g3 fs-16 pt-3">5h 25m</p>
              <p class="fw-4 d-p fs-32">CBA</p>
            </div>

            <div class="d-flex justify-content-between">
              <p class="fw-4 d-g3 fs-14">Copenhagen, Denmark</p>
              <p class="fw-4 d-g3 fs-14">Oclo, Norway</p>
            </div>
            <div class="d-flex justify-content-between">
              <p class="fw-4 d-g3 fs-14">Thu 15 Oct</p>
              <p class="fw-4 d-g3 fs-14">Fri 16 Oct</p>
            </div>
            <div class="d-flex justify-content-between">
              <p class="fw-4 d-g3 fs-14">23:45</p>
              <p class="fw-4 d-g3 fs-14">04:30</p>
            </div>
            <div class="d-flex justify-content-between">
              <p class="fw-4 d-g3 fs-14">Terminal 1</p>
              <p class="fw-4 d-g3 fs-14">Terminal 1</p>
            </div>

            <!--                <img src="img/function/flight-info2.png" class="pt-4" style="width: 100%;"/>-->

          </div>

          <div class="col-xl-7 pt-4" style="padding: 0 4%">
            <!--                <img src="img/function/flight-map.png" style="width: 100%; margin: 3% 0"/>-->
            <div>
              <p class="fw-4 d-g1 fs-20">Payout Mechanism</p>
              <img src="img/function/flight-pm.png" style="width: 100%"/>
            </div>

            <div class="row d-flex justify-content-between pt-6">
              <div class="col-xl-6">
                <div class="d-flex justify-content-between">
                  <p class="fw-4 d-g3 fs-16">Protection Premium:</p>
                  <p class="fw-7 d-p fs-16">12.3467</p>
                </div>
                <div class="d-flex justify-content-between" style="margin-top: -20px">
                  <p class="fw-4 d-g3 fs-16">Maximum Payoff:</p>
                  <p class="fw-7 d-p fs-16">19.2824</p>
                </div>
              </div>
              <div class="col-xl-6 pt-1" align="right">
                <base-button style="width: 70%" @click="closeModal">CONFIRM</base-button>
              </div>
            </div>
          </div>

        </div>

        <!--        <img src="img/luckybox/modal-split.png" class="mb-3" style="height: 1px;">-->

        <!--        <div class="modal-footer pt-4 pl-2 pb-5" style="display: block">-->
        <!--          <div class="row">-->
        <!--            <div class="col-xl-7" style="padding-right: 8%">-->
        <!--              <p class="fw-5 d-g4 fs-14">Payout Mechanism</p>-->
        <!--              <img src="img/function/flight-pm.png" style="width: 100%"/>-->
        <!--            </div>-->
        <!--            <div class="col-xl-5" style="padding: 0 3%">-->
        <!--              <div class="row">-->
        <!--                <div class="col-6">-->
        <!--                  <p class="fw-5 d-g4 fs-14">Premium</p>-->
        <!--                  <p class="fw-7 d-p fs-24">12.3467</p>-->
        <!--                </div>-->
        <!--                <div class="col-6">-->
        <!--                  <p class="fw-5 d-g4 fs-14">Maximum</p>-->
        <!--                  <p class="fw-7 d-p fs-24">19.2824</p>-->
        <!--                </div>-->
        <!--              </div>-->


        <!--              <slot name="footer"></slot>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->

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
