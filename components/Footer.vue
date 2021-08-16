<template>
  <div  class="bg-gray-900 text-gray-100 pb-10 px-12 py-12 sm:pt-24 sm:px-24 ">
    <div class="flex md:space-x-24 md:flex-row flex-col space-y-12 md:space-y-0">
      <div>
        <h2 class="font-bold text-2xl mb-2">Contact Me</h2>
        <ul class="space-y-2">
          <li class="hover:text-gray-300 transition duration-700">
            <a href="">Linkedin</a>
          </li>
          <li class="hover:text-gray-300 transition duration-700">
            <a href="">Github</a>
          </li>
          <li class="hover:text-gray-300 transition duration-700">
            <a href="">daniel@gamehour.app</a>
          </li>
          <li class="hover:text-gray-300 transition duration-700">
            <a href="">551234678</a>
          </li>
        </ul>
      </div>
      <div>
        <h2 class="font-bold text-2xl mb-2">Pages</h2>
        <ul class="space-y-2">
         
          <li>
            <a
              href="#about"
              class="hover:text-gray-300 transition duration-700"
              >About Me</a
            >
          </li>
          <li>
            <a
              href="#proyects"
              class="hover:text-gray-300 transition duration-700"
              >My Proyects</a
            >
          </li>
          <li>
            <a
              href="#contact"
              class="hover:text-gray-300 transition duration-700"
              >Contact Me</a
            >
          </li>
        </ul>
      </div>
      <div>
        <div>
          <h2 class="font-bold text-2xl mb-2">Dark Mode</h2>
          <button
          :class="{'bg-white text-gray-900 border-white':darkmode, 'bg-gray-800 text-gray-100 border-gray-800 ': lightmode}"
            class="
              font-bold
              border-4  py-1 px-4 rounded
            "
            @click="chancheMode()"
           
          >
            <span  v-if="darkmode == true">Dark</span>
                <span v-else>Ligth</span>
          </button>
        </div>
        <div class="hidden">
          <h2 class="font-bold text-2xl mb-2">Ligth Mode</h2>
          <button
            class="
              border-4 border-black
              py-1
              px-4
              rounded
              text-gray-100
              bg-gray-900
              font-bold
            "
          >
            Ligth
          </button>
        </div>
      </div>
    </div>
    <div class="pt-10 text-center">
      <h5>&copy; 2021 Daniel Zambrano Camarena</h5>
    </div>
  </div>
</template>
<script>
export default{
  props:{
    darkmode: Boolean,
    lightmode: Boolean,
    chancheMode: Function
  }
}
</script>
