<template>
  <el-popover :width="380" trigger="hover" transition="false">
    <template #reference>
      <img class="ball" :src="'img/luckybox/num'+num+'.png'" style="cursor: pointer"/>
    </template>
    <card>
      <p>still need to modify the style here:</p>
      <img class="ball" src="img/luckybox/num-0.png"/>
      <img class="ball" src="img/luckybox/num-1.png"/>
      <img class="ball" src="img/luckybox/num-2.png"/>
      <img class="ball" src="img/luckybox/num-3.png"/>
      <img class="ball" src="img/luckybox/num-4.png"/>
      <img class="ball" src="img/luckybox/num-5.png"/>
      <img class="ball" src="img/luckybox/num-6.png"/>
      <img class="ball" src="img/luckybox/num-7.png"/>
      <img class="ball" src="img/luckybox/num-8.png"/>
      <img class="ball" src="img/luckybox/num-9.png"/>
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
  props: ["ball-num"]
};
</script>
<style scoped>
.ball {
  max-width: 65px;
  max-height: 66px;
  margin-top: 11px;
  margin-right: 8px;
}
</style>
