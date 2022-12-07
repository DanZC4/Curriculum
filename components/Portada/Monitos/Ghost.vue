<template>
    <div class="w-full  translate-y-[0rem] -translate-x-[0rem]">
        <div class="" style="opacity: 0.9;">
            <div class=" w-52 h-auto mx-auto">
                <!-- head -->
                <div class="">
                    <div class="flex flex-col items-center ">
                        <!-- hat -->
                        <div class="translate-y-5 z-30">

                            <div class="w-[3rem] h-[1.80rem] bg-amber-800 m-auto"
                                :class="darkmode ? 'border-b-gray-800' : 'border-b-gray-700'">
                                <div class="flex justify-between">
                                    <div
                                        class="w-[1.5rem] h-[1.5rem] rounded-full bg-orange-400 -mt-[0.6rem] -ml-[0.6rem]">
                                    </div>
                                    <div
                                        class="w-[1.5rem] h-[1.5rem] rounded-full bg-orange-400 -mt-[0.6rem] -mr-[0.6rem]">
                                    </div>
                                </div>

                                <div
                                    class="w-3 h-5 bg-gray-300 absolute -translate-y-[0.20rem] rotate-6 translate-x-8 text-[2.5px]">
                                    2/10/1968
                                    Matanza del Gobierno
                                </div>
                                <div class="w-[3rem] h-[0.5rem] bg-gray-900 mt-[0.4rem]  absolute"></div>


                            </div>
                            <div class="w-[4rem] h-[0.40rem]  -translate-y-0.5 rounded-t-sm rounded-b-full"
                                :class="darkmode ? 'bg-amber-900' : 'bg-amber-900'"></div>
                        </div>
                        <!-- face -->
                        <div class="w-12 h-14 rounded-full  flex items-center border-b-2  border-gray-800 z-20"
                            :class="darkmode ? 'bg-gray-900 border-gray-900' : 'bg-gray-900 border-gray-900'"
                            @click="toBlink">
                            <div class="w-[3.25rem] h-[0.75rem]  absolute rounded-sm -ml-0.5 z-20 "
                                :class="darkmode ? 'bg-gray-900' : 'bg-gray-900'">
                                <!-- Glases -->
                                <div class="eyesMove">
                                    <div class="flex space-x-1  ml-1">
                                        <div class="w-5 h-3  border-[0.15rem]  rounded rotate-[10deg]"
                                            :class="darkmode ? blink ? 'bg-gray-900 border-black' : 'bg-yellow-200 border-black' : blink ? 'bg-gray-900 border-gray-900' : 'bg-yellow-200 border-black'">
                                        </div>
                                        <div class="w-5 h-3  border-[0.15rem]  rounded  -rotate-[10deg]"
                                            :class="darkmode ? blink ? 'bg-gray-900 border-black' : 'bg-yellow-200 border-black' : blink ? 'bg-gray-900 border-gray-900' : 'bg-yellow-200 border-black'">
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <!-- barbilla -->
                            <div class="w-3 h-1.5 rounded-t-xl transform translate-y-[1.55rem] translate-x-[1.15rem]  absolute"
                                :class="darkmode ? 'bg-gray-900' : 'bg-gray-900'">
                                <div class="absolute w-[1.40rem] h-1  translate-x-[0.55rem] -translate-y-[0.20rem] transform rotate-[150deg] rounded"
                                    :class="darkmode ? 'bg-gray-900' : 'bg-gray-900'">
                                    <div class="absolute w-1 h-[1.60rem]  rotate-[30deg] -translate-x-[0.40rem]"
                                        :class="darkmode ? 'bg-gray-900' : 'bg-gray-900'">
                                    </div>
                                </div>

                                <div class="absolute w-[1.40rem] h-1  -translate-x-[1.25rem] -translate-y-[0.20rem] transform -rotate-[150deg] rounded"
                                    :class="darkmode ? 'bg-gray-900' : 'bg-gray-900'">
                                    <div class="absolute w-1 h-[1.60rem] -rotate-[30deg] translate-x-[1.55rem]"
                                        :class="darkmode ? 'bg-gray-900' : 'bg-gray-900'">
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                    <div>
                        <div
                            class="w-[3.5rem] h-[2rem] bg-amber-700 absolute translate-x-[4.75rem] rounded-full -translate-y-[0.40rem] ">
                        </div>
                    </div>

                    <!--neck -->
                    <div class=" flex flex-col items-center ">
                        <div
                            class=" w-8 h-[4.7rem] -translate-y-2 -mb-[4.1rem] z-10 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900">
                        </div>
                    </div>
                    <!-- torso -->
                    <div class="flex flex-col items-center ">
                        <div>
                            <!-- arm -->
                            <div class="absolute -translate-x-[3.5rem] -translate-y-[2.7rem] rotate-[60deg] z-20">
                                <div class=" rotate-Y">
                                    <div class="  ">
                                        <div class="w-[4rem] h-[1.2rem]  translate-y-[1.6rem] -rotate-[65deg] -translate-x-[2.3rem] rounded-l-full"
                                            :class="darkmode ? 'bg-amber-800' : 'bg-amber-800'">
                                        </div>
                                        <!-- hand -->
                                        <div class="-rotate-[20deg] -translate-x-[0.80rem] -translate-y-[0.90rem]">
                                            <div
                                                class="h-[1.8rem] w-[1.4rem] translate-y-[0.30rem]  hand -rotate-[45deg] -translate-x-[4.5rem] absolute z-20 bg-gray-900 ">
                                            </div>
                                            <div
                                                class="h-[1rem] w-[0.4rem] translate-y-[0.50rem]   -rotate-[25deg] -translate-x-[3.3rem] absolute z-20  bg-gray-900">
                                            </div>
                                            <div class="h-[0.6rem] w-[1.25rem] translate-y-[1.5rem]  rounded-t-sm -rotate-[55deg] -translate-x-[3.7rem] absolute z-20"
                                                :class="darkmode ? 'bg-amber-700' : 'bg-amber-700'">
                                            </div>


                                            <div class="w-[3rem] h-[1rem]  translate-y-[1.8rem] rotate-[20deg] rounded-br-full -translate-x-[3.4rem] "
                                                :class="darkmode ? 'bg-amber-800' : 'bg-amber-800'">
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <!-- arm -->
                            <div class="absolute translate-x-[4.2rem] -translate-y-[1.5rem] -rotate-[60deg] z-20">
                                <div class=" ">
                                    <div class="  ">
                                        <div class="w-[4rem] h-[1.2rem]  translate-y-[1.6rem] -rotate-[65deg] -translate-x-[2.3rem] rounded-l-full"
                                            :class="darkmode ? 'bg-amber-800' : 'bg-amber-800'">
                                        </div>
                                        <!-- hand -->
                                        <div class="-rotate-[20deg] -translate-x-[0.80rem] -translate-y-[0.90rem]">
                                            <div
                                                class="h-[1.8rem] w-[1.4rem] translate-y-[0.30rem]  hand -rotate-[45deg] -translate-x-[4.5rem] absolute z-20 bg-gray-900 ">
                                            </div>
                                            <div
                                                class="h-[1rem] w-[0.4rem] translate-y-[0.50rem]   -rotate-[25deg] -translate-x-[3.3rem] absolute z-20  bg-gray-900">
                                            </div>
                                            <div class="h-[0.6rem] w-[1.25rem] translate-y-[1.5rem]  rounded-t-sm -rotate-[55deg] -translate-x-[3.7rem] absolute z-20"
                                                :class="darkmode ? 'bg-amber-700' : 'bg-amber-700'">
                                            </div>


                                            <div class="w-[3rem] h-[1rem]  translate-y-[1.8rem] rotate-[20deg] rounded-br-full -translate-x-[3.4rem] "
                                                :class="darkmode ? 'bg-amber-800' : 'bg-amber-800'">
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div
                                class="absolute w-[1.1rem] h-[1.58rem] bg-gray-900 z-10 translate-x-[2.15rem] translate-y-[3rem]">
                            </div>
                            <div
                                class="absolute w-[0.85rem] h-[0.60rem] bg-gray-900 z-10 translate-x-[2.275rem] translate-y-[4.4rem]">
                            </div>
                            <div
                                class="absolute w-[0.98rem] border-b-[1.2rem] border-b-gray-900 border-x-[0.10rem] border-x-transparent z-10 translate-x-[2.21rem] translate-y-[4.9rem]">
                                <div
                                    class="w-[0.15rem] h-[1.30rem] bg-amber-700 absolute z-20 -translate-y-[0.10rem] -translate-x-[0.16rem] rotate-4">
                                </div>
                                <div
                                    class="w-[0.15rem] h-[1.30rem] bg-amber-700 absolute z-20 -translate-y-[0.10rem] translate-x-[0.80rem] -rotate-4">
                                </div>
                            </div>


                            <!-- las weas de la gabardina -->
                            <div class="z-30 absolute">
                                <div class="w-0 h-0 border-t-[1rem] border-t-transparent border-l-[4.2rem] border-r-[1rem]
                             border-x-transparent border-b-[1.5rem] absolute z-10 -rotate-[96deg] -translate-x-[1.8rem] translate-y-[1.2rem]"
                                    :class="darkmode ? 'border-b-amber-700' : 'border-b-amber-700'">
                                </div>

                            </div>
                            <div class="z-30 absolute">
                                <div class="w-0 h-0 border-b-[1rem] border-b-transparent border-l-[4.2rem] border-r-[1rem]
                             border-x-transparent border-t-[1.5rem] absolute z-10 -rotate-[84deg] translate-x-[2rem] translate-y-[1.2rem]"
                                    :class="darkmode ? 'border-t-amber-700' : 'border-t-amber-700'">
                                </div>

                            </div>

                            <!-- las weas de ariva -->
                            <div>
                                <div class="h-[0.6rem] w-[1.25rem] -translate-y-[0.5rem] rotate-[50deg] translate-x-[1rem] absolute z-20 "
                                    :class="darkmode ? 'bg-amber-700 ' : 'bg-amber-700'">
                                </div>
                                <div class="h-[0.6rem] w-[1.25rem] -translate-y-[0.5rem] -rotate-[50deg] translate-x-[3.1rem] absolute z-20 "
                                    :class="darkmode ? 'bg-amber-700 ' : 'bg-amber-700'">
                                </div>
                            </div>

                            <!--tronco-->

                            <div>
                                <div class="w-[5.4rem] h-[6rem]  -translate-y-2 torso"
                                    :class="darkmode ? 'bg-amber-800 ' : 'bg-amber-800'"></div>
                            </div>
                            <!--cinto-->
                            <div class="bg-amber-800 h-2 w-[3.9rem] -mt-[0.6rem] translate-x-[0.735rem]">
                            </div>
                            <div
                                class="w-[6.9rem] h-[0rem]  border-b-[11rem] border-b-amber-800 border-x-[1.55rem] border-x-transparent -translate-x-[0.75rem] absolute">
                                <div
                                    class="w-[4rem] h-[0rem]  border-b-[11rem] border-b-gray-900 border-x-[1.55rem] border-x-transparent -translate-x-[0.08rem] absolute">
                                    <div
                                        class="w-[0.15rem] h-[11.16rem] bg-amber-700 absolute z-20 -translate-y-[0.10rem] -translate-x-[0.88rem] rotate-[7.5deg]">
                                    </div>
                                    <div
                                        class="w-[0.15rem] h-[11.16rem] bg-amber-700 absolute z-20 -translate-y-[0.10rem] translate-x-[1.59rem] -rotate-[7.5deg]">
                                    </div>
                                </div>
                            </div>




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

.eyesMove {
    animation: eyesMove 4s ease-in-out infinite;
}

@keyframes eyesMove {

    0%,
    100% {
        transform: translateX(0rem);
    }

    33% {
        transform: translateX(0.10rem);
    }

    66% {
        transform: translateX(-0.10rem);
    }

}
</style>
