<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug;

const viewport = useViewport();

const { data } = await useFetch(`/api/artists/${slug}`);
const artist = data.value![0];
const guitars = artist.guitars;
</script>

<template>
  <div
    class="bg-[url(~/assets/images/artists-cover-background.png)] w-[100vw] h-[100vh] fixed bg-cover bg-center"
  ></div>
  <Navbar></Navbar>
  <div
    v-if="!viewport.isLessThan('desktop')"
    class="mx-20 xl:mx-72 flex justify-between items-center h-[calc(100dvh-64px)] relative"
  >
    <img
      :src="artist.images.coverImgUrl"
      class="w-1/3 h-3/4 object-cover rounded-[32px] mr-[6vw] hover-effect-cards"
    />
    <div
      class="flex flex-col overflow-clip w-full h-3/4 bg-[#e4e4e456] rounded-[32px] backdrop-blur-sm text-white p-8 pt-3 outline-brown"
    >
      <div>
        <h1 class="text-center text-[40px] outline-title">{{ artist.name }}</h1>
        <p class="text-2xl">{{ artist.description }}</p>
      </div>

      <div class="flex flex-col h-full">
        <h1 class="text-center text-[40px] outline-title">Main Guitars</h1>
        <div class="flex h-full space-x-[2.5vw]">
          <Nuxt-Link
            v-for="guitar in guitars"
            :to="`/guitars/${guitar.slug}`"
            class="w-1/3 h-full bg-[#e4e4e456] rounded-[32px] flex justify-center bg-contain bg-no-repeat bg-center hover-effect-cards"
            :style="`background-image: url(${guitar.images.coverImgUrl})`"
          ></Nuxt-Link>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="flex flex-col relative mx-[5vw]">
    <img
      :src="artist.images.coverImgUrl"
      class="mt-10 h-[60dvh] object-cover rounded-[32px] hover-effect-cards"
    />
    <div
      class="p-7 my-10 flex flex-col bg-[#e4e4e456] rounded-[32px] backdrop-blur-sm text-white"
    >
      <h1 class="text-center text-[40px] outline-title">{{ artist.name }}</h1>
      <p class="text-justify text-2xl outline-title">
        {{ artist.description }}
      </p>
      <h1 class="text-center text-[40px] outline-title">Main guitars:</h1>
      <div class="flex flex-col space-y-6">
        <Nuxt-Link
          v-for="guitar in guitars"
          :to="`/guitars/${guitar.slug}`"
          class="w-full h-[80vw] bg-[#e4e4e456] rounded-[16px] flex justify-center bg-contain bg-no-repeat bg-center hover-effect-cards"
          :style="`background-image: url(${guitar.images.coverImgUrl})`"
        ></Nuxt-Link>
      </div>
    </div>
  </div>
</template>
