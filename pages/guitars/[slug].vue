<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug;

const { data } = await useFetch(`/api/guitars/${slug}`);
const guitar = data.value![0];
</script>

<template>
  <div
    class="bg-[url(~/assets/images/artists-cover-background.png)] w-screen h-screen fixed bg-cover bg-center"
  >
    <div class="mx-20 flex justify-between">
      <img
        class="w-[50%] max-h-[100vh] object-contain"
        :src="guitar.images.coverImgUrl"
        alt=""
      />
      <div
        class="bg-[#e4e4e4bb] rounded-[30px] w-[40%] h-[80vh] mt-[14vh]"
      ></div>
    </div>
  </div>
  <Navbar></Navbar>
</template>
