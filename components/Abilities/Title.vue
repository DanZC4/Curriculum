<template>
    <!-- Title -->
    <div class="w-full h-[22rem] sm:h-[28rem]">
        <!-- stars -->

        <div class="flex justify-center overflow-hidden">
            <div class="px-0 sm:px-24 md:px-36 lg:px-48 pt-24 ant:pt-36 max-w-12xl 1xl:min-w-[100rem]">

                <h2 class="text-6xl 1xl:text-9xl -mt-10 sm:mt-0 text-black font-bold">S<span
                        class="text-yellow-600">k</span>i<span class="text-gray-500">l</span><span
                        class="text-yellow-600">l</span>s</h2>
                <div class="hidden sm:flex sm:w-[28rem]">
                    <component :is="darkmode ? 'DarthVaderSable' : 'ObiWanSable'" :light_saber="light_saber"
                        @sablerOn="light_saber = !light_saber"></component>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ObiWanSable from './Sables/ObiWanSable.vue';
import DarthVaderSable from './Sables/DarthVaderSable.vue'
export default {
    components: {
        ObiWanSable,
        DarthVaderSable,
    },
    props: {
        darkmode: Boolean,
        light_saber: Boolean
    }
}
</script>