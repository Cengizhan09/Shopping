<template>
  <transition
    :name="getName"
    :duration="{ enter: getDurationEnter, leave: getDurationLeave }"
    :appear="getAppear"
  >
    <slot></slot>
  </transition>
</template>
<script>
export default {
  props: {
    transitionObj: {
      type: Object,
      name: {
        type: String,
      },
      durationEnter: {
        type: Number,
      },
      durationLeave: {
        type: Number,
      },
      appear: {
        type: Boolean,
      },
    },
  },
  computed: {
    getName() {
      return this.transitionObj.name ? this.transitionObj.name : "slide-right";
    },
    getDurationEnter() {
      return this.transitionObj.durationEnter
        ? this.transitionObj.durationEnter
        : 500;
    },
    getDurationLeave() {
      return this.transitionObj.durationLeave
        ? this.transitionObj.durationLeave
        : 500;
    },
    getAppear() {
      return this.transitionObj.appear ? this.transitionObj.appear : false;
    },
  },
};
</script>
<style lang="scss">
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s;
}
.slide-right-enter,
.slide-right-leave-to {
  transform: translateX(100%);
}
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.5s;
}
.slide-left-enter,
.slide-left-leave-to {
  transform: translateX(-100%);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
