<template>
  <div class="modal fade" @click.self="closeModal" :class="[{ 'show d-block': show }, { 'd-none': !show }]" v-show="show" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" style="max-width: 100%">
      <div class="modal-content" style="width: 70%; border-radius: 24px; margin: auto">

        <div class="modal-header pl-4 pt-4 pb-2">
          <!--          <h1 class="fw-7 d-g1 fs-24">Finished Rounds Detail</h1>-->
          <h1 class="fw-7 d-g1 fs-24">Refund Confirm</h1>
          <button class="close pr-4" @click="closeModal">
            <img src="img/luckybox/close-modal.png" style="width: 24px;">
          </button>
        </div>

        <img src="img/luckybox/modal-split.png" style="height: 1px">

        <div class="modal-body">
          <div class="py-1">
            <div class="d-flex justify-content-between">
              <p class="fw-7 d-g1 fs-16">Refund Number</p>
<!--              <p class="fw-4 d-g4 fs-14">Drawn <span class="fw-7 d-g3 fs-14">{{ viewData.drawtime }}</span></p>-->
            </div>

            <div style="background-color: #F2F2F2; border-radius: 12px; height: 88px">
              <div class="row">
                <div class="col-xl-3"></div>
                <div class="col-xl-6 d-flex justify-content-between">
                  <img v-for="num in this.refundData.number" :src="'img/luckybox/num-'+ num +'.png'" style="max-width: 65px; max-height: 66px; margin-top: 11px" :key="num"/>
                </div>
                <div class="col-xl-3"></div>
              </div>
            </div>

          </div>
        </div>

        <div class="modal-footer pt-1 pl-4" style="display: block">
          <div class="d-flex justify-content-between">
            <p class="fw-7 d-g1 fs-16" style="margin: auto 0">Lottery Id: {{ refundData.lotteryid }}</p>
            <div class="d-flex">
              <p class="fw-7 d-p fs-24 ma pr-4"></p>
              <base-button @click="refund">Refund</base-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "refund-confirm",
  components: {},
  data() {
    return {
    };
  },
  props: {
    show: Boolean,
    refundData: Object,
  },
  methods: {
    closeModal() {
      this.$emit("update:show", false);
      this.$emit("close");
    },
    refund() {
      console.log("点击refund就操作退票，lotteryId是", this.refundData.lotteryid);
      this.closeModal();
    }
  },
  created() {
    console.log("点击refund按键之后开始创建refund-confirm组件");
  //  这里就可以写查询的语句了
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
