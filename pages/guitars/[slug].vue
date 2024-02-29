<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug;

const { data } = await useFetch(`/api/guitars/${slug}`);
const guitar = data.value![0];

function transformString(str: string): string {
  const chars: string[] = str.split("");

  chars.forEach((char, index) => {
    if (char === char.toUpperCase()) {
      chars[index] = "-" + char.toLocaleLowerCase();
    }
  });

  return chars.join("");
}
</script>

<template>
  <div
    class="bg-[url(~/assets/images/guitars-cover-background.png)] w-screen h-screen fixed bg-cover bg-center"
  >
    <div class="mx-20 flex justify-between h-screen">
      <img
        class="h-[95vh] object-contain absolute outline-guitars"
        :src="guitar.images.coverImgUrl"
        alt=""
      />
      <div class="w-1/2"></div>
      <div class="flex items-center h-[calc(100%-64px)] w-[40%] mt-16">
        <div class="bg-[#a7a7a780] rounded-[30px] w-full h-[80%]">
          <div
            class="text-white p-10 text-[40px] outline-title-gray flex flex-col justify-between h-full"
          >
            <h1 class="text-center text-5xl">
              {{ guitar.brand + " " + guitar.name }}
            </h1>

            <div>
              <div v-for="(item, index) in guitar.stats">
                <div class="flex justify-between">
                  <h2>{{ transformString(index) }}</h2>
                  <h2>{{ item }}</h2>
                </div>

                <div class="w-full h-5 rounded-full bg-[#e4e4e4e3] mt-1 mb-4">
                  <div
                    class="h-full bg-[#0F63AF] rounded-full"
                    :style="`width: ${item * 10}%`"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Navbar></Navbar>
</template>
