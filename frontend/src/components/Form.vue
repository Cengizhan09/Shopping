<template>
  <form method="POST" @submit="submit">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "Form",
  methods: {
    submit (e) {
      e.preventDefault()
      this.$emit('submit')
    }
  },
};
</script>

<style lang="scss" scoped>
label{
  text-transform: uppercase;
}

label {
  color: #666666;
  padding-left: 0.2rem;
  margin-left: 2px;
}

input {
  padding: 0.2rem;
  border: 2px #ddd solid;
  margin-left: calc(0.2rem + 2px);
}

input[disabled] {
  background: transparent;
  border: none;
  margin: 2px;
}

input:focus {
  outline: none;
}

.col-2,
.col-1 {
  grid-column: auto/span 2;
  display: flex;
  flex-direction: column;
}

@media screen and (min-width: 800px) {
  .col-1 {
    grid-column: auto/span 1;
  }

  .col-2 {
    grid-column: auto/span 2;
  }
}

form {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  padding: 1rem;
  gap: 1rem;
  max-width: 40rem;
}
</style>