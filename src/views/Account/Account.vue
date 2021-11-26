<template>
  <base-header type="" class="pt-4">
    <h1 class="fw-7 d-g1 fs-34 mb-4">Policies I Bought / Sold</h1>

    <el-card>
      <el-tabs type="" :stretch="true">

        <el-tab-pane label="Policies I Created">
          <template #label><p class="fw-7 d-g3 fs-16">Policies I Created</p></template>
          <el-table :data="tableData" class="dg-cardtable" :header-cell-style="{'text-align': 'center', 'height': '70px'}" :cell-style="{'text-align': 'center', 'height': '70px'}">
            <el-table-column prop="airline" label="AIRLINE" sortable/>
            <el-table-column prop="flightno" label="FLIGHT NO." sortable/>
            <el-table-column prop="route" label="ROUTE" sortable/>
            <el-table-column prop="departtime" label="DEPART TIME" sortable/>
            <el-table-column prop="arrivetime" label="ARRIVE TIME" sortable/>
            <el-table-column prop="premium" label="PREMIUM" sortable/>
          </el-table>

        </el-tab-pane>
        <el-tab-pane>
          <template #label><p class="fw-7 d-g3 fs-16">Bought</p></template>
          <el-table :data="tableData" class="dg-cardtable" :header-cell-style="{'text-align': 'center', 'height': '70px'}" :cell-style="{'text-align': 'center', 'height': '70px'}">
            <el-table-column prop="airline" label="AIRLINE" sortable/>
            <el-table-column prop="flightno" label="FLIGHT NO." sortable/>
            <el-table-column prop="route" label="ROUTE" sortable/>
            <el-table-column prop="departtime" label="DEPART TIME" sortable/>
            <el-table-column prop="arrivetime" label="ARRIVE TIME" sortable/>
            <el-table-column prop="premium" label="PREMIUM" sortable/>
          </el-table>
        </el-tab-pane>

        <el-tab-pane>
          <template #label><p class="fw-7 d-g3 fs-16">SOLD</p></template>
          <el-table :data="tableData" class="dg-cardtable" :header-cell-style="{'text-align': 'center', 'height': '70px'}" :cell-style="{'text-align': 'center', 'height': '70px'}">
            <el-table-column prop="airline" label="AIRLINE" sortable/>
            <el-table-column prop="flightno" label="FLIGHT NO." sortable/>
            <el-table-column prop="route" label="ROUTE" sortable/>
            <el-table-column prop="departtime" label="DEPART TIME" sortable/>
            <el-table-column prop="arrivetime" label="ARRIVE TIME" sortable/>
            <el-table-column prop="premium" label="PREMIUM" sortable/>
          </el-table>
        </el-tab-pane>
        <el-tab-pane>
          <template #label><p class="fw-7 d-g3 fs-16">My Provision</p></template>
          <el-table :data="tableData" class="dg-cardtable" :header-cell-style="{'text-align': 'center', 'height': '70px'}" :cell-style="{'text-align': 'center', 'height': '70px'}">
            <el-table-column prop="airline" label="AIRLINE" sortable/>
            <el-table-column prop="flightno" label="FLIGHT NO." sortable/>
            <el-table-column prop="route" label="ROUTE" sortable/>
            <el-table-column prop="departtime" label="DEPART TIME" sortable/>
            <el-table-column prop="arrivetime" label="ARRIVE TIME" sortable/>
            <el-table-column prop="premium" label="PREMIUM" sortable/>
          </el-table>
        </el-tab-pane>
      </el-tabs>

    </el-card>
  </base-header>
</template>

<script>
export default {
  name: "price",
  components: {},
  data() {
    return {
      tableData: [
        {
          airline: 'SouthWest',
          flightno: '1111',
          route: 'STL-AWL',
          departtime: '2021-09-09 12:12',
          arrivetime: '2021-09-10 01:00',
          premium: '4',
        },
        {
          airline: 'SouthEast',
          flightno: '1119',
          route: 'STL-AWL',
          departtime: '2021-09-09 12:12',
          arrivetime: '2021-09-10 01:00',
          premium: '7',
        },
        {
          airline: 'NorthWest',
          flightno: '0003',
          route: 'AWL-STL',
          departtime: '2021-09-09 12:12',
          arrivetime: '2021-09-10 01:00',
          premium: '2',
        },
        {
          airline: 'NorthEast',
          flightno: '2222',
          route: 'STL-AWL',
          departtime: '2021-09-09 12:12',
          arrivetime: '2021-09-10 01:00',
          premium: '3',
        },
      ],
    }
  },
};
</script>

<style scoped>

</style>
