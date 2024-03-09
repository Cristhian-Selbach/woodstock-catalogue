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
    class="mx-[10vw] sm:mx-20 mt-[40vw] sm:mt-40 relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[40vw] md:gap-[15vw] xl:grid-cols-4"
  >
    <NuxtLink
      v-for="guitar in guitars"
      :to="`/guitars/${guitar.slug}`"
      class="flex justify-center flex-col hover-effect-cards z-10 items-center"
    >
      <div class="bg-[#e4e4e4c4] rounded-[25px] w-full z-0 relative h-[300px]">
        <img
          :src="guitar.images.displayImgUrl"
          alt=""
          class="shadow-cards h-[130%] w-full bottom-[32%] relative object-contain"
        />
      </div>
      <div class="py-3 bg-[#232323] rounded-b-[25px] w-[80%]">
        <p class="text-white text-center text-2xl text-wrap">
          {{ guitar.name }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>
