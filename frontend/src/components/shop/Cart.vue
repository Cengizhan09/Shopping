<template lang="">
  <div class="cart">
    <article class="cart__products">
      <CartItem v-for="order in getCart" :key="order.id" :order="order" />
    </article>
    <div class="cart__total">
      <div class="cart__total__sum">
        <h4>Summa</h4>
        <div class="dots"></div>
        <h4>
          <span class="text-color">{{ getTotal }}</span> kr
        </h4>
      </div>
      <h6>taxes included in the price</h6>
    </div>
    <Button :value="buttonText" @click="checkout" />
  </div>
</template>
<script>
import CartItem from "./CartItem";
import Button from "@/components/Button.vue";
export default {
  components: { CartItem, Button },
  data() {
    return {
      buttonText: "Checkout",
    };
  },
  computed: {
    getCart() {
      return this.$store.getters["order/getCart"];
    },
    getTotal() {
      return this.getCart.reduce((prevVal, currentVal) => {
        return prevVal + currentVal.amount * currentVal.price;
      }, 0);
    },
  },
  methods: {
    checkout() {
      if (this.getCart.length > 0) {
        this.$emit("close");
        this.$router.push({ name: "Checkout" });
      } else {
        this.buttonText = "the cart is empty";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.cart {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 85vh;
  padding: 2rem;

  button {
    background-color: getColor("secondaryElements");
    color: #fff;
    border: none;
    padding: 2rem 0;
    margin-bottom: 4rem;
    min-width: 25rem;
    max-width: 34rem;
    align-self: center;
  }

  .text-color {
    color: getColor("secondaryElements");
  }

  &__products {
    flex-grow: 1;
    max-height: 45vh;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  &__total {
    &__sum {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .dots {
        flex-grow: 1;
        border-bottom: 2px dotted #000;
        max-height: 0.1rem;
        margin: 1.2rem 1rem 0 1rem;
      }
    }
    h6 {
      text-align: center;
    }
  }
}
</style>
