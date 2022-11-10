<template>
    <div>
        <div class="flex translate-x-[5rem] translate-y-[5rem]">
            <div class=" transform duration-300 absolute z-0 rotate-0"
                :class="kunai ? '-translate-x-[31rem] translate-y-[31rem]' : ''">
                <img src="~/static/img/kunai.svg" alt="" width="80" height="80">
            </div>
            <div class=" transform duration-300 absolute z-0 rotate-90"
                :class="kunai ? '-translate-x-[20rem] -translate-y-[20rem]' : ''">
                <img src="~/static/img/kunai.svg" alt="" width="80" height="80">
            </div>
            <div class=" transform duration-300 absolute z-0"
                :class="kunai ? '-translate-x-[36rem] -translate-y-[19rem] rotate-[336deg]' : ''">
                <img src="~/static/img/shuriken.svg" alt="" width="60" height="60">
            </div>
            <div class=" transform duration-300 absolute z-0 rotate-[135deg]"
                :class="kunai ? '-translate-y-[19rem]' : ''">
                <img src="~/static/img/kunai.svg" alt="" width="80" height="80">
            </div>
            <div class=" transform duration-300 absolute z-0 rotate-[190deg]"
                :class="kunai ? 'translate-x-[27rem] -translate-y-[19rem]' : ''">
                <img src="~/static/img/kunai.svg" alt="" width="80" height="80">
            </div>
            <div class=" transform duration-300 absolute z-0 -rotate-[90deg]"
                :class="kunai ? 'translate-x-[36.5rem] translate-y-[31.5rem]' : ''">
                <img src="~/static/img/kunai.svg" alt="" width="80" height="80">
            </div>
            <div class=" transform duration-300 absolute z-0 -rotate-[70deg]"
                :class="kunai ? 'translate-x-[19rem] translate-y-[30.5rem]' : ''">
                <img src="~/static/img/kunai.svg" alt="" width="80" height="80">
            </div>

        </div>
        <div class="w-60 h-60 rounded-full overflow-hidden m-auto shadow-lg" v-on:mouseover="kunai = true">
            <div
                class="before:content-[''] before:w-60 before:h-60   before:rounded-full before:z-30   before:bg-gray-600/25 before:absolute ">
                <img src="~/static/img/Daniel.jpg" alt="" class="
              h-full
              w-full
              transform

              object-cover
              z-20
            " />
            </div>

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            kunai: false
        }
    }

}
</script>
