// ListTable.vue

<template>
  <article class="table" v-if="tableData">
    <div class="search-data">
      <label for="search-data-input">Search throught the data:</label>
      <input type="search" id="search-data-input" v-model="searchQuery" placeholder="Start printing here!">
    </div>
    <header class="row" v-if="tableHeaders">
      <div class="col col-1">N</div>
      <div class="col" v-for="(title) of tableHeaders" :key="title">
        <button @click="sortBy(title)" :class="{active: title === sortByHeader}">{{title | titlelize}}</button>
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
      sortByHeader: '',
      searchQuery: ''
    }
  },
  computed: {
    preparedData: function(){
      return prepareData(this.listData) || [];
    },
    tableHeaders: function() {
      return this.preparedData.length > 0 ? Object.keys(this.preparedData[0]) : ''
    },
    tableData: function() {
      return prepareDataFortable(this.preparedData, this.searchQuery, this.sortByHeader);
    }
  },
  methods: {
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

function filterDataObjectFromArrays(headers) {
  return _.omit(_.omitBy(headers, (h) => Array.isArray(h)), ['created', 'edited', 'url']);
}

function convertNumbersToNumbers(data) {
  return isNaN(data) ? data : +data;
}

function prepareData(data) {
  return _.map(data, dataItem => {
    return _.mapValues(filterDataObjectFromArrays(dataItem), (value) => {
      return convertNumbersToNumbers(value);
    });
  });
}

function filterDataByQuery(data, query) {
  return query ? _.filter(data, (item) => {
        return _.includes(_.lowerCase(JSON.stringify(item)), _.lowerCase(query));
      }) : data;
}

function sortDataByHeader(data, header) {
  return header ? _.sortBy(data, header) : data;
}

function prepareDataFortable(data, filterQuery, sortByHeader) {
  return sortDataByHeader(filterDataByQuery(data, filterQuery), sortByHeader);
}

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

.active {
  background-color: lightgreen;
}
</style>