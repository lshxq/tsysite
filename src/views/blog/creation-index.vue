<template lang="pug">
  .blog-creation-index-main aa {{typeComp}}
    mavon-editor(v-model='content')
</template>

<script>
export default {
  data() {
    return {
      content: ''
    }
  },
  computed: {
    typeComp() {
      return this.$route.query.type
    }
  }
}
</script>