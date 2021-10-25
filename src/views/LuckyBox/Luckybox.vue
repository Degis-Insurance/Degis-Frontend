<template>
  <base-header type="" class="pb-6 pb-8 pt-4">
    <h1 class="fw-7 d-g1 fs-34 mb-4">
      The Degis Lucky Box
    </h1>
    <stats-card
      style="
        width: 100%;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-image: url('img/homepage/degis-lucky-box.png');
      "
    >
      <div class="container" style="height: 500px">
        <div class="row row-grid align-items-center">
          <h1 class="fw-7 d-g1 fs-34 pt-7" style="margin: auto">
            The Degis Lucky Box
          </h1>
        </div>
        <div class="row align-items-center">
          <h1 class="fw-9 d-p pt-3" style="font-size: 60px; margin: auto; text-align: center">
            $272,786
          </h1>
        </div>
        <div class="row align-items-center">
          <h5 class="fw-9 d-g2 fs-24 ma pt-3">IN PRIZES!</h5>
        </div>
        <div class="row row-grid align-items-center">
          <base-button
            style="margin: 3% auto; padding: 1% 5%"
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
              <h4 class="fw-4 d-p fs-14 pt-3" style="margin: auto">Winning rules ></h4>
            </div>
          </div>
        </stats-card>
      </div>

      <div class="col-9">
        <stats-card>
          <div class="container-fluid" style="height: 450px">
            <div
              class="row row-grid align-items-center justify-content-between"
            >
              <h2 class="fw-7 d-g1 fs-28 pt-3">Finished Rounds ></h2>
              <div class="d-flex">
                <base-button>All History</base-button>
                <base-button style="background: #f2f2f2; color: #6415ff"
                >Your History
                </base-button
                >
              </div>
            </div>
            <div class="row justify-content-between">
              <h3 class="nd-2 pt-4">Round #124 > >></h3>
              <h3 class="fw-4 d-p fs-14 pt-4">View More ></h3>
            </div>
            <div class="row justify-content-between pt-3">
              <h4 class="fw-7 d-g1 fs-16 pt-3">Winning Number</h4>
              <h4 class="fw-4 d-g4 fs-14 pt-4">Drawn <span class="fw-7 d-g3"> 20:00, 15/10/2021</span></h4>
            </div>

            <div class="pt-3">
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

            <div class="row justify-content-between pt-3">
              <div>
                <h4 class="fw-7 d-g1 fs-16 pt-3">Prize Pot: <span class="fw-7 d-p fs-24">$272,786</span></h4>
                <h4 class="fw-4 d-p fs-14 pt-3" @click="modals.Details = true">Details ></h4>
              </div>
              <div>
                <h4 class="fw-4 d-g1 fs-14 pt-3" align="right">Are you a winner?</h4>
                <base-button @click="modals.PendingPrize = true">CHECK YOUR PENDING PRIZE</base-button>
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

  <pending-prize v-model:show="modals.PendingPrize">
    <template v-slot:footer>
      <base-button @click="modals.PendingPrize = false">Buy Tickets</base-button>
    </template>
  </pending-prize>

  <lb-details v-model:show="modals.Details"></lb-details>
</template>

<script>
import BuyTickets from "./BuyTickets";
import PendingPrize from "./PendingPrize";
import LbDetails from "./LbDetails";

export default {
  name: "luckybox",
  components: {
    BuyTickets,
    PendingPrize,
    LbDetails,
  },
  data() {
    return {
      num: [3, 5, 6, 7],
      modals: {
        BuyTickets: false,
        PendingPrize: false,
        LbDetails: false,
      },
    };
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
