<template lang="pug">
  .personal-index-main
    .block
      artical-list
    .block
      pano-list
</template>

<script>
import ArticalList from './components/artical-list.vue'
import PanoList from './components/pano-list.vue'

export default {
  components: {
    ArticalList,
    PanoList,
  },
  created() {
    
  },
  data() {
    return {}
  },
  methods: {
    getQiniuFileList() {
      this.$axios({
        url: 'system/qiniu/key',
        method: "POST",
        params: {
          key: 'aadfadf'
        }
      }).then(resp => {
        console.log(resp)
      })
    },
    
  }
}
</script>

<style lang="sass" scoped>
.personal-index-main
  padding: 30px

.flex-row
  display: flex
  flex-flow: row wrap
</style>