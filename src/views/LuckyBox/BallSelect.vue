<template>
  <el-popover :width="380" trigger="hover" transition="false">
    <template #reference>
      <img class="ball" :src="'img/luckybox/num-'+num+'.png'"/>
    </template>
    <card>
      <div class="row">
        <div class="col-3"><img class="ball" src="img/luckybox/num-0.png" @click="set(0)"/></div>
        <div class="col-3"><img class="ball" src="img/luckybox/num-1.png" @click="set(1)"/></div>
        <div class="col-3"><img class="ball" src="img/luckybox/num-2.png" @click="set(2)"/></div>
        <div class="col-3"><img class="ball" src="img/luckybox/num-3.png" @click="set(3)"/></div>
      </div>
      <div class="row">
        <div class="col-3"><img class="ball" src="img/luckybox/num-4.png" @click="set(4)"/></div>
        <div class="col-3"><img class="ball" src="img/luckybox/num-5.png" @click="set(5)"/></div>
        <div class="col-3"><img class="ball" src="img/luckybox/num-6.png" @click="set(6)"/></div>
        <div class="col-3"><img class="ball" src="img/luckybox/num-7.png" @click="set(7)"/></div>
      </div>
      <div class="row">
        <div class="col-3"><img class="ball" src="img/luckybox/num-8.png" @click="set(8)"/></div>
        <div class="col-3"><img class="ball" src="img/luckybox/num-9.png" @click="set(9)"/></div>
        <div class="col-6"><p class="fw-7 d-p fs-18" style="line-height: 88px; text-align: center; cursor: pointer" @click="random">RANDOM</p></div>
      </div>
    </card>
  </el-popover>
</template>
<script>
export default {
  name: "ball-select",
  data() {
    return {
      num: ""
    }
  },
  props: ["ball-num"],
  methods: {
    random() {
      this.num = Math.floor(Math.random() * 10)
    },
    set(val) {
      this.num = val;
    }
  },
};
</script>
<style scoped>
.ball {
  max-width: 65px;
  max-height: 66px;
  margin-top: 11px;
  margin-right: 8px;
  cursor: pointer;
}
</style>
