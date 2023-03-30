<template lang="pug">
  #app-main-panel-pc
    .narrow
      .header
        text-canvas
      .body
        .block-section
          line-point-canvas

        .block-section
          text-canvas-refine

        .block-section
          .title 快乐时光
          photo-list

        .block-section
          .title 全景图欣赏
          pano-list

        .block-section
          tsyvue-canvas

        .block-section
          .h4 生活分享
          sy-pagin-data(url='/public/artical/list' :query='{type:1,orderBy:"CREATED DESC"}')
            template(slot-scope='scope')
              .data-row(v-for='(row, idx) of scope.data' :key='idx')
                ll(:text='row.title' :data='row' @click='showArtical')

        .block-section
          .h4 技术分享
          sy-pagin-data(url='/public/artical/list' :query='{type:2,orderBy:"CREATED DESC"}')
            template(slot-scope='scope')
              .data-row(v-for='(row, idx) of scope.data' :key='idx')
                ll(:text='row.title' :data='row' @click='showArtical')
            

    
          

</template>

<script>
import PhotoList from "./photo-list.vue";
import TextCanvas from "./text-canvas.vue";
import TextCanvasRefine from "./text-canvas-refine.vue";
import TsyvueCanvas from "./tsyvue-canvas.vue";
import PanoList from "./pano-list.vue";
import LinePointCanvas from "./line-point-canvas.vue";

export default {
  name: "App",
  components: {
    PanoList,
    PhotoList,
    LinePointCanvas,
    TextCanvas,
    TsyvueCanvas,
    TextCanvasRefine,
  },
  data() {
    return {};
  },

  methods: {
    newLifeShare() {
      this.goto("blog-creation", { query: { type: "1" } });
    },
    newTechShare() {
      this.goto("blog-creation", { query: { type: "2" } });
    },
    showArtical(artical) {
      this.goto("blog-viewer", {
        params: {
          id: artical.id,
        },
        winTarget: `blog_viewer_${new Date().getTime()}`,
      });
    },
  },
};
</script>

<style lang="sass" scoped>


.block-section
  margin-bottom: 130px
  .title
    font-weight: bolder
    font-size: 20px
    margin-bottom: 10px


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
      min-height: 100px
      .title
        font-size: 50px
        display: flex
        align-items: center
        height: 100%
    .header:hover

    .body
      width: 100%

 
</style>
