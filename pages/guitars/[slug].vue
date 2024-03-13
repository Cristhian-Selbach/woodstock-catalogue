<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug;

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
  console.log(stats.value);
}
</script>
<template>
  <div
    class="bg-[url(~/assets/images/guitars-cover-background.png)] h-screen bg-cover bg-center"
  >
    <Navbar></Navbar>
    <div class="mx-20 flex justify-between h-[calc(100%-64px)]">
      <img
        class="bottom-16 relative z-0 h-screen object-contain outline-guitars"
        :src="guitar.images.coverImgUrl"
        alt=""
      />

      <div class="h-full flex items-center">
        <div
          class="w-[40vw] flex flex-col items-center space-y-5 h-fit bg-[#a7a7a780] rounded-[30px] text-white p-12 text-[40px] outline-title-gray"
        >
          <h1 class="text-center text-[3vw]">
            {{ guitar.brand + " " + guitar.name }}
          </h1>

          <div v-if="stats" class="w-full">
            <div v-for="(item, index) in guitar.stats">
              <div class="text-[2.8vw] flex justify-between">
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
          <div v-else class="w-full">
            <p class="text-2xl">{{ guitar.description }}</p>
            <span class="text-2xl">Artists: </span>
            <NuxtLink
              class="text-2xl hover-effect"
              :to="`/artists/${artist.slug}`"
              v-for="artist in guitar.artists"
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
  </div>
</template>

<!-- <template>
  <div
    class="bg-[url(~/assets/images/guitars-cover-background.png)] w-[100vw] h-[100vh] fixed bg-cover bg-center"
  ></div>

  <div class="w-screen bg-cover bg-center relative">
    <div class="mx-20 flex flex-col lg:flex-row lg:justify-between h-screen">
      <img
        class="h-[100vw] lg:h-[95vh] object-contain lg:absolute outline-guitars"
        :src="guitar.images.coverImgUrl"
        alt=""
      />
      <div class="w-1/2"></div>
      <div class="flex items-center h-[calc(100%-64px)] w-[40%] mt-16">
        <div class="bg-[#a7a7a780] rounded-[30px] w-full h-[85%]">
          <div
            class="text-white p-10 text-[40px] outline-title-gray flex flex-col justify-between h-full"
          >
            <h1 class="text-center text-5xl">
              {{ guitar.brand + " " + guitar.name }}
            </h1>

            <div v-if="stats">
              <div v-for="(item, index) in guitar.stats">
                <div class="flex justify-between">
                  <h2>{{ transformString(index) }}</h2>
                  <h2>{{ item }}</h2>
                </div>

                <div
                  class="w-full h-[2.3vh] rounded-full bg-[#e4e4e4e3] mt-[.5vh] mb-[1vh]"
                >
                  <div
                    class="h-full bg-[#0F63AF] rounded-full"
                    :style="`width: ${item * 10}%`"
                  ></div>
                </div>
              </div>
            </div>
            <div v-else>
              <p class="text-2xl">{{ guitar.description }}</p>
              <span class="text-2xl">Artists: </span>
              <NuxtLink
                class="text-2xl hover-effect"
                :to="`/artists/${artist.slug}`"
                v-for="artist in guitar.artists"
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
    </div>
  </div>
  <div class="sticky bottom-[100dvh]">
    <Navbar></Navbar>
  </div>
</template> -->
