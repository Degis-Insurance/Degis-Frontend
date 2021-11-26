<template>
  <div class="modal fade" @click.self="closeModal" :class="[{ 'show d-block': show }, { 'd-none': !show }]" v-show="show" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" style="max-width: 100%">
      <div class="modal-content" style="width: 40%; border-radius: 24px; margin: auto">

        <div class="modal-body">
          <div class="row d-flex align-items-center">
            <div class="col-5">
              <div class="d-flex align-items-center">
                <img :src="'img/protection/price/' + data.coin1 + '.png'" class="img-fluid" style="width: 64px"/>
                <span class="fw-7 d-g1 fs-34 pl-3" style="vertical-align: middle">{{ data.coin1 }}</span>
              </div>
              <input class="fw-4 d-g2 fs-32 mt-3 ta-c" value="0" style="background-color: #F2F2F2; border-radius: 12px; height: 58px; width: 100%; border-width: 0px" :id="coin1"/>
            </div>
            <div class="col-2 d-flex justify-content-center">
              <i v-if="data.type === 'create'" class="el-icon-right d-p" style="font-size: 80px"/>
              <i v-else class="el-icon-back d-p" style="font-size: 80px"/>
            </div>
            <div class="col-5">
              <div class="d-flex align-items-center">
                <img :src="'img/protection/price/' + data.coin2 + '.png'" class="img-fluid" style="width: 64px"/>
                <span class="fw-7 d-g1 fs-34 pl-3" style="vertical-align: middle">{{ data.coin2 }}</span>
              </div>
              <input class="fw-4 d-g2 fs-32 mt-3 ta-c" value="0" style="background-color: #F2F2F2; border-radius: 12px; height: 58px; width: 100%; border-width: 0px" :id="coin2"/>
            </div>
          </div>
        </div>

        <div class="modal-footer pt-1" style="display: block">
          <base-button v-if="data.type === 'create'" style="width: 100%" @click="create(data)">Create</base-button>
          <base-button v-else style="width: 100%" @click="redeem(data)">Redeem</base-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "create-redeem",
  components: {},
  props: {
    show: Boolean,
    data: Object,
  },
  methods: {
    closeModal() {
      this.$emit("update:show", false);
      this.$emit("close");
    },
    create(data) {
      console.log(data);
      this.closeModal();
    },
    redeem(data) {
      console.log(data);
      this.closeModal();
    }
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
