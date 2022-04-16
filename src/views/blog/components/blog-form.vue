<template lang="pug">
.blog-form-main-panel
  el-form(:rules='rules' ref='formRef' :model='modified' label-width='100px')
    el-form-item(label='标题' prop='title')
      el-input(v-model.trim='modified.title')
    el-form-item(label='类型' prop='type')
      sy-options(type='2' :options='articalTypeOptions' v-model='modified.type')
    el-form-item(label='正文' prop='content')
      mavon-editor.mavon-editor-panel(v-model='modified.content' ref='mdRef' @imgAdd="imgAdd")
    el-form-item()
      el-button(type='primary' @click='apply') 保存
      el-button(@click='canceled') 取消

  image-cropper(
    v-if='imageCropperData' 
    :img='imageCropperData.image' 
    :fixed-size='false'
    :max-img-size='800'
    :image-width='800' 
    :image-height='500' 
    @applied='imageUpload'
    @canceled='imageCanceled')
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
      modified: {
        title: '',
        type: this.$route.query.type,
        content: ''
      },
      imageCropperData: false
    }
  },
  computed: {
    typeComp() {
      return this.$route.query.type
    }
  },
  methods: {
    submitted() {
      this.goto("personal")
    },
    canceled() {
      this.goto("personal")
    },
    imageCanceled() {
      const that = this
      const {
        pos
      } = that.imageCropperData
      that.imageCropperData = null
      const md = that.$refs.mdRef
      md.$imgDel(pos)
    },
    imageUpload(image) {
      const that = this
      const {
        pos
      } = that.imageCropperData
      const md = that.$refs.mdRef
      that.uploadQiniu(image, "blog").then(resp => {
        md.$img2Url(pos, that.getQiniuResource(resp.key));
      }).catch(ex => {
        that.$message.error(ex)
      }).finally(() => {
        that.imageCropperData = null
      })
    },
    imgAdd(pos, file) {
      const that = this
      console.log(file)
      if (!/\.(jpg|jpeg|png|JPG|PNG)$/.test(file.name)) {
        that.$message({
          message: '图片类型要求：jpeg、jpg、png',
          type: "error"
        });
        return false
      }
      //转化为blob
      const reader = new FileReader()
      reader.onload = (e) => {
        let data
        if (typeof e.target.result === 'object') {
          data = window.URL.createObjectURL(new Blob([e.target.result]))
        } else {
          data = e.target.result
        }
        that.imageCropperData = {
          pos,
          image: data
        }
      }
      reader.readAsDataURL(file)
    }
  }
}
</script>

<style lang="sass" scoped>
  .mavon-editor-panel
    height: 600px

</style>