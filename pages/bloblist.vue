<template>
  <div class="list">
    <el-table :data="indexpage" @row-click="listclick">
      <el-table-column prop="blobId" label="ID"></el-table-column>
      <el-table-column prop="blobName" label="BLOB NAME"></el-table-column>
      <el-table-column prop="blobTypeName" label="BLOB TYPE"></el-table-column>
    </el-table>
    <div class="links">
      <el-button plain>View More</el-button>
      <a
        href="https://github.com/fenyuluoshang/FeuxtBlob"
        target="_blank"
        class="el-button el-button--default is-plain link"
      >View Feuxt at github</a>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ params, $axios, app }) {
    let data = await $axios.$get("helloword");
    let indexpage = await $axios.$get("list?page=0");
    app.head.tittle = data + "'s Blob";
    return {
      master: data.master,
      indexpage: indexpage.data,
      page: 0,
      asyncInit: true
    };
  },
  methods: {
    listclick(row, event, column) {
      location.href = "blob/" + row.blobId;
    }
  }
};
</script>
<style lang="scss">
</style>

