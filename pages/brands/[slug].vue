<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug;

const { data } = await useFetch(`/api/brands/${slug}`);
const guitars = data.value!;
</script>
<template>
  <div
    class="bg-[url(~/assets/images/guitars-background.png)] w-[100vw] h-[100vh] fixed bg-cover bg-center"
  ></div>
  <Navbar></Navbar>
  <div
    class="mx-[10vw] sm:mx-20 mt-[8vw] sm:mt-20 relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[8vw] xl:grid-cols-4"
  >
    <NuxtLink
      v-for="guitar in guitars"
      :to="`/brands/${guitar.slug}`"
      :style="`background-image: url(${guitar.images.displayImgUrl})`"
      class="h-[200px] flex justify-center bg-contain bg-no-repeat bg-center hover-effect-cards rounded-[30px]"
    >
    </NuxtLink>
  </div>
</template>
