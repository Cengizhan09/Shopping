<template lang="">
  <div class="form-controller">
    <div class="form-controller__image">
      <img src="@/assets/edit.svg" alt="edit_img" @click="toggleEdit" />
      <FlashMessage
        v-if="message"
        flashColor="flash-message--blue"
        :message="message"
      />
    </div>
    <Form>
      <div class="form__input col-1">
        <label for="title">Title</label>
        <input name="title" v-model="product.title" :disabled="!isEditing" />
      </div>
      <div class="form__input col-1">
        <label for="imageFile">Image File</label>
        <input
          name="imageFile"
          v-model="product.imgFile"
          :disabled="!isEditing"
        />
      </div>
      <div class="form__input col-1">
        <label for="shortDesc">Short Description</label>
        <input
          name="shortDesc"
          v-model="product.shortDesc"
          :disabled="!isEditing"
        />
      </div>
      <div class="form__input col-1">
        <label for="price">Price</label>
        <input name="price" v-model="product.price" :disabled="!isEditing" />
      </div>
      <div class="form__input col-1 ">
        <label for="title">Description</label>
        <textarea
          rows="10"
          v-model="product.longDesc"
          :disabled="!isEditing"
        ></textarea>
      </div>
      <div class="form-controller__action-panel">
        <button @click="saveProduct">Update Product</button>
        <button @click="removeProduct">Remove Product</button>
      </div>
    </Form>
  </div>
</template>
<script>
import Form from "@/components/Form.vue";
import FlashMessage from "@/components/utils/FlashMessage.vue";
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  components: { Form, FlashMessage },
  data() {
    return {
      isEditing: false,
      flashMessage: false,
      message: "",
    };
  },
  methods: {
    async removeProduct() {
      const message = await this.$store.dispatch("products/removeProduct", {
        id: this.product._id,
      });
      this.message = message;
      setTimeout(() => {
        this.message = "";
      }, 1500);
    },
    async saveProduct() {
      const message = await this.$store.dispatch("products/updateProduct", {
        ...this.product,
      });
      this.message = message;
      this.toggleEdit();
      setTimeout(() => {
        this.message = "";
      }, 1500);
    },
    toggleEdit() {
      this.isEditing = !this.isEditing;
    },
  },
};
</script>
<style lang="scss" scoped>
.form-controller {
  border-bottom: 2px solid #222;
  position: relative;
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
    justify-content: space-between;
    margin: 1.5rem 0;

    button {
      padding: 1rem;
      background-color: getColor("secondaryElements");
      border: none;
      color: #fff;
      cursor: pointer;
      &:last-of-type {
        background-color: getColor("secondaryText");
      }
    }
  }
}
</style>
