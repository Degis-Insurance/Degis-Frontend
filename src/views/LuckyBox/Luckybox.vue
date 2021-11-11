<template>
  <base-header type="" class="pb-6 pb-8 pt-4">
    <h1 class="fw-7 d-g1 fs-34 mb-4">The Degis Lucky Box</h1>
    <stats-card style=" width: 100%; background-size: 100% 100%; background-repeat: no-repeat; background-image: url('img/homepage/degis-lucky-box.png');">
      <div class="container" style="height: 620px">
        <div class="row row-grid align-items-center">
          <h1 class="fw-7 d-g1 fs-34 pt-8" style="margin: auto">
            The Degis Lucky Box
          </h1>
        </div>
        <div class="row align-items-center">
          <h1 class="fw-9 d-p pt-4" style="font-size: 60px; margin: auto; text-align: center">
            $272,786
          </h1>
        </div>
        <div class="row align-items-center">
          <h5 class="fw-9 d-g2 fs-24 ma pt-4">IN PRIZES!</h5>
        </div>
        <div class="row row-grid align-items-center">
          <base-button
            style="margin: 5% auto; padding: 1% 5%"
            @click="modals.BuyTickets = true"
          >Buy Tickets
          </base-button
          >
        </div>
      </div>
    </stats-card>

    <div class="row">
      <div class="col-3">
        <stats-card>
          <div class="container-fluid" style="height: 450px">
            <div class="row row-grid align-items-center">
              <h2 class="fw-7 d-g1 fs-28 pt-3">Next Draw</h2>
            </div>
            <div class="row">
              <h3 class="fw-7 d-g1 fs-16 pt-3">Round #124</h3>
            </div>
            <div class="row">
              <h4 class="fw-5 d-g4 fs-14 pt-2">prize Pot</h4>
            </div>
            <div class="row">
              <h4 class="fw-7 d-p fs-24 pt-2">$272,786</h4>
            </div>
            <div class="row">
              <h4 class="fw-5 d-g4 fs-14 pt-2">End in</h4>
            </div>
            <div class="row">
              <h3 class="fw-7 d-g1 fs-16 pt-2">20:00, 15/10/2021</h3>
            </div>
            <div class="row pt-4">
              <base-button
                style="margin: 3% auto; padding: 3% 8%; width: 100%"
                @click="modals.BuyTickets = true"
              >Buy Tickets
              </base-button
              >
            </div>
            <div class="row">
              <h4 class="fw-4 d-p fs-14 pt-3" style="margin: auto" @click="modals.WinningRules = true">Winning rules ></h4>
            </div>
          </div>
        </stats-card>
      </div>

      <div class="col-9">
        <stats-card>
          <div class="container-fluid" style="height: 450px">
            <div class="row row-grid align-items-center justify-content-between pt-3 pb-2">
              <h2 class="fw-7 d-g1 fs-28 ">Finished Rounds ></h2>
              <div class="d-flex">
                <base-button @click="modals.PendingPrize = true">PENDING PRIZE</base-button>
              </div>
            </div>

            <div class="row">
              <div class="col-12">

                <el-tabs v-model="activeName">
                  <el-tab-pane label="All History" name="AllHistory">
                    <div style="padding: 0 3%">
                      <div class="row justify-content-between pt-4">
                        <h4 class="fw-7 d-g1 fs-16">Winning Number</h4>
                        <h4 class="fw-4 d-g4 fs-14">Drawn <span class="fw-7 d-g3"> 20:00, 15/10/2021</span></h4>
                      </div>
                      <div class="pt-2">
                        <div style="background-color: #F2F2F2; border-radius: 12px; height: 88px">
                          <div class="row">
                            <div class="col-xl-3"></div>
                            <div class="col-xl-6 d-flex justify-content-between">
                              <img :src="'img/luckybox/num-'+num[0]+'.png'" style="max-width: 65px; max-height: 66px; margin-top: 11px">
                              <img :src="'img/luckybox/num-'+num[1]+'.png'" style="max-width: 65px; max-height: 66px; margin-top: 11px">
                              <img :src="'img/luckybox/num-'+num[2]+'.png'" style="max-width: 65px; max-height: 66px; margin-top: 11px">
                              <img :src="'img/luckybox/num-'+num[3]+'.png'" style="max-width: 65px; max-height: 66px; margin-top: 11px">
                            </div>
                            <div class="col-xl-3"></div>
                          </div>
                        </div>
                      </div>
                      <div class="row justify-content-between pt-4">
                        <div>
                          <h4 class="fw-7 d-g1 fs-16 pt-2">Prize Pot: <span class="fw-7 d-p fs-24">$272,786</span></h4>
                          <h4 class="fw-4 d-p fs-14 pt-3" @click="modals.Details = true">Details ></h4>
                        </div>

                        <div class="demo-pagination-block pt-5">
                          <el-pagination
                            :currentPage="124"
                            :page-size="1"
                            layout="prev, pager, next, jumper"
                            :total="124"
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                          >
                          </el-pagination>
                        </div>

                      </div>
                    </div>
                  </el-tab-pane>

                  <el-tab-pane label="Your History" name="YourHistory">
                    <div style="padding: 0 3%">
                      <div class="row justify-content-between pt-4">
                        <h4 class="fw-7 d-g1 fs-16">Your Number</h4>
                        <h4 class="fw-4 d-g4 fs-14">Drawn <span class="fw-7 d-g3"> 20:00, 15/10/2021</span></h4>
                      </div>
                      <div class="pt-2">
                        <div style="background-color: #F2F2F2; border-radius: 12px; height: 88px">
                          <div class="row">
                            <div class="col-xl-3"></div>
                            <div class="col-xl-6 d-flex justify-content-between">
                              <img :src="'img/luckybox/num-'+num[3]+'.png'" style="max-width: 65px; max-height: 66px; margin-top: 11px">
                              <img :src="'img/luckybox/num-'+num[0]+'.png'" style="max-width: 65px; max-height: 66px; margin-top: 11px">
                              <img :src="'img/luckybox/num-'+num[2]+'.png'" style="max-width: 65px; max-height: 66px; margin-top: 11px">
                              <img :src="'img/luckybox/num-'+num[1]+'.png'" style="max-width: 65px; max-height: 66px; margin-top: 11px">
                            </div>
                            <div class="col-xl-3"></div>
                          </div>
                        </div>
                      </div>
                      <div class="row justify-content-between pt-4">
                        <div>
                          <h4 class="fw-7 d-g1 fs-16 pt-2">Prize Pot: <span class="fw-7 d-p fs-24">$272,786</span></h4>
                          <h4 class="fw-4 d-p fs-14 pt-3" @click="modals.Details = true">Details ></h4>
                        </div>

                        <div class="demo-pagination-block pt-5">
                          <el-pagination
                            :currentPage="124"
                            :page-size="1"
                            layout="prev, pager, next, jumper"
                            :total="124"
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                          >
                          </el-pagination>
                        </div>

                      </div>
                    </div>

                  </el-tab-pane>
                </el-tabs>
              </div>
            </div>

          </div>
        </stats-card>
      </div>
    </div>
  </base-header>

  <buy-tickets v-model:show="modals.BuyTickets">
    <template v-slot:footer>
      <base-button style="width: 100%; height: 100%" @click="modals.BuyTickets = false">Buy Tickets</base-button>
    </template>
  </buy-tickets>

  <pending-prize v-model:show="modals.PendingPrize"></pending-prize>
  <lb-details v-model:show="modals.Details"></lb-details>
  <winning-rules v-model:show="modals.WinningRules"></winning-rules>
</template>

<script>
import BuyTickets from "./BuyTickets";
import PendingPrize from "./PendingPrize";
import LbDetails from "./LbDetails";
import WinningRules from "./WinningRules";
import {
  getMockUSD,
  getDegis,
  getDegisLottery,
} from "../../utils/contractInstance";

export default {
  name: "luckybox",
  components: {
    BuyTickets,
    PendingPrize,
    LbDetails,
    WinningRules,
  },
  data() {
    return {
      num: [3, 5, 6, 7],
      activeName: 'AllHistory',
      modals: {
        BuyTickets: false,
        PendingPrize: false,
        LbDetails: false,
        WinningRules: false,
      },
    };
  },
  methods: {
    timestampToTime(timestamp) {
      let date = new Date(timestamp);
      var Y, M, D, h, m, s;
      Y = date.getFullYear() + "-";
      M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      (D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " "),
        (h =
          (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) +
          ":");
      m =
        (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
        ":";
      s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      return Y + M + D + h + m + s;
    },

    async ShowLotteryInfo(lotteryId) {
      const DegisLottery = await getDegisLottery();
      const account = this.$store.state.selectedAccount;

      console.log("currentLotteryId", lotteryId);
      const lotteryDetails = await DegisLottery.methods
        .viewLottery(lotteryId)
        .call();

      return lotteryDetails;
    },

    async ShowUserInfo(lotteryId) {
      const DegisLottery = await getDegisLottery();
      const account = this.$store.state.selectedAccount;

      const userTicketInfo = await DegisLottery.methods
        .viewUserInfoForLotteryId(account, lotteryId, 0, 40)
        .call();

      return userTicketInfo;
    },

    async ClaimAllTickets(lotteryId) {
      const DegisLottery = await getDegisLottery();
      const lotteryDetails = await DegisLottery.methods
        .viewLottery(lotteryId)
        .call();
      const account = this.$store.state.selectedAccount;
      if (lotteryDetails.status == 3) {
        const tx = await DegisLottery.methods.claimAllTickets(lotteryId).send({
          from: account,
        });
        console.log("Tx Hash:", tx.transactionHash);
      } else {
        alert("current round not claimable now");
      }
    },

    async RedeemTicket(ticketIds) {
      const DegisLottery = await getDegisLottery();
      const account = this.$store.state.selectedAccount;
      const tx = await DegisLottery.methods
        .redeemTickets(ticketIds)
        .send({ from: account });
      console.log("Tx Hash:", tx.transactionHash);
    },

    async ShowLotteryInfoEvent() {
      var lotteryId = 1;
      const lotteryDetails = await this.ShowLotteryInfo(lotteryId);
      console.log(lotteryDetails);
      // TODO 返回所有期，id, 状态，每一期开奖奖池，每一个池子的奖金，中奖数...
    },

    async ShowUserInfoEvent() {
      var lotteryId = 1;
      const userTicketInfo = await this.ShowUserInfo(lotteryId);
      console.log(userTicketInfo);
      // TODO 返回所有期，id, 买入lotteryId， 是否卖出，卖出lotteryId，不同期的获奖情况...
    },

    async ClaimAllTicketsEvent() {
      var lotteryId = 1;
      await this.ClaimAllTickets(lotteryId);
    },

    async RedeemTicketEvent() {
      var ticketIds = [3];
      await this.RedeemTicket(ticketIds);
    },
  },
};
</script>

<style scoped>
.nd-2 {
  font-weight: bold;
  font-size: 16px;
  color: #2c2d2f;
}
</style>
