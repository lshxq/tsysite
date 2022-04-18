<template lang="pug">
  .artical-list-main
    .title.h3 全景图管理
    sy-left-right.mb10
      template(slot='left')
        .flex-row
          sy-search-input.mr10(v-model='query.keyword' placeholder='请输入关键字')
      template(slot='right')
        el-button(type='primary' @click='goto("pano-create")') 新建全景图

    sy-pagin-table(
      url='personal/pano/list'
      :query='query'
      :columns='articalColumns'
    )
      template(v-slot:action='scope')
        el-button(type='primary' size='mini' @click='editArtical(scope.data.row)') 编辑
        el-button(type='success' size='mini' @click='showArtical(scope.data.row)') 预览

</template>

<script>

export default {
  created() {
    this.articalColumns = [
      {
        prop: 'title',
        label: '标题'
      },
      {
        label: '创建日期',
        getContent(data) {
          return new Date(data.row.created).format()
        },
        width: 170
      },
      {
        label: '操作',
        slot: 'action',
        width: 200
      }
    ]
  },
  data() {
    return {
      query: {
        keyword: ''
      }
    }
  },
  methods: {
    showArtical(artical) {
      this.goto("blog-viewer", {
        winTarget: 'blog-viewer',
        params: {
          id: artical.id
        }
      })
    },
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

.flex-row
  display: flex
  flex-flow: row wrap
</style>