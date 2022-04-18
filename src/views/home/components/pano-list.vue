<template lang="pug">
  .pano-list-main
    sy-pagin-data(url='public/pano/list' :query='query')
      template(slot-scope='scope')
        .panoramas
          .item(v-for='(pano, idx) of scope.data' :key='idx')
            pano-viewer(:img='getQiniuResource(pano.qiniuKey)' :cfg='panoCfg')
            .title-bar {{pano.title}}
            .mask(@click='showPano(pano)')
              .text 显示全景

</template>

<script>
export default {
  created() {
    this.panoCfg = {
      autorotateDelay: 400,
      autorotateSpeed: "1rpm",
      navbar: false,
    };
  },
  data() {
    return {
      query: {
        orderBy: ''
      }
    };
  },
  methods: {
    showPano(pano) {
      console.log(pano)
      this.goto('pano-viewer', {
        params: {
          id: pano.qiniuId
        },
        winTarget: `pano-viewer-${pano.qiniuId}`
      })
    }
  }
};
</script>

<style lang="sass" scoped>
.panoramas
  display: flex
  flex-flow: row wrap
  .item
    position: relative
    margin: 10px
    width: 380px
    height: 250px
    .title-bar
      position: absolute
      bottom: 0
      left: 0
      right: 0
      padding: 5px 10px
      background-color: rgba(0, 0, 0, .6)
    .mask
      position: absolute
      top: 0
      bottom: 0
      left: 0
      right: 0
      display: flex
      justify-content: center
      align-items: center
      cursor: pointer
      .text
        display: none
    .mask:hover
      background-color: rgba(255,255,255, .5)
      .text
        display: block
        color: white


</style>
