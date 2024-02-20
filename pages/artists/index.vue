<script setup lang="ts">
const { data } = await useFetch("/api/artists");
const artists = data.value;
</script>

<template>
  <div
    class="bg-[url(~/assets/images/artists-background.png)] w-100 h-screen bg-cover bg-center justify-between bg-fixed"
  >
    <Navbar></Navbar>
    <div class="mx-20 grid grid-cols-3 gap-[10vw] mt-32">
      <div
        v-for="artist in artists"
        class="h-[450px] bg-cover bg-center text-white flex justify-center items-center rounded-[45px]"
        :style="`background-image: url(${artist.images.displayImgUrl})`"
      >
        <h1 class="text-[110px] outline-title-gray">
          {{ artist.displayName }}
        </h1>
      </div>
    </div>
  </div>
</template>
