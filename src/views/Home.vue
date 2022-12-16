<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const photos = [
"perry.jpeg", "smokey.jpeg", "cats.jpeg",
];
</script>

<template>
  <body>
    <main>

        <h1>Home</h1>

    <p>This is the home page which was to contain a photo gallery</p>
    <!-- <Swiper>
      <SwiperSlide v-for="photo in photo">
        <img :src="'/src/assets/Gallery/${photo}'"/>
      </SwiperSlide>
      </Swiper> -->

<img src="/src/assets/Gallery/perry.jpeg">
<img src="/src/assets/Gallery/perry_sleeping.jpeg">
<img src="/src/assets/Gallery/smoke_simb.jpeg">
<img src="/src/assets/Gallery/coco.jpeg">
<img src="/src/assets/Gallery/smokey.jpeg">


  </main>
</body>
</template>


<style>
img {
width: 400px;
height: 350px;
}
</style>