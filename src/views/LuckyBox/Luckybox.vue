<template>
  <base-header type="" class="pb-6 pb-8 pt-4">
    <h1 class="big-head mt-2 mb-4">The Degis Lucky Box</h1>
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
          <h1 class="big-head pt-7" style="margin: auto">
            The Degis Lucky Box
          </h1>
        </div>
        <div class="row align-items-center">
          <h1 class="title-1 pt-4" style="margin: auto; text-align: center">
            $272,786
          </h1>
        </div>
        <div class="row align-items-center">
          <h5 class="text-ip pt-4">IN PRIZES!</h5>
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
              <h2 class="nd-1 pt-3">Next Draw</h2>
            </div>
            <div class="row">
              <h3 class="nd-2 pt-4">Round #124</h3>
            </div>
            <div class="row">
              <h4 class="nd-3 pt-3">prize Pot</h4>
            </div>
            <div class="row">
              <h2 class="nd-4 pt-3">$272,786</h2>
            </div>
            <div class="row">
              <h4 class="nd-3 pt-3">End in</h4>
            </div>
            <div class="row">
              <h3 class="nd-2 pt-3">20:00, 15/10/2021</h3>
            </div>
            <div class="row pt-5">
              <base-button
                style="margin: 3% auto; padding: 3% 8%; width: 100%"
                @click="modals.BuyTickets = true"
                >Buy Tickets</base-button
              >
            </div>
            <div class="row">
              <h4 class="nd-5 pt-3" style="margin: auto">Winning rules ></h4>
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
              <h2 class="nd-1 pt-3">Finished Rounds ></h2>
              <div class="d-flex">
                <base-button>All History</base-button>
                <base-button style="background: #f2f2f2; color: #6415ff"
                  >Your History</base-button
                >
              </div>
            </div>
            <div class="row justify-content-between">
              <h3 class="nd-2 pt-4">Round #124 > >></h3>
              <h3 class="nd-5 pt-4">View More ></h3>
            </div>
            <div class="row justify-content-between pt-3">
              <h4 class="nd-2 pt-3">Winning Number</h4>
              <h4 class="nd-3 pt-4">Drawn 20:00, 15/10/2021</h4>
            </div>
            <img
              class="pt-4"
              src="img/function/luckybox-number.png"
              style="width: 100%"
            />
            <div class="row justify-content-between pt-3">
              <div>
                <h4 class="nd-2 pt-3">Prize Pot: $272,786</h4>
                <h4 class="nd-5 pt-3">Details ></h4>
              </div>
              <div>
                <h4 class="nd-2 pt-3" align="right">Are you a winner?</h4>
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

  <modal v-model:show="modals.BuyTickets">
    <template v-slot:header>
      <h1 class="m-h">Buy Tickets</h1>
    </template>
    <div class="py-3 text-center">
      <h1>Some content here</h1>
    </div>
    <template v-slot:footer>
      <base-button
        type="link"
        text-color="white"
        class="ml-auto"
        @click="modals.BuyTickets = false"
        >Buy Tickets</base-button
      >
    </template>
  </modal>


  <modal v-model:show="modals.PendingPrize">
    <template v-slot:header>
      <h1 class="m-h">Pending Prize</h1>
    </template>
    <div class="text-center">
      <h4 class="m-pp-t" style="padding-left: 10%; padding-right: 10%">
        You do not have any pending prize!
      </h4>
    </div>
    <template v-slot:footer>
      <base-button type="white" @click="modals.PendingPrize = false" style="margin: 3% auto" >OK</base-button>
    </template>
  </modal>
</template>

<script>
// import BuyTickets from "./BuyTickets";
// import PendingPrize from "./PendingPrize";
import Modal from "../../components/Modal";
export default {
  name: "luckybox",
  components: {
    Modal,
    // BuyTickets,
    // PendingPrize,
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
.big-head {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 900;
  font-size: 34px;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: #2c2d2f;
}

.text-ip {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;

  margin: auto;
  text-align: center;
  text-transform: uppercase;
  color: #4d535c;
}

.nd-1 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  display: flex;
  align-items: center;
  color: #2c2d2f;
  display: inline-block;
}
.nd-2 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #2c2d2f;
}
.nd-3 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #bdbdbd;
}
.nd-4 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #6415ff;
}
.nd-5 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #6415ff;
}

.m-h {
  font-weight: bold;
  font-size: 24px;
  line-height: 120%;
  display: flex;
  align-items: center;
  color: #2C2D2F;
}

.m-pp-t {
  /*font-family: Montserrat;*/
  /*font-style: normal;*/
  font-weight: 500;
  font-size: 18px;
  color: #2C2D2F;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 40px 0px;
}
</style>
