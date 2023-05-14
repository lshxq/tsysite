<template lang="pug">
  .learning005-main(v-resize='updateSize')
    
    
    editor.mavon-view-panel(
      :value='text' 
      default-open='preview'
      :editable='false'
      :toolbarsFlag='false'
      :subfield='false'
      :boxShadow='false'
      previewBackground='white'
      :html='false')

    .ball(ref='ballRef')
</template>

<script>

const rr = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

export default {
  components: {
  },
  mounted() {
    const ball = this.$refs.ballRef
    
    const move = (x, y) => {
      const ballRect = ball.getBoundingClientRect();
      const initX = ballRect.left + ballRect.width / 2;
      const initY = ballRect.top + ballRect.height / 2;
      console.log(`${initX}    ${initY}`)

      ball.getAnimations().forEach(ani => {
        ani.cancel();
      })

      ball.animate([
        {
          left: `${initX}px`,
          top: `${initY}px`
        },
        {
          left: `${x}px`,
          top: `${y}px`
        }
      ], {
        duration: 2000,
        fill: 'forwards'
      })
    }

    this.timeId = setInterval(() => {
      move(rr(100, this.cWidth - 100), rr(400, this.cHeight - 200))
    }, 2000) 

  },
  data() {
    return {
      text: `
# 学习要点：

现代浏览器支持 web animation api 了， 可以通过js 函数的方式，高性能的实现动画效果。
第一个参数是变化的集合
第二个参数 配置变化

\`\`\` javascript
ball.animate([
  {
    left: \`\${initX}px\`,
    top: \`\${initY}px\`
  },
  {
    left: \`\${x}px\`,
    top: \`\${y}px\`
  }
], {
  duration: 2000,
  fill: 'forwards'
})
\`\`\`
      `,
    };
  },
  destroyed() {
    clearInterval(this.timeId)
  },
  methods: {
    updateSize(size) {
      this.cWidth = size.width
      this.cHeight = size.height
    }
  }
};
</script>


<style lang="sass" scoped>
.learning005-main 
  height: 98vh
  background: linear-gradient(#333, #222, #333)
  position: relative

  .ball
    width: 100px
    height: 100px
    position: absolute
    background: conic-gradient(red, magenta, blue, aqua, lime, yellow, red)
    border-radius: 50%
</style>