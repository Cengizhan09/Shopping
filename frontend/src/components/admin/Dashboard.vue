<template>
  <section class="admin">
    <CollapsableBox
      title="Orders"
      collapsedIcon="arrow_circle_down"
      uncollapsedIcon="arrow_circle_up"
    >
      <Orders v-for="order in getOrders" :key="order._id" :order="order" />
    </CollapsableBox>
    <CollapsableBox
      title="Products"
      collapsedIcon="arrow_circle_down"
      uncollapsedIcon="arrow_circle_up"
    >
      <div class="admin__action-panel">
        <router-link to="/admin/product/add">
          <button>New Product</button>
        </router-link>
      </div>
      <Products
        v-for="product in getProducts"
        :key="product._id"
        :product="product"
      />
    </CollapsableBox>
  </section>
</template>
<script>
import CollapsableBox from "@/components/utils/CollapsableBox.vue";
import Orders from "@/components/order/Orders.vue";
import Products from "@/components/products/Products.vue";
export default {
  components: { CollapsableBox, Orders, Products },
  computed: {
    getOrders() {
      return this.$store.getters["user/getUserOrderHistory"];
    },
    getProducts() {
      return this.$store.getters["products/getProducts"];
    },
  },
  methods: {
    newProduct() {},
  },
  mounted() {
    this.$store.dispatch("products/getProducts");
  },
};
</script>
<style lang="scss" scoped>
.admin {
  padding: 1rem 0;

  &__action-panel {
    display: flex;
    justify-content: center;
    border-top: 2px solid getColor("secondary");
    border-bottom: 2px solid getColor("secondary");
    max-width: 50%;
    padding: 1rem;
    margin: 1rem auto 2rem auto;
    button {
      padding: 1rem;
      background-color: getColor("secondaryElements");
      border: none;
      color: #fff;
      align-self: center;
    }
  }
}
</style>
