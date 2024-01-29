<template>
  <div
    class="bg-[url(~/assets/images/hero-image.png)] w-100 h-screen bg-cover bg-left"
  >
    <Navbar></Navbar>
    <div class="mx-20 h-[calc(100%-64px)] flex items-center">
      <div
        class="flex flex-col items-center justify-between py-11 w-[530px] h-[310px] bg-[#b9b9b978] backdrop-blur-sm rounded-[28px]"
      >
        <h1 class="text-white text-6xl outline-title">Guitar Catalogue</h1>

        <div
          class="flex items-center justify-between w-[400px] h-11 rounded-full bg-[#e4e4e4bb] px-5 text-[28px]"
        >
          <input
            class="bg-transparent w-full outline-none flex h-10 self-end placeholder-gray-500"
            type="text"
            placeholder="brand, model, shape, artist..."
          />
          <i class="fa-solid fa-magnifying-glass text-gray-500"></i>
        </div>

        <button
          class="flex items-center justify-center w-[160px] h-11 bg-[#0F63AF] border-2 border-[#0F63AF] rounded-full text-white text-3xl hover:text-[#0F63AF] transition-all duration-300 hover:bg-transparent"
        >
          search
        </button>
      </div>
    </div>
  </div>
</template>
