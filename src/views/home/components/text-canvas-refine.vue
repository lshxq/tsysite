<template lang="pug">
.text-canvas-main-panel(ref='mainContainer')
  canvas(ref='canvasRef')
</template>

<script>

let imagePoints = []
let imagePointIndex = 0
export default {
  data() {
    return {};
  },
  mounted() {
    const { canvasRef, mainContainer } = this.$refs;
    this.canvasWidth = mainContainer.offsetWidth;
    this.canvasHeight = 150;
    canvasRef.width = this.canvasWidth;
    canvasRef.height = this.canvasHeight;
    this.ctx = canvasRef.getContext("2d");


    imagePoints = this.getTextImageData('你好么？')
    imagePointIndex = 0
    this.drawText();
  },

  methods: {
    getTextImageData(text, fontSize = 100) {
      const cvs = document.createElement('canvas')
      
      const { canvasWidth, canvasHeight } = this;
      cvs.width = canvasWidth
      cvs.height = canvasHeight
      const ctx = cvs.getContext('2d')
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      ctx.font = `bold ${fontSize}px 微软雅黑`;
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, canvasWidth / 2, canvasHeight / 2);

      const data = ctx.getImageData(0, 0, canvasWidth, canvasHeight).data;
      const ps = []
      const rate = 4 // 像素稀释比率
      for (let idx=0; idx<data.length; idx+=4) {
        const pointIdx = idx / 4;
        const x = pointIdx % canvasWidth;
        const y = Math.floor(pointIdx / canvasWidth)
        if (data[idx] === 255 && data[idx+1] === 255 && data[idx+2] === 255) {
          if (x % rate === 0 && y % rate === 0) { // 稀释
            ps.push({
              x,
              y,
              currX:canvasWidth
            })
          }
        }
      }
      
      return ps.sort((a,b) => a.x - b.x)
    },

    drawText() {
      const { ctx, canvasWidth: width, canvasHeight: height, } = this;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#ffffff";
      imagePoints.map((point,idx) => {
        if (imagePointIndex === idx) {
          if (point.currX > point.x) {
            point.currX -= 30
          }
          if (point.currX < point.x) {
            point.currX = point.x
          }
          if (point.currX === point.x) {
            imagePointIndex += 1
          }
        }
        ctx.fillRect(point.currX,point.y,2,2)
      })
      
      
      requestAnimationFrame(this.drawText);
    },
  },
};
</script>

<style lang="sass" scoped>
.text-canvas-main-panel
</style>
