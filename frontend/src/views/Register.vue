<template>
  <div class="register">
    <Form @submit="register">
      <div class="col-2">
        <label for="email">e-mail</label>
        <input required="true" type="text" v-model="user.email" name="email" />
      </div>
      <div class="col-2">
        <label for="password">password</label>
        <input
          required="true"
          type="password"
          v-model="user.password"
          name="password"
        />
      </div>
      <div class="col-2">
        <label for="name">name</label>

        <input required="true" type="text" v-model="user.name" name="name" />
      </div>

      <div class="col-2">
        <label for="street">street</label>
        <input
          required="true"
          type="text"
          v-model="user.address.street"
          name="street"
        />
      </div>
      <div class="col-2">
        <label for="zip">zip code</label>

        <input
          required="true"
          type="text"
          v-model="user.address.zip"
          name="zip"
        />
      </div>

      <div class="col-2">
        <label for="city">city</label>
        <input
          required="true"
          type="text"
          v-model="user.address.city"
          name="city"
        />
      </div>
      <div v-if="errors">
        <p v-for="error in errors" :key="error" class="error">{{ error }}</p>
      </div>

      <Button class="col-2" value="register" />
    </Form>
  </div>
</template>

<script>
import Form from "@/components/Form.vue";
import Button from "@/components/Button.vue";
export default {
  name: "Register",
  components: {
    Form,
    Button,
  },
  methods: {
    async register() {
      this.errors = (
        await this.$store.dispatch("user/register", this.user)
      ).response.data.errors;
    },
  },
  data() {
    return {
      errors: null,
      user: {
        email: "",
        password: "",
        name: "",
        address: {
          city: "",
          zip: "",
          street: "",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.error {
  color: rgb(25, 0, 255);
}
form {
  margin: 0 auto;
}
button {
  margin-left: calc(0.2rem + 2px);
}
</style>