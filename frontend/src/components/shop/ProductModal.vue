<template>
  <article class="product">
    <i class="close icon material-icons" @click="$emit('close')"> close </i>
    <div :class="'image-container' + ' ' + padWheelClass">
      <img class="image" :src="imgSrc" :alt="product.shortDesc" />
    </div>
    <ProductDesc class="product-info" :product="product">
      <div class="actions">
        <div class="size-container">
          <label for="size">SIZE</label>
          <select v-if="sizes.length > 0" id="size">
            <option v-for="size in sizes" :key="size" :value="size">
              {{ size }}
            </option>
          </select>
          <p v-else type="text">ONE SIZE</p>
        </div>
        <AddButton class="button" @click="addToCart" :value="buttonText" />
      </div>
    </ProductDesc>
    <div class="desc-container">
      <h2>DESCRIPTION</h2>
      <p class="desc-container--text">{{ product.longDesc }}</p>
    </div>
  </article>
</template>

<script>
import ProductDesc from "@/components/shop/ProductDesc.vue";
import AddButton from "@/components/Button.vue";

export default {
  components: { ProductDesc, AddButton },
  data() { return {
    buttonText: 'add to cart'
  }},
  props: {
    product: Object
  },
  methods: {
    addToCart() {
      this.$store.dispatch("order/updateOrder", this.product);
      this.buttonText = 'added to cart'
    }
  },

  computed: {
    sizes() {
      switch (this.product.category) {
        case "board":
          return ["7'8", "8'0", "8'25"];
        case "wheels":
          return ["52mm", "53mm", "54mm"];
        case "clothes":
          return ["XS", "S", "M", "L", "XL"];
        case undefined:
        default:
          return "";
      }
    },
    padWheelClass() {
      return this.product.category == "wheels" || !this.product.category
        ? "pad-wheel-class"
        : this.product.category == "clothes"
        ? "pad-clothes-class"
        : "";
    },
    imgSrc() {
      return require(`@/assets/${this.product.imgFile}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.product {
  .close {
    position: fixed;
    right: 5%;
    padding: 1rem 1rem 0 0;
    font-size: 4rem;
    cursor: pointer;
  }

  max-width: 90%;
  max-height: 90%;
  background-color: #fff;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr 0.5fr auto;
  box-shadow: 0 0 1rem 0.5rem rgba(30, 30, 30, 0.7);

  overflow-y: auto;

  .image-container {
    grid-row: 1;
    grid-column: 1 / span 2;
    display: grid;
    place-items: center;

    &.pad-wheel-class {
      padding-top: 3rem;
      margin-bottom: -3rem;
    }
    &.pad-clothes-class {
      padding-top: 2rem;
    }
    .image {
      width: 80%;
    }
  }

  .product-info {
    grid-row: 2;
    grid-column: span 2;
    padding: 2rem;
    &--title {
      text-transform: uppercase;
      font-size: 2rem;
    }

    .actions {
      grid-column: span 2;

      .size-container {
        display: flex;
        flex-direction: column;
        margin: 2rem 0;
        select {
          outline: none;
          border: 2px solid black;
          border-radius: none;
          padding: 0.7rem;
          cursor: pointer;
        }
      }
    }

    .button {
      font-size: 2rem;
      padding: 1rem 0;
      width: 100%;
    }
  }
  .desc-container {
    text-align: center;

    grid-column: 1 / span 2;
    border-top: 2px solid gray;

    padding: 2rem;
    padding-bottom: 4rem;
    h2 {
      margin-bottom: 0.5rem;
    }
    &--text {
      text-align: left;
    }
  }
  @include tablet {
    grid-template-rows: 1fr 1fr;

    .image-container {
      padding-top: 3rem;
      grid-row: 1;
      grid-column: 1;
    }
    .product-info {
      grid-row: 1;
      grid-column: 2;
    }
    .button {
      font-size: 2rem;
    }
    .close {
      right: initial;
    }
  }
  @include desktop {
    max-height: 70%;
    max-width: 60rem;
    margin-bottom: 3%;
    padding-left: 5rem;
    padding-right: 5rem;
  }
}
</style>