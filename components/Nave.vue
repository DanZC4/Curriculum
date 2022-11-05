<template>
  <div class="shadow fixed w-full z-20" >
    <div>
      <div class="  flex bg-gray-900 justify-center sm:justify-start ">
        <h1 class=" hidden ant:flex text-gray-100 font-bold text-2xl px-6 py-2">
          DANIEL ZAMBRANO CAMARENA
        </h1>
         <h1 class="ant:hidden text-gray-100 font-bold text-2xl px-6 py-2">
          DZC
        </h1>
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

