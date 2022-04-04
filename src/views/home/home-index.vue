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
  border-bottom: 1px solid lightgray
  padding: 10px 10px 30px 10px

#app-main-panel
  user-select: none
  width: 100%
  background-image: url('./assets/20220311102907.jpg')
  background-size: 100%
  background-position: 0 0
  background-repeat: no-repeat


  .narrow
    margin: 100px auto
    padding-bottom: 100px
    background: white
    border-radius: 20px
    min-height: calc(100% - 100px)
    width: 80%
    min-width: 720px
    transition: all .5s
    .header
      height: 100px
      margin: 10px
      border-bottom: 1px solid lightgray
      .title
        font-size: 50px
        display: flex
        align-items: center
        height: 100%
    .header:hover

    .body
      width: 100%
      margin-top: 6px

      .site-map
        padding: 10px
        margin: 10px
        border: 1px solid lightgray
        width: 200px
        .item
          cursor: pointer
          display: block
          color: gray
          padding: 10px
</style>
