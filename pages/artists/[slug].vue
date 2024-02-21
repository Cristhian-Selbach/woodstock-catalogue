<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug;

const { data } = await useFetch(`/api/artists/${slug}`);
const artist = data.value![0];
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
      class="w-full h-3/4 bg-[#e4e4e456] rounded-[32px] backdrop-blur-sm text-white p-4 outline-brown"
    >
      <div class="h-1/2">
        <h1>{{ artist.name }}</h1>
        <p>{{ artist.description }}</p>
      </div>
    </div>
  </div>
</template>
