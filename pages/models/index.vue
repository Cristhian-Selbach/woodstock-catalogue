<script lang="ts" setup>
const { data } = await useFetch(`/api/models`);
const models = data.value!;
</script>
<template>
  <div
    class="bg-[url(~/assets/images/artists-background.png)] w-[100vw] h-[100vh] fixed bg-cover bg-center"
  ></div>
  <div
    class="bg-[url(~/assets/images/artists-background.png)] bg-cover bg-center bg-fixed"
  >
    <Navbar></Navbar>

    <div
      class="mx-[10vw] xl:mx-52 sm:mx-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-16 sm:gap-[10vw] xl:gap-[5vw] mt-12 md:mt-32 relative"
    >
      <Nuxt-Link
        :to="`models/${model.slug}`"
        v-for="model in models"
        class="h-[450px] bg-cover bg-center flex justify-center items-end text-white rounded-[45px] outline-cards hover-effect-cards"
        :style="`background-image: url(${model.imgUrl})`"
      >
        <h1 class="text-[50px] outline-title-gray">
          {{ model.name }}
        </h1>
      </Nuxt-Link>
    </div>
  </div>
</template>
