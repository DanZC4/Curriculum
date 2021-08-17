<template>
  <div class="shadow fixed w-full z-20" >
    <div>
      <div class="  flex bg-gray-900 justify-center sm:justify-start ">
        <h1 class=" hidden ant:flex text-gray-100 font-bold text-2xl px-6 py-2 dzc">
          DANIEL ZAMBRANO CAMARENA
        </h1>
         <h1 class="ant:hidden text-gray-100 font-bold text-2xl px-6 py-2">
          DZC
        </h1>
      </div>
      <div class="" :class="{'bg-white text-gray-900':darkmode, 'bg-gray-800  text-gray-100':lightmode}">
        <nav class="text-xl font-bold flex w-full justify-center sm:justify-end">
          <ul class="ant:flex space-x-2 px-6 py-2.5 hidden">
            
            <li>
              <a
                v-scroll-to="'#about'"
                class="p-2 hover:text-gray-400 transition duration-700"
                >My Proyects</a
              >
            </li>
             <li>
              <a
                v-scroll-to="'#proyects'"
                class="p-2 hover:text-gray-400 transition duration-700"
                >Why hire me?</a
              >
            </li>
            <li>
              <a
                v-scroll-to="'#contact'"
                class="p-2 hover:text-gray-400 transition duration-700"
                >Contact Me</a
              >
            </li>
          </ul>
        </nav>
      </div>
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

<style>
.dzc {
  animation-duration: 3s;
  animation-name: slidein;
}
@keyframes slidein {
  from {
    margin-left: 25%;
  }

  75% {
   
    margin-left: 0%;

  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
</style>
