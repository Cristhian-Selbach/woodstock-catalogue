<script lang="ts" setup>
const route = useRoute();
const { data } = await useFetch(`/api/models/${route.params.slug}`);
const guitars = data!;
</script>
<template>
  <div
    class="bg-[url(~/assets/images/guitars-background.png)] w-[100vw] h-[100vh] fixed bg-cover bg-center"
  ></div>
  <Navbar></Navbar>
  <div
    class="mx-[10vw] xl:mx-52 sm:mx-20 mt-[40vw] sm:mt-40 relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[40vw] sm:gap-[15vw] xl:gap-[8vw] xl:grid-cols-4"
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
          {{ guitar.brand }}
          {{ guitar.name }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>
