<template>
  <div class="container">
    <h1>{{blob.blobName}}</h1>
    <div v-html="blob.blobText"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios, app }) {
    let blob = await $axios.$get("blobtext?id=" + params.id);
    return {
      blob: blob.data
    };
  },
  data() {}
};
</script>

<style lang="scss" scoped>
@import "~/assets/source.scss";
.container {
  @media (min-width: $big-screen-width--min) {
    width: 60%;
    margin: 0 20%;
  }
}
</style>
