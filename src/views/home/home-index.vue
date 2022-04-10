<template lang="pug">
  #app-main-panel
    .narrow
      .header
        .title.red TSY ZONE
      .body
        .block
          .h3 快乐时光
          photo-list

        .block
          .h3 全景图欣赏
          pano-list

        .block
          .site-map
            a.item(href='/tsyvue/') tsyvue 教程
            a.item(href='/pano/') 全景图
            a.item(href='/beautyshop/') Beautyshop
            

    
          

</template>

<script>
import PhotoList from "./components/photo-list.vue";
import PanoList from "./components/pano-list.vue";

export default {
  name: "App",
  components: {
    PanoList,
    PhotoList,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="sass" scoped>
.block
  padding: 10px 10px 30px 10px

#app-main-panel
  user-select: none
  width: 100%
  background-image: linear-gradient(#1e1e1e, #303030, #1e1e1e)
  color: white


  .narrow
    margin: 0 auto
    width: 80%
    min-width: 720px
    transition: all .5s

    .header
      height: 100px
      margin: 10px
      .title
        font-size: 50px
        display: flex
        align-items: center
        height: 100%
    .header:hover

    .body
      width: 100%

      .site-map
        padding: 10px
        margin: 10px
        width: 200px
        .item
          cursor: pointer
          display: block
          color: gray
          padding: 10px
</style>
