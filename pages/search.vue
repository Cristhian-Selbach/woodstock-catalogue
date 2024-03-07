<script lang="ts" setup>
const route = useRoute();
const query = route.query.query;
const { data } = useFetch(`/api/search?query=${query}`);
const results = data.value!;
</script>
<template>
  <div
    class="bg-[url(~/assets/images/guitars-background.png)] w-[100vw] h-[100vh] fixed bg-cover bg-center"
  ></div>
  <Navbar></Navbar>
  <h1
    v-if="results"
    class="text-5xl text-white outline-title relative text-center mt-[4vw]"
  >
    results for:
    <span class="text-gray-300">{{ query }}</span>
  </h1>
  <h1
    v-else
    class="text-5xl text-white outline-title relative text-center mt-[4vw]"
  >
    no results for:
    <span class="text-gray-300">{{ query }}</span>
  </h1>
  <div
    class="mx-[10vw] sm:mx-20 mt-[13vw] sm:mt-40 relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[15vw] xl:grid-cols-4"
  >
    <NuxtLink
      v-for="result in results"
      :to="
        result.item.brand
          ? `guitars/${result.item.slug}`
          : `artists/${result.item.slug}`
      "
    >
      <div
        v-if="result.item.brand"
        class="flex justify-center flex-col hover-effect-cards z-10 items-center"
      >
        <div
          class="bg-[#e4e4e4c4] rounded-[25px] w-full z-0 relative h-[300px]"
        >
          <img
            :src="result.item.images.displayImgUrl"
            alt=""
            class="shadow-cards h-[130%] w-full bottom-[32%] relative object-contain"
          />
        </div>
        <div class="py-3 bg-[#232323] rounded-b-[25px] w-[80%]">
          <p class="text-white text-center text-2xl text-wrap">
            {{ result.item.brand }}
            {{ result.item.name }}
          </p>
        </div>
      </div>
      <div
        v-else
        class="flex justify-center flex-col hover-effect-cards z-10 items-center"
      >
        <div
          class="rounded-[25px] w-full z-0 relative h-[300px] bg-cover bg-center"
          :style="`background-image: url(${result.item.images.displayImgUrl})`"
        ></div>
        <div class="py-3 bg-[#232323] rounded-b-[25px] w-[80%]">
          <p class="text-white text-center text-2xl text-wrap">
            {{ result.item.brand }}
            {{ result.item.name }}
          </p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
