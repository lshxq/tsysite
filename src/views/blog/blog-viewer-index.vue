<template lang="pug">
  .blog-viewer-index-main(v-loading='loading')
    .title {{blog.title}}
    mavon-editor.mavon-view-panel(
      :value='blog.content' 
      default-open='preview'
      :editable='false'
      :toolbarsFlag='false'
      :subfield='false')
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      loading: false,
      articalResp: false
    }
  },
  computed: {
    blogId() {
      return this.$route.params.id
    },
    blog() {
      return _.get(this, 'articalResp.data', {})
    }
  },
  mounted() {
    this.getBlogById(this.blogId)
  },
  methods: {
    getBlogById(blogId) {
      const that = this
      that.loading = true
      that.$axios({
        url: `public/artical/${blogId}`
      }).then(resp => {
        that.articalResp = resp
      }).finally(() => {
        that.loading = false
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.blog-viewer-index-main
  height: 100%
  .title
    height: 50px
  .mavon-view-panel
    height: calc(100% - 50px)
</style>