<template lang="pug">
.pano-form-main-panel(v-loading='locking || uploading')
  el-form(:rules='rules' ref='formRef' :model='modified' label-width='100px')
    el-form-item(label='全景图')
      el-upload(
        action=''
        :http-request='uploadPano'
        class="upload-demo"
        drag
        :multiple='false')
        i.el-icon-upload
        .el-upload__text 将文件拖到此处，或<em>点击上传</em>
        .upload__tip( slot="tip") 只能上传jpg/png文件

    el-form-item(label='标题' prop='title')
      el-input(v-model.trim='modified.title')
    el-form-item(label='正文' prop='content')
      editor.mavon-editor-panel(v-model='modified.content' image-upload-folder='pano')
    el-form-item()
      el-button(type='primary' @click='apply') 保存
      el-button(@click='canceled') 取消

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

  },
  data() {
    return {
      uploading: false,
      modified: {
        title: '',
        content: '',
        qiniuKey: '',
        latitude: '', // 纬度
        longitude: '' // 经度
      },
    }
  },
  computed: {
  },
  methods: {
    uploadPano(param) {

      const that = this
      that.uploading = true
      that.uploadQiniu(param.file, 'pano', uploadInfo => {
        const {
          percent
        } = uploadInfo.total
        param.file.percent = percent
      }).then(resp => {
        const {key} = resp
        that.modified.qiniuKey = key
        that.uploading = false
      })
    },
    submitted() {
      this.goto("personal")
    },
    canceled() {
      this.goto("personal")
    },
  }
}
</script>

<style lang="sass" scoped>

</style>