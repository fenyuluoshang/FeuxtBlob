<template>
  <div class="contenion">
    <el-card class="box-card">
      <el-form ref="form" :model="form" label-width="180px">
        <el-form-item label="管理员密钥">
          <el-input type="file"></el-input>
        </el-form-item>
        <el-form-item label="管理模式">
          <el-select v-model="typeselect">
            <el-option :key="item.val" :label="item.tittle" :value="item.val" v-for="item in type"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item v-if="typeselect==2" label="博客id">
          <el-input placeholder="博客id" v-model="blobId"></el-input>
        </el-form-item>
        <el-form-item v-if="typeselect==1||typeselect==2" label="博客标题">
          <el-input placeholder="博客标题" v-model="tittle"></el-input>
        </el-form-item>
        <el-form-item v-if="typeselect==1||typeselect==2" label="博客内容">
          <el-input type="textarea" :rows="10" placeholder="博客内容" v-model="article"></el-input>
        </el-form-item>
        <el-form-item v-if="typeselect==4" label="分类id">
          <el-input placeholder="分类id" v-model="typeId"></el-input>
        </el-form-item>
        <el-form-item v-if="typeselect==3||typeselect==4" label="分类名">
          <el-input placeholder="分类名" v-model="typeName"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button>提交变更</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blobId: "",
      tittle: "",
      typeselect: "",
      article: "",
      typeId: "",
      typeName: "",
      type: [
        { val: 1, tittle: "新建博文" },
        { val: 2, tittle: "修改博文" },
        { val: 3, tittle: "新建分类" },
        { val: 4, tittle: "编辑分类" }
      ],
      form: {}
    };
  }
};
</script>
<style lang="scss" scoped>
@media (min-width: 720px) {
  .contenion {
    width: 60%;
    margin: 0 20%;
  }
}
</style>
