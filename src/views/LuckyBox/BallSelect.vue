<template>
  <div style="background-color: #F2F2F2; border-radius: 12px; height: 88px">
    <div class="row">
      <div class="col-xl-3"></div>
      <div class="col-xl-6 d-flex justify-content-between">
        <el-popover :width="318" trigger="hover" transition="false">
          <template #reference>
            <img class="ball" style="margin-top: 11px" :src="'img/luckybox/num-' + nums[0] + '.png'"/>
          </template>
          <img v-for="(num,i) in 10" class="ball" :src="'img/luckybox/num-' + i + '.png'" @click="set(0, i)" :key="i"/>
          <span class="fw-7 d-p fs-18 pl-4" style="line-height: 88px; text-align: center; cursor: pointer" @click="random(0)">RANDOM</span>
        </el-popover>
        <el-popover :width="318" trigger="hover" transition="false">
          <template #reference>
            <img class="ball" style="margin-top: 11px" :src="'img/luckybox/num-' + nums[1] + '.png'"/>
          </template>
          <img v-for="(num,i) in 10" class="ball" :src="'img/luckybox/num-' + i + '.png'" @click="set(1, i)" :key="i"/>
          <span class="fw-7 d-p fs-18 pl-4" style="line-height: 88px; text-align: center; cursor: pointer" @click="random(1)">RANDOM</span>
        </el-popover>
        <el-popover :width="318" trigger="hover" transition="false">
          <template #reference>
            <img class="ball" style="margin-top: 11px" :src="'img/luckybox/num-' + nums[2] + '.png'"/>
          </template>
          <img v-for="(num,i) in 10" class="ball" :src="'img/luckybox/num-' + i + '.png'" @click="set(2, i)" :key="i"/>
          <span class="fw-7 d-p fs-18 pl-4" style="line-height: 88px; text-align: center; cursor: pointer" @click="random(2)">RANDOM</span>
        </el-popover>
        <el-popover :width="318" trigger="hover" transition="false">
          <template #reference>
            <img class="ball" style="margin-top: 11px" :src="'img/luckybox/num-' + nums[3] + '.png'"/>
          </template>
          <img v-for="(num,i) in 10" class="ball" :src="'img/luckybox/num-' + i + '.png'" @click="set(3, i)" :key="i"/>
          <span class="fw-7 d-p fs-18 pl-4" style="line-height: 88px; text-align: center; cursor: pointer" @click="random(3)">RANDOM</span>
        </el-popover>
      </div>
      <!--                <div class="col-xl-3">-->
      <!--                  <p class="fw-7 d-p fs-18" style="line-height: 88px; text-align: center; cursor: pointer" @click="randomNumber">RANDOM</p>-->
      <!--                </div>-->
    </div>
  </div>
</template>
<script>
export default {
  name: "ball-select",
  data() {
    return {
      nums: ['','','',''],
    }
  },
  props: ["getBall"],
  methods: {
    random(ball) {
      this.nums[ball] = Math.floor(Math.random() * 10)
    },
    set(ball, num) {
      this.nums[ball] = num;
      this.getBall(this.nums);
    }
  },
};
</script>
<style scoped>
.ball {
  max-width: 65px;
  max-height: 66px;
  margin: 5px 4px;
  cursor: pointer;
}
</style>
