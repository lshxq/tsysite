<template lang="pug">
  #viewer
</template>

<script>
import { Viewer } from "photo-sphere-viewer";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";

export default {
  props: {
    img: {
      type: String,
    },
  },
  watch: {
    img(val) {
      this.viewer.destroy();
      this.viewer = new Viewer({
        container: document.querySelector("#viewer"),
        panorama: val,
      });
    },
  },
  mounted() {
    this.viewer = new Viewer({
      container: document.querySelector("#viewer"),
      panorama: this.img,
    });
  },
};
</script>

<style lang="sass" scoped>
#viewer
  width: 100%
  height: 100%
</style>
