<template>
  <Transition :transitionObj="{ name: 'fade' }" appear="true">
    <div :class="`flash-message ${flashColor}`">
      <h3>{{ message }}</h3>
    </div>
  </Transition>
</template>
<script>
import Transition from "@/components/transition/Transition.vue";
export default {
  components: { Transition },
  props: {
    flashColor: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.flash-message {
  position: absolute;
  bottom: 10rem;
  left: 25%;
  right: 25%;
  font-weight: bold;
  font-size: 1.3em;
  padding: 2rem;
  text-align: center;
  h3 {
    color: #fff;
  }
  &--red {
    background-color: getColor("secondaryText");
  }
  &--blue {
    background-color: getColor("secondaryElements");
  }
}
</style>
