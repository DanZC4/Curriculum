<template>
<div>
  <div class="flex justify-center duration-300" :class="{'bg-white text-black': darkmode, ' bg-gray-800 text-white': lightmode }">
    <div class="px-4 sm:px-24 md:px-36 lg:px-48 pt-24 ant:pt-40 max-w-12xl"  >
      <div class="ant:shadow-2xl p-4 mb-16 duration-300" :class="{'bg-white text-black': darkmode, ' bg-gray-700 text-white': lightmode }">
        <div class="mb-20">
          <div class="mb-10 border-b border-gray-800 flex justify-between">
            <h2 class="text-4xl font-bold">Who I am?</h2>
          </div>
          <div class="text-xl">
            <p class="" id="about">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates consectetur ullam libero nihil. Quam dolore corrupti
              praesentium enim, tempora magni provident eligendi aperiam et,
              sequi nulla illo minus eaque tempore.
            </p>
          </div>
        </div>
      </div>
      <div class="ant:shadow-2xl p-4 mb-16 duration-300" :class="{'bg-white text-black': darkmode, ' bg-gray-700 text-white': lightmode }">
        <div class="mb-20">
          <div class="mb-10 border-b border-gray-800 flex justify-between">
            <h2 class="text-4xl font-bold">About me</h2>
          </div>
          <div class="text-xl">
            <p class="" id="proyects">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates consectetur ullam libero nihil. Quam dolore corrupti
              praesentium enim, tempora magni provident eligendi aperiam et,
              sequi nulla illo minus eaque tempore. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Voluptates consectetur ullam libero
              nihil. Quam dolore corrupti praesentium enim, tempora magni
              provident eligendi aperiam et, sequi nulla illo minus eaque
              tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates consectetur ullam libero nihil. Quam dolore corrupti
              praesentium enim, tempora magni provident eligendi aperiam et,
              sequi nulla illo minus eaque tempore. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Voluptates consectetur ullam libero
              nihil. Quam dolore corrupti praesentium enim, tempora magni
              provident eligendi aperiam et, sequi nulla illo minus eaque
              tempore.
            </p>
          </div>
        </div>
      </div>
      <div class="ant:shadow-2xl p-4 mb-16 duration-300" :class="{'bg-white text-black': darkmode, ' bg-gray-700 text-white': lightmode }">
        <div class="mb-20">
          <div class="mb-10 border-b border-gray-800 flex justify-between">
            <h2 class="text-4xl font-bold">My Proyects</h2>
          </div>
          <div class="text-xl">
            <p class="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates consectetur ullam libero nihil. Quam dolore corrupti
              praesentium enim, tempora magni provident eligendi aperiam et,
              sequi nulla illo minus eaque tempore.
            </p>
            <ul class="m-6 space-y-2">
              <li>blablabla</li>
              <li>blablabla</li>
              <li>blablabla</li>
              <li>blablabla</li>
              <li>blablabla</li>
              <li>blablabla</li>
            </ul>

            <p class="" id="contact">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates consectetur ullam libero nihil. Quam dolore corrupti
              praesentium enim, tempora magni provident eligendi aperiam et,
              sequi nulla illo minus eaque tempore.
            </p>
          </div>
        </div>
      </div>
      <div class="ant:shadow-2xl p-4 mb-16 duration-300" :class="{'bg-white text-black': darkmode, ' bg-gray-700 text-white': lightmode }">
        <div class="mb-8">
          <div class="mb-10 border-b border-gray-800 flex justify-between">
            <h2 class="text-4xl font-bold">Contact me</h2>
          </div>
          <div class="text-xl">
            <div>
              <div
                class="
                  flex
                  1xl:justify-around
                  1xl:flex-row
                  flex-col
                  items-center
                  space-y-8
                  1xl:space-y-0

                "
              >
                <div
                  class="
                    shadow
                    hover:shadow-2xl
                    transform
                    duration-200
                    hover:-translate-y-6
                  "
                >
                  <a
                    href="https://www.linkedin.com/in/daniel-zambrano-840062216/"
                    ><div class="w-80 h-56 bg-gray-200">
                      <img
                        src="../static/img/linkedin.png"
                        alt=""
                        class="w-full h-full object-cover"
                      /></div
                  ></a>
                </div>
                <div
                  class="
                    shadow
                    hover:shadow-2xl
                    transform
                    duration-200
                    hover:-translate-y-6
                  "
                >
                  <a
                    href="https://api.whatsapp.com/send?phone=5532478092&text=Good Morning"
                    ><div class="w-80 h-56 bg-gray-200">
                      <img
                        src="../static/img/whatsapp.png"
                        alt=""
                        class="w-full h-full object-cover"
                      /></div
                  ></a>
                </div>
                <div
                  class="
                    shadow
                    hover:shadow-2xl
                    transform
                    duration-200
                    hover:-translate-y-6
                  "
                >
                  <a
                    href="mailto:daniel@gamehour.app? subject = Feedback&body = holaa"
                    ><div class="w-80 h-56 bg-gray-200">
                      <img
                        src="../static/img/gmail.png"
                        alt=""
                        class="w-full h-full object-cover"
                      /></div
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center p-8">
        <div
          class="
            rounded-full
            w-16
            h-16
            bg-black
            transform
            duration-200
            hover:-translate-y-6
          "
        >
          <div
           :class="{'bg-white': darkmode, 'bg-gray-800': lightmode }"
            class="
            duration-300
              rounded-full
              w-10
              h-10
      
              flex
              justify-center
              items-center
              transform
              
              hover:translate-y-4 hover:translate-x-3
            "
          >
            <div
              class="
                rounded-full
                w-6
                h-6
                bg-black
                transform
                
              "
            ></div>
          </div>
        </div>
      </div>
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
