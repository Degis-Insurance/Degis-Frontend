<template>
  <base-header type="" class="pb-6 pb-8 pt-4">
    <h1 class="fw-7 d-g1 fs-34 mb-4">Mining by DEGIS</h1>
    <stats-card>
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-xl-6 order-md-1">
            <h2 class="fw-7 d-g1 fs-28" style="padding: 3% 0">
              The Miserable Flight Pool
            </h2>
            <div class="row justify-content-between" style="padding: 2% 0">
              <div class="col-6">
                <img
                  src="img/function/mining-circle.png"
                  class="img-fluid"
                  style="width: 80%"
                />
              </div>
              <div class="col-6">
                <h5 class="text-l">
                  Total Value Locked: <bold> {{ totalValueLocked }}</bold>
                </h5>
                <h5 class="text-l">
                  Available Capacity: <bold> {{ availableCapacity }}</bold>
                </h5>
                <h5 class="text-l">
                  Current Policies: <bold> {{ currentPolicies }}</bold>
                </h5>
                <h5 class="text-l">
                  Locked Ratio: <bold> {{ lockedRatio }}</bold>
                </h5>
                <h5 class="text-l">APR: <bold id="apr"> {{ APR }} </bold></h5>
              </div>
            </div>
            <h5 class="text-l">
              Pool Address: <bold> {{ poolAddress }}</bold>
            </h5>
          </div>
          <div class="col-xl-6 order-md-2">
            <h5 class="text-r">
              Your Asset:
              <bold> {{ userAsset }}</bold>
            </h5>
            <input
              class="degis-input"
              style="width: 100%; margin: 4% 0"
              placeholder="0"
              id="degis-input"
            />
            <div
              class="d-flex justify-content-between"
              style="padding-bottom: 11%"
            >
              <base-button style="width: 45%" @click="depositUSDEvent">
                DEPOSIT
              </base-button>
              <base-button style="width: 45%" @click="withdrawUSDEvent">
                WITHDRAW
              </base-button>
            </div>
            <h5 class="text-r">
              Your Premium Income:
              <bold> {{ userPendingPremium }} </bold>
            </h5>
            <h5 class="text-r">
              Your DEGIS Token Income:
              <bold> {{ userPendingDegis }} </bold>
            </h5>
            <base-button
              style="width: 100%; margin-bottom: 2%"
              @click="harvestDegisEvent"
            >
              HARVEST REWARD</base-button
            >
          </div>
        </div>
      </div>
    </stats-card>
    <stats-card>
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-xl-6 order-md-1">
            <h2 class="fw-7 d-g1 fs-28" style="padding: 3% 0">
              The Naughty Price Pool
            </h2>
            <div class="row justify-content-between" style="padding: 2% 0">
              <div class="col-6">
                <img
                  src="img/function/mining-circle-2.png"
                  class="img-fluid"
                  style="width: 80%"
                />
              </div>
              <div class="col-6">
                <h5 class="text-l">Total Value Locker: <bold> --</bold></h5>
                <h5 class="text-l">Available Capacity: <bold> --</bold></h5>
                <h5 class="text-l">Current Policies: <bold> --</bold></h5>
                <h5 class="text-l">Locked Ratio: <bold> --</bold></h5>
                <h5 class="text-l">APR: <bold> XX%</bold></h5>
              </div>
            </div>
            <h5 class="text-l">Pool Address: <bold> --</bold></h5>
          </div>
          <div class="col-xl-6 order-md-2">
            <h5 class="text-r">Your Asset: <bold> -- (+--%)</bold></h5>
            <input
              class="degis-input"
              style="width: 100%; margin: 4% 0"
              placeholder="0"
            />
            <div
              class="d-flex justify-content-between"
              style="padding-bottom: 11%"
            >
              <base-button style="width: 45%"> DEPOSIT</base-button>
              <base-button style="width: 45%"> WITHDRAW</base-button>
            </div>
            <h5 class="text-r">Your Premium Income: <bold> --</bold></h5>
            <h5 class="text-r">Your DEGIS Token Income: <bold> --</bold></h5>
            <base-button style="width: 100%; margin-bottom: 2%"
              >HARVEST REWARD</base-button
            >
          </div>
        </div>
      </div>
    </stats-card>
  </base-header>
</template>

<script>
import BaseButton from "@/components/BaseButton";
import Web3 from "web3";
import {
  getMockUSD,
  getInsurancePool,
  getLPToken,
  getPolicyFlow,
} from "../../utils/contractInstance";

export default {
  name: "mining",
  components: {
    BaseButton,
  },
  data() {
    return {
      userPendingPremium: 0,
      userAsset: 0,
      userPendingDegis: 0,
      totalValueLocked: 0,
      availableCapacity: 0,
      currentPolicies: 0,
      lockedRatio: 0,
      APR: 0
    };
  },
  computed: {
    currentAccount() {
      return this.$store.state.selectedAccount;
    },
  },

  watch: {
    "$store.state.selectedAccount": function (newVal) {
      this.updateInfoEvent();
    },
  },

  mounted() {
    this.updateInfoEvent();
  },

  methods: {
    async depositUSD(depositAmount) {
      const MockUSD = await getMockUSD();
      const InsurancePool = await getInsurancePool();
      const account = this.$store.state.selectedAccount;

      let fAmount = window.WEB3.utils.toWei(String(depositAmount), "ether");

      const tx1 = await MockUSD.methods
        .approve(InsurancePool.options.address, window.WEB3.utils.toBN(fAmount))
        .send({ from: account });
      console.log("Tx Hash:", tx1.transactionHash);

      const tx2 = await InsurancePool.methods
        .stake(account, window.WEB3.utils.toBN(fAmount))
        .send({ from: account });
      console.log("Tx Hash:", tx2.transactionHash);
    },

    async withdrawUSD(depositAmount) {
      const InsurancePool = await getInsurancePool();
      const account = this.$store.state.selectedAccount;

      let fAmount = window.WEB3.utils.toWei(String(depositAmount), "ether");

      const tx = await InsurancePool.methods
        .unstake(account, window.WEB3.utils.toBN(fAmount))
        .send({
          from: account,
        });
      console.log("Tx Hash:", tx.transactionHash);
    },

    async harvestPremium() {
      const InsurancePool = await getInsurancePool();
      const account = this.$store.state.selectedAccount;

      const tx = await InsurancePool.methods.harvestPremium(account).send({
        from: account,
      });
      console.log("Tx Hash:", tx.transactionHash);
    },

    async harvestDegis() {
      const InsurancePool = await getInsurancePool();
      const account = this.$store.state.selectedAccount;

      const tx = await InsurancePool.methods.harvestDegisReward(account).send({
        from: account,
      });
      console.log("Tx Hash:", tx.transactionHash);
    },

    async getLPInfo() {
      const InsurancePool = await getInsurancePool();
      const LPToken = await getLPToken();
      const account = this.currentAccount;

      await InsurancePool.methods
        .getStakeAmount(account)
        .call()
        .then((value) => {
          console.log("Your stake amount:", parseInt(value) / 10 ** 18);
        });

      await InsurancePool.methods
        .getUnlockedfor(account)
        .call()
        .then((value) => {
          console.log("Your unlocked amount:", parseInt(value) / 10 ** 18);
        });

      await InsurancePool.methods
        .getLockedfor(account)
        .call()
        .then((value) => {
          console.log("Your locked amount:", parseInt(value) / 10 ** 18);
        });

      const realBalance = await InsurancePool.methods
        .getRealBalance(account)
        .call();

      console.log("Your real balance:", parseInt(realBalance) / 10 ** 18);

      const lpvalue = await InsurancePool.methods.LPValue.call();
      const lpnum = await LPToken.methods.balanceOf(account);

      const pendingDegis = await InsurancePool.methods
        .pendingDegis(account)
        .call();
      console.log("Pending degis:", parseInt(pendingDegis) / 10 ** 18);

      const pendingPremium = await InsurancePool.methods
        .pendingPremium(account)
        .call();
      console.log("Pending premium:", parseInt(pendingPremium) / 10 ** 18);

      return {
        pendingDegis: pendingDegis,
        pendingPremium: pendingPremium,
        realBalance: realBalance,
      };
    },

    async getPoolInfo() {
      const MockUSD = await getMockUSD();
      const InsurancePool = await getInsurancePool();
      const account = this.$store.state.selectedAccount;

      await InsurancePool.methods
        .getPoolName()
        .call()
        .then((value) => console.log("Pool name:", value));

      let current_policies = await InsurancePool.methods
        .getCurrentStakingBalance()
        .call();

      console.log(
        "Current Staking Balance in the pool:",
        parseInt(current_policies) / 10 ** 18
      );

      let available_capacity = await InsurancePool.methods
        .getAvailableCapacity()
        .call();

      console.log(
        "Available capacity in the pool:",
        parseInt(available_capacity) / 10 ** 18
      );

      let total_value_locked = await InsurancePool.methods
        .getTotalLocked()
        .call();

      console.log(
        "Total locked amount in the pool:",
        parseInt(total_value_locked) / 10 ** 18
      );

      let locked_ratio = await InsurancePool.methods.getLockedRatio().call();

      console.log("PRB locked Ratio:", parseInt(locked_ratio) / 10 ** 18);

      await MockUSD.methods
        .balanceOf(InsurancePool.options.address)
        .call()
        .then((value) =>
          console.log(
            "Total USDC balance in the pool:",
            parseInt(value) / 10 ** 18
          )
        );

      await MockUSD.methods
        .allowance(account, InsurancePool.options.address)
        .call()
        .then((value) =>
          console.log("USDC allowance of the pool:", parseInt(value) / 10 ** 18)
        );

      const reward_collected = await InsurancePool.methods
        .getRewardCollected()
        .call();
      console.log("reward collected:", parseInt(reward_collected) / 10 ** 18);

      const pf_add = await InsurancePool.methods.policyFlow().call();
      console.log("policy flow in the pool:", pf_add);

      //await this.getAllPolicyInfo();
      return {
        total_value_locked: total_value_locked,
        available_capacity: available_capacity,
        current_policies: current_policies,
        locked_ratio: locked_ratio,
        pool_address: InsurancePool.options.address,
      };
    },

    async getAllPolicyInfo() {
      const PolicyFlow = await getPolicyFlow();

      const total_policy = await PolicyFlow.methods.Total_Policies().call();
      console.log("Total policy amount in the pool:", parseInt(total_policy));
      for (let i = 0; i < parseInt(total_policy); i++) {
        await PolicyFlow.methods
          .getPolicyIdByCount(i)
          .call()
          .then((value) => {
            console.log("policyId", i, ":", value);
          });
        await PolicyFlow.methods
          .getPolicyInfoByCount(i)
          .call()
          .then((value) => {
            console.log(value);
          });
      }
    },

    async depositUSDEvent() {
      const depositAmount = document.getElementById("degis-input").value;
      await this.depositUSD(depositAmount);
      await this.updateInfoEvent();
    },

    async withdrawUSDEvent() {
      const withdrawAmount = document.getElementById("degis-input").value;
      await this.withdrawUSD(withdrawAmount);
    },

    async harvestPremiumEvent() {
      await this.harvestPremium();
    },

    async harvestDegisEvent() {
      await this.harvestDegis();
    },

    async getLPInfoEvent() {
      const res = await this.getLPInfo();
      this.userPendingPremium = res["pendingPremium"];
      this.userPendingDegis = (res["pendingDegis"] / 1e18).toFixed(2);
      this.userAsset = (res["realBalance"] / 1e18).toFixed(2);

      console.log(res);
    },

    async getPoolInfoEvent() {
      const res = await this.getPoolInfo();
      this.totalValueLocked = res["total_value_locked"] / 1e18;
      this.availableCapacity = res["available_capacity"] / 1e18;
      this.currentPolicies = res["current_policies"] / 1e18;
      this.lockedRatio = (res["locked_ratio"] / 1e18).toFixed(6);
      this.poolAddress = res["pool_address"];
      console.log(res);
    },

    async updateInfoEvent() {
      this.getLPInfoEvent();
      this.getPoolInfoEvent();
    },
  },
};
</script>
<style scoped>
.text-l {
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #86898c;
  padding: 4% 0;
}

.text-r {
  font-weight: normal;
  font-size: 16px;
  color: #86898c;
  padding-bottom: 2%;
}

bold {
  padding-left: 5px;
  font-weight: bold;
}
</style>
