<template lang="pug">
  .pano-list-main
    .panoramas
      .item(v-for='(pano, idx) of panos' :key='idx')
        pano-viewer(:img='pano' :cfg='panoCfg')

</template>

<script>
export default {
  created() {
    this.panoCfg = {
      autorotateDelay: 2000,
      autorotateSpeed: "1rpm",
    };
  },
  data() {
    return {
      panos: [
        require("@/assets/images/pano/6c44d55550f7df2a5ddc4f4f863bba84.jpeg"),
        require("@/assets/images/pano/shenzhen-dameisha.jpeg"),
        require("@/assets/images/pano/c1.jpeg"),
        require("@/assets/images/pano/c2.jpeg"),
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
    margin: 10px
    width: 250px
    height: 180px
</style>
