<script setup> 

//

import Sidebar from './components/Sidebar.vue'


</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">

  <Sidebar />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/biography">Biography</RouterLink>
        <RouterLink to="/interests">Interests</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style Lang = "scss">

</style>
