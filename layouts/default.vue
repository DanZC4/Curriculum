<template>
  <div>

    <Nave :darkmode="darkmode" @darkmode="darkmode = !darkmode" />

    <Index :darkmode="darkmode" />

    <Footer :darkmode="darkmode" />

  </div>
</template>
<script>
import Index from "../pages/Index.vue"

export default {
  components: {
    Index
  },
  data() {
    return {
      darkmode: false,
    };
  },
};
</script>


