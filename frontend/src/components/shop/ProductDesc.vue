<template>
  <article class="product-info" @click="$emit('clicked')">
      <p class="product-info--title">{{ product.title }}</p>
      <p class="product-info--desc">{{ product.shortDesc }}</p>
      <p class="product-info--price">{{ product.price }} SEK</p>
      <slot></slot>
    </article>
</template>

<script>
export default {
    props: {
      product: Object
    }
}
</script>

<style lang="scss" scoped>
.product-info{
    padding: 2rem;
    display: grid;
    grid-template-columns: 50% 50%;
    
    &--title {
      font-family: "Fjalla One", sans-serif;
      text-transform: uppercase;
      font-size: 2rem;
      grid-column: 1;
    }
    &--desc {
      text-transform: lowercase;
      grid-row: 2;
    }
    &--price {
      grid-column: 2;
      grid-row: 1;
      justify-self: end;
    }
}
</style>