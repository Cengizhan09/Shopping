<template>
  <article class="products">
    <CollapsableBox
      collapsedIcon="keyboard_arrow_down"
      uncollapsedIcon="keyboard_arrow_up"
      :title="product.title"
    >
      <ProductDetails :product="product" />
    </CollapsableBox>
  </article>
</template>
<script>
import CollapsableBox from "@/components/utils/CollapsableBox.vue";
import ProductDetails from "./ProductDetails.vue";
export default {
  components: { CollapsableBox, ProductDetails },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.products {
  padding: 0 2rem;
}
</style>
