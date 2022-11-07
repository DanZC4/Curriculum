<template>
  <div  class="bg-gray-900 text-gray-100 pb-10 px-12 py-12 sm:pt-24 sm:px-24 ">
    <div class="flex md:space-x-24 md:flex-row flex-col space-y-12 md:space-y-0">
      <div>
        <h2 class="font-bold text-2xl mb-2">Contact Me</h2>
        <ul class="space-y-2">
          <li class="hover:text-gray-300 transition duration-700">
            <a href="https://www.linkedin.com/in/daniel-zambrano-840062216/">Linkedin</a>
          </li>
          <li class="hover:text-gray-300 transition duration-700">
            <a href="https://github.com/DanZC4">Github</a>
          </li>
          <li class="hover:text-gray-300 transition duration-700">
            <a href="mailto:daniel@gamehour.app? subject = Feedback&body = Hello Mr. Daniel">daniel@gamehour.app</a>
          </li>
          <li class="hover:text-gray-300 transition duration-700">
            <a href="https://api.whatsapp.com/send?phone=5532478092&text=Hello,%20How%20are%20you?">5532478092</a>
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
            class="
              font-bold
              bg-gray-800 text-gray-100 border-gray-800 
              border-4  py-1 px-4 rounded
            "
            @click=""
           
          >
            <span>Dark</span>
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
  }
}
</script>
