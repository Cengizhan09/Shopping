<template>
  <i :class="`icon material-icons ${iconSize}`">{{ icon }}</i>
</template>
<script>
export default {
  props: {
    iconSize: {
      type: String,
    },
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.icon {
  font-size: 2.5rem;
  cursor: pointer;
  &--big {
    font-size: 4rem;
  }
  &--small {
    font-size: 1.5rem;
  }
  &--extra-big {
    font-size: 6rem;
  }
}
</style>
