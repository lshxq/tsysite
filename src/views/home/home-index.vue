<template lang="pug">
  #app-main-panel
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
            a.item(href='/pano/') 全景图
            a.item(href='/beautyshop/') Beautyshop

        .block
          .section
            sy-left-right
              b(slot='left') 生活分享
              template(slot='right')
                el-button(size='mini'  type='primary' @click='newLifeShare') 新分享
            sy-pagin-data(url='/public/artical/list' :query='{type:1}')
              template(slot-scope='scope')
                .data-row(v-for='(row, idx) of scope.data' :key='idx') {{row.title}}
          .section
            sy-left-right
              b(slot='left')  技术分享
              template(slot='right')
                el-button(size='mini' type='primary' @click='newTechShare') 新分享

            sy-pagin-data(url='/public/artical/list' :query='{type:2}')
              template(slot-scope='scope')
                .data-row(v-for='(row, idx) of scope.data' :key='idx') {{row.title}}
            

    
          

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
  methods: {
    newLifeShare() {
      this.goto("blog-creation", {query: {type: '1'}})
    },
    newTechShare() {
      this.goto("blog-creation", {query: {type: '2'}})
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

#app-main-panel
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
