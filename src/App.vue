<template lang='pug'>
  #app-main-panel
    .narrow
      .header
        .title.red TSY ZONE
      .body
        .photos
          img.phone(v-for='photo of photos' :src='`./assets/${photo}`')
        .site-map
          a.item(href='/tsyvue/') tsyvue
          a.item(href='/beautyshop/')

    
          

</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      phones: [
        '20220311102357.jpg',
        '20220311102855.jpg',
        '20220311102907.jpg',
        '20220311102918.jpg',
        '20220311102928.jpg',
        '20220311102938.jpg'
      ]
    }
  }
}
</script>

<style lang='sass' scoped>

#app-main-panel
  width: 100%
  background-image: url('./assets/20220311102907.jpg')
  background-size: 100%
  background-position: 0 0
  display: flex
  justify-content: center
  .narrow
    background: white
    border-radius: 20px
    min-height: calc(100% - 100px)
    width: 1400px
    margin-top: 100px
    transition: all .5s
    .header
      height: 100px
      margin: 10px
      border-bottom: 1px solid lightgray
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

      
</style>
