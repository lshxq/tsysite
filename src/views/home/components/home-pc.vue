<template lang="pug">
  #app-main-panel-pc
    new-york.mb30(@click='alert(1)')
    .narrow
      .header.cursor-pointer(@click='gotoCanvasTraining')
        text-canvas-refine(text='面向初中生的Canvas动画教程,点击查看文档')
        
      
      .body
        .flex-center.mt30
          .calendar-row
            sy-left-right
              div(slot='left' class='calendar-panel')
                sy-left-right
                  sy-calendar.mr10(v-model='selectedDate' slot='left')

              div(slot='right')
                sy-ray-border.ml30(:width='200' :height='300' :radius='5')
                  .tsy-panel 
                    .name Tian 
                    .num 21
                sy-ray-border.ml10(:width='200' :height='300' :radius='5')
                  .tsy-panel 
                    .name UC 
                    .num 90
                sy-ray-border.ml10(:width='200' :height='300' :radius='5')
                  .tsy-panel 
                    .name YC 
                    .num 15

        .water-drop-container 水滴可以拖动
          sy-water-drop(v-drag)

        .rolling-image-block
          sy-rolling-image(:images='rollingImages')

        .block-section
          line-point-canvas
        
        .block-section
          .title 快乐时光
          photo-list
        
        .block-section
          

        .block-section
          .title 全景图欣赏
          pano-list

        .block-section
          tsyvue-canvas

        .block-section
          .h4 生活分享
          sy-pagin-data(url='/public/artical/list' :query='query1')
            template(slot-scope='scope')
              .data-row(v-for='(row, idx) of scope.data' :key='idx')
                ll(:text='row.title' :data='row' @click='showArtical')
        
    

        .block-section
          .h4 技术分享
          sy-pagin-data(url='/public/artical/list' :query='query2')
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
import NewYork from "@/comps/new-york.vue";

export default {
  name: "App",
  components: {
    NewYork,
    PanoList,
    PhotoList,
    LinePointCanvas,
    TextCanvas,
    TsyvueCanvas,
    TextCanvasRefine,
  },
  data() {
    return {
      selectedDate: new Date(),
      query1: { type: 1, orderBy: "CREATED DESC" },
      query2: {
        type: 2,
        orderBy: "CREATED DESC",
      },
      rollingImages: [
        this.getUploadedResource("img/20220311102357.jpg"),
        this.getUploadedResource("img/20220311102855.jpg"),
        this.getUploadedResource("img/20220311102907.jpg"),
        this.getUploadedResource("img/20220311102918.jpg"),
        this.getUploadedResource("img/20220311102928.jpg"),
        this.getUploadedResource("img/20220311102938.jpg"),
      ],
    };
  },

  methods: {
    gotoCanvasTraining() {
      window.open("/site/blog/12/viewer", "CanvasTraining");
    },
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
  padding-bottom: 130px
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



.rolling-image-block
  height: 800px;

.calendar-row

.water-drop-container
  margin-top: 50px
  height: 300px
  position: relative
  background: linear-gradient(#222, #333, #222)
  display: flex
  align-items: center
  justify-content: center
  overflow: auto
  font-size: 10vw
  color: transparent
  -webkit-text-stroke: 1px white
  text-stroke: 1px white

.tsy-panel
  background: red;
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  color: black;
  -webkit-text-stroke: 3px white;
  font-weight: bolder;
  .name
    font-size: 70px;

  .num
    font-size: 122px;
</style>
