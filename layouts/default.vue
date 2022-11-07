<template>
  <div>
    <transition name="page">
      <Nave
        :darkmode="darkmode"
        @darkmode="darkmode = !darkmode"
      />
    </transition>
        <transition name="page">
      <Page
        :darkmode="darkmode"
      />
    </transition>
    <transition name="page">
      <Footer
        :darkmode="darkmode"
      />
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      darkmode: false,
    };
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

