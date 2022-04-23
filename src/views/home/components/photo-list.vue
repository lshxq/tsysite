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
        this.getUploadedResource('site/img/20220311102357.jpg'),
        this.getUploadedResource('site/img/20220311102855.jpg'),
        this.getUploadedResource('site/img/20220311102907.jpg'),
        this.getUploadedResource('site/img/20220311102918.jpg'),
        this.getUploadedResource('site/img/20220311102928.jpg'),
        this.getUploadedResource('site/img/20220311102938.jpg')
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
