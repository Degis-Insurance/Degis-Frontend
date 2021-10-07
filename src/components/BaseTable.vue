<template>
  <table class="table tablesorter" :class="tableClass">
    <thead class="table-thead" :class="theadClasses">
      <tr>
        <slot name="columns" :columns="columns">
          <th v-for="column in columns" :key="column">{{ column }}</th>
        </slot>
      </tr>
    </thead>
    <tbody class="table-tbody">
      <tr v-for="(item, index) in data" :key="index">
        <slot :item="item">
          <td colspan="column in columns" :key="column">
            <template v-if="hasValue(item, column)">
              {{ itemValue(item, column) }}
            </template>
          </td>
        </slot>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "base-table",
  props: {
    columns: {
      type: Array,
      default: () => [],
      description: "Table columns",
    },
    data: {
      type: Array,
      default: () => [],
      description: "Table data",
    },
    type: {
      type: String, // striped | hover
      default: "",
      description: "Whether table is striped or hover type",
    },
    theadClasses: {
      type: String,
      default: "",
      description: "<thead> css classes",
    },
    tbodyClasses: {
      type: String,
      default: "",
      description: "<tbody> css classes",
    },
  },
  computed: {
    tableClass() {
      return this.type && `table-${this.type}`;
    },
    colsWithValue() {
      return (row) => {
        return this.columns.filter((column) => this.hasValue(row, column));
      };
    },
  },
  methods: {
    hasValue(item, column) {
      return item[column.toLowerCase()] !== "undefined";
    },
    itemValue(item, column) {
      return item[column.toLowerCase()];
    },
  },
};
</script>
<style>
.table-thead {
  height: 57px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 120%;
  text-align: center;
  color: #86898C;
}

.table-tbody {
  font-family: Montserrat;
  /*font-style: normal;*/
  /*font-weight: normal;*/
  font-size: 14px;
  line-height: 280%;
  text-align: center;
  color: #2C2D2F;
}
</style>
