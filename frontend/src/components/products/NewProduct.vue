<template lang="">
  <div class="form-controller">
    <FlashMessage
      v-if="showMessage"
      message="Product successfully added"
      flashColor="flash-message--red"
    />
    <Form>
      <div class="form__input col-1">
        <label for="title">Title</label>
        <input name="title" v-model="product.title" />
      </div>
      <div class="form__input col-1">
        <label for="imageFile">Image File</label>
        <input name="imageFile" v-model="product.imgFile" />
      </div>
      <div class="form__input col-1">
        <label for="shortDesc">Short Description</label>
        <input name="shortDesc" v-model="product.shortDesc" />
      </div>
      <div class="form__input col-1">
        <label for="price">Price</label>
        <input name="price" v-model="product.price" />
      </div>
      <div class="form__input col-1 ">
        <label for="title">Description</label>
        <textarea rows="10" v-model="product.longDesc"></textarea>
      </div>
      <div class="form-controller__action-panel">
        <button @click="saveProduct">Save</button>
      </div>
    </Form>
  </div>
</template>
<script>
import Form from "@/components/Form.vue";
import FlashMessage from "@/components/utils/FlashMessage.vue";
export default {
  components: { Form, FlashMessage },
  data() {
    return {
      product: {
        title: "",
        price: "",
        shortDesc: "",
        longDesc: "",
        imgFile: "",
      },
      showMessage: false,
    };
  },
  methods: {
    async saveProduct() {
      const error = await this.$store.dispatch("products/postProduct", {
        ...this.product,
      });

      if (!error) {
        this.showMessage = !this.showMessage;
        setTimeout(() => {
          this.showMessage = !this.showMessage;
          Object.keys(this.product).forEach((key) => (this.product[key] = ""));
        }, 1500);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.form-controller {
  padding: 0 2rem;
  &__image {
    display: flex;
    justify-content: center;
    img {
      width: 3rem;
      cursor: pointer;
    }
  }
  .form__input {
    input {
      padding: 1rem;
      color: getColor("secondaryElements");
      font-weight: bold;
    }
    textarea {
      padding: 1rem;
    }
  }
  &__action-panel {
    grid-column: span 2;
    display: flex;
    margin: 1.5rem 0;
    justify-content: center;

    button {
      display: block;
      min-width: 30rem;
      padding: 1.2rem;
      background-color: getColor("secondaryElements");
      border: none;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
