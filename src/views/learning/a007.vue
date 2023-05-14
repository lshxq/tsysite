<template lang="pug">
  .learning-007-main
    .flex-center.card-wrapper
      .card
</template>

<style lang="css" scoped>
@property --direc {
  syntax: '<angle';
  initial-value: 0deg;
  inherits: false;
}

.card-wrapper {
  height: 500px;
  width: 100%;
}

.card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: inherit;
  filter: blur(20px);
}



.card {
  position: relative;
  --direc: 0deg;
  height: 300px;
  width: 200px;
  background-image: linear-gradient(var(--direc), #5ddcff, #3c67e3 43%, #4e0072);
  animation: rotate 2s linear infinite;
}
  
@keyframe rotate {
  to {
    --direc: 360deg;
  }
}
</style>