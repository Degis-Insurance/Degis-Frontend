<template>
  <base-header type="" class="pt-4">
    <h1 class="d-f-1 mb-4">The Degis Lucky Box</h1>
    <stats-card
      style="
        background-size: cover;
        background-position: center;
        background-image: url('img/luckybox/luckybox.png');
      "
    >
      <div class="container" style="height: 450px">
        <div class="row row-grid align-items-center">
          <h1 class="d-f-1 pt-5" style="margin: auto">The Degis Lucky Box</h1>
        </div>
        <div class="row align-items-center">
          <h1
            class="fw-9 d-p pt-4"
            style="font-size: 60px; margin: auto; text-align: center"
          >
            ${{ inPrizeMin }}
          </h1>
        </div>
        <div class="row align-items-center">
          <h5 class="fw-9 d-g2 fs-24 ma pt-3">{{ inPrize }} IN PRIZES!</h5>
        </div>
        <div class="row row-grid align-items-center">
          <base-button style="margin: 3% auto" @click="modals.BuyTickets = true"
            >Buy Tickets</base-button
          >
        </div>
      </div>
    </stats-card>

    <el-card class="dg-card">
      <div class="container-fluid">
        <div
          class="
            row row-grid
            align-items-center
            justify-content-between
            pt-3
            pb-2
          "
        >
          <div>
            <h2 class="fw-7 d-g1 fs-28">Finished Rounds ></h2>
            <!--            <h4 class="fw-4 d-p fs-14 pt-1 pb-3" style="margin: auto" @click="modals.WinningRules = true">Winning rules ></h4>-->
          </div>
          <div class="d-flex">
            <h4
              class="fw-4 d-p fs-14 pt-1 pb-3"
              style="margin: auto"
              @click="modals.WinningRules = true"
            >
              Winning rules >
            </h4>
            <!--            <base-button @click="modals.PendingPrize = true">PENDING PRIZE</base-button>-->
          </div>
        </div>

        <el-tabs type="" :stretch="true">
          <el-tab-pane>
            <template #label
              ><p class="fw-7 d-g3 fs-16">ALL LOTTERY ROUND</p></template
            >
            <el-table
              :data="roundData"
              class="dg-cardtable"
              :header-cell-style="{ 'text-align': 'center', height: '70px' }"
              :cell-style="{ 'text-align': 'center', height: '70px' }"
            >
              <el-table-column prop="round" label="ROUND NO.">
                <template #default="scope">
                  <p class="fw-7 d-g1 fs-16 ma"># {{ scope.row.round }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="prizenumber" label="PRIZE NUMBER">
                <template #default="scope">
                  <img
                    v-for="num in scope.row.prizenumber"
                    :src="'img/luckybox/num-' + num + '.png'"
                    style="max-width: 44px; max-height: 44px"
                    :key="num"
                  />
                </template>
              </el-table-column>
              <el-table-column prop="drawtime" label="DRAW TIME">
                <template #default="scope">
                  <p class="fw-7 d-g1 fs-16 ma">{{ scope.row.drawtime }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="prizepot" label="PRIZE POT">
                <template #default="scope">
                  <p class="fw-7 d-p fs-24 ma">${{ scope.row.prizepot }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="view" label="VIEW">
                <template #default="scope">
                  <base-button @click="viewno(scope.row)">View</base-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="demo-pagination-block pt-4 pb-2" align="right">
              <!--              <el-pagination :currentPage="1" :page-size="1" layout="prev, pager, next, jumper" :total="1" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>-->
              <el-pagination
                :currentPage="1"
                :page-size="1"
                layout="prev, pager, next, jumper"
                :total="1"
              />
            </div>
          </el-tab-pane>

          <el-tab-pane>
            <template #label
              ><p class="fw-7 d-g3 fs-16">MY LOTTERY</p></template
            >
            <el-table
              :data="lotteryData"
              class="dg-cardtable"
              :header-cell-style="{ 'text-align': 'center', height: '70px' }"
              :cell-style="{ 'text-align': 'center', height: '70px' }"
            >
              <el-table-column prop="lotteryid" label="TICKET ID">
                <template #default="scope">
                  <p class="fw-7 d-g1 fs-16 ma">{{ scope.row.lotteryid }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="number" label="LOTTERY NUMBER">
                <template #default="scope">
                  <img
                    v-for="num in scope.row.number"
                    :src="'img/luckybox/num-' + num + '.png'"
                    style="max-width: 44px; max-height: 44px"
                    :key="num"
                  />
                </template>
              </el-table-column>
              <el-table-column prop="buylotteryid" label="BOUGHT TERM">
                <template #default="scope">
                  <p class="fw-7 d-g1 fs-16 ma">{{ scope.row.buylotteryid }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="isredeemed" label="WEIGHT">
                <template #default="scope">
                  <p class="fw-7 d-g1 fs-16 ma">{{ scope.row.weight }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="action" label="ACTION">
                <template #default="scope">
                  <base-button @click="refundno(scope.row)">Redeem</base-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="demo-pagination-block pt-4 pb-2" align="right">
              <!--              <el-pagination :currentPage="1" :page-size="1" layout="prev, pager, next, jumper" :total="1" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>-->
              <el-pagination
                :currentPage="1"
                :page-size="1"
                layout="prev, pager, next, jumper"
                :total="1"
              />
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-card>
  </base-header>

  <template v-if="modals.BuyTickets">
    <buy-tickets
      :roundData="currentRound"
      :drawTime="drawTime"
      :userDegisBalance="userDegisBalance"
      v-model:show="modals.BuyTickets"
    ></buy-tickets>
  </template>
  <pending-prize v-model:show="modals.PendingPrize"></pending-prize>
  <template v-if="modals.LbDetails">
    <lb-details
      v-model:show="modals.LbDetails"
      :viewData="viewData"
    ></lb-details>
  </template>
  <template v-if="modals.RefundConfirm">
    <refund-confirm
      v-model:show="modals.RefundConfirm"
      :refundData="refundData"
    ></refund-confirm>
  </template>
  <winning-rules v-model:show="modals.WinningRules"></winning-rules>
</template>

<script>
import BuyTickets from "./BuyTickets";
import PendingPrize from "./PendingPrize";
import LbDetails from "./LbDetails";
import WinningRules from "./WinningRules";
import BaseButton from "../../components/BaseButton";
import StatsCard from "../../components/StatsCard";
import RefundConfirm from "./RefundConfirm";
import {
  getMockUSD,
  getDegis,
  getDegisLottery,
} from "../../utils/contractInstance";

export default {
  name: "luckybox",
  components: {
    RefundConfirm,
    StatsCard,
    BaseButton,
    BuyTickets,
    PendingPrize,
    LbDetails,
    WinningRules,
  },
  data() {
    return {
      currentRound: 0,
      drawTime: "--",
      num: [3, 5, 6, 7],
      userDegisBalance: 0,
      // activeName: 'AllHistory',
      roundData: [],
      lotteryData: [],
      modals: {
        BuyTickets: false,
        PendingPrize: false,
        LbDetails: false,
        WinningRules: false,
        RefundConfirm: false,
      },
      viewData: {},
      refundData: {},
      inPrize: "--",
    };
  },

  computed: {
    currentAccount() {
      return this.$store.state.selectedAccount;
    },
  },

  watch: {
    "$store.state.selectedAccount": function (newVal) {
      this.showLotteryInfoEvent();
      this.showUserInfoEvent();
    },
    "$store.state.lastTransactionHash": function (newVal) {
      this.showLotteryInfoEvent();
      this.showUserInfoEvent();
    },
  },

  mounted() {
    this.showLotteryInfoEvent();
    this.showUserInfoEvent();
  },

  methods: {
    viewno(val) {
      this.viewData = val;
      this.modals.LbDetails = true;
      this.viewData = val;
    },
    async refundno(refundData) {
      this.refundData = refundData;
      console.log(this.refundData["lotteryid"]);
      await this.redeemTicketEvent([this.refundData["lotteryid"]]);
      await this.showUserInfoEvent();
      //this.modals.RefundConfirm = true;
    },

    async showLotteryInfo() {
      const DegisLottery = await getDegisLottery();
      const lotteryDetails = await DegisLottery.methods.viewAllLottery().call();

      return lotteryDetails;
    },

    async showUserInfo() {
      const DegisLottery = await getDegisLottery();
      const account = this.$store.state.selectedAccount;
      if (account != null) {
        const userTicketInfo = await DegisLottery.methods
          .viewUserInfo(account)
          .call();
        return userTicketInfo;
      }
      return [[]];
    },

    async redeemTicket(ticketIds) {
      const DegisLottery = await getDegisLottery();
      const account = this.$store.state.selectedAccount;
      const tx = await DegisLottery.methods
        .redeemTickets(ticketIds)
        .send({ from: account });
      console.log("Tx Hash:", tx.transactionHash);
      this.$store.commit("SET_LASTTRANSACTIONHASH", tx.transactionHash);
    },

    getExactTime(time) {
      var date = new Date(time);
      var year = date.getFullYear() + "-";
      var month =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var dates = date.getDate() + " ";
      var hour = date.getHours() + ":";
      var min = date.getMinutes() + ":";
      var second = date.getSeconds();
      return year + month + dates + hour + min + second;
    },

    int2array(num) {
      var number = new Array();
      number[0] = parseInt(Number(num) / 1000) % 10;
      number[1] = parseInt(Number(num) / 100) % 10;
      number[2] = parseInt(Number(num) / 10) % 10;
      number[3] = parseInt(Number(num) / 1) % 10;
      return number;
    },

    async showLotteryInfoEvent() {
      this.roundData = [];
      const lotteryDetails = await this.showLotteryInfo();
      console.log("lotteryDetails", lotteryDetails);
      this.currentRound =
        lotteryDetails[lotteryDetails.length - 1]["lotteryId"];
      this.drawTime = this.getExactTime(
        lotteryDetails[lotteryDetails.length - 1]["endTime"] * 1000
      );
      for (var i = lotteryDetails.length - 1; i >= 0; i--) {
        var lotteryDetail = lotteryDetails[i];
        var status = lotteryDetail["status"];
        var round = lotteryDetail["lotteryId"];
        var drawtime = this.getExactTime(
          Number(lotteryDetail["endTime"]) * 1000
        );
        var prizenumber = this.int2array(lotteryDetail["finalNumber"]);
        if (status != 3) prizenumber = "";
        var prizepot = (lotteryDetail["amountCollected"] / 1e18).toFixed(2);
        this.roundData.push({
          round: round,
          prizenumber: prizenumber,
          drawtime: drawtime,
          prizepot: prizepot,
        });
        console.log(lotteryDetails[i]);
      }
      this.inPrize = (
        lotteryDetails[lotteryDetails.length - 1]["amountCollected"] / 1e18
      ).toFixed(2);
      this.inPrizeMin = Math.max(10000, this.inPrize).toFixed(2);
    },

    async showUserInfoEvent() {
      const userTicketInfo = await this.showUserInfo();
      const DegisLottery = await getDegisLottery();
      const currentLotteryId = await DegisLottery.methods
        .currentLotteryId()
        .call();

      const account = this.$store.state.selectedAccount;
      const degis = await getDegis();
      this.userDegisBalance = 0;
      if (account != null) {
        this.userDegisBalance = await degis.methods.balanceOf(account).call();
      }

      console.log("userTicketInfo", userTicketInfo);
      this.lotteryData = [];
      for (var i = 0; i < userTicketInfo[0].length; i++) {
        var lotteryid = userTicketInfo[0][i];
        var number = this.int2array(userTicketInfo[1][i]["number"]);
        var buylotteryid = userTicketInfo[1][i]["buyLotteryId"];
        var isredeemed = userTicketInfo[1][i]["isRedeemed"];
        var redeemlotteryid = userTicketInfo[1][i]["redeemLotteryId"];
        var weight = (
          1 + Math.log(currentLotteryId - buylotteryid + 1)
        ).toFixed(2);
        if (isredeemed == false) {
          this.lotteryData.push({
            lotteryid: lotteryid,
            number: number,
            buylotteryid: buylotteryid,
            isredeemed: isredeemed,
            redeemlotteryid: redeemlotteryid,
            weight: weight,
          });
        }
      }
    },

    async redeemTicketEvent(ticketIds) {
      await this.redeemTicket(ticketIds);
    },
  },
};
</script>

<style scoped></style>
