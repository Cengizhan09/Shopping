<template>
  <section class="shop">
      <h1>SHOP</h1>
      <products/>
  </section>
</template>

<script>
import Products from '@/components/shop/Products.vue'
export default {
  components: { Products }
}
</script>

<style lang="scss" scoped>
.shop{
  h1{
    margin-top: 2rem;
    font-size: 3rem;
  }
  display: grid;
  place-items: center;
}
</style>