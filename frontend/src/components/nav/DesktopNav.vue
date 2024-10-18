<template>
  <div class="wrapper">
    <ul class="navigation-list">
      <router-link to="/">
        <li class="navigation-list__item"><h2>HOME</h2></li>
      </router-link>
      <router-link to="/shop">
        <li class="navigation-list__item"><h2>SHOP</h2></li>
      </router-link>
      <router-link to="">
        <li class="navigation-list__item"><h2>ABOUT</h2></li>
      </router-link>
      <router-link to="">
        <li class="navigation-list__item"><h2>CONTACT</h2></li>
      </router-link>
      <router-link to="/admin/dashboard" v-if="isAdmin">
        <li class="navigation-list__item"><h2>ADMIN</h2></li>
      </router-link>
    </ul>
    <Modal v-if="showLoginModal" @close="showLoginModal = false">
      <Login @close="showLoginModal = false" />
    </Modal>
    <div class="apu">
      <router-link to="/profile" v-if="isLoggedIn">
        <nav-icon :iconSize="icon.size" icon="manage_accounts" />
      </router-link>
      <div class="apu__login-register" v-else>
        <Button value="Register" @click="showRegister" />
        <Button value="Login" @click="showLogin" />
      </div>
    </div>
  </div>
</template>
<script>
import NavIcon from "./NavIcon";
import Button from "@/components/Button.vue";
import Modal from "@/components/Modal.vue";
import Login from "@/components/Login.vue";

export default {
  components: { NavIcon, Button, Modal, Login },
  computed: {
    isLoggedIn() {
      return this.$store.getters["user/getUserToken"];
    },
    isAdmin() {
      return this.$store.getters["user/getUser"].role === "admin";
    },
  },
  data() {
    return {
      icon: {
        size: "icon--big",
        search: "icon--medium",
      },
      showLoginModal: false,
      showRegisterModal: false,
    };
  },
  methods: {
    showRegister() {
      this.$router.push({ name: "Register" });
      this.$emit("close");
    },
    showLogin() {
      this.showLoginModal = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  display: none;

  @include desktop {
    display: flex;
    justify-content: space-evenly;
    font-size: 0.8em;
    flex-grow: 1;
    align-items: center;
  }
  @include largeDesktop {
    flex-grow: 1;
    max-width: 40%;
    justify-content: space-between;
  }

  i {
    display: block;
    text-align: left;
    padding-top: 1rem;
    padding-left: 1rem;
    color: getColor("secondaryElements");
    @include desktop {
      color: getColor("primary");
      padding: 0;
      margin-top: -1rem;
      margin-right: 5rem;
      font-size: 3.5em;
    }
  }
  .apu {
    &__login-register {
      display: flex;
      justify-content: space-evenly;
      min-width: 22rem;
      button {
        min-width: 10rem;
        max-width: 34rem;
        background-color: #fff;
        font-size: 1.2em;
        cursor: pointer;
        &:last-child {
          background-color: lightenColor("secondaryElements", 20%);
          color: #fff;
        }
      }
    }
  }

  .navigation-list {
    list-style-type: none;
    text-align: center;
    display: flex;
    &__item {
      margin: 2rem 2rem;
      h2 {
        color: getColor("secondaryText");
      }
    }
  }
}
</style>
