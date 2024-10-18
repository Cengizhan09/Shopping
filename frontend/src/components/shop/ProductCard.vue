<template>
  <article
    class="product-card"
    :style="{
      'background-image': 'url(' + imgSrc + ')'
    }"
    @click="emitProduct"
  >
    <ProductDesc class="product-info" :product="product" />
  </article>
</template>

<script>
import ProductDesc from '@/components/shop/ProductDesc.vue'

export default {
  components: { ProductDesc },
  props: {
    product: Object
  },
  computed: {
    imgSrc() {
      return require(`@/assets/${this.product.imgFile}`);
    }
  },
  methods: {
    emitProduct(){
      this.$emit('clicked', this.product)
    }
  }
};
</script>

<style lang="scss" scoped>
.product-card {
  min-width: 25rem;
  max-width: 30rem;
  min-height: 20rem;
  margin: 2rem;

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;

  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  .product-info {
    padding: 1rem;
    border-radius: 0 1rem 0 0;
    width: 50%;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: rgba(255, 255, 255, 0.8);
  }
  @include tablet {
    display: grid;
    place-items: center;
    justify-content: initial;

    .product-info {
      height: 100%;
      width: 100%;
      display: none;
    }

    &:hover {
      background-size: cover;
      background-position: top left;
      cursor: pointer;

      & > .product-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.5);
      }
    }
  }
}
</style>