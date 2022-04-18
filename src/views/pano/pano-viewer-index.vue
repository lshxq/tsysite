<template lang="pug">
  .pano-viewer-main(v-loading='!pano || loading')
    pano-viewer(v-if='pano' :img='getQiniuResource(pano.qiniuKey)' :cfg='panoCfg')
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
</style>