<template lang="pug">
  .photo-list-main
    .photos
        sy-img(:src='photos' width='200px')

</template>

<script>
export default {
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
.photo-list-main
  .photos
    .photo
      display: inline-block
      margin: 10px
      box-shadow: 5px 5px 5px gray
      padding: 5px
      img
        width: 200px
</style>
