<template>
  <div class="flex justify-center transform duration-300 bg-gray-100  text-gray-800">
    <div class="w-full ">

      <Portada :darkmode="darkmode" />
      <AboutMe :darkmode="darkmode" />

      <Abilities :darkmode="darkmode" :tecnologies="tecnologies" />
      <Proyect :darkmode="darkmode" :pages="pages" />
      <Contact :darkmode="darkmode" />
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
          name: 'Manor Lodge',
          image: 'ManorLodge.png',
          link: 'https://www.manorlodgedentalsurgery.co.uk/'
        },
        {
          id: 2,
          name: 'Devon Independent',
          image: 'DevonIndependent.png',
          link: 'https://devon-ipg.org/'
        },
        {
          id: 3,
          name: 'Smiley',
          image: 'smiley.png',
          link: 'https://smiley.mx/'
        },
      ],
      tecnologies: [
        {
          name: 'JS',
          color: 'text-black  bg-gradient-to-tl from-yellow-400 to-yellow-600'
        },
        {
          name: 'HTML',
          color: 'text-white  bg-gradient-to-tl from-yellow-500 to-red-600'
        },
        {
          name: 'CSS',
          color: 'text-whie bg-gradient-to-tl from-blue-800 to-blue-400'
        },
        {
          name: 'PHP',
          color: 'text-black bg-gradient-to-tl from-purple-900  to-blue-500'
        }

      ]
    };
  },

  props: {
    darkmode: Boolean,
  },
};
</script>
