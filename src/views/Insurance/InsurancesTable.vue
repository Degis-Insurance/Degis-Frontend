<template>
  <div class="card shadow" :class="type === 'dark' ? 'bg-default' : ''">
    <div
      class="card-header border-0"
      :class="type === 'dark' ? 'bg-transparent' : ''"
    >
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white' : ''">
            Flight Insurance Product
          </h3>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table
        class="table align-items-center table-flush"
        :class="type === 'dark' ? 'table-dark' : ''"
        :thead-classes="type === 'dark' ? 'thead-dark' : 'thead-light'"
        tbody-classes="list"
        :data="tableData"
      >
        <template v-slot:columns>
          <th></th>
          <th>Flight Number</th>
          <th>Product</th>
          <th>Departure Date</th>
          <th>Expiry Date</th>
          <th>Premium</th>
          <th>Maximum Payoff</th>
          <th>Policy Id(bytes32)</th>
          <th></th>
        </template>

        <template v-slot:default>
          <td></td>
          <td>example flight number</td>
          <td>product name</td>
          <td>example departure date</td>
          <td>example expiry date</td>
          <td>premium info</td>
          <td class="text-left">example payoff</td>
          <td>example id</td>
          <td></td>
        </template>
      </base-table>
    </div>

    <div
      class="card-footer d-flex justify-content-end"
      :class="type === 'dark' ? 'bg-transparent' : ''"
    >
      <base-pagination total="30"></base-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "projects-table",
  props: {
    type: {
      type: String,
    },
    title: String,
  },
  data() {
    return {
      tableData: [{}, {}, {}, {}],
    };
  },
};
</script>
<style></style>
