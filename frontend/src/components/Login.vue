<template>
  <Form class="login">
    <div class="col-2">
      <label for="email">e-mail</label>
      <input type="text" name="email" v-model="email" />
    </div>
    <div class="col-2">
      <label for="password">password</label>
      <input type="password" name="password" v-model="password" />
    </div>
    <p class="col-2" v-if="error">{{ error }}</p>
    <Button class="col-2" value="log in" @click="login" />
  </Form>
</template>

<script>
import Button from "@/components/Button.vue";
import Form from "@/components/Form.vue";
export default {
  name: "Login",
  components: {
    Button,
    Form,
  },
  data() {
    return {
      email: "customer@example.com",
      password: "password",
      error: null
    };
  },
  methods: {
    async login() {
      const error = await this.$store.dispatch('user/login', {email: this.email, password: this.password})
      if (error) {this.error = error} else {this.$emit('close')}    
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  background: white;
  width: 85%;

  @include tablet {
    max-width: 25rem;
  }
  @include desktop {
    max-width: 30rem;
    padding: 1rem;
  }
  button {
    margin-left: calc(0.2rem + 2px);
  }
}
</style>