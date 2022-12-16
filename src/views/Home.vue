<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";


const photos = [
"perry.jpeg", "smokey.jpeg", "Cats.JPG",
];

</script>

<template>
  <body>
    <main>
      <div id="app">
    <h1>Home</h1>
    <p>This is the home page</p>
    <Swiper>
      <SwiperSlide v-for="photo in photo">
        <img :src="'src/assets/Gallery/${photo}'"/>
      </SwiperSlide>
      </Swiper>
      </div>
  </main>
</body>
</template>


<Style>

</Style>