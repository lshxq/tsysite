<template lang="pug">
  .personal-index-main
    .block
      .title.h3 文章管理
      sy-pagin-table(
        url='personal/artical/list'
        :columns='articalColumns'
      )
        template(v-slot:action='scope')
          el-button(type='primary' size='mini' @click='editArtical(scope.data.row)') 编辑
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
        label: '分类',
        prop: 'type'
      },
      {
        label: '操作',
        slot: 'action'
      }
    ]
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