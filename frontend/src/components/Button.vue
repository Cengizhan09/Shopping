<template>
  <button @click="$emit('click')">
    {{ value }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    value: {
      type: String,
      default: "Submit"
    }
  },
};
</script>

<style lang="scss" scoped>
button {
  border: black 0.1em solid;
  border-radius: none;
  background: transparent;
  color: black;
  padding: 0.5em;
  font-size: 1.5rem;
  text-transform: uppercase;
  cursor: pointer;
}
</style>