<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug;

const viewport = useViewport();

const { data } = await useFetch(`/api/guitars/${slug}`);
const guitar = data.value!;

function transformString(str: string): string {
  const chars: string[] = str.split("");

  chars.forEach((char, index) => {
    if (char === char.toUpperCase()) {
      chars[index] = "-" + char.toLocaleLowerCase();
    }
  });

  return chars.join("");
}

let stats = ref(true);

function changeStats() {
  stats.value = !stats.value;
}
</script>
<template>
  <div
    class="bg-[url(~/assets/images/guitars-cover-background.png)] h-screen bg-cover bg-center bg-fixed"
  >
    <Navbar></Navbar>
    <!-- DESKTOP SCREEN -->
    <div
      v-if="!viewport.isLessThan('desktop')"
      class="mx-32 xl:mx-80 flex justify-between h-[calc(100%-64px)]"
    >
      <img
        class="bottom-12 absolute z-0 h-[97vh] xl:h-[105vh] xl:bottom-4 object-contain outline-guitars"
        :src="guitar.images.coverImgUrl"
        alt=""
      />
      <div></div>

      <div class="h-full relative z-[10] flex items-center">
        <div
          class="w-[480px] flex flex-col items-center space-y-5 h-fit bg-[#a7a7a780] rounded-[30px] text-white p-12 text-[40px] outline-title-gray"
        >
          <h1 class="text-center text-5xl leading-10">
            {{ guitar.brand + " " + guitar.name }}
          </h1>

          <div v-if="stats" class="w-full">
            <div v-for="(item, index) in guitar.stats">
              <div class="text-[42px] flex justify-between">
                <h2>{{ transformString(index) }}</h2>
                <h2>{{ item }}</h2>
              </div>

              <div
                class="h-[2.3vh] rounded-full bg-[#e4e4e4e3] mt-[.5vh] mb-[1vh]"
              >
                <div
                  class="h-full bg-[#0F63AF] rounded-full"
                  :style="`width: ${item * 10}%`"
                ></div>
              </div>
            </div>
          </div>
          <div v-else class="w-full text-2xl">
            <p>{{ guitar.description }}</p>
            <span>Artists: </span>
            <NuxtLink
              class="hover-effect"
              v-for="artist in guitar.artists"
              :to="`/artists/${artist.slug}`"
            >
              {{ artist.name }}, &nbsp;
            </NuxtLink>
          </div>

          <div class="flex justify-center">
            <button
              @click="changeStats"
              class="flex items-center justify-center w-[160px] h-11 bg-[#0F63AF] border-2 border-[#0F63AF] rounded-full text-white text-3xl hover-effect"
            >
              <p v-if="stats">see more</p>
              <p v-else>see stats</p>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- MOBILE SCREEN -->
    <div v-else>
      <div
        class="bg-[url(~/assets/images/guitars-cover-background.png)] translate-y-[-4rem] w-screen h-screen fixed bg-cover bg-center"
      ></div>

      <div class="flex flex-col w-screen items-center">
        <img
          class="h-[130vw] translate-y-[-4rem] object-contain outline-guitars absolute z-[5]"
          :src="guitar.images.coverImgUrl"
          alt=""
        />
        <div
          class="mt-6 relative bg-[#88888878] h-[110vw] w-[80vw] rounded-[26px] backdrop-blur-sm"
        ></div>

        <div
          class="p-10 outline-gray-mobile text-white my-6 relative bg-[#88888878] w-[80vw] rounded-[26px] backdrop-blur-sm"
        >
          <h1 class="text-center text-5xl leading-10">
            {{ guitar.brand + " " + guitar.name }}
          </h1>

          <div v-if="stats" class="w-full">
            <div v-for="(item, index) in guitar.stats">
              <div class="text-[42px] flex justify-between">
                <h2>{{ transformString(index) }}</h2>
                <h2>{{ item }}</h2>
              </div>

              <div
                class="h-[2.3vh] rounded-full bg-[#e4e4e4e3] mt-[.5vh] mb-[1vh]"
              >
                <div
                  class="h-full bg-[#0F63AF] rounded-full"
                  :style="`width: ${item * 10}%`"
                ></div>
              </div>
            </div>
          </div>
          <div v-else class="w-full mt-8 text-xl text-justify">
            <p>{{ guitar.description }}</p>
            <span>Artists: </span>
            <NuxtLink
              class="hover-effect"
              v-for="artist in guitar.artists"
              :to="`/artists/${artist.slug}`"
            >
              {{ artist.name }}, &nbsp;
            </NuxtLink>
          </div>
          <div class="flex justify-center mt-8">
            <button
              @click="changeStats"
              class="flex items-center justify-center w-[160px] h-11 bg-[#0F63AF] border-2 border-[#0F63AF] rounded-full text-white text-3xl hover-effect"
            >
              <p v-if="stats">see more</p>
              <p v-else>see stats</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
