<template>
  <div class="list container">
    <el-table :data="list" @row-click="listclick">
      <el-table-column prop="blobId" label="ID"></el-table-column>
      <el-table-column prop="blobName" label="BLOB NAME"></el-table-column>
      <el-table-column prop="blobTypeName" label="BLOB TYPE"></el-table-column>
    </el-table>

    <div class="links">
      <el-button
        @click="load"
        plain
      >View More</el-button>
    </div>
  </div>
</template>
<script>
// import ListView from '@/components/ListView';
export default {
  async asyncData({ params, $axios, app }) {
    let list = await $axios.$get("list?page=0");
    return {
      list: list.data,
      page: 0,
      asyncInit: true
    };
  },
  methods: {
    listclick(row, event, column) {
      location.href = "blob/" + row.blobId;
    },
    async load() {
      this.page = this.page + 1;
      let list = await this.$axios.$get("list?page=" + this.page);
      list.data.forEach(val => {
        this.list.push(val);
      });
    }
  },
  components: {
    // ListView
  }
};
</script>
<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
  justify-content: center;
}
</style>

