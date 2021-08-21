<template>
  <div class="flex justify-center">
    <div class="px-0 sm:px-24 md:px-36 lg:px-48 pt-24 ant:pt-36 max-w-12xl">
      <div class="flex flex-col items-center mb-8 sm:pt-36">
        <div class="w-60 h-60 border-black rounded-full overflow-hidden">
          <img
            src="../static/img/daniel.jpg"
            alt=""
            class="
              h-full
              w-full
              transform
              hover:scale-110
              duration-200
              object-cover
            "
          />
        </div>
        <h2 class="p-4 font-bold text-3xl">Web Develoment Jr</h2>
      </div>
      <div
        class="p-4 duration-300"
        :class="{
          ' text-gray-900': darkmode,
          ' text-gray-100': lightmode,
        }"
      >
        <div class="mb-16 ant:mb-36">
          <div class="mb-2 flex justify-between">
            <h2 class="text-3xl font-bold">Who I am?</h2>
          </div>
          <div class="text-xl">
            <div class="">
              <p class="" id="about">
                Hello, My name is Daniel and I am a web Developer ,I have been
                self-taught since I started programming, I currently have one
                year of work experience, I have knowledge of javascript, php,
                vue, laravel, mysql, html, css, boostrap, tailwind, nuxtjs, git,
                gitlab, json, graphql, octobercms and node js
              </p>
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
  },
};
</script>
