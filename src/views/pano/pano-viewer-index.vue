<template lang="pug">
  .pano-viewer-main(v-loading='!pano || loading')
    pano-viewer(v-if='pano' :img='getQiniuResource(pano.qiniuKey)' :cfg='panoCfg')
    .el-icon-info(@click='drawer.visible = true')
    el-drawer(title="全景信息" direction='rtl' :visible.sync="drawer.visible")
      .pano-info
        .row
          .label 标题
          .value {{pano.title}}
        .row
          .label 描述
          .value 
            mavon-editor.mavon-view-panel(
              :value='pano.content' 
              default-open='preview'
              :editable='false'
              :toolbarsFlag='false'
              :subfield='false'
              :boxShadow='false'
              previewBackground='white'
              :html='false')
        .row
          .label 拍色日期
          .value {{long2datetime(pano.shotDate)}}
        .row
          .label 海拔高度
          .value {{pano.high}}米
        .row
          .label 上传日期
          .value {{long2datetime(pano.created)}}
</template>

<script>
export default {
  created() {
    this.panoCfg = {
      autorotateDelay: 400,
      autorotateSpeed: "0.1rpm",
    };
  },
  data() {
    return {
      pano: false,
      loading: false,
      drawer: {
        visible: false,
      }
    }
  },
  mounted() {
    const {
      qiniuId
    } = this
    this.getPanoByQiniuId(qiniuId)
  },
  computed: {
    qiniuId() {
      return this.$route.params.id
    }
  },
  methods: {
    getPanoByQiniuId(qiniuId) {
      this.loading = true
      this.$axios({
        url: `public/pano/${qiniuId}`,
      }).then(resp => {
        this.pano = resp.data
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.pano-viewer-main
  height: 100%
  widows: 100%
  position: relative
  .el-icon-info
    position: absolute
    font-size: 50px
    right: 2%
    top: 2%
    cursor: pointer
    color: #d0d0d0	
  .el-icon-info:hover
    opacity: .8

.pano-info
  .row
    display: flex
    margin-bottom: 20px
    .label:after
      content: ' : '
    .label
      flex: 0 0 120px
      text-align: right
      padding-right: 10px
    .value
      flex: 1 1 auto
      color: gray

.mavon-view-panel
  box-shadow：none
</style>