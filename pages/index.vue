<template>
  <div
    class="bg-[url(~/assets/images/hero-image.png)] w-100 h-screen bg-cover bg-left"
  >
    <Navbar></Navbar>
    <div
      class="md:mx-20 justify-center md:justify-normal mt-[10vh] sm:mt-0 sm:h-[calc(100%-64px)] flex items-center"
    >
      <div
        class="flex flex-col items-center justify-between py-11 sm:w-[530px] sm:h-[310px] w-[90vw] h-[40vh] bg-[#b9b9b978] backdrop-blur-sm rounded-[28px]"
      >
        <h1 class="text-white sm:text-6xl text-[55px] outline-title h-fit">
          Guitar Catalogue
        </h1>

        <div
          class="flex items-center justify-between sm:w-[400px] w-[75vw] h-11 rounded-full bg-[#e4e4e4bb] sm:px-5 px-3 text-[28px]"
        >
          <input
            class="bg-transparent w-full outline-none flex h-10 self-end placeholder-gray-500"
            type="text"
            placeholder="brand, model, shape, artist..."
          />
          <i
            class="sm:text-[28px] text-[20px] fa-solid fa-magnifying-glass text-gray-500"
          ></i>
        </div>

        <button
          class="flex items-center justify-center sm:mt-0 mt-5 w-[160px] h-11 bg-[#0F63AF] border-2 border-[#0F63AF] rounded-full text-white text-3xl hover-effect"
        >
          search
        </button>
      </div>
    </div>
  </div>
</template>
