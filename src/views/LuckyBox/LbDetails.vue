<template>
  <div class="modal fade" @click.self="closeModal" :class="[{ 'show d-block': show }, { 'd-none': !show }]" v-show="show" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" style="max-width: 100%">
      <div class="modal-content" style="width: 50%; border-radius: 24px; margin: auto">

        <div class="modal-header pl-4 pt-4 pb-2">
          <!--          <h1 class="fw-7 d-g1 fs-24">Finished Rounds Detail</h1>-->
          <h1 class="fw-7 d-g1 fs-24">Round #124</h1>
          <button class="close pr-4" @click="closeModal">
            <img src="img/luckybox/close-modal.png" style="width: 24px;">
          </button>
        </div>
        <!--        <div class="d-flex pl-4 pb-4">-->
        <!--          <i class="el-icon-arrow-left font-weight-bolder d-g1 pr-4" style="margin: auto 0"/>-->
        <!--          <p class="fw-7 d-g1 fs-16 pr-4" style="margin: auto 0">Round <span class="fw-7">#124 </span></p>-->
        <!--          <i class="el-icon-arrow-right d-g5 pr-4" style="margin: auto 0"/>-->
        <!--          <i class="el-icon-d-arrow-right d-g5" style="margin: auto 0"/>-->
        <!--        </div>-->

        <img src="img/luckybox/modal-split.png" style="height: 1px">

        <div class="modal-body">
          <div class="py-1">
            <div class="d-flex justify-content-between">
              <p class="fw-7 d-g1 fs-16">Winning Number</p>
              <p class="fw-4 d-g4 fs-14">Drawn <span class="fw-7 d-g3 fs-14">20:00, 15/10/2021</span></p>
            </div>

            <div style="background-color: #F2F2F2; border-radius: 12px; height: 88px">
              <div class="row">
                <div class="col-xl-3"></div>
                <div class="col-xl-6 d-flex justify-content-between">
                  <img src="img/luckybox/num-3.png" style="max-width: 65px; max-height: 66px; margin-top: 11px">
                  <img src="img/luckybox/num-5.png" style="max-width: 65px; max-height: 66px; margin-top: 11px">
                  <img src="img/luckybox/num-6.png" style="max-width: 65px; max-height: 66px; margin-top: 11px">
                  <img src="img/luckybox/num-7.png" style="max-width: 65px; max-height: 66px; margin-top: 11px">
                </div>
                <div class="col-xl-3"></div>
              </div>
            </div>

            <div class="row pt-4">
              <div class="col-lg-3">
                <h4 class="fw-7 d-g1 fs-16">Prize Pot</h4>
                <h4 class="fw-7 d-p fs-24">$272,786</h4>
              </div>
              <div class="col-lg-2">
                <h4 class="fw-5 d-g4 fs-14">Match First 1</h4>
                <h4 class="fw-7 d-p fs-20">$1,575</h4>
                <h4 class="fw-5 d-g1 fs-14">$32.85 each</h4>
                <h4 class="fw-5 d-g4 fs-14">429 Winners</h4>
              </div>
              <div class="col-lg-2">
                <h4 class="fw-5 d-g4 fs-14">Match First 2</h4>
                <h4 class="fw-7 d-p fs-20">$6,575</h4>
                <h4 class="fw-5 d-g1 fs-14">$185.34 each</h4>
                <h4 class="fw-5 d-g4 fs-14">32 Winners</h4>
              </div>
              <div class="col-lg-2">
                <h4 class="fw-5 d-g4 fs-14">Match First 3</h4>
                <h4 class="fw-7 d-p fs-20">$9,575</h4>
                <h4 class="fw-5 d-g1 fs-14">$443.85 each</h4>
                <h4 class="fw-5 d-g4 fs-14">5 Winners</h4>
              </div>
              <div class="col-lg-2">
                <h4 class="fw-5 d-g4 fs-14">Match First 4</h4>
                <h4 class="fw-7 d-p fs-20">$12,575</h4>
                <h4 class="fw-5 d-g1 fs-14">$3,264.85 each</h4>
                <h4 class="fw-5 d-g4 fs-14">0 Winners</h4>
              </div>
              <div class="col-xl-1"></div>
            </div>
          </div>
        </div>

        <img src="img/luckybox/modal-split.png" style="height: 1px">

        <div class="modal-footer pt-4 pl-4" style="display: block">
          <div class="d-flex justify-content-between">
            <p class="fw-7 d-g1 fs-16" style="margin: auto 0">My Tickets</p>
            <base-button>GET PRIZE</base-button>
          </div>

          <el-table :data="prizeData" class="" header-cell-style="text-align: center; height: 70px" cell-style="text-align: center; height: 70px">
            <el-table-column prop="lotteryid" label="LOTTERY ID" sortable>
              <template #default="scope">
                <p class="fw-7 d-g1 fs-16 ma">{{ scope.row.lorreryid }}</p>
              </template>
            </el-table-column>
            <el-table-column prop="lotterynumber" label="LOTTERY NUMBERS" sortable>
              <template #default="scope">
                <img v-for="num in scope.row.number" :src="'img/luckybox/num-'+ num +'.png'" style="max-width: 44px; max-height: 44px;"/>
              </template>
            </el-table-column>
            <el-table-column prop="lotteryrewards" label="LOTTERY REWARDS" sortable>
              <template #default="scope">
                <p class="fw-7 d-p fs-24 ma">${{ scope.row.lotteryrewards }}</p>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "lb-details",
  components: {},
  data() {
    return {
      prizeData: [
        {
          lorreryid: "0x9547342134",
          number: [3, 6, 8, 9],
          lotteryrewards: 120,
        },
        {
          lorreryid: "0x3453452435",
          number: [2, 6, 3, 2],
          lotteryrewards: 40,
        },]
    };
  },
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
