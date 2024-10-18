<template>
  <div class="checkout">
    <CheckoutForm
      :disabled="disableForm"
      class="form"
      v-if="!user"
      @save-info="saveInfo"
      @edit="edit"
    />
    <CartItem v-for="order in cart" :key="order.id" :order="order" />
    <p class="red" v-if="error">{{ error }}</p>
    <h4>
      Total: <span class="blue">{{ total }}</span> kr
    </h4>
    <Button class="margin-1" value="Place order" @click="placeOrder" />
    <Modal v-if="displayOrder" @close="closeModal">
      <article class="order-modal">
        <h2>THANK YOU</h2>
        <p>We will have your order on its way as soon as possible, 
          in the meantime you can find your order details below. </p>
        <Orders v-if="order" :order="order" />
      </article>
    </Modal>
  </div>
</template>

<script>
import CheckoutForm from "@/components/CheckoutForm.vue";
import CartItem from "@/components/shop/CartItem.vue";
import Button from "@/components/Button.vue";
import Orders from "@/components/order/Orders.vue"
import Modal from "@/components/Modal.vue"

export default {
  name: "Checkout",
  components: {
    CheckoutForm,
    CartItem,
    Button,
    Orders,
    Modal
  },
  data() {
    return {
      order: undefined,
      anonymousUser: undefined,
      disableForm: false,
      error: undefined,
      displayOrder: false
    };
  },
  computed: {
    user() {
      const user = this.$store.getters["user/getUser"];
      if (Object.keys(user).length === 0) {
        return false;
      } else {
        return user;
      }
    },
    cart() {
      return this.$store.getters["order/getCart"];
    },
    total() {
      return this.cart.reduce((prevVal, currentVal) => {
        return prevVal + currentVal.amount * currentVal.price;
      }, 0);
    },
  },
  methods: {
    saveInfo(user) {
      this.anonymousUser = user;
      this.disableForm = true;
    },
    async placeOrder() {
      if ((this.cart.length !== 0 && this.anonymousUser) || this.user) {
        this.error = undefined
        const order = await this.$store.dispatch("order/makeOrder");
        this.order = order
        this.displayOrder = true
      } else {
        if (!this.anonymousUser) {
          this.error = "Please provide all information";
        } else {
          this.error = "No items in cart";
        }
      }
    },
    edit() {
      this.disableForm = false;
    },
    closeModal() {
      this.displayOrder = false
      this.$router.push('/')
    }
  },
};
</script>

<style lang="scss" scoped>
.checkout {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form {
  width: 90%;
}

.cart-products {
  width: 90%;
}

.blue {
  color: #2b6faf;
}

.red {
  color: red;
}

.margin-1 {
  margin: 1rem;
}
.order-modal {
  max-width: 60%;
  background: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2{
    margin-top: 1rem;
  }
  p{
    margin: 2rem 1rem;
  }
}
</style>