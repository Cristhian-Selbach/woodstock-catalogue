<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <div
    class="bg-[url(~/assets/images/hero-image.png)] w-100 h-screen bg-cover bg-left"
  >
    <Navbar></Navbar>
    <div
      class="md:mx-20 justify-center md:justify-normal mt-[10vh] sm:mt-0 sm:h-[calc(100%-64px)] flex items-center"
    >
      <div
        class="p-10 space-y-5 text-white flex flex-col items-center justify-between py-11 sm:w-[530px] w-[90vw] bg-[#b9b9b978] backdrop-blur-sm rounded-[28px]"
      >
        <h1 class="sm:text-6xl text-[55px] outline-title h-fit text-nowrap">
          404. Page not found
        </h1>
        <p class="text-3xl outline-text-brown">
           the page you are looking for cannot be found on our server:
          {{ route.fullPath }}
        </p>

        <NuxtLink
          to="/"
          class="flex sm:mt-0 mt-5 w-[160px] h-11 bg-[#0F63AF] border-2 border-[#0F63AF] rounded-full hover-effect text-center"
        >
          <p class="text-3xl leading-[45px]">Back</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
