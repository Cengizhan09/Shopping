<template>
  <div class="profile">
    <Modal v-if="success" @close="success = false">
      <div class="success">
        <p>Info was successfully saved</p>
        <Button value="Ok thanks!" @click="success = false" />
      </div>
    </Modal>

    <Form class="details">
      <h1 class="col-2 title">
        your details<img
          src="../assets/edit.svg"
          alt="edit"
          class="edit"
          @click="edit"
        />
      </h1>
      <div class="col-1">
        <label for="email">e-mail</label>
        <input
          :disabled="!editing"
          type="text"
          v-model="user.email"
          name="email"
        />
      </div>

      <div class="col-1">
        <label for="name">name</label>

        <input
          :disabled="!editing"
          type="text"
          v-model="user.name"
          name="name"
        />
      </div>

      <div class="col-1">
        <label for="street">street</label>
        <input
          :disabled="!editing"
          type="text"
          v-model="user.address.street"
          name="street"
        />
      </div>
      <div class="col-1">
        <label for="zip">zip code</label>

        <input
          :disabled="!editing"
          type="text"
          v-model="user.address.zip"
          name="zip"
        />
      </div>

      <div class="col-1">
        <label for="city">city</label>
        <input
          :disabled="!editing"
          type="text"
          v-model="user.address.city"
          name="city"
        />
      </div>

      <Button class="col-2" value="save" @click="save" v-if="editing" />
    </Form>
    <div v-if="orders.length !== 0">
      <h1>Orders</h1>
      <Orders v-for="order in orders" :key="order.id" :order="order" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Form from "@/components/Form.vue";
import Modal from "@/components/Modal.vue";
import Orders from "@/components/order/Orders.vue";

export default {
  name: "Profile",
  components: {
    Button,
    Form,
    Modal,
    Orders,
  },
  data() {
    return {
      editing: false,
      success: false,
    };
  },
  computed: {
    user() {
      return this.$store.getters["user/getUser"];
    },
    orders() {
      return this.$store.getters["user/getUserOrderHistory"];
    },
  },
  methods: {
    edit() {
      this.editing = !this.editing;
    },
    async save() {
      await this.$store.dispatch("user/updateUser", this.user);
      this.success = true;
      this.editing = false;
    },
  },
  beforeMount() {
    if (!this.user) {
      console.log("not logged in");
    }
  },
};
</script>

<style lang="scss" scoped>
h1 {
  text-transform: uppercase;
}

.edit {
  width: 2rem;
  cursor: pointer;
}

.success {
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.title {
  flex-direction: row;
  justify-content: space-between;
}
</style>