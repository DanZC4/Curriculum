<template>
  <div class="flex justify-center">
    <div class="px-0 sm:px-24 md:px-36 lg:px-48 pt-24 ant:pt-26 max-w-12xl">
      <div
        class="p-4 mb-16 duration-300 text-center text-gray-100"
      >
        <div class="mb-20">
          <div class="mb-10 flex justify-between ant:pt-12 sm:pt-0">
            <h2 class="text-3xl font-bold">My Abilities</h2>
          </div>
          <div>
            <div>
              <div>
                <div class="flex flex-wrap justify-center">
                  <div
                    v-for="tecnology in tecnologies"
                    :key="tecnology.id"
                    class="m-6 ant:m-10 "
                  >
                    <div
                      :class="tecnology.color"
                      class="
                        w-24
                        h-24
                        ant:w-32
                        ant:h-32
                        flex
                        justify-center
                        items-center
                        rounded-lg
                        text-2xl
                        font-bold
                        transform
                        duration-300
                        hover:rotate-6
                      "
                    >
                      {{ tecnology.name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="contact"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    darkmode: Boolean,
    tecnologies: Array,
  },
};
</script>
