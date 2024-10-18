<template>
  <article class="order-details">
    <div class="order-details__item" v-for="item in items" :key="item.id">
      <div class="order-details__item__title-price-amount">
        <h4 class="order-details__text text--blue">{{ item.title }}</h4>
        <h4 class="order-details__text">{{ item.price }} kr / st</h4>
        <h4 class="order-details__text">{{ item.amount }} st</h4>
      </div>
      <div class="order-details__price-total">
        <h5>{{ item.price * item.amount }} kr</h5>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.order-details {
  font-family: "Cantarell";
  font-weight: normal;
  border-top: 3px dotted getColor("secondary");
  padding: 2rem 0;
  &__item {
    margin-bottom: 1.5rem;
    border-bottom: 3px dotted getColor("secondary");
    &__title-price-amount {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
    h5 {
      text-align: right;
      margin-bottom: 0.5rem;
    }
    .text--blue {
      color: getColor("secondaryElements");
    }
  }
}
</style>
