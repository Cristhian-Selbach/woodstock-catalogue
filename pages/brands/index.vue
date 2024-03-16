<script setup lang="ts">
const { data } = await useFetch(`/api/brands`);
const brands = data.value;
</script>

<template>
  <div
    class="bg-[url(~/assets/images/brands-background.png)] w-[100vw] h-[100vh] fixed bg-cover bg-center"
  ></div>
  <Navbar></Navbar>
  <div
    class="mx-[10vw] xl:mx-52 sm:mx-20 mt-[8vw] sm:mt-20 relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[8vw] xl:gap-[4vw] xl:grid-cols-4"
  >
    <NuxtLink
      v-for="brand in brands"
      :to="`/brands/${brand.slug}`"
      :style="`background-image: url(${brand.imgUrl})`"
      class="h-[200px] flex justify-center bg-cover bg-no-repeat bg-center hover-effect-cards rounded-[30px]"
    >
    </NuxtLink>
  </div>
</template>
