<template lang="pug">
  .pano-list-main
    .panoramas
      .item(v-for='(pano, idx) of panos' :key='idx')
        pano-viewer(:img='pano' :cfg='panoCfg')
        .mask(@click='currentPano = pano')
          .text 显示全景

    .fullscreen-pano-viewer(v-if='!!currentPano')
      pano-viewer(:img='currentPano' :cfg='currentPanoCfg')
      .close-button(@click='currentPano = null')
        .el-icon-close

</template>

<script>
export default {
  created() {
    this.panoCfg = {
      autorotateDelay: 400,
      autorotateSpeed: "1rpm",
      navbar: false,
    };
    this.currentPanoCfg = {
      autorotateDelay: 400,
      autorotateSpeed: "0.1rpm",
    };
  },
  data() {
    return {
      currentPano: null,
      panos: [
        require("@/assets/images/pano/00.jpeg"),
        require("@/assets/images/pano/01.jpeg"),
        require("@/assets/images/pano/02.jpeg"),
        require("@/assets/images/pano/03.jpeg"),
        require("@/assets/images/pano/04.jpeg"),
        require("@/assets/images/pano/05.jpeg"),
        require("@/assets/images/pano/06.jpeg"),
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
.panoramas
  display: flex
  flex-flow: row wrap
  .item
    position: relative
    margin: 10px
    width: 250px
    height: 180px
    .mask
      z-index: 9998
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

.fullscreen-pano-viewer
  z-index: 9999
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  .close-button:hover
    opacity: .8
  .close-button
    position: absolute
    right: 50px
    top: 50px
    width: 50px
    height: 50px
    background: rgba(0,0,0,.6)
    border-radius: 50%
    color: white
    display: flex
    justify-content: center
    align-items: center
    font-size: 30px
    cursor: pointer
</style>
