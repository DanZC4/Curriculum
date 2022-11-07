<template>
  <div class="flex justify-center overflow-hidden">
    <div class="px-0 sm:px-24 md:px-36 lg:px-48 pt-24 ant:pt-36 max-w-12xl">
      <div class=" text-gray-900 ant:border-b-2 border-gray-800">
        <nav class="text-xl font-bold flex w-full justify-center sm:justify-end">
          <ul class="ant:flex space-x-2 py-2.5 hidden">

            <li>
              <a href="#about" v-scroll-to="'#about'" class="p-2 hover:text-gray-700 transition duration-300">My
                Proyects</a>
            </li>
            <li>
              <a href="#proyects" v-scroll-to="'#proyects'"
                class="p-2 hover:text-gray-700 transition duration-300">Abilities</a>
            </li>
            <li>
              <a href="#contact" v-scroll-to="'#contact'"
                class="p-2 hover:text-gray-700 transition duration-300">Contact Me</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="flex flex-col items-center mb-8 sm:pt-16">
        <kunai></kunai>
        <h2 class="p-4 font-bold text-4xl">Ninja Web Develoment</h2>
      </div>
      <div class="p-4 duration-300 " >
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

import kunai from './Icons/Kunai.vue'

export default {
  components: {
    kunai
  },
  props: {
    darkmode: Boolean,
  },
};
</script>
