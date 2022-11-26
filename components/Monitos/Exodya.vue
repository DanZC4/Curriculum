<template>
    <div class="w-full absolute -translate-y-[14rem] overflow-x-hidden">
        <div class=" ">
            <div class=" w-52 h-auto mx-auto">
                <!-- head -->
                <div class="levitato">
                    <div class="flex flex-col items-center ">
                        <!-- hat -->
                        <div class="translate-y-5 z-20">
                            <div class="translate-y-[2.15rem] translate-x-[3.825rem]">
                                <div class="flex z-10">
                                    <!-- <div class="w-0.5 h-4 bg-red-600"></div> -->
                                    <div class="w-0.5 h-4 bg-red-600 rotate-[12deg] translate-x-1"></div>
                                    <div class="w-0.5 h-4 bg-red-600 -rotate-[16deg] "></div>
                                    <div class="w-0.5 h-4 bg-red-600 rotate-[18deg] translate-x-[0.10rem]"></div>
                                    <div class="w-0.5 h-4 bg-red-600 -rotate-[10deg] -translate-x-[0.35rem]"></div>
                                    <div class="w-0.5 h-4 bg-red-600 -rotate-[20deg] -translate-x-[0.65rem]"></div>
                                </div>

                                <div class="w-1.5 h-auto  z-20 -translate-y-[0.05rem]">
                                    <div class="w-full h-0.5 bg-gray-600"></div>
                                    <div class="w-full h-0.5 bg-gray-400"></div>
                                    <div class="w-full h-0.5 bg-gray-600"></div>
                                    <div class="w-full h-0.5 bg-gray-400"></div>
                                    <div class="w-full h-0.5 bg-gray-900"></div>
                                </div>
                            </div>
                            <div class="w-0 h-0 border-t-[2rem] border-t-transparent border-x-[4rem] border-x-transparent border-b-[2rem] "
                                :class="darkmode ? 'border-b-gray-800' : 'border-b-gray-700'">
                            </div>
                            <div class="w-full h-1.5  -translate-y-0.5 rounded-xl"
                                :class="darkmode ? 'bg-black' : 'bg-gray-900'"></div>
                        </div>
                        <!-- face -->
                        <div class="w-12 h-14 rounded-full  flex items-center border-b-2  border-gray-800 z-10"
                            :class="darkmode ? 'bg-gray-500 border-gray-900' : 'bg-gray-400 border-gray-800'"
                            @click="toBlink">
                            <div class="w-[3.25rem] h-2  -mt-1 absolute rounded-sm -ml-0.5 z-20 "
                                :class="darkmode ? 'bg-gray-900' : 'bg-gray-800'">
                                <!-- bandas detras de la cabesa -->
                                <div
                                    class="translate-x-[3rem] absolute rotate-[25deg] translate-y-4 translate-x-[2.8rem]">
                                    <div class="w-12 h-2  skew-x-[25deg] "
                                        :class="darkmode ? 'bg-gray-900' : 'bg-gray-800'"></div>
                                    <div class="w-12 h-2  skew-x-[25deg] rotate-12"
                                        :class="darkmode ? 'bg-gray-900' : 'bg-gray-800'"></div>
                                </div>
                                <!-- Glases -->
                                <div class="flex space-x-1 -mt-0.5 ml-1">
                                    <div class="w-5 h-3.5  border-2  rounded-tl rounded-br rounded-tr-lg rounded-bl-lg "
                                        :class="darkmode ? blink ? 'bg-gray-900 border-gray-900' : 'bg-gray-50 border-black' : blink ? 'bg-gray-800 border-gray-800' : 'bg-gray-50 border-gray-900'">
                                    </div>
                                    <div class="w-5 h-3.5  border-2  rounded-tr rounded-bl rounded-tl-lg rounded-br-lg "
                                        :class="darkmode ? blink ? 'bg-gray-900 border-gray-900' : 'bg-gray-50 border-black' : blink ? 'bg-gray-800 border-gray-800' : 'bg-gray-50 border-gray-900'">
                                    </div>
                                </div>


                            </div>
                            <!-- barbilla -->
                            <div class="w-3 h-1.5 rounded-t-xl transform translate-y-[1.55rem] translate-x-[1.15rem]  absolute"
                                :class="darkmode ? 'bg-gray-900' : 'bg-gray-800'">
                                <div class="absolute w-[1.40rem] h-1  translate-x-[0.55rem] -translate-y-[0.20rem] transform rotate-[150deg] "
                                    :class="darkmode ? 'bg-gray-900' : 'bg-gray-800'">
                                    <div class="absolute w-1 h-[1.40rem]  rotate-[30deg] -translate-x-[0.40rem]"
                                        :class="darkmode ? 'bg-gray-900' : 'bg-gray-800'">
                                    </div>
                                </div>

                                <div class="absolute w-[1.40rem] h-1  -translate-x-[1.25rem] -translate-y-[0.20rem] transform -rotate-[150deg]"
                                    :class="darkmode ? 'bg-gray-900' : 'bg-gray-800'">
                                    <div class="absolute w-1 h-[1.40rem] -rotate-[30deg] translate-x-[1.55rem]"
                                        :class="darkmode ? 'bg-gray-900' : 'bg-gray-800'">
                                    </div>
                                </div>
                            </div>
                            <div class="w-5 h-full border-x border-dashed  translate-x-3.5 z-10"
                                :class="darkmode ? 'border-gray-900' : 'border-gray-800'"></div>
                        </div>


                    </div>
                    <!-- flag -->
                    <div class="absolute flex  h-[3rem] flag">
                        <div class="w-[5rem] h-full " :class="darkmode ? 'bg-green-900' : 'bg-green-800'">
                        </div>
                        <div class="w-[6rem] h-full  flex justify-center items-center"
                            :class="darkmode ? 'bg-blue-200' : 'bg-gray-50'">
                            <div class="w-8 h-8 rounded-full bg-orange-900"></div>
                        </div>
                        <div class="w-[6rem] h-full bg-red-800 " :class="darkmode ? 'bg-red-900' : 'bg-red-800'">
                        </div>
                    </div>


                    <!--neck -->
                    <div class=" flex flex-col items-center ">
                        <div class=" w-8 h-1 -translate-y-2 z-0" :class="darkmode ? 'bg-gray-600' : 'bg-gray-500'">
                        </div>
                        <div class="w-[2.25rem] h-2  -translate-y-2 z-0 rounded-t-[2px]"
                            :class="darkmode ? 'bg-green-900' : 'bg-green-800'">
                        </div>
                        <div class="w-[2.50rem] h-2  -translate-y-2 z-0 rounded-t-[2px]"
                            :class="darkmode ? 'bg-green-900' : 'bg-green-800'">

                        </div>
                        <div class="w-[3rem] absolute h-1  translate-y-2.5 z-30 rounded-t-full"
                            :class="darkmode ? 'bg-green-900' : 'bg-green-800'"></div>
                    </div>
                    <!-- torso -->
                    <div class="flex flex-col items-center ">
                        <div>
                            <!-- arm -->
                            <div class="absolute arm">
                                <div class="h-[1.2rem] w-[0.8rem] translate-y-[1.8rem] -rotate-[65deg] -translate-x-[0.8rem] absolute z-20 "
                                    :class="darkmode ? 'border-black' : 'border-gray-900'">
                                </div>
                                <div class="w-[4rem] h-[1.2rem]  translate-y-[1.6rem] -rotate-[65deg] -translate-x-[2.3rem] rounded-l-full"
                                    :class="darkmode ? 'bg-gray-500' : 'bg-gray-400'">
                                </div>
                                <!-- hand -->
                                <div class="">
                                    <div class="h-[1.8rem] w-[1.4rem] translate-y-[0.30rem]  hand -rotate-[45deg] -translate-x-[4.5rem] absolute z-20 "
                                        :class="darkmode ? 'bg-gray-700' : 'bg-gray-600'">
                                    </div>
                                    <div class="h-[1rem] w-[0.4rem] translate-y-[0.50rem]   -rotate-[25deg] -translate-x-[3.3rem] absolute z-20 border-l "
                                        :class="darkmode ? 'bg-gray-700 border-gray-900' : 'bg-gray-600 border-gray-800'">
                                    </div>
                                    <div class="h-[0.2rem] w-[1.2rem] translate-y-[1.75rem]   -rotate-[45deg] -translate-x-[3.7rem] absolute z-20"
                                        :class="darkmode ? 'bg-gray-900' : 'bg-gray-800'">
                                    </div>
                                </div>

                                <div class="w-[3rem] h-[1rem]  translate-y-[1.8rem] rotate-[20deg] rounded-br-full -translate-x-[3.4rem] "
                                    :class="darkmode ? 'bg-gray-500' : 'bg-gray-400'">
                                </div>

                            </div>
                            <!-- arm -->
                            <div class="absolute rotate-Y ">
                                <div class="arm">
                                    <div class="h-[1.2rem] w-[0.8rem] translate-y-[1.8rem] -rotate-[65deg] -translate-x-[0.8rem] absolute z-20"
                                        :class="darkmode ? 'border-black' : 'border-gray-900'">
                                    </div>
                                    <div class="w-[4rem] h-[1.2rem]  translate-y-[1.6rem] -rotate-[65deg] -translate-x-[2.3rem] rounded-l-full "
                                        :class="darkmode ? 'bg-gray-500' : 'bg-gray-400'">
                                    </div>
                                    <!-- hand -->
                                    <div class="">
                                        <div class="h-[1.8rem] w-[1.4rem] translate-y-[0.30rem]  hand -rotate-[45deg] -translate-x-[4.5rem] absolute z-20"
                                            :class="darkmode ? 'bg-gray-700' : 'bg-gray-600'">
                                        </div>
                                        <div class="h-[1rem] w-[0.4rem] translate-y-[0.50rem]   -rotate-[25deg] -translate-x-[3.3rem] absolute z-20  border-l"
                                            :class="darkmode ? 'bg-gray-700 border-gray-900' : 'bg-gray-600 border-gray-800'">
                                        </div>
                                        <div class="h-[0.2rem] w-[1.2rem] translate-y-[1.75rem]   -rotate-[45deg] -translate-x-[3.7rem] absolute z-20 "
                                            :class="darkmode ? 'bg-gray-900 ' : 'bg-gray-800'">
                                        </div>
                                    </div>

                                    <div class="w-[3rem] h-[1rem]  translate-y-[1.8rem] rotate-[20deg] rounded-br-full -translate-x-[3.4rem] "
                                        :class="darkmode ? 'bg-gray-500 ' : 'bg-gray-400'">
                                    </div>
                                </div>
                            </div>
                            <!--tronco-->
                            <div>
                                <div class="w-[1.5rem] h-5 rounded-b-full absolute -rotate-[25deg] z-10 -translate-y-[0.26rem] translate-x-[0.2rem] flex justify-center items-center"
                                    :class="darkmode ? 'bg-gray-900 ' : 'bg-gray-800'">
                                    <div class="w-[0.4rem] h-[0.4rem]  rounded-full border "
                                        :class="darkmode ? 'bg-gray-600 border-black ' : 'bg-gray-500 border-gray-900'">
                                    </div>
                                </div>
                                <div class="w-[1.5rem] h-5 rounded-b-full absolute rotate-[25deg] z-10 -translate-y-[0.26rem] translate-x-[3.65rem] flex justify-center items-center"
                                    :class="darkmode ? 'bg-gray-900 ' : 'bg-gray-800'">
                                    <div class="w-[0.4rem] h-[0.4rem]  rounded-full border"
                                        :class="darkmode ? 'bg-gray-600 border-black ' : 'bg-gray-500 border-gray-900'">
                                    </div>
                                </div>
                                <div class="w-[5.4rem] h-[6rem]  -translate-y-2 torso"
                                    :class="darkmode ? 'bg-gray-700 ' : 'bg-gray-600'"></div>
                                <div
                                    class="w-[5.9rem] h-0.5 bg-gray-800 absolute rotate-90 -translate-y-[3.5rem] -translate-x-[0.25rem]">
                                </div>
                            </div>
                            <!--cinto-->
                            <div class="bg-gray-800 h-2 w-[4rem] -mt-[0.6rem] translate-x-[0.68rem]">
                            </div>

                            <div class=" h-[2.1rem] w-[4rem]  translate-x-[0.68rem] flex"
                                :class="darkmode ? 'bg-gray-600 ' : 'bg-gray-500'">
                                <!--pierna -->
                                <div class=" h-[2.2rem] w-[4rem] -translate-y-[0.45rem] -translate-x-[3.8rem] rounded-l-full skew-y-[8deg] rotate-[5deg]"
                                    :class="darkmode ? 'bg-gray-600 ' : 'bg-gray-500'">
                                    <div :class="darkmode ? 'bg-gray-500 ' : 'bg-gray-400'"
                                        class=" h-[2rem] w-[6rem] translate-y-[0.58rem] translate-x-[0rem] rounded-l-full  rotate-[12deg] border-r-4 border-gray-800 flex justify-end">
                                        <div class="flex translate-x-[2rem] ">
                                            <!--bota -->
                                            <div class="w-[3rem] h-[2rem]  rounded-r-full flex justify-end"
                                                :class="darkmode ? 'bg-gray-700 ' : 'bg-gray-600'">
                                                <div class="w-[0.25rem] h-[2rem]"
                                                    :class="darkmode ? 'bg-gray-800 ' : 'bg-gray-700'"></div>
                                                <div class="flex flex-col justify-around">
                                                    <div class="w-[2rem] h-0.5 rotate-6"
                                                        :class="darkmode ? 'bg-gray-800 ' : 'bg-gray-700'"></div>
                                                    <div class="w-[2rem] h-0.5 -rotate-6"
                                                        :class="darkmode ? 'bg-gray-800 ' : 'bg-gray-700'"></div>
                                                </div>
                                                <div class="h-full w-[1.5rem] rounded-r-full  "
                                                    :class="darkmode ? 'bg-gray-800 ' : 'bg-gray-700'"></div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <!--pierna -->
                                <div class="rotate-Y-pierna">
                                    <div class=" h-[2.2rem] w-[4rem] -translate-y-[0.45rem] translate-x-[0.5rem] rounded-l-full skew-y-[8deg] rotate-[5deg] "
                                        :class="darkmode ? 'bg-gray-600 ' : 'bg-gray-500'">
                                        <div :class="darkmode ? 'bg-gray-500 ' : 'bg-gray-400'"
                                            class=" h-[2rem] w-[6rem] translate-y-[0.58rem] translate-x-[0rem] rounded-l-full  rotate-[12deg] border-r-4 border-gray-800 flex justify-end">
                                            <div class="flex translate-x-[2rem] ">
                                                <!--bota -->
                                                <div class="w-[3rem] h-[2rem] rounded-r-full flex justify-end"
                                                    :class="darkmode ? 'bg-gray-700 ' : 'bg-gray-600'">
                                                    <div class="w-[0.25rem] h-[2rem] "
                                                        :class="darkmode ? 'bg-gray-800 ' : 'bg-gray-700'"></div>
                                                    <div class="flex flex-col justify-around">
                                                        <div class="w-[2rem] h-0.5  rotate-6"
                                                            :class="darkmode ? 'bg-gray-800 ' : 'bg-gray-700'"></div>
                                                        <div class="w-[2rem] h-0.5  -rotate-6"
                                                            :class="darkmode ? 'bg-gray-800 ' : 'bg-gray-700'"></div>
                                                    </div>
                                                    <div class="h-full w-[1.5rem]  rounded-r-full  "
                                                        :class="darkmode ? 'bg-gray-800 ' : 'bg-gray-700'">
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

                <div class="w-52 h-52 bg-gray-900 rounded-full mx-auto shadow-size -mt-6 opacity-40" style=""></div>
            </div>


        </div>
    </div>
</template>

<script>
export default {
    props: {
        darkmode: Boolean
    },
    data() {
        return {
            blink: false,
        }
    },
    methods: {
        toBlink() {
            this.blink = true;
            setTimeout(() => {
                this.blink = false;
            }, 100);
        },
    },
    created() {
        setInterval(() => {
            this.toBlink()
        }, 9000)
    }
}
</script>

<style>
.torso {
    clip-path: polygon(25% 0%, 75% 0%, 100% 11%, 86% 100%, 14% 100%, 0 11%);
}

.hand {
    clip-path: polygon(50% 0%, 100% 26%, 84% 100%, 14% 100%, 0 17%);
}

.rotate-Y {
    transform: rotateY(180deg);
    translate: 1.4rem 0px;
}

.rotate-Y-pierna {
    transform: rotateY(180deg);
}

.levitato {
    animation: levitar 3s ease-in-out infinite;
}

@keyframes levitar {

    0%,
    100% {
        transform: translateY(0rem);
    }

    50% {
        transform: translateY(1rem);
    }
}

.shadow-size {
    animation: shadow 3s ease-in-out infinite;
}

@keyframes shadow {

    0%,
    100% {
        transform: scale(0.8, 0.8) rotateX(-0.2turn);
    }

    50% {
        transform: scale(1, 1) rotateX(-0.2turn);
    }
}

.flag {
    animation: flag 3s ease-in-out infinite;
}

@keyframes flag {

    0%,
    100% {
        transform: rotate(42deg) translate(8rem, 3.2rem) skewY(12deg);
    }

    50% {
        transform: rotate(42deg) translate(8rem, 3.2rem) skewY(6deg);
    }
}


.banda {
    animation: banda 3s ease-in-out infinite;
}

@keyframes banda {

    0%,
    100% {
        transform: skewY(25deg) rotate(-25deg);
    }

    50% {
        transform: skewY(26deg) rotate(-25deg);
        ;
    }
}

.arm {
    animation: arm 3s ease-in-out infinite;
}

@keyframes arm {

    0%,
    100% {
        transform: rotate(0deg) translateY(0rem);
    }

    50% {
        transform: rotate(5deg) translateY(0.12rem);
        ;
    }
}
</style>
