// ListTable.vue

<template>
  <article class="table">
    <header class="row">
      <div class="col col-1">N</div>
      <div class="col" v-for="(title) of tableHeaders" :key="title">{{title | titlelize}}</div>
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
  data: () => {
    return {};
  },
  props: ['listName', 'listData'],
  computed: {
    tableHeaders: function() {
      return this.tableData ? Object.keys(this.tableData[0]) : null;
    },
    tableData: function() {
      return this.listData ? this.filterData(this.listData) : null;
    }
  },
  methods: {
    filterDataObjectFromArrays: function(headers) {
        return _.omit(_.omitBy(headers, (h) => Array.isArray(h)), ['created', 'edited', 'url']);
    },
    filterData: function(data) {
        return _.map(data, dataItem => this.filterDataObjectFromArrays(dataItem));
    },
    splitColors: function(colors) {
      console.log('splitColors', colors)
      return colors.includes(',') ? colors.split(',') : [colors];
    },
    isColorProp: function(prop) {
      console.log('isColorProp', prop)
      return prop.includes('color');
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
  padding: 8px;
  border-radius: 4px;
  display: inline-block;
}
</style>