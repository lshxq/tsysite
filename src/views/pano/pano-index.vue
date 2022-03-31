<template lang="pug">
  .pano-index-main
    pano-viewer(:img='panoComp')
    el-button.next(type='primary' @click='current++') 下一张
  
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      panos: [
        require("@/assets/images/pano/6c44d55550f7df2a5ddc4f4f863bba84.jpeg"),
        require("@/assets/images/pano/shenzhen-dameisha.jpeg"),
        require("@/assets/images/pano/c1.jpeg"),
        require("@/assets/images/pano/c2.jpeg"),
      ],
    };
  },
  computed: {
    panoComp() {
      const { panos, current } = this;

      return panos[current % panos.length];
    },
  },
  mounted() {},
};
</script>

<style lang="sass" scoped>
.pano-index-main
  width: 100%
  height: 100%
  position: relative
  .next
    position: absolute
    right: 50px
    top: 50%
</style>
