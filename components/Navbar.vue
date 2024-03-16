<script lang="ts" setup>
const btn = ref<HTMLElement | null>(null);
const nav = ref<HTMLElement | null>(null);
function toggle() {
  if (btn.value && nav.value) {
    btn.value.classList.toggle("open");
    nav.value.classList.toggle("flex");
    nav.value.classList.toggle("hidden");
  }
}
</script>

<template>
  <div
    class="z-10 relative w-100 flex items-center bg-[#88888878] h-16 rounded-b-[26px] backdrop-blur-sm"
  >
    <div
      class="w-dvw sm:mx-20 xl:mx-52 mx-[10vw] flex items-center justify-between"
    >
      <Nuxt-Link to="/">
        <img
          src="../assets/images/logo.png"
          alt=""
          class="w-44 object-contain cursor-pointer select-none"
        />
      </Nuxt-Link>

      <div
        class="text-[28px] space-x-24 text-white outline-brown hidden md:inline-block"
      >
        <Nuxt-Link class="hover-effect" to="/artists">Artists</Nuxt-Link>
        <Nuxt-Link class="hover-effect" to="/brands">Brands</Nuxt-Link>
        <Nuxt-Link class="hover-effect" to="/models">Models</Nuxt-Link>
        <Nuxt-Link class="hover-effect" to="/about">About</Nuxt-Link>
      </div>

      <button
        ref="btn"
        @click="toggle"
        class="block hamburger md:hidden focus:outline-none mt-1"
      >
        <span class="hamburger-top"></span>
        <span class="hamburger-middle"></span>
        <span class="hamburger-bottom"></span>
      </button>
    </div>
  </div>

  <div class="md:hidden">
    <div
      ref="nav"
      class="absolute text-white text-[28px] outline-brown z-20 flex-col items-center hidden self-end py-8 space-y-6 bg-[#35353578] backdrop-blur-md rounded-b-[26px] sm:w-auto sm:self-center left-6 right-6"
    >
      <Nuxt-Link class="hover-effect" to="/artists">Artists</Nuxt-Link>
      <Nuxt-Link class="hover-effect" to="/brands">Brands</Nuxt-Link>
      <Nuxt-Link class="hover-effect" to="/models">Models</Nuxt-Link>
      <Nuxt-Link class="hover-effect" to="/about">About</Nuxt-Link>
    </div>
  </div>
</template>

<style scoped>
.hamburger {
  cursor: pointer;
  width: 32px;
  height: 24px;
  transition: all 0.25s;
  position: relative;
}
.hamburger-top,
.hamburger-middle,
.hamburger-bottom {
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 4px;
  background-color: #ffffff;
  transform: rotate(0);
  transition: all 0.5s;
  border-radius: 100px;
}
.hamburger-middle {
  transform: translateY(7px);
}
.hamburger-bottom {
  transform: translateY(14px);
}
.open {
  transform: rotate(90deg);
  transform: translateY(0px);
}
.open .hamburger-top {
  transform: rotate(45deg) translateY(6px) translate(6px);
}
.open .hamburger-middle {
  display: none;
}
.open .hamburger-bottom {
  transform: rotate(-45deg) translateY(6px) translate(-6px);
}
</style>
