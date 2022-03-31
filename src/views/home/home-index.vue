<template lang="pug">
  #app-main-panel
    .narrow
      .header
        .title.red TSY ZONE
      .body
        .block
          .photos
            sy-preview(ref='previewRef' :images='photos')
            .phone(v-for='(photo, idx) of photos' :key='idx' @click='$refs.previewRef.show(idx)' :style='photoStyle')
              img(:src='`${photo}`' draggable='false')

        .block
          .panos

        .block
          .site-map
            a.item(href='/tsyvue/') tsyvue 教程
            a.item(href='javascript:false' @click='goto("pano")') 全景图
            a.item(href='/beautyshop/') Beautyshop
            

    
          

</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      photos: [
        "./assets/20220311102357.jpg",
        "./assets/20220311102918.jpg",
        "./assets/20220311102855.jpg",
        "./assets/20220311102938.jpg",
        "./assets/20220311102907.jpg",
        "./assets/20220311102928.jpg",
      ],
    };
  },
  methods: {
    photoStyle() {
      return {
        transform: `rotate(${5 - Math.floor(Math.random() * 10)}deg)`,
      };
    },
  },
};
</script>

<style lang="sass" scoped>

#app-main-panel
  user-select: none
  width: 100%
  background-image: url('./assets/20220311102907.jpg')
  background-size: 100%
  background-position: 0 0

  .narrow
    margin: 100px auto
    padding-bottom: 100px
    background: white
    border-radius: 20px
    min-height: calc(100% - 100px)
    width: 80%
    min-width: 1000px
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
      .photos
        .phone
          display: inline-block
          margin: 10px
          box-shadow: 5px 5px 5px gray
          padding: 6px
          img
            width: 200px
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
