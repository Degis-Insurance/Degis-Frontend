<template>
  <div class="modal fade" @click.self="closeModal" :class="[{ 'show d-block': show }, { 'd-none': !show }]" v-show="show" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" style="max-width: 100%">
      <div class="modal-content" style="width: 70%; border-radius: 24px; margin: auto">

        <div class="modal-header pl-4 pt-4 pb-2">
          <!--          <h1 class="fw-7 d-g1 fs-24">Finished Rounds Detail</h1>-->
          <h1 class="fw-7 d-g1 fs-24">Round # {{ viewData.round }}</h1>
          <button class="close pr-4" @click="closeModal">
            <img src="img/luckybox/close-modal.png" style="width: 24px;">
          </button>
        </div>

        <img src="img/luckybox/modal-split.png" style="height: 1px">

        <div class="modal-body">
          <div class="py-1">
            <div class="d-flex justify-content-between">
              <p class="fw-7 d-g1 fs-16">Winning Number</p>
              <p class="fw-4 d-g4 fs-14">Drawn <span class="fw-7 d-g3 fs-14">{{ viewData.drawtime }}</span></p>
            </div>

            <div style="background-color: #F2F2F2; border-radius: 12px; height: 88px">
              <div class="row">
                <div class="col-xl-3"></div>
                <div class="col-xl-6 d-flex justify-content-between">
                  <img v-for="num in this.viewData.prizenumber" :src="'img/luckybox/num-'+ num +'.png'" style="max-width: 65px; max-height: 66px; margin-top: 11px"/>
                </div>
                <div class="col-xl-3"></div>
              </div>
            </div>

            <div class="row pt-4">
              <div class="col-lg-3">
                <h4 class="fw-7 d-g1 fs-16">Prize Pot</h4>
                <h4 class="fw-7 d-p fs-24">${{ viewData.prizepot }}</h4>
              </div>
              <div class="col-lg-2">
                <h4 class="fw-5 d-g4 fs-14">Match First 1</h4>
                <h4 class="fw-7 d-p fs-20">${{prizeDetail.match1.totalMoney}}</h4>
                <h4 class="fw-5 d-g1 fs-14">${{ prizeDetail.match1.eachMoney }} each</h4>
                <h4 class="fw-5 d-g4 fs-14">{{ prizeDetail.match1.winnerNumber }} Winners</h4>
              </div>
              <div class="col-lg-2">
                <h4 class="fw-5 d-g4 fs-14">Match First 2</h4>
                <h4 class="fw-7 d-p fs-20">${{prizeDetail.match2.totalMoney}}</h4>
                <h4 class="fw-5 d-g1 fs-14">${{ prizeDetail.match2.eachMoney }} each</h4>
                <h4 class="fw-5 d-g4 fs-14">{{ prizeDetail.match2.winnerNumber }} Winners</h4>
              </div>
              <div class="col-lg-2">
                <h4 class="fw-5 d-g4 fs-14">Match First 3</h4>
                <h4 class="fw-7 d-p fs-20">${{prizeDetail.match3.totalMoney}}</h4>
                <h4 class="fw-5 d-g1 fs-14">${{ prizeDetail.match3.eachMoney }} each</h4>
                <h4 class="fw-5 d-g4 fs-14">{{ prizeDetail.match3.winnerNumber }} Winners</h4>
              </div>
              <div class="col-lg-2">
                <h4 class="fw-5 d-g4 fs-14">Match First 4</h4>
                <h4 class="fw-7 d-p fs-20">${{prizeDetail.match4.totalMoney}}</h4>
                <h4 class="fw-5 d-g1 fs-14">${{ prizeDetail.match4.eachMoney }} each</h4>
                <h4 class="fw-5 d-g4 fs-14">{{ prizeDetail.match4.winnerNumber }} Winners</h4>
              </div>
              <div class="col-xl-1"></div>
            </div>
          </div>
        </div>

        <img src="img/luckybox/modal-split.png" style="height: 1px">

        <div class="modal-footer pt-4 pl-4" style="display: block">
          <div class="d-flex justify-content-between">
            <p class="fw-7 d-g1 fs-16" style="margin: auto 0">My Tickets</p>
            <div class="d-flex">
              <p class="fw-7 d-p fs-24 ma pr-4">Totally $160</p>
              <base-button>GET PRIZE</base-button>
            </div>

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
        }],
      prizeDetail: {
        match1: {
          totalMoney: 1517,
          eachMoney: 32.85,
          winnerNumber: 426,
        },
        match2: {
          totalMoney: 6575,
          eachMoney: 185.34,
          winnerNumber: 32,
        },
        match3: {
          totalMoney: 9575,
          eachMoney: 443.85,
          winnerNumber: 5,
        },
        match4: {
          totalMoney: 12575,
          eachMoney: 3264.85,
          winnerNumber: 0,
        },
      },
    };
  },
  props: {
    show: Boolean,
    viewData: Object,
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
