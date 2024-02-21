<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug;

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
    class="mx-20 flex justify-between items-center h-[calc(100dvh-64px)] relative"
  >
    <img
      :src="artist.images.coverImgUrl"
      class="w-1/3 h-3/4 object-cover rounded-[32px] mr-[6vw]"
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

        <div
          v-for="guitar in guitars"
          class="w-1/3 h-full bg-[#e4e4e456] rounded-[32px] flex justify-center"
        >
          <img :src="guitar.images.coverImgUrl" class="" />
        </div>
      </div>
    </div>
  </div>
</template>
