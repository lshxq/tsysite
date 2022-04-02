<template lang="pug">
  .viewer-main(ref='viewerRef')
    .pano
</template>

<script>
import { Viewer } from "photo-sphere-viewer";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";

export default {
  props: {
    img: {
      type: String,
    },
    cfg: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    img(val) {
      this.viewer.setPanorama(val);
    },
  },
  mounted() {
    const viewerEle = this.$refs.viewerRef;
    this.viewer = new Viewer({
      container: viewerEle.children[0],
      panorama: this.img,
      ...this.cfg,
    });
    this.viewer.navbar.hide();
  },
  destroyed() {
    this.viewer.destroy();
  },
};
</script>

<style lang="sass" scoped>
.viewer-main
  width: 100%
  height: 100%
  .pano
    width: 100%
    height: 100%
</style>
