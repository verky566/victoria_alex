<script setup>
//script setup -> imported components made avaliable to the template

import Photos from "../components/Photos.vue";


</script>

<template>
  <main>
    <body>
    <h1>Photos</h1>
    <p>This is the Photos page</p>

    <div id="app">
    <Photos />
   <!-- Dynamic components-->
      <!-- <component :is="Photos"></component>    -->
      </div>
      </body>
  </main>
</template>


