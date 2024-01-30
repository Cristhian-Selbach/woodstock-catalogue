<template>
  <div
    class="w-100 flex items-center bg-[#88888878] h-16 rounded-b-[26px] backdrop-blur-sm"
  >
    <div class="w-dvw mx-20 flex items-center justify-between">
      <img
        src="../assets/images/logo.png"
        alt=""
        class="w-44 object-contain cursor-pointer"
      />

      <div class="text-[28px] space-x-24 text-white outline-brown inline-block">
        <Nuxt-Link class="hover-effect" to="/artists">Artists</Nuxt-Link>
        <Nuxt-Link class="hover-effect" to="/brands">Brands</Nuxt-Link>
        <Nuxt-Link class="hover-effect" to="/models">Models</Nuxt-Link>
        <Nuxt-Link class="hover-effect" to="/about">About</Nuxt-Link>
      </div>
    </div>
  </div>
</template>
