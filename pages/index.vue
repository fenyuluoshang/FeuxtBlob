<template>
  <section class="container">
    <div>
      <logo class="logo"></logo>
      <h1 class="title">{{master}}'s Blob</h1>
      <h2 class="subtitle">
        This Blob has build with
        <a
          class="link"
          href="https://github.com/fenyuluoshang/FeuxtBlob"
          target="_blank"
        >FeuxtBlob</a>
      </h2>
    </div>
    <div class="list">
      <!-- <ul class="list-body">
        <a :href="'/blob/'+item.blobId" :key="item.blobId" v-for="item in indexpage">
          <li class="blobitem">{{item.blobName}}</li>
        </a>
      </ul>-->
      <el-table :data="indexpage" @row-click="listclick">
        <el-table-column prop="blobId" label="ID"></el-table-column>
        <el-table-column prop="blobName" label="BLOB NAME"></el-table-column>
        <el-table-column prop="blobTypeName" label="BLOB TYPE"></el-table-column>
      </el-table>
      <div class="links">
        <a
          href="./bloblist"
          target="_blank"
          class="el-button el-button--default is-plain link"
        >View More</a>
        <a
          href="https://github.com/fenyuluoshang/FeuxtBlob"
          target="_blank"
          class="el-button el-button--default is-plain link"
        >View Feuxt at github</a>
      </div>
    </div>
    <div class="bottom">
      This Blob has build with
      <a
        class="el-button el-button--text link"
        href="https://github.com/fenyuluoshang/FeuxtBlob"
        target="_blank"
      >FeuxtBlob</a>
    </div>
  </section>
</template>

<script>
import logo from "~/components/Logo.vue";

export default {
  components: { logo },
  async asyncData({ params, $axios, app }) {
    let data = await $axios.$get("helloword");
    let indexpage = await $axios.$get("indexpage");
    app.head.tittle = data + "'s Blob";
    return { master: data.master, indexpage: indexpage.data, asyncInit: true };
  },
  data() {
    return { asyncInit: false };
  },
  methods: {
    listclick(row, event, column) {
      location.href = "blob/" + row.blobId;
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/source.scss";
$color1: #35495e;
$color2: #526488;

.logo {
  margin-top: 30px;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
  justify-content: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 80px;
  color: $color1;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 40px;
  color: $color2;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.bottom {
  text-align: left;
  padding: 10px 10px;
  @media (min-width: $big-screen-width--min) {
    padding: 10px 30px;
  }
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: $color1;
  color: #f0f0f0;
}

.list {
  @media (min-width: $media-screen-width--min) {
    padding: 0 20vw;
  }
}

.links {
  padding-top: 12px;
}

.link {
  text-decoration: none;
}
</style>
