<template>
  <div class="flight-table" :class="type === 'dark' ? 'bg-default' : ''">
    <div class="table-responsive">
      <base-table
        class="table align-items-center table-flush"
        :thead-classes="thead-light"
        tbody-classes="list"
        :data="tableData"
      >
        <template v-slot:columns>
          <th></th>
          <th>Airline</th>
          <th>Flight No.</th>
          <th>Route</th>
          <th>Depart time</th>
          <th>Arrive time</th>
          <th>Premium</th>
          <th></th>
        </template>

        <template v-slot:default>
          <td></td>
          <td>SouthWest</td>
          <td>SW186</td>
          <td>STL-AWL</td>
          <td>10:00</td>
          <td>13:00</td>
<!--          <td class="text-center">4</td>-->
          <td>4</td>
          <td></td>
        </template>
      </base-table>
    </div>

<!--    <div class="d-flex justify-content-end flight-table">-->
<!--      <base-pagination total="4"></base-pagination>-->
<!--    </div>-->
  </div>
</template>
<script>
export default {
  name: "flight-table",
  props: {
    type: {
      type: String,
    },
    title: String,
  },
  data() {
    return {
      tableData: [{}, {}, {}, {}, {}, {}, {}],
    };
  },
};
</script>
<style>
.flight-table {
  box-shadow: 0px 20px 40px rgba(21, 58, 255, 0.1);
  border-radius: 24px;
  background-color: white;
}

</style>
