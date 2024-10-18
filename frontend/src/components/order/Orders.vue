<template>
  <CollapsableBox
    class="orders"
    collapsedIcon="keyboard_arrow_down"
    uncollapsedIcon="keyboard_arrow_up"
    :title="order._id"
  >
    <OrderDetails :items="order.items" />
    <div class="order-total">
      <h2>Total:</h2>
      <div class="dots"></div>

      <h2 class="text--yellow">{{ order.orderValue }} kr</h2>
    </div>
    <div class="order-time-status">
      <div class="order__time">
        <h2>Order time:</h2>
        <h2>{{ orderDate }}</h2>
      </div>
      <div class="order__status">
        <h2>Status:</h2>
        <h2>
          <span>{{ order.status }}</span>
        </h2>
      </div>
    </div>
  </CollapsableBox>
</template>
<script>
import CollapsableBox from "@/components/utils/CollapsableBox.vue";
import OrderDetails from "./OrderDetails.vue";
export default {
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
  components: { CollapsableBox, OrderDetails },
  computed: {
    orderDate() {
      return new Date(this.order.timeStamp).toString().split("GMT")[0];
    },
  },
};
</script>

<style lang="scss" scoped>
.orders {
  font-size: 1.4rem;
  padding: 0 2rem;
  color: getColor("secondaryText");
}
.order-total {
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  .dots {
    flex-grow: 1;
    border-bottom: 3px dotted getColor("secondary");
    max-height: 0.1rem;
    margin: 1.5rem 0.7rem 4rem 0.7rem;
  }
}
.order-time-status {
  font-size: 1rem;
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    &:last-of-type {
      span {
        color: getColor("secondaryElements");
      }
    }
  }
}
</style>
