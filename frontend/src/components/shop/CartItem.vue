<template>
  <div class="cart-products">
    <div class="cart-products__information">
      <div class="cart-products__information__thumbnail-total">
        <div class="cart-products__information__price">
          <img :src="getImage" alt="product_img" />
        </div>
        <h4>
          pris: <span class="text-color">{{ order.price }}</span> kr
        </h4>
      </div>
      <div class="cart-products__information__title">
        <h4>{{ order.title }}</h4>
      </div>
      <div class="cart-products__information__quantity">
        <NavIcon icon="expand_less" @click.native="increaseAmount" />
        <h4>{{ order.amount }}st</h4>
        <NavIcon icon="expand_more" @click.native="decreaseAmount" />
      </div>
    </div>
    <h4 class="price-total">
      Total: <span class="text-color">{{ getTotal }}</span> kr
    </h4>
  </div>
</template>
<script>
import NavIcon from "../nav/NavIcon.vue";
export default {
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
  components: { NavIcon },
  computed: {
    getTotal() {
      return this.order.price * this.order.amount;
    },
    getImage() {
      return require(`@/assets/${this.order.imgFile}`);
    },
  },
  methods: {
    increaseAmount() {
      this.$store.dispatch("order/updateOrder", this.order);
    },
    decreaseAmount() {
      this.$store.dispatch("order/decreaseAmount", this.order);
    },
  },
};
</script>
<style lang="scss" scoped>
.cart-products {
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid getColor("secondary");
  .text-color {
    color: getColor("secondaryElements");
  }
  .price-total {
    text-align: center;
    width: 100%;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 1.2em;
  }
  h4 {
    font-size: 0.8em;
  }
  &__information {
    width: 100%;
    display: flex;
    align-items: center;
    &__price {
      display: flex;
      align-items: center;
      img {
        width: 4rem;
      }
    }

    &__title {
      flex-grow: 1;
      text-align: left;
    }
    &__quantity {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
}
</style>
