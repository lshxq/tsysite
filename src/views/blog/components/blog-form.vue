<template lang="pug">
  el-form(:rules='rules' ref='formRef' :model='model' label-width='100px')
    el-form-item(label='标题' prop='title')
      el-input(v-model.trim='model.title')
    el-form-item(label='类型' prop='type')
      sy-options(type='2' :options='articalTypeOptions' v-model='model.type')
    el-form-item(label='正文' prop='content')
      mavon-editor.mavon-editor-panel(v-model='model.content')
    el-form-item()
      el-button(type='primary' @click='apply') 新建
      el-button(@click='goback') 取消
</template>

<script>
import tsy from 'tsyvue'
const {
  FormMixin
} = tsy

export default {
  mixins: [FormMixin],
  created() {
    this.rules = {
      title: [
        { required: true, message: "请输入文章标题", trigger: "blur" },
        { min: 2, max: 64, message: "长度在 2 到 64 个字符", trigger: "blur" },
      ],
      content: [
        { required: true, message: "请输入文章", trigger: "blur" },
        { required: true, message: "请书写文章", trigger: "blur" },
      ],
    };
    this.articalTypeOptions = [{
      label: '生活分享',
      value: 1,
    }, {
      label: '技术分享',
      value: 2,
    }]
  },
  data() {
    return {
      model: {
        title: '',
        type: this.$route.query.type,
        content: ''
      }
    }
  },
  computed: {
    typeComp() {
      return this.$route.query.type
    }
  }
}
</script>

<style lang="sass" scoped>
  .mavon-editor-panel
    height: 600px

</style>