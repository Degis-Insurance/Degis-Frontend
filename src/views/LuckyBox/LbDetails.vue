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
                  <img v-for="num in this.viewData.prizenumber" :src="'img/luckybox/num-'+ num +'.png'" style="max-width: 65px; max-height: 66px; margin-top: 11px" :key="num"/>
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
                <h4 class="fw-7 d-p fs-20">${{ prizeDetail.match1.totalMoney }}</h4>
                <h4 class="fw-5 d-g1 fs-14">${{ prizeDetail.match1.eachMoney }} each</h4>
                <h4 class="fw-5 d-g4 fs-14">{{ prizeDetail.match1.winnerNumber }} Winners</h4>
              </div>
              <div class="col-lg-2">
                <h4 class="fw-5 d-g4 fs-14">Match First 2</h4>
                <h4 class="fw-7 d-p fs-20">${{ prizeDetail.match2.totalMoney }}</h4>
                <h4 class="fw-5 d-g1 fs-14">${{ prizeDetail.match2.eachMoney }} each</h4>
                <h4 class="fw-5 d-g4 fs-14">{{ prizeDetail.match2.winnerNumber }} Winners</h4>
              </div>
              <div class="col-lg-2">
                <h4 class="fw-5 d-g4 fs-14">Match First 3</h4>
                <h4 class="fw-7 d-p fs-20">${{ prizeDetail.match3.totalMoney }}</h4>
                <h4 class="fw-5 d-g1 fs-14">${{ prizeDetail.match3.eachMoney }} each</h4>
                <h4 class="fw-5 d-g4 fs-14">{{ prizeDetail.match3.winnerNumber }} Winners</h4>
              </div>
              <div class="col-lg-2">
                <h4 class="fw-5 d-g4 fs-14">Match First 4</h4>
                <h4 class="fw-7 d-p fs-20">${{ prizeDetail.match4.totalMoney }}</h4>
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
              <p class="fw-7 d-p fs-24 ma pr-4">Totally ${{userPrize}}</p>
              <base-button @click="claimAllTicketsEvent">GET PRIZE</base-button>
            </div>

          </div>

          <el-table :data="prizeData" :header-cell-style="{'text-align': 'center', 'height': '70px'}" :cell-style="{'text-align': 'center', 'height': '70px'}">
            <el-table-column prop="ticketid" label="Ticket ID" sortable>
              <template #default="scope">
                <p class="fw-7 d-g1 fs-16 ma">{{ scope.row.ticketid }}</p>
              </template>
            </el-table-column>
            <el-table-column prop="lotterynumber" label="TICKET NUMBERS" sortable>
              <template #default="scope">
                <img v-for="num in scope.row.number" :src="'img/luckybox/num-'+ num +'.png'" style="max-width: 44px; max-height: 44px;" :key="num"/>
              </template>
            </el-table-column>
            <el-table-column prop="lotteryrewards" label="TICKET REWARDS" sortable>
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

import {onMounted} from "vue";
import {
  getMockUSD,
  getDegis,
  getDegisLottery,
} from "../../utils/contractInstance";
export default {
  name: "lb-details",
  components: {},
  data() {
    return {
      userPrize: "--",
      prizeData: [ ],
      prizeDetail: {
        match1: {
          totalMoney: "--",
          eachMoney: "--",
          winnerNumber: "--",
        },
        match2: {
          totalMoney: "--",
          eachMoney: "--",
          winnerNumber: "--",
        },
        match3: {
          totalMoney: "--",
          eachMoney: "--",
          winnerNumber: "--",
        },
        match4: {
          totalMoney: "--",
          eachMoney: "--",
          winnerNumber: "--",
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
    
    async showLotteryInfo(lotteryId) {
      const DegisLottery = await getDegisLottery();

      const lotteryDetails = await DegisLottery.methods
        .viewLottery(lotteryId)
        .call();

      return lotteryDetails;
    },

    async showUserInfo(lotteryId) {
      const DegisLottery = await getDegisLottery();
      const account = this.$store.state.selectedAccount;

      const userTicketInfo = await DegisLottery.methods
        .viewClaimAllTickets(lotteryId)
        .call({ from: account });

      return userTicketInfo;
    },

    // async claimAllTickets(lotteryId) {
    //   const DegisLottery = await getDegisLottery();
    //   const lotteryDetails = await DegisLottery.methods
    //     .viewLottery(lotteryId)
    //     .call();
    //   const account = this.$store.state.selectedAccount;
    //   if (lotteryDetails.status == 3) {
    //     const tx = await DegisLottery.methods.claimAllTickets(lotteryId).send({
    //       from: account,
    //     });
    //     console.log("Tx Hash:", tx.transactionHash);
    //   } else {
    //     alert("current round not claimable now");
    //   }
    // },

    async claimAllTickets(lotteryId) {
      const DegisLottery = await getDegisLottery();
      const lotteryDetails = await DegisLottery.methods
        .viewLottery(lotteryId)
        .call();
      const account = this.$store.state.selectedAccount;
      var number = []
      if (lotteryDetails.status == 3) {
        for(var i = 0; i<this.prizeData.length; i++)
        {
          number.push(window.WEB3.utils.toBN(this.prizeData[i].ticketid));
        }
        const tx = await DegisLottery.methods.claimTickets(lotteryId, number).send({
          from: account,
        });
        console.log("Tx Hash:", tx.transactionHash);
      } else {
        alert("current round not claimable now");
      }
    },

    async showLotteryInfoEvent() {
        var lotteryId = this.viewData.round;
        console.log(lotteryId);
        const lotteryInfo = await this.showLotteryInfo(lotteryId);
        console.log(lotteryInfo)
        var matchs = ["match1","match2","match3","match4"]
        for(var i=0; i<4;i++){
          this.prizeDetail[matchs[i]]["winnerNumber"]=(lotteryInfo["countWinnersPerBracket"][i] / 10000).toFixed(2);
          this.prizeDetail[matchs[i]]["eachMoney"]=(lotteryInfo["rewardPerTicketInBracket"][i] / 1e18 * 10000).toFixed(2);
          this.prizeDetail[matchs[i]]["totalMoney"]=(lotteryInfo["amountCollected"]/1e18 * lotteryInfo["rewardsBreakdown"][i] / 1e4).toFixed(2);
        }

        console.log(lotteryInfo);
    },

    int2array(num)
    {
      var number = new Array()
      number[0]=parseInt(Number(num) / 1000) %10
      number[1]=parseInt(Number(num) / 100) %10
      number[2]=parseInt(Number(num) / 10) %10
      number[3]=parseInt(Number(num) / 1) %10
      return number
    },

    async showUserInfoEvent() {
      var lotteryId = this.viewData.round
      const userTicketInfo = await this.showUserInfo(lotteryId);

      this.userPrize = (userTicketInfo[1] / 1e18).toFixed(2);

      console.log(userTicketInfo);
      this.prizeData = []
      for(var i=0;i<userTicketInfo[2].length;i++)
      {
        var ticketid = userTicketInfo[2][i][0]
        var number = this.int2array(userTicketInfo[2][i][1])
        var lotteryrewards = (userTicketInfo[2][i][2] / 1e18).toFixed(2)
        this.prizeData.push({ticketid:ticketid,number:number,lotteryrewards:lotteryrewards})
      }
    },

    async claimAllTicketsEvent() {
      var lotteryId = this.viewData.round
      await this.claimAllTickets(lotteryId);
      await this.showUserInfoEvent();
    }
  },
  created() {
    this.showUserInfoEvent();
    this.showLotteryInfoEvent();
    console.log("点击view按键之后开始创建LbDetails组件");
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
