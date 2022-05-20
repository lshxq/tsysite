<template lang="pug">
  #app-main-panel-pc
    .narrow
      .header
        .title.red TSY ZONE
      .body
        .block-section
          .title 快乐时光
          photo-list

        .block-section
          .title 全景图欣赏
          pano-list

        .block-section
          .site-map
            a.item(href='/tsyvue/') tsyvue 教程

        .block
          .section
            .h4 生活分享
            sy-pagin-data(url='/public/artical/list' :query='{type:1,orderBy:"CREATED DESC"}')
              template(slot-scope='scope')
                .data-row(v-for='(row, idx) of scope.data' :key='idx')
                  ll(:text='row.title' :data='row' @click='showArtical')
          .section
            .h4 技术分享
            sy-pagin-data(url='/public/artical/list' :query='{type:2,orderBy:"CREATED DESC"}')
              template(slot-scope='scope')
                .data-row(v-for='(row, idx) of scope.data' :key='idx')
                  ll(:text='row.title' :data='row' @click='showArtical')
            

    
          

</template>

<script>
import PhotoList from "./photo-list.vue";
import PanoList from "./pano-list.vue";

export default {
  name: "App",
  components: {
    PanoList,
    PhotoList,
  },
  data() {
    return {};
  },
  methods: {
    newLifeShare() {
      this.goto("blog-creation", {query: {type: '1'}})
    },
    newTechShare() {
      this.goto("blog-creation", {query: {type: '2'}})
    },
    showArtical(artical) {
      this.goto('blog-viewer', {
        params: {
          id: artical.id
        },
        winTarget: `blog_viewer_${new Date().getTime()}`
      })
    }
  },
};
</script>

<style lang="sass" scoped>
.block-section
  margin-bottom: 30px
  .title
    font-weight: bolder
    font-size: 20px
    margin-bottom: 10px
  
.block
  padding: 10px 10px 30px 10px
  display: flex
  flex-flow: row wrap
  .section
    box-sizing: border-box
    padding: 10px 40px 10px 10px
    width: 50%
@media screen and (min-width:1000px)
  .block
    .section
      width: 50%

@media screen and (max-width:1000px)
  .block
    .section
      width: 100%

#app-main-panel-pc
  user-select: none
  min-width: 580px
  background-image: linear-gradient(#101010, #303030, #101010)
  color: white
  min-height: 100vh


  .narrow
    margin: 0 auto
    width: 80%
    transition: all .5s

    .header
      height: 100px
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
          color: white
          cursor: pointer
          display: block
          padding: 10px
</style>
