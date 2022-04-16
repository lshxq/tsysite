<template lang="pug">
  .personal-index-main
    .block
      .title.h3 文章管理
      sy-left-right.mb10
        template(slot='left')
          sy-options(v-model='query.type' type='1' :options='blogTypeOptions' label='文件类型')
        template(slot='right')
          el-button(type='primary' @click='goto("blog-creation")') 新建文章

      sy-pagin-table(
        url='personal/artical/list'
        :query='query'
        :columns='articalColumns'
      )
        template(v-slot:action='scope')
          el-button(type='primary' size='mini' @click='editArtical(scope.data.row)') 编辑
</template>

<script>
import ConstantHelper from '@/constant-helper.js'
import BlogConstant from '@/views/blog/blog-constant.js'

export default {
  created() {
    this.blogTypeOptions = ConstantHelper.options(BlogConstant.type)
    this.articalColumns = [
      {
        prop: 'title',
        label: '标题'
      },
      {
        label: '分类',
        getContent(data) {
          return ConstantHelper.getLabel(BlogConstant.type, data.row.type)
        },
        width: 100
      },
      {
        label: '创建日期',
        getContent(data) {
          return new Date(data.row.created).format()
        },
        width: 170
      },
      {
        label: '更新日期',
        getContent(data) {
          return new Date(data.row.updated).format()
        },
        width: 170
      },
      {
        label: '操作',
        slot: 'action',
        width: 100
      }
    ]
  },
  data() {
    return {
      query: {
        type: ''
      }
    }
  },
  methods: {
    editArtical(artical) {
      this.goto("blog-update", {
        params: {
          id: artical.id
        }
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.personal-index-main
  padding: 30px
</style>