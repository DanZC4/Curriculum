<template>
  <div
    class="bg-gray-200"
  >
  <div class="flex justify-center">
    <div class="px-0 sm:px-24 md:px-36 w-200 lg:px-48 pt-12 a max-w-12xl ">
      <div
        class="mb-16 duration-300 text-gray-900"
      >
        <div class="mb-8 text-center">
          <div class="mb-10 flex justify-center">
            <h2 class="text-3xl ant:text-4xl font-bold pt-10">Contact Me By</h2>
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
                    duration-300
                    hover:-translate-y-6
                  "
                >
                  <a
                    href="https://www.linkedin.com/in/daniel-zambrano-840062216/"
                    ><div class="w-72 ant:w-80 h-56 bg-gray-200">
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
                  <a href="https://github.com/DanZC4"
                    ><div class="w-72 ant:w-80 h-56 bg-gray-200">
                      <img
                        src="../static/img/github.png"
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
                    ><div class="w-72 ant:w-80 h-56 bg-gray-200">
                      <img
                        src="../static/img/gmail2.png"
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
            bg-gray-900
            transform
            duration-200
            hover:-translate-y-6
          "
        >
          <div
            class="
              duration-200
              rounded-full
              w-10
              h-10
              flex
              justify-center
              items-center
              transform
              hover:translate-y-4 hover:translate-x-3
              bg-gray-200
            "
          >
            <div class="rounded-full w-6 h-6 bg-gray-900 transform"></div>
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
    darkmode: Boolean,

  },
};
</script>