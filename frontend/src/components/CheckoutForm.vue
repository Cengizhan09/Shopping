<template>
  <Form @submit="saveInfo">
    <img
          src="../assets/edit.svg"
          alt="edit"
          @click="edit"
          v-if="disabled"
          class="edit"
        />
    <div class="col-2">
      <label for="email">e-mail</label>
      <input
        :disabled="disabled"
        required="true"
        type="text"
        v-model="user.email"
        name="email"
      />
    </div>
    <div class="col-2">
      <label for="name">name</label>

      <input
        :disabled="disabled"
        required="true"
        type="text"
        v-model="user.name"
        name="name"
      />
    </div>
    <div class="col-2">
      <label for="street">street</label>
      <input
        :disabled="disabled"
        required="true"
        type="text"
        v-model="user.address.street"
        name="street"
      />
    </div>
    <div class="col-2">
      <label for="zip">zip code</label>

      <input
        :disabled="disabled"
        required="true"
        type="text"
        v-model="user.address.zip"
        name="zip"
      />
    </div>

    <div class="col-2">
      <label for="city">city</label>
      <input
        :disabled="disabled"
        required="true"
        type="text"
        v-model="user.address.city"
        name="city"
      />
    </div>
    <Button v-if="!disabled" value="save" class="col-2" />
  </Form>
</template>

<script>
import Button from '@/components/Button.vue'
import Form from '@/components/Form.vue'
export default {
  name: "CheckoutForm",
  components: {
    Button,
    Form
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      user: {
        email: "",
        name: "",
        address: {
          city: "",
          zip: "",
          street: "",
        },
      },
    };
  },
  methods: {
    saveInfo() {
      this.$emit('save-info', this.user)
    },
    edit() {
      this.$emit('edit')
    }
  },
};
</script>

<style lang="scss" scoped>
.edit {
  width: 2rem;
  cursor: pointer;
}
</style>