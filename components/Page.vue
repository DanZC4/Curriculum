<template>
  <div
    class="flex justify-center transform duration-300"
    :class="{
      'bg-gradient-to-r from-gray-200 via-white to-gray-300 text-gray-900':
        darkmode,
      ' bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800 text-gray-100':
        lightmode,
    }"
  >
    <div class="px-0 sm:px-24 md:px-36 lg:px-48 pt-24 ant:pt-36 max-w-12xl">
      <div class="flex flex-col items-center mb-8">
        <div class="w-60 h-60 border-black rounded-full overflow-hidden">
          <img
            src="../static/img/daniel.jpg"
            alt=""
            class="
              h-full
              w-full
              transform
              hover:scale-110
              duration-200
              object-cover
            "
          />
        </div>
        <h2 class="p-4 font-bold text-4xl">Web Develoment Jr</h2>
      </div>
      <div
        class="p-4 mb-16 duration-300"
        :class="{
          ' text-gray-900': darkmode,
          ' text-gray-100': lightmode,
        }"
      >
        <div class="mb-20">
          <div class="mb-2 flex justify-between">
            <h2 class="text-3xl font-bold">Who I am?</h2>
          </div>
          <div class="text-xl">
            <div class="">
              <p class="" id="about">
                Hi, I'm Daniel Zambrano Camarena, junior web developer eager to
                learn and become a senior developer, Nice to mmet you :D.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="p-4 mb-16 duration-300"
        :class="{
          ' text-gray-900': darkmode,
          '  text-gray-100': lightmode,
        }"
      >
        <div class="mb-20">
          <div class="mb-4 flex justify-between">
            <h2 class="text-3xl font-bold">My Proyects</h2>
          </div>
          <div class="text-xl">
            <p class="">
              Throughout my little time as a programmer, I have helped in some
              projects and I have created some personal projects with the
              technologies that I have learned and continue to learn today, my
              goal is to be a full stack developer and to be able to help big
              and small companies. with the knowledge that I will get.
            </p>
            <div class="mt-10 mb-16">
              <div class="flex flex-wrap justify-center">
                <div
                v-for="page in pages" :key="page.id"
                  :class="{
                    'bg-gradient-to-r from-gray-200 via-white to-gray-300 text-gray-900':
                      darkmode,
                    ' bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800 text-gray-100':
                      lightmode,
                  }"
                  class="
                    w-80
                    h-60
                    text-center
                    shadow
                    hover:shadow-2xl
                    hover:-translate-y-5
                    transform
                    duration-300
                    m-4
                  "
                >
         
                  <div  >
            
                      <div
                    
                        class="
                          w-full
                          h-full
                          absolute
                          z-20
                          bg-opacity-80
                          transform
                          duration-700
                          flex
                          justify-center
                          items-center
                          opacity-0
                          hover:opacity-100
                        "
                        :class="{
                         
                          'bg-gray-200 ': darkmode,
                          'bg-gray-700 ': lightmode,
                        }"
                      >
                        <a
                          :href="page.link"
                          class="font-bold"
                        >
                          <div
                            class="
                              border-4
                              px-4
                              rounded-full
                              transform
                              duration-300
                            "
                            :class="{
                              'border-gray-800 text-gray-800 hover:border-gray-600 hover:text-gray-600':
                                darkmode,
                              'border-white text-gray-100 hover:border-gray-300 hover:text-gray-300':
                                lightmode,
                            }"
                          >
                            Visit WebSite >
                          </div></a
                        >
                      </div>
             
                    <div class="overflow-hidden">
                      <div
                        class="
                          space-y-2
                          pt-2
                          
                        "
                      >
                        <h3 class="font-bold text-2xl">{{page.name}}</h3>
                        <div class="h-44">
                          <img
                            :src="'/img/'+page.image"
                            alt=""
                            class="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p class="" id="proyects">
              I hope that my projects are a sample of my potential to help you with your projects !!! :D
            </p>
          </div>
        </div>
      </div>
      <div
        class="ant:shadow-2xl p-4 mb-16 duration-300"
        :class="{
          'bg-white text-gray-900': darkmode,
          ' bg-gray-600 text-gray-100': lightmode,
        }"
      >
        <div class="mb-20">
          <div class="mb-10 border-b border-gray-800 flex justify-between">
            <h2 class="text-3xl font-bold">Why hire me?</h2>
          </div>
          <div class="text-xl">
            <p class="" >
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
            </p><br>
            <div id="contact"><p>espero poder trabajar con tigo blablabla</p></div>
          </div>
        </div>
      </div>
      <div
        class=" p-4 mb-16 duration-300"
        :class="{
          ' text-gray-900': darkmode,
          '  text-gray-100': lightmode,
        }"
      >
        <div class="mb-8 text-center">
          <div class="mb-10  flex justify-center">
            <h2 class="text-5xl font-bold">Contact Me By</h2>
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
                  <a href="https://github.com/DanZC4"
                    ><div class="w-80 h-56 bg-gray-200">
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
                    ><div class="w-80 h-56 bg-gray-200">
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
            :class="{ 'bg-white': darkmode, 'bg-gray-500': lightmode }"
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
            <div class="rounded-full w-6 h-6 bg-gray-900 transform"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

 
export default {
  data() {
    return {
   
      pages: [
        {
          id: 1,
          name: 'Openweathermap',
          image: 'Openweathermap.png',
          link: 'https://frosty-jones-8dcaf4.netlify.app/'
        },
          {
            id: 2,
          name: 'Oxford',
          image: 'Oxford.png',
          link: 'https://wonderful-lamarr-30ea6b.netlify.app'
        },
          {
            id: 3,
          name: 'RealPhone!',
          image: 'RealPhone.png',
          link: 'https://hopeful-sammet-4e4238.netlify.app'
        },
          {
            id: 4,
          name: 'This is Massively',
          image: 'Naruto.png',
          link: 'https://epic-goldberg-65faa4.netlify.app'
        },
          {
            id: 5,
          name: 'Paradim',
          image: 'Paradim.png',
          link: 'https://pedantic-stonebraker-847c17.netlify.app'
        },
          {
            id: 6,
          name: 'GameHour',
          image: 'GameHour.png',
          link: 'https://compassionate-turing-385a2b.netlify.app'
        },
          {
            id: 7,
          name: 'Manor Lodge',
          image: 'ManorLodge.png',
          link: 'https://www.manorlodgedentalsurgery.co.uk/'
        },
      ]
   
    };
  },
  
  props: {
    darkmode: Boolean,
    lightmode: Boolean,
    chancheMode: Function,
  },
};
</script>
