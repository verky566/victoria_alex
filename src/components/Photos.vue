<template>
    <vue-picture-swipe :items="items"></vue-picture-swipe>
  </template>
  
  <script>
    import VuePictureSwipe from 'vue3-picture-swipe';
    export default {
      data() {
        return {
          items: [{
            src: 'http://via.placeholder.com/600x400',
            thumbnail: 'http://via.placeholder.com/64x64',
            w: 600,
            h: 400,
            alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
          },
          {
            src: 'http://via.placeholder.com/1200x900',
            thumbnail: 'http://via.placeholder.com/64x64',
            w: 1200,
            h: 900,
            htmlAfterThumbnail: '<span class="photos-date">29.12.2021</span>' // optional, insert your html after tag <a> if you need it
          }
        ]};
      }
    }
  </script>