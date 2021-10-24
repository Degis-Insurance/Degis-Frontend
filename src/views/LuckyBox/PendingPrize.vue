<template>
  <div class="modal fade" @click.self="closeModal" :class="[{ 'show d-block': show }, { 'd-none': !show }]" v-show="show" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" style="max-width: 100%">
      <div class="modal-content" style="width: 60%; border-radius: 24px; margin: auto">

        <div class="modal-header pl-4 pt-4 pb-0">
          <h1 class="fw-7 d-g1 fs-24">Pending Prize</h1>
          <button class="close pr-4" @click="closeModal">
            <img src="img/luckybox/close-modal.png" style="width: 24px;">
          </button>
        </div>

<!--        <img src="img/luckybox/modal-split.png" style="height: 1px">-->

        <div class="modal-body">
          <div class="py-0" style="vertical-align: center">
            <base-table :data="tableData">
              <template v-slot:columns>
                <th><p class="fw-5 d-g4 fs-14">Round</p></th>
                <th><p class="fw-5 d-g4 fs-14">Winning Number</p></th>
                <th><p class="fw-5 d-g4 fs-14">Your Number</p></th>
                <th><p class="fw-5 d-g4 fs-14">Prize</p></th>
                <th></th>
              </template>
              <template v-slot:default>
                <td><p class="fw-5 d-g1 fs-14">#124</p></td>
                <td>
                  <div class="d-flex justify-content-between" style="padding: 0 20%">
                    <img src="img/luckybox/num-9.png" style="width: 32px"/>
                    <img src="img/luckybox/num-5.png" style="width: 32px"/>
                    <img src="img/luckybox/num-6.png" style="width: 32px"/>
                    <img src="img/luckybox/num-7.png" style="width: 32px"/>
                  </div>
                </td>
                <td>
                  <div class="d-flex justify-content-between" style="padding: 0 20%">
                    <p class="fw-7 d-g1 fs-20">9</p>
                    <p class="fw-7 d-g1 fs-20">5</p>
                    <p class="fw-7 d-g5 fs-20">2</p>
                    <p class="fw-7 d-g5 fs-20">6</p>
                  </div>
                </td>
                <td><p class="fw-5 d-g1 fs-14" style="line-height: 100%;">$224.53</p></td>
                <td>
                  <base-button>GET PRIZE</base-button>
                </td>
              </template>
            </base-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import BaseButton from "../../components/BaseButton";
import BaseTable from "../../components/BaseTable";

export default {
  name: "pending-prize",
  components: {BaseTable, BaseButton},
  data() {
    return {
      tableData: [{}, {}],
    };
  },
  props: {
    show: Boolean,
  },
  methods: {
    closeModal() {
      this.$emit("update:show", false);
      this.$emit("close");
    },
  },
  watch: {
    show(val) {
      let documentClasses = document.body.classList;
      if (val) {
        documentClasses.add("modal-open");
      } else {
        documentClasses.remove("modal-open");
      }
    },
  },
};
</script>
<style>
.modal.show {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
