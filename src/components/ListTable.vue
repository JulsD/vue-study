// ListTable.vue

<template>
  <article class="table" v-if="tableData">
    <header class="row" v-if="tableHeaders">
      <div class="col col-1">N</div>
      <div class="col" v-for="(title) of tableHeaders" :key="title">
        <button @click="sortBy(title)">{{title | titlelize}}</button>
      </div>
    </header>
    <div class="row" v-for="(tableDataItem, index) of tableData" :key="index">
      <div class="col col-1">{{index + 1}}</div>
      <div class="col" v-for="(value, prop) of tableDataItem" :key="prop + value">
        <template v-if="isColorProp(prop)">
          <span v-for="(color, index) of splitColors(value)" class="color-mark" :style="{backgroundColor: color}" :key="index">{{color}}</span>
        </template>
        <template v-else>{{value}}</template>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  props: {
    listName: String,
    listData: Array
  },
  data: function() {
    return {
      sortByHeader: ''
    }
  },
  computed: {
    filteredData: function(){
      return this.filterData(this.listData) || [];
    },
    tableHeaders: function() {
      return this.filteredData.length > 0 ? Object.keys(this.filteredData[0]) : ''
    },
    tableData: {
      get: function() {
        return _.sortBy(this.filteredData, this.sortByHeader);
      },
      set: function(newTableData) {
        return newTableData;
      }
    }
  },
  methods: {
    filterDataObjectFromArrays: function(headers) {
        return _.omit(_.omitBy(headers, (h) => Array.isArray(h)), ['created', 'edited', 'url']);
    },
    convertNumbersToNumbers(data) {
      return isNaN(data) ? data : +data;
    },
    filterData: function(data) {
      return _.map(data, dataItem => {
        return _.mapValues(this.filterDataObjectFromArrays(dataItem), (value) => {
          return this.convertNumbersToNumbers(value);
        });
      });
    },
    splitColors: function(colors) {
      return colors.includes(',') ? colors.split(',') : [colors];
    },
    isColorProp: function(prop) {
      return prop.includes('color');
    },
    sortBy: function(sortByHeader) {
      this.sortByHeader = sortByHeader;
    }
  },
  filters: {
    titlelize: str => {
      return _.capitalize(_.lowerCase(str));
    }
  }
};
</script>

<style scoped>
.row {
  display: flex;
}

.row:nth-child(2n+1) {
  background-color: lightgoldenrodyellow;
}

header.row:nth-child(1) {
  font-weight: 600;
  background-color: lightgray;
}

.col {
  flex: 1 1 auto;
  width: 10px;
  padding: 10px;
  word-break: break-all;
}

.col-1 {
  flex-shrink: 1;
  flex-grow: 0;
}

.color-mark {
  padding: 4px;
  border-radius: 8px;
  margin: 4px;
  display: inline-block;
}
</style>