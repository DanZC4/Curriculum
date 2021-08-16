<template>
  <div>
    <transition name="page">
      <Nave
        :darkmode="darkmode"
        :lightmode="lightmode"
        :chancheMode="chancheMode"
      />
    </transition>
        <transition name="page">
      <Page
        :darkmode="darkmode"
        :lightmode="lightmode"
        :chancheMode="chancheMode"
      />
    </transition>
    <transition name="page">
      <Footer
        :darkmode="darkmode"
        :lightmode="lightmode"
        :chancheMode="chancheMode"
      />
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      darkmode: false,
      lightmode: true,
    };
  },
  methods: {
    chancheMode() {
      if (this.darkmode == true && this.lightmode == false) {
        return (this.darkmode = false), (this.lightmode = true);
      } else {
        return (this.darkmode = true), (this.lightmode = false);
      }
    },
  },
};
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 2s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>

