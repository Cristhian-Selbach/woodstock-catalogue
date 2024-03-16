<script setup lang="ts">
const { data } = await useFetch("/api/artists");
const artists = data.value;
</script>

<template>
  <!-- BACKGROUND MOBILE (because background-fixed is not supported on safari ) -->
  <div
    class="bg-[url(~/assets/images/artists-background.png)] w-[100vw] h-[100vh] fixed bg-cover bg-center sm:hidden"
  ></div>

  <div
    class="bg-[url(~/assets/images/artists-background.png)] h-[100vh] bg-cover bg-center justify-between bg-fixed"
  >
    <Navbar></Navbar>

    <div
      class="mx-[10vw] xl:mx-52 sm:mx-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-16 sm:gap-[10vw] xl:gap-[5vw] mt-12 md:mt-32 relative"
    >
      <Nuxt-Link
        :to="`artists/${artist.slug}`"
        v-for="artist in artists"
        class="h-[450px] bg-cover bg-center text-white flex justify-center items-center rounded-[45px] outline-cards hover-effect-cards"
        :style="`background-image: url(${artist.images.displayImgUrl})`"
      >
        <h1 class="text-[100px] outline-title-gray">
          {{ artist.displayName }}
        </h1>
      </Nuxt-Link>
    </div>
  </div>
</template>
