<template>
  <section class="modal" @click="close">
    <slot></slot>
  </section>
</template>

<script>
export default {
  methods: {
    close(e) {
      if (e.target.classList.contains("modal")) {
        this.$emit("close");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  place-items: center;
  z-index: 1;
  overflow: scroll;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
