<template>
  <div
    :class="{
      'bg-gray-700': darkmode,
      '  bg-gray-200   ': lightmode,
    }"
  >
    <div class="flex justify-center">
      <div class="px-0 sm:px-24 md:px-36 lg:px-48 w-200 max-w-12xl">
        <div
          class="mb-16 duration-300"
          :class="{
            ' text-gray-100 ': darkmode,

            '  text-gray-900 ': lightmode,
          }"
        >
          <div class="mb-20">
            <div class="mb-4 flex justify-between pt-12 p-4">
              <h2 class="text-3xl font-bold">My Proyects</h2>
            </div>
            <div class="text-xl px-4 pb-8">
              <p class="" id="proyects">
                I hope that my projects are a sample of my potential to help you
                with your projects !!! :D
              </p>
              <div class="mt-10 mb-16">
                <div class="flex flex-wrap justify-center">
                  <div
                    v-for="page in pages"
                    :key="page.id"
                    :class="{
                      'bg-gray-600 text-gray-100': darkmode,
                      ' bg-gray-300 text-gray-900': lightmode,
                    }"
                    class="
                      w-72
                      ant:w-80
                      h-auto
                      text-center
                      shadow
                      hover:shadow-2xl
                      hover:-translate-y-5
                      transform
                      duration-300
                    "
                  >
                    <div>
                      <div
                        class="
                          w-full
                          h-full
                          absolute
                          z-20
                          bg-opacity-80
                          transform
                          duration-700
                          flex
                          justify-center
                          items-center
                          opacity-0
                          hover:opacity-100
                        "
                        :class="{
                          'bg-gray-200 ': darkmode,
                          'bg-gray-900 ': lightmode,
                        }"
                      >
                        <a :href="page.link" class="font-bold">
                          <div
                            class="
                              border-4
                              px-4
                              rounded-lg
                              transform
                              duration-300
                            "
                            :class="{
                              'border-gray-800 text-gray-800 hover:border-gray-600 hover:text-gray-600':
                                darkmode,
                              'border-white text-gray-100 hover:border-gray-300 hover:text-gray-300':
                                lightmode,
                            }"
                          >
                            Visit WebSite >
                          </div></a
                        >
                      </div>

                      <div class="">
                        <div class="space-y-2 pt-2">
                          <h3 class="font-bold text-2xl">{{ page.name }}</h3>
                          <div class="h-auto">
                            <img
                              :src="'/img/' + page.image"
                              alt=""
                              class="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
    lightmode: Boolean,
    chancheMode: Function,
    pages: Array,
  },
};
</script>
