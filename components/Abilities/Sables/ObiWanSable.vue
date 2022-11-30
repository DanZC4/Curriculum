<template>
    <div class="h-6 flex items-center ">
        <!-- 18 +  -->
        <!-- part 1 -->

        <div class="flex items-center">

            <div class="h-3.5 w-0.5 bg-gray-900  "></div>

            <div class="h-4 w-3 bg-gray-400 rounded-[1px] flex justify-between flex-col items-center">
                <div class="h-1.5 w-1.5 bg-gray-500 rounded-[1px] -mt-0.5"></div>
                <div class="h-1.5 w-1.5 bg-gray-500 rounded-[1px]"></div>
                <div class="h-1.5 w-1.5 bg-gray-500 rounded-[1px] -mb-0.5"></div>
            </div>

            <div class="h-3.5 w-0.5 bg-gray-900  "></div>
        </div>

        <!-- part 2 -->
        <div class="flex items-center"></div>

        <div class="h-4 w-3.5 bg-gray-800 flex flex-col justify-between">
            <div class="h-0.5 w-full bg-gray-900"></div>
            <div class="h-0.5 w-full bg-gray-900"></div>
            <div class="h-0.5 w-full bg-gray-900"></div>
            <div class="h-0.5 w-full bg-gray-900"></div>
            <div class="h-0.5 w-full bg-gray-900"></div>
        </div>

        <!-- part 3 -->
        <div class="flex items-center">
            <div class="h-4 w-5 bg-gray-400 ">
                <button @click="$emit('sablerOn')" class="h-2 w-5 bg-gray-500 -mb-0.5">
                    <div class="h-1 w-4 bg-amber-400"></div>
                </button>
            </div>

            <div class="h-4 w-0.5 bg-gray-400 "></div>
        </div>


        <!-- part 4 -->
        <div class="flex items-center">
            <div class="h-4 w-1 bg-gray-900 rounded-t-[1px]"></div>

            <div class="h-3 w-0.5 bg-gray-800"></div>
            <div class="h-4 w-1 bg-gray-900 rounded-[1px]"></div>

            <div class="h-3 w-0.5 bg-gray-800"></div>

            <div class="h-4 w-1 bg-gray-900 rounded-[1px]"></div>

            <div class="h-3 w-0.5 bg-gray-800"></div>

            <div class="h-4 w-1 bg-gray-900 rounded-[1px]"></div>

            <div class="h-3 w-0.5 bg-gray-800"></div>

            <div class="h-4 w-1 bg-gray-900 rounded-t-lg"></div>

        </div>

        <!-- part 5 -->
        <div class="flex items-center">
            <div class="h-2 w-2 bg-amber-400"></div>

            <div class="h-4 w-1.5 bg-amber-400 rounded-[1px]"></div>

            <div class="h-2 w-2 bg-yellow-600"></div>

            <div class="h-3 w-1.5 bg-gray-400"></div>

            <div class="h-4 w-2 bg-gray-400"></div>

            <div class="h-5 w-1 bg-gray-400"></div>

            <div class="h-6 w-1 bg-gray-400 rounded-lg"></div>
        </div>



        <!-- hoja del sable -->

        <div class=" rounded-r-full h-2.5 bg-green-200 border-y-4 border-r-4 duration-150 border-green-500 shadow-green-400 shadow "
            :class="light_saber ? 'w-80' : 'w-0 opacity-0'"></div>

    </div>
</template>

<script>
export default {
    props : {
        light_saber: Boolean,
    }
}
</script>