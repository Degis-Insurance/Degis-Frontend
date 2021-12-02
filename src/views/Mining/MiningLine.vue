<template>
  <div class="container-fluid">
    <div class="row row-grid align-items-center">
      <div class="col-lg-3 d-flex align-items-center">
        <img :src="'img/mining/' + data.pic + '.png'" style="width: 50px" />
        <span class="d-f-2 pl-3">{{ data.name }}</span>
      </div>
      <div class="col-lg-2 d-flex align-items-center">
        <span class="d-f-2 pr-2">Earned</span>
        <img :src="'img/mining/token.png'" style="width: 50px" />
      </div>
      <div class="col-lg-3 d-flex align-items-center">
        <div>
          <img src="img/mining/clock.png" style="width: 50px" />
        </div>
        <div>
          <p class="d-f-4">{{ data.status }}</p>
          <p class="d-f-2">Mining Countdown</p>
        </div>
      </div>
      <div class="col-lg-2">
        <p class="d-f-2">{{ data.apr }} APR</p>
      </div>
      <div class="col-lg-2 d-flex justify-content-center">
        <base-button v-if="!more" @click="showmore"
          >More <span class="el-icon-arrow-down"></span
        ></base-button>
        <base-button v-else @click="showmore"
          >More <span class="el-icon-arrow-up"></span
        ></base-button>
      </div>
    </div>
  </div>

  <hr style="margin: 20px" />

  <div v-if="more">
    <div class="container-fluid">
      <div class="row row-grid">
        <div class="col-lg-6">
          <div class="d-flex justify-content-between">
            <p class="d-f-2">Deposit Limit</p>
            <p class="d-f-2">{{ (data.depositLimit / 1e18).toFixed(2) }} LPT</p>
          </div>
          <base-input :value="depositAmount"/>
          <base-button style="width: 100%" @click="depositEvent">DEPOSIT</base-button>
          <div class="d-flex justify-content-between">
            <div>
              <p class="d-f-2">24 Hour Total Rewards:</p>
              <p class="d-f-2">Total Deposited:</p>
              <p class="d-f-2">My 24 Hour rewards:</p>
            </div>
            <div>
              <p class="d-f-2">{{ (data.totalRewards / 1e18).toFixed(0)}} </p>
              <p class="d-f-2">{{ (data.totalDeposited / 1e18).toFixed(2) }} </p>
              <p class="d-f-2">{{ (data.myPoolShare / 1e18).toFixed(2) }} </p>
            </div>
          </div>
          <!-- <p class="d-f-4">From @ Get BNB1000-HELMET LPT</p>
          <p class="d-f-2">BNB1000 Contract Address:</p>
          <p class="d-f-4">{{ data.address1 }}</p>
          <p class="d-f-4">Add BNB1000 to Metamask</p> -->
        </div>
        <div class="col-lg-6">
          <div class="d-flex justify-content-between">
            <p class="d-f-2">Available to Withdraw:</p>
            <p class="d-f-2">{{ (data.availableToWithdraw / 1e18).toFixed(2) }} LPT</p>
          </div>
          <base-input :value="withdrawAmount"/>
          <base-button style="width: 100%" @click="withdrawEvent">Withdraw</base-button>
          <div class="d-flex justify-content-between">
            <p class="d-f-2">DEG Rewards:</p>
            <p class="d-f-2">{{ (data.degRewards / 1e18).toFixed(2) }} </p>
          </div>
          <base-button style="width: 100%" @click="harvestEvent">Harvest Rewards</base-button>
          <!-- <p class="d-f-2">hWAR Contract Address:</p>
          <p class="d-f-4">{{ data.address2 }}</p>
          <p class="d-f-4" style="vertical-align: bottom">
            Add hWAR to Metamask
          </p> -->
        </div>
      </div>
    </div>
    <hr style="margin: 20px" />
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton";
import {
  getLPToken,
  getDegis,
  getFarmingPool,
  getPolicyToken,
} from "../../utils/contractInstance";
export default {
  name: "mining-line",
  components: {
    BaseButton,
  },
  props: ["data"],
  data() {
    return {
      more: false,
      depositAmount : 10,
      withdrawAmount : 10,
    };
  },
  methods: {
    showmore() {
      this.more = !this.more;
    },
    async approve(token,account,contract)
    {
      const allowance = await token.methods
        .allowance(account, contract)
        .call();
      if (parseInt(allowance) < parseInt(window.WEB3.utils.toWei("100000000", "ether"))) {
        const tx1 = await token.methods
          .approve(
            contract,
            window.WEB3.utils.toBN(
              "115792089237316195423570985008687907853269984665640564039457584007913129639935"
            )
          )
          .send({ from: account });
        console.log("Tx Hash:", tx1.transactionHash);
      }
    },
    async deposit(amount) {

      const account = this.$store.state.selectedAccount;
      
      if(this.data.poolType == "lpMining")
      {
        const pool = await getFarmingPool();
        const poolId = this.data.poolId;
        const poolInfo = await pool.methods.poolList(poolId).call();
        const lpTokenAddress = poolInfo["lpToken"];
        const lpToken = await getPolicyToken(lpTokenAddress);
        await this.approve(lpToken, account, pool.options.address);
        amount = window.WEB3.utils.toWei(String(amount), "ether");
        const tx = await pool.methods.stake(poolId, amount).send({from:account});
        console.log("Tx Hash:", tx.transactionHash);
        this.$store.commit("SET_LASTTRANSACTIONHASH", tx.transactionHash);
      }
    },

    async withdraw(amount) {
      const account = this.$store.state.selectedAccount;
      
      if(this.data.poolType == "lpMining")
      {
        const pool = await getFarmingPool();
        const poolId = this.data.poolId;
        const poolInfo = await pool.methods.poolList(poolId).call();
        const lpTokenAddress = poolInfo["lpToken"];
        const lpToken = await getPolicyToken(lpTokenAddress);
        amount = window.WEB3.utils.toWei(String(amount), "ether");
        const tx = await pool.methods.withdraw(poolId, amount).send({from:account});
        console.log("Tx Hash:", tx.transactionHash);
        this.$store.commit("SET_LASTTRANSACTIONHASH", tx.transactionHash);
      }
    },

    async harvest() {
      const account = this.$store.state.selectedAccount;
      
      if(this.data.poolType == "lpMining")
      {
        const pool = await getFarmingPool();
        const poolId = this.data.poolId;
        const poolInfo = await pool.methods.poolList(poolId).call();
        const lpTokenAddress = poolInfo["lpToken"];
        const lpToken = await getPolicyToken(lpTokenAddress);
        const tx = await pool.methods.harvest(poolId,account).send({from:account});
        console.log("Tx Hash:", tx.transactionHash);
        this.$store.commit("SET_LASTTRANSACTIONHASH", tx.transactionHash);
      }
    },

    async depositEvent()
    {
      const amount = this.depositAmount;
      console.log("=======",amount);
      await this.deposit(amount);
    },

    async withdrawEvent()
    {
      const amount = this.withdrawAmount;
      console.log("=======",amount);
      await this.withdraw(amount);
    },

    async harvestEvent()
    {
      await this.harvest();
    }

  },


};
</script>
<style scoped></style>
