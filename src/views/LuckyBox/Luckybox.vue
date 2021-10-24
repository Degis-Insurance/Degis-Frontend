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
            >Buy Tickets</base-button
          >
        </div>
      </div>
    </stats-card>

    <div class="row">
      <div class="col-3">
        <stats-card>
          <div class="container-fluid" style="height: 500px">
            <div class="row row-grid align-items-center">
              <h2 class="fw-7 d-g1 fs-28 pt-3">Next Draw</h2>
            </div>
            <div class="row">
              <h3 class="fw-7 d-g1 fs-16 pt-4">Round #124</h3>
            </div>
            <div class="row">
              <h4 class="fw-5 d-g4 fs-14 pt-3">prize Pot</h4>
            </div>
            <div class="row">
              <h4 class="fw-7 d-p fs-24 pt-3">$272,786</h4>
            </div>
            <div class="row">
              <h4 class="fw-5 d-g4 fs-14 pt-3">End in</h4>
            </div>
            <div class="row">
              <h3 class="fw-7 d-g1 fs-16 pt-3">20:00, 15/10/2021</h3>
            </div>
            <div class="row pt-5">
              <base-button
                style="margin: 3% auto; padding: 3% 8%; width: 100%"
                @click="modals.BuyTickets = true"
                >Buy Tickets</base-button
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
          <div class="container-fluid" style="height: 500px">
            <div
              class="row row-grid align-items-center justify-content-between"
            >
              <h2 class="fw-7 d-g1 fs-28 pt-3">Finished Rounds ></h2>
              <div class="d-flex">
                <base-button>All History</base-button>
                <base-button style="background: #f2f2f2; color: #6415ff"
                  >Your History</base-button
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
            <img
              class="pt-4"
              src="img/function/luckybox-number.png"
              style="width: 100%"
            />
            <div class="row justify-content-between pt-3">
              <div>
                <h4 class="fw-7 d-g1 fs-16 pt-3">Prize Pot: <span class="fw-7 d-p fs-24">$272,786</span></h4>
                <h4 class="fw-4 d-p fs-14 pt-3">Details ></h4>
              </div>
              <div>
                <h4 class="fw-4 d-g1 fs-14 pt-3" align="right">Are you a winner?</h4>
                <base-button @click="modals.PendingPrize = true"
                  >CHECK YOUR PENDING PRIZE</base-button
                >
              </div>
            </div>
          </div>
        </stats-card>
      </div>
    </div>
  </base-header>

  <buy-tickets v-model:show="modals.BuyTickets">
    <template v-slot:footer>
      <base-button @click="modals.BuyTickets = false">Buy Tickets</base-button>
    </template>
  </buy-tickets>

  <pending-prize v-model:show="modals.PendingPrize">
    <template v-slot:footer>
      <base-button @click="modals.PendingPrize = false"
        >Buy Tickets</base-button
      >
    </template>
  </pending-prize>
</template>

<script>
import BuyTickets from "./BuyTickets";
import PendingPrize from "./PendingPrize";

export default {
  name: "luckybox",
  components: {
    BuyTickets,
    PendingPrize,
  },
  data() {
    return {
      modals: {
        BuyTickets: false,
        PendingPrize: false,
      },
    };
  },
};
</script>

<style scoped>

.nd-1 {
  font-weight: bold;
  font-size: 28px;
  display: flex;
  align-items: center;
  color: #2c2d2f;
  display: inline-block;
}
.nd-2 {
  font-weight: bold;
  font-size: 16px;
  color: #2c2d2f;
}
.nd-3 {
  font-weight: 500;
  font-size: 14px;
  color: #bdbdbd;
}
.nd-4 {
  font-weight: bold;
  font-size: 24px;
  color: #6415ff;
}
.nd-5 {
  font-weight: normal;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #6415ff;
}
</style>
