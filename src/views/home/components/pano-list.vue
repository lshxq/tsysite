<template lang="pug">
  .pano-list-main
    sy-pagin-data(url='public/pano/list')
      template(slot-scope='scope')
        .panoramas
          .item(v-for='(pano, idx) of scope.data' :key='idx')
            pano-viewer(:img='getQiniuResource(pano.qiniuKey)' :cfg='panoCfg')
            .mask(@click='currentPano = getQiniuResource(pano.qiniuKey)')
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
        this.getPanoUrl('00.jpg'),
        this.getPanoUrl('01.jpg'),
        this.getPanoUrl('02.jpg'),
        this.getPanoUrl('03.jpg'),
        this.getPanoUrl('04.jpg'),
        this.getPanoUrl('05.jpg'),
        this.getPanoUrl('06.jpg'),
        this.getPanoUrl('07.jpg'),
        this.getPanoUrl('08.jpg'),
        this.getPanoUrl('09.jpg'),
        this.getPanoUrl('10.jpg'),
        this.getPanoUrl('11.jpg'),
        this.getPanoUrl('12.jpg'),
        this.getPanoUrl('13.jpg'),
        this.getPanoUrl('14.jpg'),
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
